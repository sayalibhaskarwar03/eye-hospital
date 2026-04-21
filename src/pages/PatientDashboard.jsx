import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import appointmentImage from "../assets/appoint.jpg";



function PatientDashboard() {

  const navigate = useNavigate();

  const [appointment, setAppointment] = useState(null);

  const [loading, setLoading] = useState(true);



  // Get patient data from localStorage (saved during Login/Registration)

  const patient = JSON.parse(localStorage.getItem("currentPatient"));



  useEffect(() => {

    const fetchAppointments = async () => {

      if (!patient) return;



      try {

        // ✅ CHANGED: Fetching from your Node.js backend instead of Firebase

        const response = await fetch("http://localhost:5000/api/appointments");

        const appointmentsData = await response.json();



        // Filter appointments to only show ones for this specific patient

        // (Assuming your MongoDB appointment object has a patientId field)

        const myAppointments = appointmentsData.filter(

          (app) => app.patientId === patient.id || app.patientId === patient.patientId

        );



        if (myAppointments.length > 0) {

          setAppointment(myAppointments[0]); // Show the most recent one

        }

      } catch (error) {

        console.error("Error fetching appointments from MongoDB:", error);

      } finally {

        setLoading(false);

      }

    };



    fetchAppointments();

  }, [patient]);



  if (!patient) {

    return (

      <div className="dashboard">

        <h2 className="no-data">No patient data found. Please login.</h2>

        <button onClick={() => navigate("/")}>Go to Login</button>

      </div>

    );

  }



  const logout = () => {

    localStorage.removeItem("currentPatient");

    navigate("/");

  };



  return (

    <div className="dashboard">

      <h1>Welcome {patient.name}</h1>



      <div className="dashboard-grid">

        {/* LEFT: Patient Info */}

        <div className="card">

          <h3>Patient Information</h3>

        
          <p><strong>Patient ID:</strong> {patient?.patientId || "id_sayali"}</p>

          <p><strong>Name:</strong> {patient.name}</p>

          <p><strong>Mobile:</strong> {patient.mobile}</p>

          <p><strong>Age:</strong> {patient.age}</p>

          <p><strong>Gender:</strong> {patient.gender}</p>

          <p><strong>Email:</strong> {patient.email}</p>

        </div>



        {/* MIDDLE: Appointment Info */}

        <div className="card">

  <h3>Appointments</h3>

  {appointment ? (

    <div className="appointment-card">

      {/* ⚠️ CHANGED: Using the names exactly as seen in your Compass screenshot */}

      <p><strong>Date:</strong> {appointment.appointmentDate}</p>

      <p><strong>Doctor:</strong> {appointment.doctorName}</p>

      <p><strong>Time:</strong> {appointment.appointmentTime}</p>

      <p><strong>Reason:</strong> {appointment.reason}</p>

    </div>

  ) : (

    <p>No appointments yet</p>

  )}

</div>



        {/* RIGHT: Image */}

        <div className="appointment-image">

          <img src={appointmentImage} alt="hospital" style={{ width: '100%', borderRadius: '8px' }} />

        </div>

      </div>



      <div className="actions" style={{ marginTop: '20px' }}>

        <button className="primary-btn" onClick={() => navigate("/book-appointment")}>

          Book New Appointment

        </button>

        <button className="logout-btn" onClick={logout} style={{ marginLeft: '10px' }}>

          Logout

        </button>

      </div>

    </div>

  );

}



export default PatientDashboard; 