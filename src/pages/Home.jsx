import { useNavigate } from "react-router-dom";
import doctor from "../assets/doctor.jpg";

function Home(){

const navigate = useNavigate();

return(

<section className="hero">

<div className="hero-left">

<span className="badge">Trusted by 50,000+ Patients</span>

<h1>
Your Vision,<br/>
<span>Our Mission</span>
</h1>

<p>
Experience world-class eye care with cutting-edge technology and
compassionate specialists dedicated to protecting your eyesight.
</p>

<div className="hero-buttons">

<button
className="primary-btn"
onClick={()=>navigate("/book-appointment")}
>
Book Appointment
</button>

<button
className="outline-btn"
onClick={()=>navigate("/services")}
>
View Services
</button>

</div>

<div className="hero-stats">

<div className="stat-card">
<h3>25+</h3>
<p>Years Experience</p>
</div>

<div className="stat-card">
<h3>50K+</h3>
<p>Happy Patients</p>
</div>

<div className="stat-card">
<h3>15+</h3>
<p>Expert Doctors</p>
</div>

<div className="stat-card">
<h3>98%</h3>
<p>Patient Satisfaction</p>
</div>

</div>

</div>


<div className="hero-right">

<img
src={doctor}
alt="doctor"
/>

</div>

</section>

)

}

export default Home;