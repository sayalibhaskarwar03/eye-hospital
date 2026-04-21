import { useState } from "react";

import { useNavigate } from "react-router-dom";

import appointmentImage from "../assets/appoint.jpg";



function BookAppointment() {

  const navigate = useNavigate();



  // State for form fields

  const [date, setDate] = useState("");

  const [doctor, setDoctor] = useState("");

  const [time, setTime] = useState("");

  const [reason, setReason] = useState("");



  // State for status handling

  const [showpopup, setShowPopup] = useState(false);

  const [isError, setIsError] = useState(false);



  // Safely get the logged-in patient from localStorage

  const patient = JSON.parse(localStorage.getItem("currentPatient"));



  const handleConfirm = async () => {

    // 1. Validation: Ensure user is logged in

    if (!patient) {

      alert("No patient data found. Please login again.");

      navigate("/existing-patient");

      return;

    }



    // 2. Validation: Ensure all fields are filled

    if (!date || !doctor || !time || !reason) {

      alert("Please fill all fields before confirming.");

      return;

    }



    // 3. Prepare data for your MongoDB Backend

    // This looks for 'patientId' or 'id' to ensure the backend gets what it needs

    const appointmentData = {

      patientId: patient.patientId || patient.id || "MEH-UNKNOWN",

      doctorName: doctor,

      appointmentDate: date,

      appointmentTime: time,

      reason: reason

    };



    // This will show up in your Browser Console (F12)

    console.log("Attempting to book:", appointmentData);



    try {

      // 4. Send POST request to Node.js backend

      const response = await fetch("http://localhost:5000/api/appointments", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify(appointmentData),

      });



      if (response.ok) {

        // SUCCESS

        setIsError(false);

        setShowPopup(true);

      } else {

        // FAIL (Server responded with error)

        const errorData = await response.json();

        console.error("Server Error Detail:", errorData.message);

        setIsError(true);

        setShowPopup(true);

      }

    } catch (error) {

      // FAIL (Network error or server is down)

      console.error("Connection Error:", error);

      alert("Could not connect to server. Make sure your backend terminal is running!");

    }

  };



  return (

    <div className="appointment-page">

      <div className="appointment-container">

        {/* SUCCESS / FAIL POPUP */}

        {showpopup && (

          <div className="popup-overlay">

            <div className="popup-box">

              {isError ? (

                <>

                  <h3 style={{ color: "red" }}>Booking Failed!</h3>

                  <p>The server rejected the request. Check the backend terminal for details.</p>

                  <button className="primary-btn" onClick={() => setShowPopup(false)}>

                    Try Again

                  </button>

                </>

              ) : (

                <>

                  <h3 style={{ color: "green" }}>✅ Appointment Successful!</h3>

                  <p>Your appointment with {doctor} has been booked.</p>

                  <button className="primary-btn" onClick={() => navigate("/")}>

                    Go to Home

                  </button>

                </>

              )}

            </div>

          </div>

        )}



        {/* LEFT FORM */}

        <div className="appointment-card">

          <h2>Book Appointment</h2>



          <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>

            Booking for: <strong>{patient?.name || "Guest"}</strong>

          </p>



          <input

            type="date"

            value={date}

            onChange={(e) => setDate(e.target.value)}

          />



          <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>

            <option value="">Select Doctor</option>

            <option>Dr. Priya Deshmukh</option>

            <option>Dr. Rahul Sharma</option>

            <option>Dr. Meena Kulkarni</option>

          </select>



          <select value={time} onChange={(e) => setTime(e.target.value)}>

            <option value="">Select Time</option>

            <option>09:00 AM</option>

            <option>10:00 AM</option>

            <option>11:00 AM</option>

            <option>12:00 PM</option>

            <option>02:00 PM</option>

            <option>03:00 PM</option>

            <option>04:00 PM</option>

          </select>



          <textarea

            placeholder="Reason for Appointment (e.g., eye redness, checkup)"

            value={reason}

            onChange={(e) => setReason(e.target.value)}

          />



          <button className="primary-btn" onClick={handleConfirm}>

            Confirm Appointment

          </button>

        </div>



        {/* RIGHT IMAGE */}

        <div className="appointment-image">

          <img src={appointmentImage} alt="hospital" />

        </div>

      </div>

    </div>

  );

}



export default BookAppointment; 