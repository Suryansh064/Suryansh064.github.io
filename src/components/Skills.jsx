import React from 'react';
import { Code2 } from 'lucide-react';

export default function Skills() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 text-3xl font-bold text-white">
            <Code2 className="text-indigo-500" />
            <span>Skills</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-slate-100">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['C/C++', 'Java', 'HTML', 'CSS', 'Javascript', 'SQL', 'PHP', 'XML'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-slate-100">Libraries and Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Git/GitHub', 'VS Code', 'IntelliJ', 'Tailwind CSS', 'ReactJs', 'Canva', 'MS-Office'].map((tool) => (
                <span key={tool} className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
