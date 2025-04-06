import React from 'react';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  // Local SectionTitle component
  const SectionTitle = ({ icon, title }) => (
    <div className="text-center mb-12">
      <div className="flex justify-center items-center gap-2 text-3xl font-bold text-white">
        {icon}
        <span>{title}</span>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <SectionTitle icon={<Trophy className="text-indigo-500" />} title="Coding Achievements" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-900 p-6 rounded-lg shadow-xl hover:bg-slate-800 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-slate-100">GeeksforGeeks</h3>
            <p className="text-slate-300">Solved 250+ problems consistently improving problem-solving skills</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg shadow-xl hover:bg-slate-800 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-slate-100">CodeChef</h3>
            <p className="text-slate-300">1-star Programmer with Max Rating of 1230</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg shadow-xl hover:bg-slate-800 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-slate-100">LeetCode</h3>
            <p className="text-slate-300">200+ problems solved with Max Rating of 1466</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg shadow-xl hover:bg-slate-800 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-slate-100">HackerRank</h3>
            <p className="text-slate-300">5 Star in C++ Language and 4 Star in Problem Solving</p>
          </div>
        </div>
      </div>
    </section>
  );
}
