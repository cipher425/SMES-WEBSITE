import React, { useState, useEffect } from 'react';
import { client } from '../lib/sanityClient';

export default function About() {
    const [hod, setHod] = useState(null);

    useEffect(() => {
        // Fetch the person categorized as 'hod' from Sanity
        client.fetch(`*[_type == "teamMember" && category == "hod"][0]{
            name,
            role,
            "imageUrl": image.asset->url
        }`)
        .then((data) => setHod(data))
        .catch(console.error);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            
            {/* Page Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Us</h1>
                <div className="w-20 h-1 bg-[#8C1515] mx-auto rounded-full"></div>
            </div>

            {/* TOP GRID: DEPARTMENT INFO & HOD SIDEBAR*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
                
                {/* Left Column: Department Info  */}
                <div className="lg:col-span-2 space-y-10">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#8C1515] pl-3">
                            Department of Metallurgical & Materials Engineering
                        </h2>
                        
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                            <p>
                                The Department of Metallurgical and Materials Engineering was amongst the four branches with which the institute was initially launched in 1960. With an increasing focus on the R&D work being carried out in the metallurgical sector, <strong>Materials Engineering</strong> was included in the curriculum of the department in 1995.
                            </p>
                            <p>
                                Today, we stand at the forefront of core manufacturing and research. Our curriculum bridges the gap between traditional extractive metallurgy and next-generation materials science, preparing students to lead the transition towards sustainable industrial practices and advanced technological applications.
                            </p>
                        </div>

                        {/* Vision & Mission */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white border-t-4 border-[#8C1515] p-6 shadow-sm rounded-b-xl border-x border-b border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Our Vision</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    To be a globally recognized center of excellence in metallurgical research and materials innovation, driving sustainable engineering solutions for the core manufacturing and steel industries.
                                </p>
                            </div>
                            
                            <div className="bg-white border-t-4 border-[#8C1515] p-6 shadow-sm rounded-b-xl border-x border-b border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h3>
                                <ul className="list-disc pl-4 text-sm text-gray-600 space-y-2 marker:text-[#8C1515]">
                                    <li>Equip students with deep analytical and practical skills.</li>
                                    <li>Foster research in sustainable practices, including green steel.</li>
                                    <li>Maintain collaborative networks with leading industrial partners.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column: DYNAMIC HOD Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-28">
                        <div className="h-24 bg-gradient-to-r from-[#8C1515] to-[#5a0d0d]"></div>
                        
                        <div className="px-8 pb-8 flex flex-col items-center text-center relative mt-[-3rem]">
                            <img 
                                src={hod?.imageUrl || "https://via.placeholder.com/150?text=HOD"} 
                                alt={hod?.name || "HOD"} 
                                className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md mb-4 bg-gray-100"
                                onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=HOD" }} 
                            />
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C1515] mb-1">Head of Department</h3>
                            <h2 className="text-xl font-bold text-gray-900 leading-tight">
                                {hod?.name || "Loading..."}
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 font-medium">
                                {hod?.role || "Designation"}
                            </p>
                        </div>
                        
                        {/* Contact Details */}
                        <div className="px-8 pb-8 space-y-5 text-sm text-gray-600 border-t border-gray-100 pt-6">
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Email</p>
                                <a href="mailto:hod.met@nitjsr.ac.in" className="font-semibold text-[#8C1515] hover:text-black transition-colors break-all">
                                    hod.met@nitjsr.ac.in
                                </a>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Phone (HOD Office)</p>
                                <p className="font-semibold text-gray-900">N/A</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Address</p>
                                <p className="leading-relaxed font-medium">
                                    P.O. RIT, Jamshedpur,<br/>
                                    Jharkhand, India - 831014
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================
                FULL-WIDTH SECTION: SMES 
            ========================================= */}
            <section className="pt-16 border-t border-gray-200 mt-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                        Society of Metallurgical Engineers and Students (SMES)
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        SMES serves as the primary student-run technical society within the department. We are a dynamic community of budding metallurgists dedicated to bridging the gap between theoretical classroom learning and real-world industrial application.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Objectives */}
                    <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-xl text-gray-900 mb-6 border-b border-gray-100 pb-3">Our Core Objectives</h3>
                        <ul className="space-y-5">
                            {[
                                "Organize national-level symposiums, workshops, and guest lectures.",
                                "Facilitate networking opportunities with alumni and core industry leaders.",
                                "Promote technical writing, documentation, and presentation skills.",
                                "Assist students in securing internships in core manufacturing and research labs."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-0.5 bg-[#8C1515]/10 p-1.5 rounded-full text-[#8C1515] shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Initiatives */}
                    <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-xl text-gray-900 mb-6 border-b border-gray-100 pb-3">Flagship Initiatives</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="text-2xl mt-1">🏭</div>
                                <div>
                                    <h4 className="font-bold text-[#8C1515] text-lg">Industrial Tours</h4>
                                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">Guided visits to major steel plants and manufacturing hubs to witness large-scale operations firsthand.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-2xl mt-1">🤝</div>
                                <div>
                                    <h4 className="font-bold text-[#8C1515] text-lg">Alumni Mentorship</h4>
                                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">Direct guidance and career advice from NIT Jamshedpur graduates currently leading top metallurgical firms.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-2xl mt-1">💻</div>
                                <div>
                                    <h4 className="font-bold text-[#8C1515] text-lg">Skill Development</h4>
                                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">Workshops bridging core engineering with digital skills, including data structures and algorithms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}