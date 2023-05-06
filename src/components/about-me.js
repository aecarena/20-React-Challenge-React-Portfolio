import React from "react";
import headshot from "../assets/profilepic.jpeg";

const AboutMe = () => {
    return(
        <section className="main-content" id="about-me">
        
        <img src={headshot} alt="picture of me" class="headshot"/>

        <p>
          Recent graudate of the University of Washington Coding Bootcamp. 
        </p>

        </section>
    )
}

export default AboutMe