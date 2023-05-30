import React from 'react';
import '../../App.scss';
import '../../css/style.css';
import profileImage from '../../assets/images/snowy-me.JPG';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiPython } from 'react-icons/di';
import { DiDjango } from 'react-icons/di';
import { DiPostgresql } from 'react-icons/di';

function About() {
    return(
        <section className="about my-5">
            <div className="about-me p-5">
                <h1 className="text-5xl">Hi, I'm Sharni.</h1>
                <br />
                <div className="my-2 text-xl">
                    <p>
                        A full-stack web developer working with a background in administration and customer 
                        service to create the ultimate user experience on the web. Currently working at a small tech consulting company, I'm adapting and learning new skills very day to meet the needs of my clients. 
                    </p>
                    <br />
                    <p>
                        Known to be prompt and self-driven, I've used my newly discovered passion for problem-solving in programming to constantly learn new-to-me concepts and use the best practices to create intuitive software.
                    </p>
                    <br />
                    <p>
                        When I'm not coding, I like to climb, swim, spend time with my husband and daughter, and browse adoptable dogs online.
                    </p>
                    <br />
                </div>
                <div className='stacks flex items-baseline'>
                    <DiHtml5 size={50}/>
                    <DiCss3 size={50}/>
                    <DiJavascript1 size={50}/>
                    <DiReact size={50}/>
                    <DiPython size={50}/>
                    <DiDjango size={50}/>
                    <DiPostgresql size={50}/>
                </div>
            </div>
            <div className="profile p-5">
                <img src={profileImage} className="my-2" alt="cover" />
            </div>
            <div className='extra text-3xl'>
                <span>FULL &middot; STACK &middot; DEVELOPER</span>
            </div>
        </section>
    )
};

export default About;