import React from 'react';
import './About.css';


const About = () => {
  return (
    <>
    <div className='about-container'>
        <div className='about-info'>
         <h1>Maske Maske</h1>
         <h2>👨‍💻 Data Analysis | Business Analysis | Python | SQL | Machine Learning | Power BI | SAP |</h2>
         <h3><i class="fa-solid fa-location-dot"></i> Nagpur, Maharashtra, India</h3>
         <p>Detail-oriented and results-driven Data Analyst with experience in leveraging data to drive business insights and 
            strategy. Proficient in SQL, Excel, Power BI, Python, and to collect, clean, and visualize data effectively. Proven track 
            record in improving operational efficiency, customer behavior analysis, and market trend forecasting .
        </p>
        <div className='btn-container'>
            <button className='about-resume-btn' >Resume</button>
            <button className='about-educ-btn'>Educations</button>
        </div>
        </div>
      
      
    </div>
    </>
  )
}

export default About;
