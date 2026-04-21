import { useState } from "react";

import { useNavigate } from "react-router-dom";



function NewPatient() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [mobile, setMobile] = useState("");

  const [age, setAge] = useState("");

  const [gender, setGender] = useState("");

  const [email, setEmail] = useState("");



  const registerPatient = async () => {

    // 1. Prepare the data object

    const patientData = {

      patientId: "MEH-" + Math.floor(Math.random() * 10000),

      name,

      mobile,

      age,

      gender,

      email

    };



    try {

      // 2. Attempt to send data to the backend

      const response = await fetch("https://eye-hospital-qw24.onrender.com/api/patients", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(patientData),

      });



      // 3. CHECK RESPONSE: Only proceed if status is 200-299

      if (response.ok) {

        const savedPatient = await response.json();

       

        // Save to localStorage so the app knows who is "logged in"

        localStorage.setItem("currentPatient", JSON.stringify(savedPatient));

       

        console.log("Success: Data saved to MongoDB");

        navigate("/dashboard");

      } else {

        // This triggers if the server is up but rejects the data (e.g., duplicate mobile)

        const errorData = await response.json();

        alert(`Server error: ${errorData.error || "Data not saved to MongoDB"}`);

      }

    } catch (error) {

      // This triggers if the backend server is NOT running at all

      console.error("Registration failed", error);

      alert("Could not connect to the server. Please ensure the backend is running on port 5000.");

    }

  };



  return (

    <div className="register-page">

      <div className="form-container">

        <div className="form-card">

          <h2>New Patient Registration</h2>

          <input

            placeholder="Full Name"

            value={name}

            onChange={(e) => setName(e.target.value)}

          />

          <input

            placeholder="Mobile Number"

            value={mobile}

            onChange={(e) => setMobile(e.target.value)}

          />

          <input

            placeholder="Age"

            value={age}

            onChange={(e) => setAge(e.target.value)}

          />

          <select value={gender} onChange={(e) => setGender(e.target.value)}>

            <option value="">Select Gender</option>

            <option>Male</option>

            <option>Female</option>

            <option>Other</option>

          </select>

          <input

            placeholder="Email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

          <button className="primary-btn" onClick={registerPatient}>

            Register

          </button>

        </div>

      </div>

    </div>

  );

}



export default NewPatient; 