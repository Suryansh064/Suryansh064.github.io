import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Coursework() {
  // Inline SectionTitle component
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
        <SectionTitle icon={<BookOpen className="text-indigo-500" />} title="Coursework" />
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Object-Oriented Programming',
            'Data Structures & Algorithms',
            'Operating System',
            'Database Management System',
            'Computer Network'
          ].map((course) => (
            <span
              key={course}
              className="px-4 py-2 bg-indigo-900 text-indigo-200 rounded-lg text-sm hover:bg-indigo-800 transition-colors"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
