import React from 'react';
import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';

function Footer() {
    return(
        <footer>
            <div className="flex flex-row justify-center">
                <a href="https://github.com/sharni595" className="px-5 py-3 cursor-pointer">
                    <SiGithub size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/sharni-zaugg-3997b01b9/" className="px-5 py-3 cursor-pointer">
                    <SiLinkedin size={30}/>
                </a>
                <a href="https://www.instagram.com/sharni595/" className="px-5 py-3 cursor-pointer">
                    <SiInstagram size={30}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;