import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/images.jpg";

function ExistingPatient() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  const loginPatient = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/patients");
      const patients = await response.json();
      const patient = patients.find(p => p.mobile === mobile);

      if (!patient) {
        alert("Patient not found. Please register first.");
        return;
      }

      localStorage.setItem("currentPatient", JSON.stringify(patient));
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h2>Existing Patient Login</h2>
          <input placeholder="Enter Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          <button className="primary-btn" onClick={loginPatient}>Login</button>
        </div>
        <div className="login-image">
          <img src={loginImage} alt="medical" />
        </div>
      </div>
    </div>
  );
}
export default ExistingPatient;