import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        setName('');
        setEmail('');
        setMessage('');
    };

    return(
        <div className="max-w-md w-full mx-auto p-6 bg-customLilac rounded-lg shadow-md mt-20 mb-[60px]">
            <h2 className="text-3xl text-center text-PinkTitle font-bold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">Your Name</label>
                    <input 
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Example da Silva" 
                        className='w-full px-3 py-2 border rounded-lg bg-customPink focus:outline-none focus:border-blue-500' 
                        required 
                        type="text" 
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Your Email</label>
                    <input 
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Example@example.com" 
                        className='w-full px-3 py-2 border rounded-lg bg-customPink focus:outline-none focus:border-blue-500' 
                        required 
                        type="email" 
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">Send us a message!</label>
                    <textarea 
                        id="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows='4' 
                        placeholder="Type your message here..." 
                        className='w-full px-3 py-2 border rounded-lg bg-customPink focus:outline-none focus:border-blue-500' 
                        required 
                        type="text" 
                    />
                </div>
                <div className='flex justify-center'>
                  <button type='submit' className='bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white'>Send</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
