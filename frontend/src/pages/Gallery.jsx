import React, { useState, useEffect } from 'react';
import { client } from '../lib/sanityClient'; 

export default function Gallery() {
  
  const [liveGallery, setLiveGallery] = useState([]);

  useEffect(() => {
    // Fetch Gallery Images from Sanity
    // We order by _createdAt desc so newest uploads show first!
    client.fetch(`*[_type == "gallery"] | order(_createdAt desc) {
      _id,
      title,
      category,
      "imageUrl": image.asset->url
    }`)
    .then((data) => setLiveGallery(data))
    .catch(console.error);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Premium Centered Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Image Gallery</h1>
        <div className="w-20 h-1 bg-[#8C1515] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Glimpses of our state-of-the-art labs, academic symposiums, and industrial visits.
        </p>
      </div>
      
      {/* Interactive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {liveGallery.length > 0 ? (
          liveGallery.map((item) => (
            <div 
              key={item._id} 
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer bg-black"
            >
              {/* Image with subtle zoom effect on hover */}
              <img 
                src={item.imageUrl || "https://via.placeholder.com/600x400?text=No+Image"} 
                alt={item.title} 
                className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              
              {/* Gradient Overlay that fades in from the bottom on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3b0d0d]/90 via-[#8C1515]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                
                {/* Category Tag */}
                <span className="text-[10px] font-black uppercase tracking-widest text-[#d4a373] mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category || 'Gallery'}
                </span>
                
                {/* Image Title */}
                <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.title}
                </h3>
                
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic col-span-full text-center py-10">Loading gallery images...</p>
        )}
      </div>

    </div>
  );
}