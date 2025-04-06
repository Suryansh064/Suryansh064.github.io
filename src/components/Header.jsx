import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/Suryansh.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-slate-600 shadow-xl mb-6"
          />
          <h1 className="text-4xl font-bold mb-2 text-slate-100">Suryansh Singh</h1>
          <p className="text-xl mb-6 text-slate-300">
            Web Developer | MCA Student at NIT Jamshedpur | DSA IN C++
          </p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/Suryansh064" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition duration-300 transform hover:scale-110"
            >
              <Github size={24} className="text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/suryansh-singh-8932062aa/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a 
              href="https://mail.google.com/mail/u/0/#inbox" 
              className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition duration-300 transform hover:scale-110"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
