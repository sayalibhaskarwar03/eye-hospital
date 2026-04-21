import { useNavigate } from "react-router-dom";

function BookChoice() {

const navigate = useNavigate();

return(

<div className="bookchoice-page">

<h1 className="page-title">Book Appointment</h1>

<p className="page-subtitle">
Choose how you want to continue your appointment booking
</p>

<div className="choice-grid">

{/* NEW PATIENT */}

<div className="choice-card">

<div className="icon-circle blue">
👤+
</div>

<h2>New Patient</h2>

<p>
First time visiting Mahatme Eye Hospital? Register as a new
patient to get started with our services.
</p>

<ul>
<li>Quick registration process</li>
<li>Get your unique patient ID</li>
<li>Access to all eye care services</li>
</ul>

<button
className="primary-btn"
onClick={()=>navigate("/new-patient")}
>
Register Now
</button>

</div>


{/* EXISTING PATIENT */}

<div className="choice-card">

<div className="icon-circle green">
👤✔
</div>

<h2>Existing Patient</h2>

<p>
Already registered with us? Login to view your records and
book a new appointment.
</p>

<ul>
<li>Access your medical history</li>
<li>View previous appointments</li>
<li>Book follow-up consultations</li>
</ul>

<button
className="secondary-btn"
onClick={()=>navigate("/existing-patient")}
>
Login to Dashboard
</button>

</div>

</div>

</div>

)

}

export default BookChoice;