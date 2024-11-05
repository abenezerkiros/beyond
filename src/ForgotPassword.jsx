import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("A password reset link has been sent to your email.");
    } catch (err) {
      setError("Failed to send password reset email. Please try again.");
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
                <h4>Forgot Password</h4>
                <p>Enter your email to receive a password reset link.</p>
                <form onSubmit={handlePasswordReset} method="post" className="row">
                  <div className="col-md-12">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-md-6 text-right">
                    <input type="submit" name="submit" value="Send Reset Link" />
                  </div>
                </form>
                {message && (
                  <div className="accordion-inner">
                    <div className="accordion-title">
                      <h4>{message}</h4>
                    </div>
                  </div>
                )}
                {error && (
                  <div className="accordion-inner">
                    <div className="accordion-title">
                      <h4 style={{ color: "red" }}>{error}</h4>
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

export default ForgotPassword;
