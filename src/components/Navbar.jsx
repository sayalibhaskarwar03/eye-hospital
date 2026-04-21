import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(){

const [lang,setLang] = useState("English");

const patient = JSON.parse(localStorage.getItem("patient"));

return(

<header>

{/* TOP CONTACT BAR */}

<div className="topbar">

<span>📞 +91 712 2345678</span>

<span>✉ info@mahatmeeyehospital.com</span>

<span>Mon – Sat: 9 AM – 7 PM</span>

</div>


{/* MAIN NAVBAR */}

<nav className="navbar">

<div className="logo">
👁 Mahatme Eye Hospital
</div>

<div className="nav-links">

<Link to="/">Home</Link>

<Link to="/services">Services</Link>

<Link to="/book-choice">Book Appointment</Link>

{patient && (
<Link to="/dashboard">My Appointment</Link>
)}

<select
value={lang}
onChange={(e)=>setLang(e.target.value)}
className="lang-select"
>

<option>English</option>
<option>हिंदी</option>
<option>मराठी</option>

</select>

<button className="book-btn">
Book Now
</button>

</div>

</nav>

</header>

)

}

export default Navbar;