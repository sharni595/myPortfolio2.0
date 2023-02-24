import React, { useState } from 'react';
import './App.scss';
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
      name: "OnTheRoad",
      description: "An app that allows users to plan and track roadtrips with friends, build using GraphQL, MongoDB and React",
      url: "https://ontheroadapp.herokuapp.com/",
      github: "https://github.com/sharni595/OnTheRoad",
      image: "ontheroad.png"
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



  return (
    <div>
      <Nav 
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      />
      <main className="min-h-screen">



        {portfolioSelected ? (<Portfolio projects={projects}/>)
          : contactSelected ? (<Contact />)
          : (<About />)}
 
      </main>
      <Footer />
    </div>
  );
}

export default App;
