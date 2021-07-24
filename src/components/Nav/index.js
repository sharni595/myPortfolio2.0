import React from 'react';
import '../../App.css';
import '../../css/style.css'

function Nav(props) {
    
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
    } = props;

    return(
        <header className="lg:px-16 px-6 text-gray-100 flex flex-wrap items-center lg:py-3 py-2">
            <div className="flex-1 flex justify-center items-center lg:justify-between">
                <h2 className="text-4xl milky">
                    <a href="/">
                        <span role="img">SHARNI ZAUGG</span>
                    </a>
                </h2>
            </div>
            <div className="menu hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                    <ul className="flex items-center justify-center text-base pt-4 lg:pt-0">
                        <li className={`mx-3 cursor-pointer ${aboutSelected && 'navActive'}`}>
                            <span onClick={() => {
                                setAboutSelected(true);
                                setPortfolioSelected(false);
                                setContactSelected(false);
                                setResumeSelected(false);
                            }}>
                                ABOUT ME
                            </span>
                        </li>
                        <li className={`mx-3 cursor-pointer ${portfolioSelected && 'navActive'}`}>
                            <span onClick={() => {
                                setAboutSelected(false);
                                setPortfolioSelected(true);
                                setContactSelected(false);
                                setResumeSelected(false);
                            }}>
                                PROJECTS
                            </span>
                        </li>
                        <li className={`mx-3 cursor-pointer ${contactSelected && 'navActive'}`}>
                            <span onClick={() => {
                                setAboutSelected(false);
                                setPortfolioSelected(false);
                                setContactSelected(true);
                                setResumeSelected(false);
                            }}>
                                CONTACT
                            </span>
                        </li>
                        <li className={`mx-3 cursor-pointer ${resumeSelected && 'navActive'}`}>
                            <span onClick={() => {
                                setAboutSelected(false);
                                setPortfolioSelected(false);
                                setContactSelected(false);
                                setResumeSelected(true);
                            }}>
                                RESUME
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Nav;