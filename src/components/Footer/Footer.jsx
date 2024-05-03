import React from 'react';
import { FaCoffee, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0  text-white text-center py-4" style={{ backgroundImage: 'linear-gradient(90deg, rgba(247,150,190,1) 3%, rgba(198,172,218,1) 46%, rgba(165,186,238,1) 100%)' }}>
            <div className="flex justify-center items-center">
                <p>&copy; 2024 Big + 3. All rights reserved.</p>
                <a href="https://ko-fi.com/cianu" target="_blank" rel="noopener noreferrer" className="ml-4">
                    <FaCoffee className="text-white" size={24} />
                </a>
                <a href="https://www.linkedin.com/in/becinaayu" target="_blank" rel="noopener noreferrer" className="ml-4">
                    <FaLinkedin className="text-white" size={24} />
                </a>
                <a href="https://github.com/becinaayu" target="_blank" rel="noopener noreferrer" className="ml-4">
                    <FaGithub className="text-white" size={24} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
