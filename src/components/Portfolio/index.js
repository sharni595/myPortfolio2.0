import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { CgArrowRightO } from 'react-icons/cg';

function Portfolio({ projects }) {
    return(
        <section className="flex flex-wrap justify-evenly">
            {projects.map((project) => (
                <div className="w-2/5 m-7 relative">
                    <span className="font-bold text-xl">{project.name}</span>
                    <img 
                        src={require(`../../assets/examples/${project.image}`).default}
                        alt={project.name}
                        className="img"
                    />
                    <div className="flex flex-row justify-evenly hidden" id="info">
                        <p className="absolute top-10 font-bold mx-4">{project.description}</p>
                        <a href={project.github} className="absolute top-40 right-40">
                            <VscGithub  size={50}/>
                        </a>
                        <a href={project.url} className="absolute top-40 left-40">
                            <CgArrowRightO  size={50}/>
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Portfolio;