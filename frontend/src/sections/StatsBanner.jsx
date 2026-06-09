import React from 'react';

export default function StatsBanner() {
  const stats = [
    { number: "15+", label: "Faculty Members" },
    { number: "40+", label: "Student Members" },
    { number: "10+", label: "Annual Events" },
    { number: "15+", label: "Industry Partners" },
  ];

  return (
    // Added a subtle gray background and vertical padding to separate it from other sections
    <div className="bg-gray-50 border-y border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105"
          >
            {/* Number styling: Larger, bolder, and using your maroon brand color */}
            <div className="text-4xl md:text-5xl font-extrabold text-[#8C1515] mb-2 tracking-tight">
              {stat.number}
            </div>
            
            {/* Label styling: All caps, spaced out for a high-end look */}
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.25em]">
              {stat.label}
            </div>
            
            {/* Decorative line that appears on hover */}
            <div className="w-12 h-0.5 bg-[#8C1515] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}