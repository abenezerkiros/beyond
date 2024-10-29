import React, { useEffect, useState } from "react";
import { collection, query, where, doc, getDoc, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; 

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [projects, setProjects] = useState([]);
  const [role, setRole] = useState("");
  const [data, setData] = useState("");
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [complaintText, setComplaintText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setRole(data.accountType);
          setData(data);
          if (data.paymentDetails) {
            setPaymentDetails(data.paymentDetails);
          }
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!role || !user) return;

    const fetchProjects = async () => {
      let q;
      if (role === "customer") {
        q = query(collection(db, "projects"), where("customerId", "==", user.uid));
      } else if (role === "vendor") {
        q = query(collection(db, "projects"), where("accountManagerId", "==", user.uid));
      } else if (role === "Project Manager") {
        q = query(collection(db, "projects")); // Retrieve all projects for the project manager
      }

      try {
        const querySnapshot = await getDocs(q);
        setProjects(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchProjects();
  }, [role, user]);

  const handleSavePaymentDetails = async (e) => {
    e.preventDefault();
    const userDocRef = doc(db, "users", user.uid);
    const paymentInfo = {
      cardNumber,
      expiryDate,
      cvv,
    };

    try {
      await updateDoc(userDocRef, { paymentDetails: paymentInfo });
      setPaymentDetails(paymentInfo);
      setCardNumber("");
      setExpiryDate("");
      setCvv("");
    } catch (error) {
      console.error("Error saving payment details: ", error);
    }
  };

  const handleComplaintSubmit = async (projectId) => {
    if (!complaintText) return;

    const projectDocRef = doc(db, "projects", projectId);

    try {
      await updateDoc(projectDocRef, {
        complaints: arrayUnion({ text: complaintText, date: new Date().toISOString() }),
      });
      setComplaintText("");
      alert("Complaint submitted successfully.");
    } catch (error) {
      console.error("Error submitting complaint: ", error);
    }
  };

  const handleStatusChange = async (projectId, newStatus) => {
    const projectDocRef = doc(db, "projects", projectId);
    try {
      await updateDoc(projectDocRef, { status: newStatus });
      alert(`Project status updated to ${newStatus}`);
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === projectId ? { ...project, status: newStatus } : project
        )
      );
    } catch (error) {
      console.error("Error updating project status: ", error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/projects">Projects</a>
          {role === "customer" && <a href="/create-project">Create Project</a>}
        </nav>
      </div>

      <div className="main-content">
        <div className="top-bar">
          <h2>Welcome, {data?.name}!</h2>
          <div className="user-info">Role: {role}</div>
        </div>

        <div className="content">
          <div className="payment-details-section">
            <h3>Payment Details</h3>
            {paymentDetails ? (
              <div className="payment-info">
                <p>Card Number: **** **** **** {paymentDetails.cardNumber.slice(-4)}</p>
                <p>Expiry Date: {paymentDetails.expiryDate}</p>
              </div>
            ) : (
              <form onSubmit={handleSavePaymentDetails}>
                <label>Card Number:</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
                <label>Expiry Date:</label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                  placeholder="MM/YY"
                />
                <label>CVV:</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
                <button type="submit">Save Payment Details</button>
              </form>
            )}
          </div>

          {role === "customer" ? (
            projects.length === 0 ? (
              <>
                <h3>Create a New Project</h3>
                <button onClick={() => navigate("/create-project")}>Create Project</button>
              </>
            ) : (
              <div className="project-list">
                <h3>Your Projects</h3>
                {projects.map((project) => (
                  <div key={project.id} className="project-card">
                    <h4>Project ID: {project.enquiryCode}</h4>
                    <p>{project.projectDescription}</p>
                    <h5>Status: {project.status || "pending"}</h5>
                    {/* Complaint Section */}
                    {project.complaints && project.complaints.length > 0 ? (
                      <div className="complaint-card submitted">
                        <p>Complaint: "{project.complaints[0].text}"</p>
                        <p>Status: We are handling your complaint</p>
                      </div>
                    ) : (
                      <div className="complaint-card">
                        <h5>Submit a Complaint</h5>
                        <textarea
                          placeholder="Describe your issue here"
                          value={complaintText}
                          onChange={(e) => setComplaintText(e.target.value)}
                        />
                        <button onClick={() => handleComplaintSubmit(project.id)}>Submit Complaint</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          ) : role === "Project Manager" ? (
            <div className="project-list">
              <h3>All Projects</h3>
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <h4>Project ID: {project.enquiryCode}</h4>
                  <p>{project.projectDescription}</p>
                  <label>Status:</label>
                  <select
                    value={project.status || "pending"}
                    onChange={(e) => handleStatusChange(project.id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              ))}
            </div>
          ) : (
            <p>Role not recognized.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
