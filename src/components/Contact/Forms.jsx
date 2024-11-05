import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, db } from "../../firebase"; // Firebase imports
import { doc, setDoc } from "firebase/firestore"; // Firestore methods
import { Link, useNavigate } from "react-router-dom";

const Forms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [accountType, setAccountType] = useState("customer"); // Default to customer
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        description,
        accountType,
        emailVerified: false, 
      });

      // Send verification email
      await sendEmailVerification(user);
      setMessage("Sign-up successful! A verification email has been sent. Please verify your email before logging in.");




    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <header className={`appie-header-area appie-sticky`}>
        <div className="container">
          <div className="header-nav-box">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                <div className="appie-logo-box">
                  <Link className="item-2" to="/">
                    <i className="fas fa-arrow-left" /> back to home
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                <div className="appie-btn-box text-right">
                  <Link className="login-btn" to="/login">
                    <i className="fal fa-user" /> Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="contact-form">
                <h4>Sign up</h4>
                <p>Please fill the form below to get started.</p>
                <form onSubmit={handleSignup} method="post" className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="email"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Account Type</label>
                    <select value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                      <option value="customer">Customer</option>
                      <option value="vendor">Vendor</option>
                      <option value="Project Manager">Project Manager</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={
                        accountType === "customer"
                          ? "Please describe your project in detail"
                          : "Please describe your professional background and add some references"
                      }
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <div className="condition-check">
                      <input id="terms-conditions" type="checkbox" name="terms" required />
                      <label htmlFor="terms-conditions">
                        I agree to the <a href="#">Terms & Conditions</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <input type="submit" name="submit" value="Sign up" />
                  </div>
                </form>
                {error && (
                  <div className="accordion-inner">
                    <div className="accordion-title">
                      <h4>{error}</h4>
                    </div>
                  </div>
                )}
                {message && (
                  <div className="accordion-inner">
                    <div className="accordion-title">
                      <h4>{message}</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forms;
