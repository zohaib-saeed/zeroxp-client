import React from 'react';
import './About.css';
import icon1 from './Linkedin-Icon.png';

function About() {
console.log('AboutPage component rendered'); 
  return (
    <div className="about-page">

    <h1>About</h1>
    <div class="box-1"> 
        <p class="abouttext">In recent years, applying to entry-level jobs has become cumbersome. Despite job boards having filters for entry-level roles, many still demand years of experience. This forces applicants to individually check each job description for eligibility, not to mention the additional time spent manually entering information when applying through third-party portals. </p>
        <br></br>
        <p class="abouttext">ZeroXP addresses these issues experienced firsthand by its founding team. The platform scrapes and aggregates jobs, utilizing AI to assess intent, validate required experience, and curate listings for those with 0-1 years of experience or internships. It provides a focused, dynamic, and streamlined entry-level job board experience, including estimated salary data and company reviews.</p>
        <br></br>
        <p class="abouttext">We are always trying to improve, we plan to add features like automatic job applications, sparing users from redundant form filling on third-party portals. For feature requests, email us at hello@zeroxp.fyi; we respond to every email :) </p>
    </div>

    <h1>The Team</h1>
    <h6>We are a group of technical founders passionate about making finding a job much quicker!</h6>
    <br></br>
    
    <section class="team-container">
    <div class="card">
        <div class="card-image card-1"></div>
        <h3>Adnan Ahmed &nbsp;<a href='https://www.linkedin.com/in/adnan-2002/'><img src={icon1} alt="icon" style={{width: '30px', height: '30px', marginTop: '-7px'}}></img></a></h3>
        <h5>Co-founder</h5>
        <div class="card2">
            <p class="cardtext">Adnan Ahmed is an enthusiastic software engineer and product manager with a comprehensive background in cloud technologies, machine learning, and computer networking. His skills are further enhanced by practical experience in a variety of technical roles, showcasing a strong aptitude for software development and problem-solving. Currently advancing his knowledge as a graduate student in Computer Science at Rice University, Adnan is deeply committed to building products to enhance the lives of others.</p>
        </div>
        </div>
    <div class="card">
        <div class="card-image card-2"></div>
        <h3>Faraz Hussain &nbsp;<a href='https://www.linkedin.com/in/faraz24/'><img src={icon1} alt="icon" style={{width: '30px', height: '30px', marginTop: '-7px'}}></img></a></h3>
        <h5>Co-founder</h5>
        <div class="card2">
            <p class="cardtext">Hey, I'm Faraz Hussain, a recent Computer Science grad from Santa Clara University (class of 2023). Professionally, I've delved into AI and BI, constantly expanding my skill set. Beyond coding, catch me gaining entrepreneurial insights from Shark Tank and breaking a sweat at the gym. (And if you're hiring, let's chat!)(If you’re reading this, please acquire us or give us jobs!)</p>
        </div>
        
    </div>
    <div class="card">
        <div class="card-image card-3"></div>
        <h3>Luqman Rashad &nbsp;<a href='https://www.linkedin.com/in/luqmanrashad/'><img src={icon1} alt="icon" style={{width: '30px', height: '30px', marginTop: '-7px'}}></img></a></h3>
        <h5>Co-founder</h5>
        <div class="card2">
            <p class="cardtext">Luqman is a UC Santa Cruz graduate, equipped with numerous professional and independent software development experiences. He has demonstrated his skills by successfully delivering features and products to market. His specialties encompass both UI/UX design and programming backend application processes.</p>
        </div>
        </div>
    </section>
    </div>
  );
}

export default About;