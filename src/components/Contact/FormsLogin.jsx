import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const FormsLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch additional user data (like accountType)
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        navigate("/dashboard", {
          state: {
            message: `Welcome back ${userData.name}! You are logged in as a ${userData.accountType}.`
          }
        });
      }
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
                  <Link className="login-btn" to="/signup">
                    <i className="fal fa-user" /> Signup
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
                <h4>Login</h4>
                <p>Please fill the form to login</p>
                <form onSubmit={handleLogin} method="post" className="row">
                  <div className="col-md-6">
                    <input
                      type="email"
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
                    <div className="condition-check">
                      <input id="terms-conditions" type="checkbox" />
                      <label htmlFor="terms-conditions">
                        I agree to the <a href="#">Terms & Conditions</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <input type="submit" name="submit" value="Login" />
                  </div>
                </form>
                {error && (
                  <div className="accordion-inner">
                    <div className="accordion-title">
                      <h4>{error}</h4>
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

export default FormsLogin;
