function Services(){

const services = [

{
title:"Cataract Surgery",
desc:"Advanced lens replacement surgery with premium IOL options."
},

{
title:"LASIK & Refractive Surgery",
desc:"Bladeless laser vision correction for freedom from glasses."
},

{
title:"Glaucoma Treatment",
desc:"Advanced diagnostic imaging and long-term monitoring."
},

{
title:"Retina & Vitreous",
desc:"Treatment for diabetic retinopathy and retinal disorders."
},

{
title:"Pediatric Ophthalmology",
desc:"Specialized eye care for children."
},

{
title:"Comprehensive Eye Exams",
desc:"Complete vision assessment and prescription services."
}

]

return(

<div className="services-page">

<h2>Complete Eye Care Solutions</h2>

<p className="services-sub">
From routine examinations to advanced surgical procedures.
</p>

<div className="services-grid">

{services.map((service,index)=>(
<div className="service-card" key={index}>

<h3>{service.title}</h3>

<p>{service.desc}</p>

<button className="primary-btn">
Book Consultation
</button>

</div>
))}

</div>

<div className="service-cta">

<h3>Not Sure Which Service You Need?</h3>

<p>
Schedule a comprehensive eye exam and our specialists will recommend
the best treatment.
</p>

<button className="primary-btn">
Schedule Exam
</button>

</div>

</div>

)

}

export default Services;