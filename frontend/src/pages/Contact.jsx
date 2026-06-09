import React, { useState, useEffect } from 'react';
import { client } from '../lib/sanityClient';

export default function Contact() {
    const [generalInfo, setGeneralInfo] = useState(null);
    const [hodInfo, setHodInfo] = useState(null);

    useEffect(() => {
        // 1. Fetch the General Department Settings
        client.fetch(`*[_type == "departmentSettings"][0]`)
            .then((data) => setGeneralInfo(data))
            .catch(console.error);

        // 2. Fetch the HOD's specific contact details
        client.fetch(`*[_type == "teamMember" && category == "hod"][0]{
            email
        }`)
            .then((data) => setHodInfo(data))
            .catch(console.error);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            
            {/* Page Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
                <div className="w-20 h-1 bg-[#8C1515] mx-auto rounded-full"></div>
                <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
                    Reach out to the Department and the Society of Metallurgical Engineers and Students (SMES) for academic queries, collaborations, or event sponsorships.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                
                {/* Left Column: Contact Information */}
                <div className="flex flex-col justify-center space-y-8">
                    
                    {/* Address Card  */}
                    <div className="flex items-start gap-5 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-[#8C1515]/10 p-4 rounded-full text-[#8C1515] shrink-0 mt-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600 leading-relaxed font-medium whitespace-pre-wrap">
                                {generalInfo?.address || "Department of Metallurgical and Materials Engineering,\nNational Institute of Technology Jamshedpur,\nAdityapur, Jharkhand - 831014"}
                            </p>
                        </div>
                    </div>

                    {/* Email Card  */}
                    <div className="flex items-start gap-5 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-[#8C1515]/10 p-4 rounded-full text-[#8C1515] shrink-0 mt-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                            <div className="space-y-1">
                                <p className="text-gray-600 font-medium flex flex-wrap items-center">
                                    <span className="font-bold text-gray-800 text-sm w-16">SMES:</span> 
                                    <a href={`mailto:${generalInfo?.generalEmail || 'smes.mme@nitjsr.ac.in'}`} className="hover:text-[#8C1515] transition-colors">
                                        {generalInfo?.generalEmail || 'smes.mme@nitjsr.ac.in'}
                                    </a>
                                </p>
                                <p className="text-gray-600 font-medium flex flex-wrap items-center">
                                    <span className="font-bold text-gray-800 text-sm w-16">HOD:</span> 
                                    <a href={`mailto:${hodInfo?.email || 'hod.met@nitjsr.ac.in'}`} className="hover:text-[#8C1515] transition-colors">
                                        {hodInfo?.email || 'hod.met@nitjsr.ac.in'}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* General Phone Card  */}
                    <div className="flex items-start gap-5 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-[#8C1515]/10 p-4 rounded-full text-[#8C1515] shrink-0 mt-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600 font-medium">
                                {generalInfo?.generalPhone || '+91-657-237 1234'}
                            </p>
                        </div>
                    </div>

                </div>

                {/* Right Column: Embedded Google Map */}
                <div className="h-[400px] lg:h-auto w-full rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-gray-100 relative">
                    <iframe 
                        
                        src={generalInfo?.mapEmbedUrl || "https://maps.google.com/maps?q=NIT+Jamshedpur&t=&z=15&ie=UTF8&iwloc=&output=embed"} 
                        className="absolute inset-0 w-full h-full border-0" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="NIT Jamshedpur Map"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}