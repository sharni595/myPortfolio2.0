import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [projects] = useState([
    {
      name: "Let's Get Physical",
      description: "An app that allows a user to track their fitness progress over a six week period, specifically focusing on weight lifting.",
      url: "https://sharni595.github.io/lets-get-physical/",
      github: "https://github.com/sharni595/lets-get-physical",
      image: "physical.png"
    },
    {
      name: "Painterly",
      description: "A social app that allows users to channel and share their creativity in one place. Users can both create and post art for others to view and comment on.",
      url: "https://painter1y.herokuapp.com/",
      github: "https://github.com/sharni595/painterly",
      image: "painterly.png"
    },
    {
      name: "Budget Tracker",
      description: "A simple app that uses PWA conventions to allow users to track income and expenses",
      url: "https://pure-bayou-78480.herokuapp.com/",
      github: "https://github.com/sharni595/pwa-budget-tracker",
      image: "budget-tracker.png"
    },
    {
      name: "Generic Blog Site",
      description: "My first attempt at using SQL to create a blog sharing app with user authentication, deployed to heroku",
      url: "https://vast-peak-51798.herokuapp.com/",
      github: "https://github.com/sharni595/cms-blog-site",
      image: "blog-site.png"
    },
    {
      name: "Node Taker",
      description: "A note taking app creating using Node.js and SQL, deployed to heroku",
      url: "https://node-maker.herokuapp.com/notes",
      github: "https://github.com/sharni595/node-taker",
      image: "node-taker.png"
    },
    {
      name: "Cliche Weather App",
      description: "A basic weather app creating to demonstrate my ability to incorporate APIs",
      url: "https://sharni595.github.io/cliche-weather-app/",
      github: "https://github.com/sharni595/cliche-weather-app",
      image: "weather.png"
    },

  ])

  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);



  return (
    <div>
      <Nav 
      projects={projects}
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      />
      <main className="min-h-screen">



        {portfolioSelected ? (<Portfolio />)
          : contactSelected ? (<Contact />)
          : resumeSelected ? (<Resume />)
          : (<About />)}
 
      </main>
      <Footer />
    </div>
  );
}

export default App;
