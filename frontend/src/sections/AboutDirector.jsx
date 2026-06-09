import React, { useState, useEffect } from 'react';
import { client } from '../lib/sanityClient';

export default function AboutDirector() {
    const [director, setDirector] = useState(null);

    useEffect(() => {
        // Fetch the person categorized as 'director' from Sanity
        client.fetch(`*[_type == "teamMember" && category == "director"][0]{
            name,
            role,
            description,
            "imageUrl": image.asset->url
        }`)
        .then((data) => setDirector(data))
        .catch(console.error);
    }, []);

    return (
        <div id="about-smes" className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column - 40% (About SMES) */}
            <div  className="lg:col-span-5 flex flex-col">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-[#8C1515] pl-4">
                    About SMES
                </h2>
                
                <div className="text-gray-600 leading-relaxed space-y-4 text-justify">
                    <p>
                        The Department of Metallurgical and Materials Engineering at NIT Jamshedpur is one of the premier departments of the institute, recognized for its excellence in teaching, research, and industry collaboration. Established to support the rapidly growing steel, manufacturing, and materials sectors, the department has consistently produced skilled engineers, researchers, and industry leaders.
                    </p>
                    <p>
                        The department offers undergraduate, postgraduate, and doctoral programs with a strong focus on Physical Metallurgy, Extractive Metallurgy, Materials Engineering, and emerging areas of advanced materials. Through modern laboratories, experienced faculty, and industry-oriented learning, students gain both theoretical knowledge and practical expertise.
                    </p>
                    <p>
                        With active research initiatives, industrial partnerships, and professional activities through SMES, the department fosters innovation, technical excellence, and leadership, preparing students to address the challenges of modern materials and manufacturing industries.
                    </p>
                </div>
            </div>

            {/* Right Column - 60% (Message from the Director) */}
            <div className="lg:col-span-7 flex flex-col">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-[#8C1515] pl-4">
                    Message from the Convenor
                </h2>
                
                {/* Elevated Card for the Director's Message */}
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm relative h-full">
                    
                    {/* Decorative Quote Icon */}
                    <svg className="absolute top-6 right-6 w-12 h-12 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>

                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                        
                        {/* Profile Image, Name, & Links Container */}
                        <div className="flex flex-col items-center shrink-0 w-full md:w-[180px]">
                            <img 
                                src={director?.imageUrl || "https://via.placeholder.com/150?text=Director"} 
                                alt={director?.name || "Director"} 
                                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-md border-4 border-white" 
                            />
                            
                            {/* Name & Title */}
                            <div className="mt-4 text-center">
                                <p className="text-lg font-bold text-gray-900 leading-tight">
                                    {director?.name || "Loading..."}
                                </p>
                                <p className="text-sm font-medium text-[#8C1515] mt-0.5">
                                    {director?.role || "Director"}
                                </p>
                            </div>

                            {/* Decorative Signature / Sign-off */}
                            <div className="mt-4 border-t border-gray-200 pt-4 w-full text-center">
                                <p className="font-serif italic text-xl text-gray-700 opacity-80" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>
                                    {director?.name || "Director"}
                                </p>
                            </div>

                            {/* Professional Connection Icons */}
                            <div className="flex gap-4 mt-5">
                                {/* Email Icon */}
                                <a href="mailto:director@nitjsr.ac.in" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-[#8C1515] hover:shadow-md transition-all border border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </a>
                                
                                {/* LinkedIn Icon */}
                                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-[#8C1515] hover:shadow-md transition-all border border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>

                                {/* University/Website Icon */}
                                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-[#8C1515] hover:shadow-md transition-all border border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        {/* Quote Content - Positioned on the right */}
                        <div className="flex-1">
                            <div className="text-gray-700 italic leading-relaxed space-y-4 whitespace-pre-wrap">
                                {/* Using whitespace-pre-wrap allows paragraph breaks from Sanity text area to render properly */}
                                {director?.description || (
                                    <>
                                        <p>
                                            "Welcome to the Society of Metallurgical Engineers and Students (SMES). We are steadfastly committed to fostering innovation, academic excellence, and professional growth among aspiring metallurgical engineers. SMES serves as a vibrant platform that encourages students to explore emerging advancements in metallurgy and materials science through technical events, workshops, research activities, and industry interactions.
                                        </p>
                                        <p>
                                            Our mission is to bridge the gap between academic learning and real-world applications while nurturing creativity, leadership, and collaborative thinking. Through continuous engagement with experts, researchers, and industry professionals, SMES empowers students to broaden their horizons and develop the skills required to excel in an ever-evolving technological landscape."
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}