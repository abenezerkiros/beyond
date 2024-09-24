// src/Dashboard.js
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const message = location.state?.message; // Access the passed message

  return (
    <div>
      <h2>Dashboard</h2>
      {message && <p>{message}</p>}  {/* Display the message if available */}
    </div>
  );
};

export default Dashboard;
