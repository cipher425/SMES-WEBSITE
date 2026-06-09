import React, { useState, useEffect } from 'react';
import { client } from '../lib/sanityClient';

export default function Sponsorship() {
    const [liveSponsors, setLiveSponsors] = useState([]);

    useEffect(() => {
        // Fetch Sponsors from Sanity, ordering by when they were added
        client.fetch(`*[_type == "sponsor"] | order(_createdAt asc) {
            _id,
            name,
            website,
            "logoUrl": logo.asset->url
        }`)
        .then((data) => setLiveSponsors(data))
        .catch(console.error);
    }, []);

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 border-l-4 border-[#8C1515] pl-4">
                    Our Partners & Sponsors
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                    {liveSponsors.length > 0 ? (
                        liveSponsors.map((sponsor) => {
                            
                            // The image element is the same for both linked and unlinked sponsors
                            const SponsorImage = (
                                <img
                                    src={sponsor.logoUrl || "https://via.placeholder.com/200x100?text=No+Logo"}
                                    alt={sponsor.name}
                                    className="max-h-full w-auto object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                                />
                            );

                            return (
                                <div
                                    key={sponsor._id}
                                    className="h-28 flex items-center justify-center p-2"
                                >
                                    {/* If a website is provided, wrap in an <a> tag. Otherwise, just show the image. */}
                                    {sponsor.website ? (
                                        <a 
                                            href={sponsor.website} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            title={`Visit ${sponsor.name}`}
                                            className="h-full w-full flex items-center justify-center"
                                        >
                                            {SponsorImage}
                                        </a>
                                    ) : (
                                        <div title={sponsor.name} className="h-full w-full flex items-center justify-center">
                                            {SponsorImage}
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        // Fallback text while loading or if no sponsors exist
                        <p className="text-gray-500 italic col-span-full py-4 text-sm">
                            Loading partners...
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
}