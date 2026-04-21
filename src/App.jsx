import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import BookChoice from "./pages/BookChoice";
import NewPatient from "./pages/NewPatient";
import ExistingPatient from "./pages/ExistingPatient";
import BookAppointment from "./pages/BookAppointment";
import PatientDashboard from "./pages/PatientDashboard";

function App() {

return (

<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/services" element={<Services />} />

<Route path="/book-choice" element={<BookChoice />} />

<Route path="/new-patient" element={<NewPatient />} />

<Route path="/existing-patient" element={<ExistingPatient />} />

<Route path="/book-appointment" element={<BookAppointment />} />

<Route path="/dashboard" element={<PatientDashboard />} />

</Routes>

<Footer />

</BrowserRouter>

)

}

export default App;