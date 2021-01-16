
import './App.css';
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';
import Portfolio from './components/Portfolio';



function App() {
  const [page, setPage] = React.useState("About");
  let bodyContent;
  if (page === "About")
    bodyContent = <About />
  else if (page === "Resume")
    bodyContent = <Resume />
  else if (page === "Portfolio")
    bodyContent = <Portfolio />
  else if (page === "Contact")
    bodyContent = <Contact />
  return (
    <div>
      <Header setPage={setPage} />
      <div>{bodyContent}</div>
    </div>
  );
}

export default App;
