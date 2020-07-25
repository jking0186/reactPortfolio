import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <About />
        <Route exact path="/#portfolio" component={Portfolio}/>
        <Route exact path="/#resume" component={Resume}/>
        <Route exact path="/#contact" component={Contact}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
