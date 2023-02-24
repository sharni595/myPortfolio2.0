import React from 'react';
import '../../App.scss';
import '../../css/style.css'
import { BsDownload } from 'react-icons/bs';
import resume from '../../assets/resume/ProperResume.pdf';

function Nav(props) {
    
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        contactSelected,
        setContactSelected,
    } = props;

    return(
        <header className="lg:px-16 px-6 pt-6 flex flex-wrap lg:justify-end">
            <div className="menu hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                    <ul className="flex items-center justify-center text-base pt-4 lg:pt-0">
                        <li className={`mx-9 cursor-pointer ${aboutSelected && 'navActive'}`}>
                            <span onClick={() => {
                                setAboutSelected(true);
                                setPortfolioSelected(false);
                                setContactSelected(false);
                            }}>
                                ABOUT ME
                            </span>
                        </li>
                        <li className={`mx-9 cursor-pointer ${portfolioSelected && 'navActive'}`}>
                            <span onClick={() => {
                                setAboutSelected(false);
                                setPortfolioSelected(true);
                                setContactSelected(false);
                            }}>
                                PROJECTS
                            </span>
                        </li>
                        <li className={`mx-9 cursor-pointer ${contactSelected && 'navActive'}`}>
                            <span onClick={() => {
                                setAboutSelected(false);
                                setPortfolioSelected(false);
                                setContactSelected(true);
                            }}>
                                CONTACT
                            </span>
                        </li>
                        <li className="mx-9 cursor-pointer">
                            <a href={resume} download="ProperResume.pdf" className="flex flex-row items-center mx-auto p-4 resume text-l rounded-lg">
                                RESUME
                                <BsDownload className="ml-2"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Nav;