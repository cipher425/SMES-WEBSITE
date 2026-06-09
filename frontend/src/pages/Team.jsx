import React, { useState, useEffect } from 'react';
import { client } from '../lib/sanityClient'; 

export default function Team() {
    // 1. Create separate states for Faculty and SMES
    const [liveFaculty, setLiveFaculty] = useState([]);
    const [liveSmes, setLiveSmes] = useState([]);

    useEffect(() => {
        // 2. Fetch ONLY the members categorized as 'faculty'
        client.fetch(`*[_type == "teamMember" && category == "faculty"] | order(_createdAt asc) {
            _id,
            name,
            role,
            description,
            "imageUrl": image.asset->url
        }`)
        .then((data) => setLiveFaculty(data))
        .catch(console.error);

        // 3. Fetch ONLY the members categorized as 'smes'
        client.fetch(`*[_type == "teamMember" && category == "smes"] | order(_createdAt asc) {
            _id,
            name,
            role,
            description,
            "imageUrl": image.asset->url
        }`)
        .then((data) => setLiveSmes(data))
        .catch(console.error);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 min-h-screen">
            
            {/* Page Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our People</h1>
                <div className="w-20 h-1 bg-[#8C1515] mx-auto rounded-full"></div>
                <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
                    Meet the distinguished faculty guiding the department and the dedicated student representatives driving the SMES initiatives.
                </p>
            </div>

            {/* =========================================
                SECTION 1: FACULTY MEMBERS
            ========================================= */}
            <div className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-[#8C1515] pl-3">
                        Faculty Members
                    </h2>
                    <div className="flex-grow h-px bg-gray-200"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {liveFaculty.length > 0 ? (
                        liveFaculty.map((member) => (
                            <div key={member._id} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center group">
                                <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-gray-50 shadow-inner">
                                    <img 
                                        src={member.imageUrl || "https://via.placeholder.com/150?text=Photo"} // Live image with a fallback
                                        alt={member.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8C1515] transition-colors">
                                    {member.name}
                               </h3>
                                <p className="text-sm font-semibold text-[#8C1515] mb-3">
                                    {member.role}
                                </p>
                                {member.description && (
                                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                        {member.description}
                                    </p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 italic col-span-full text-center py-10">Loading faculty members...</p>
                    )}
                </div>
            </div>

            {/* =========================================
                SECTION 2: SMES CORE COMMITTEE
            ========================================= */}
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-[#8C1515] pl-3">
                        SMES Core Committee
                    </h2>
                    <div className="flex-grow h-px bg-gray-200"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {liveSmes.length > 0 ? (
                        liveSmes.map((member) => (
                            <div key={member._id} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center group">
                                <div className="w-28 h-28 rounded-2xl overflow-hidden mb-5 bg-gray-50 rotate-3 group-hover:rotate-0 transition-all duration-300 shadow-sm">
                                    <img 
                                        src={member.imageUrl || "https://via.placeholder.com/150?text=Student"} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">
                                    {member.name}
                                </h3>
                                <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3 mt-1">
                                    {member.role}
                                </p>
                                {member.description && (
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {member.description}
                                    </p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 italic col-span-full text-center py-10">Loading core committee...</p>
                    )}
                </div>
            </div>

        </div>
    );
}