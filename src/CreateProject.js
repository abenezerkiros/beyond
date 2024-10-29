import React, { useState } from "react";
import { db,auth } from "./firebase"; // Firebase configuration
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Firestore methods
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [projectDescription, setProjectDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const generateEnquiryCode = () => {
    return "ENQ-" + Math.random().toString(36).substr(2, 9).toUpperCase(); // Example enquiry code
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    const enquiryCode = generateEnquiryCode(); // Generate enquiry code

    try {
      // Create a new project document in Firestore
      await addDoc(collection(db, "projects"), {
        enquiryCode,
        projectDescription,
        budget,
        status: "pending", // Default status
        customerId: auth.currentUser.uid, // Store the user ID
        createdAt: serverTimestamp(), // Timestamp for when the project is created
      });

      // Redirect to dashboard or project list after creating the project
      navigate("/dashboard");
    } catch (err) {
      setError("Error creating project: " + err.message);
    }
  };

  return (
    <div className="create-project">
      <h2>Create a New Project</h2>
      <form onSubmit={handleCreateProject}>
        <div>
          <label>Project Description:</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
            placeholder="Describe your project in detail"
          />
        </div>
        <div>
          <label>Budget:</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            placeholder="Enter your budget"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
