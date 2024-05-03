import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <div className="container mx-auto mt-24">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;


