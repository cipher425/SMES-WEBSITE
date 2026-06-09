import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Hero from '../sections/Hero';
import AboutDirector from '../sections/AboutDirector';
import StatsBanner from '../sections/StatsBanner';
import Sponsorship from '../sections/Sponsorship';
import { client } from '../lib/sanityClient'; 

export default function Home() {
  const [liveEvents, setLiveEvents] = useState([]);
  const [liveNews, setLiveNews] = useState([]);
  
  
  const [expandedEventId, setExpandedEventId] = useState(null);

  useEffect(() => {
    // Fetch top 5 most recent Events based on creation time
    client.fetch('*[_type == "event"] | order(_createdAt desc)[0..4]')
      .then((data) => setLiveEvents(data))
      .catch(console.error);

    // Fetch top 5 most recent News/Circulars with PDF URLs included
    client.fetch(`*[_type == "news"] | order(_createdAt desc)[0..4] {
      _id,
      title,
      date,
      externalLink,
      "fileUrl": file.asset->url
    }`)
      .then((data) => setLiveNews(data))
      .catch(console.error);
  }, []);

  // Function to toggle the expanded state of an event
  const toggleDetails = (eventId) => {
    if (expandedEventId === eventId) {
      setExpandedEventId(null); 
    } else {
      setExpandedEventId(eventId); 
    }
  };

  return (
    <div>
      <Hero />
      <AboutDirector />
      <StatsBanner />
      <Sponsorship />

      {/* Combined Events & Circulars Section */}
      <div className="bg-slate-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content: Academic Events (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-end mb-8 border-b-2 border-gray-200 pb-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 tracking-tight uppercase text-sm">
                    Academic & Departmental Events
                  </h2>
                  <div className="w-12 h-1 bg-[#8C1515] mt-3"></div>
                </div>
                <Link to="/news-events" className="text-sm font-bold text-[#8C1515] hover:text-black uppercase tracking-widest transition-colors flex items-center gap-1">
                  View All Directory <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              <div className="space-y-5">
                {liveEvents.length > 0 ? (
                  liveEvents.map((event) => {
                    const isExpanded = expandedEventId === event._id;

                    return (
                      <div key={event._id} className="flex flex-col sm:flex-row bg-white border border-gray-200 border-l-4 border-l-[#8C1515] rounded-sm p-6 items-start sm:items-center gap-6 shadow-sm hover:shadow-md transition-all duration-300">
                        
                        {/* Date Block */}
                        <div className="bg-slate-50 border border-gray-200 text-center rounded-sm p-3 min-w-[95px] shrink-0">
                          <div className="text-[10px] tracking-widest uppercase font-bold text-[#8C1515]">
                            {event.date ? event.date.split(' ')[0] : 'TBA'}
                          </div>
                          <div className="text-2xl font-black text-gray-900 mt-1">
                            {event.date && event.date.split(' ')[1] ? event.date.split(' ')[1].replace(',', '') : '-'}
                          </div>
                        </div>
                        
                        {/* Event Info */}
                        <div className="flex-grow w-full">
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">
                            {event.title}
                          </h3>
                          
                          {/* Meta Details ALWAYS visible */}
                          <div className="flex flex-wrap gap-5 mt-3 text-xs text-gray-600 font-semibold">
                            <span className="flex items-center gap-1.5">
                              <svg className="w-4 h-4 text-[#8C1515]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                              {event.location || 'Location TBA'}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <svg className="w-4 h-4 text-[#8C1515]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              {event.time || 'Time TBA'}
                            </span>
                          </div>

                          {/* EXPANDABLE SECTION: Description and Payment hidden by default */}
                          {isExpanded && (
                            <div className="mt-4 pt-4 border-t border-gray-100 transition-all duration-300 ease-in-out">
                              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                {event.description}
                              </p>
                              
                              {event.isPaid && (
                                <div className="mt-4">
                                  <button className="bg-[#8C1515] border border-[#8C1515] text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#6b0f0f] transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-[#8C1515] focus:outline-none">
                                    Submit Payment (₹{event.price})
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Action Button: Controls the toggle */}
                        <div className="mt-4 sm:mt-0 shrink-0 self-start sm:self-center">
                          <button 
                            onClick={() => toggleDetails(event._id)}
                            className="bg-white border border-gray-300 text-gray-800 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:border-[#8C1515] hover:text-[#8C1515] transition-colors focus:ring-2 focus:ring-[#8C1515] focus:outline-none"
                          >
                            {isExpanded ? 'Hide Details' : 'View Details'}
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="bg-white border border-gray-200 rounded-sm p-8 text-center">
                    <p className="text-gray-500 font-medium text-sm">No upcoming events scheduled at this time.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar: LIVE Notice Board (1/3 width) */}
            <div className="lg:col-span-1">
              <div className="bg-white border-t-4 border-[#8C1515] border-x border-b border-gray-200 shadow-sm rounded-sm p-8 h-full">
                <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                  <h2 className="text-xl font-bold text-gray-900 tracking-tight uppercase text-sm">
                    Official Circulars
                  </h2>
                  <Link to="/news-events" className="text-[#8C1515] hover:text-black transition-colors" aria-label="View all circulars">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                  </Link>
                </div>
                
                <div className="space-y-5">
                  {liveNews.length > 0 ? (
                    liveNews.map((notice) => (
                      <div key={notice._id} className="group border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                        <p className="text-[10px] font-bold text-[#8C1515] uppercase tracking-widest mb-1.5">
                          Issued: {notice.date || 'Recent'}
                        </p>
                        <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#8C1515] transition-colors">
                          {notice.title}
                        </h3>
                        
                        {/* Formal Document Links */}
                        {(notice.fileUrl || notice.externalLink) && (
                          <a 
                            href={notice.fileUrl || notice.externalLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 mt-2 hover:text-black hover:underline decoration-2 underline-offset-2 transition-all"
                          >
                            {notice.fileUrl ? (
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            ) : (
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                            )}
                            {notice.fileUrl ? 'Document' : 'Portal'} 
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 duration-300">&rarr;</span>
                          </a>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 font-medium">No official circulars published.</p>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}