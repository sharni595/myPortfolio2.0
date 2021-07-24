import React from 'react';
import '../../App.css';
import '../../css/style.css';
import profileImage from '../../assets/images/climbing.jpg';

function About() {
    return(
        <section className="my-5 lg:flex lg:flex-row">
            <div className="p-5">
                <img src={profileImage} className="my-2" alt="cover" />
            </div>
            <div className="p-5">
                <h1 id="about" className="font-bold ">WHO AM I?</h1>
                <div className="my-2">
                    <p>
                        A full-stack web developer working with a background in administration and customer 
                        service to create the ultimate user experience on the web. Currently working towards 
                        a certificate in full stack web development through the University of Utah, while also 
                        working full time. Through the course I have obtained skills developing with the MERN stack. Known to be prompt and self-driven, I have used my newly discovered passion 
                        for problem-solving in programming to constantly learn new-to-me concepts and use the best 
                        practices to create intuitive apps. 
                        <br/>
                        When I am not coding, I like to climb, swim, spend time with my husband, and browse adoptable dogs online.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;