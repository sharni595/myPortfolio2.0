import React from 'react';
import '../../App.css';
import '../../css/style.css'

function Nav({ projects }) {
    
    return(
        <header className="p-3 bg-blue-200 bg-opacity-50 text-gray-100">
            <nav className="flex flex-row justify-center">
                <ul className=" flex flex-row content-center p-2">
                    <li className='mx-3'>
                        <a href="/">ABOUT ME</a>
                    </li>
                    <li className='mx-3'>
                        <a href="/">PROJECTS</a>
                    </li>
                </ul>

                <h2 className="text-4xl milky">
                    <a href="/">
                        <span role="img">SHARNI</span>
                    </a>
                </h2>
            
                <ul className="flex flex-row p-2">
                    <li className="mx-3">
                        <a href="/">
                            CONTACT
                        </a>
                    </li>
                    <li className='mx-3'>
                        <a href="/">RESUME</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Nav;