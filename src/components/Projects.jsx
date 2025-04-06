import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Projects() {
  // Define the SectionTitle component
  const SectionTitle = ({ icon, title }) => (
    <div className="text-center mb-12">
      <div className="flex justify-center items-center gap-2 text-3xl font-bold text-white">
        {icon}
        <span>{title}</span>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionTitle icon={<Briefcase className="text-indigo-500" />} title="Projects" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700 hover:border-indigo-500 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-slate-100">Mortgage Calculator</h3>
            <p className="text-slate-300">
              Developed a mortgage calculator using React, Tailwind CSS, and useState for state management. 
              Implemented dynamic input handling and formula calculations.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700 hover:border-indigo-500 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-slate-100">Pokemon App</h3>
            <p className="text-slate-300">
              Built a dynamic web app using React.js and PokeAPI with search, filtering, and responsive UI. 
              Implemented state management with hooks.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700 hover:border-indigo-500 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-slate-100">To-Do List</h3>
            <p className="text-slate-300">
              A To-Do List application with React hooks for state management. Features include adding, 
              editing, and deleting tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
