import React from 'react';
import coverImage from "../../assets/cover/Headshot.JPEG"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
            <p>Team-oriented Full Stack Web Developer certified by the University of Texas at Austin with a background in Audio Engineering. Proficient in leadership, communication, collaboration, and analysis. Solid capability to carryout website production from concept to final deployment. 
            Ability to thrive in fast paced environments and meet deadlines.</p>
        </section>
    );
}

export default About;