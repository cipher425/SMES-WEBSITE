import React, { useState, useEffect } from 'react';
import { client } from '../lib/sanityClient';

const ITEMS_PER_PAGE = 4;

export default function NewsAndEvents() {
  const [liveEvents, setLiveEvents] = useState([]);
  const [liveNews, setLiveNews] = useState([]);

  // Pagination States
  const [newsPage, setNewsPage] = useState(1);
  const [eventsPage, setEventsPage] = useState(1);

  useEffect(() => {
    // Fetch Events (Ordered by date ascending)
    client.fetch('*[_type == "event"] | order(date asc)')
      .then((data) => setLiveEvents(data))
      .catch(console.error);

    // Fetch News AND grab the PDF file URL! (Ordered by creation date descending)
    client.fetch(`*[_type == "news"] | order(_createdAt desc) {
      _id,
      title,
      date,
      description,
      externalLink,
      "fileUrl": file.asset->url
    }`)
      .then((data) => setLiveNews(data))
      .catch(console.error);
  }, []);

  // Pagination Logic for News
  const totalNewsPages = Math.ceil(liveNews.length / ITEMS_PER_PAGE);
  const indexOfLastNews = newsPage * ITEMS_PER_PAGE;
  const indexOfFirstNews = indexOfLastNews - ITEMS_PER_PAGE;
  const currentNewsItems = liveNews.slice(indexOfFirstNews, indexOfLastNews);

  // Pagination Logic for Events
  const totalEventPages = Math.ceil(liveEvents.length / ITEMS_PER_PAGE);
  const indexOfLastEvent = eventsPage * ITEMS_PER_PAGE;
  const indexOfFirstEvent = indexOfLastEvent - ITEMS_PER_PAGE;
  const currentEventItems = liveEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Official Page Header */}
      <div className="mb-16 border-b-2 border-gray-200 pb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          Departmental Updates & Announcements
        </h1>
        <div className="w-16 h-1 bg-[#8C1515] mb-6"></div>
        <p className="text-gray-600 max-w-3xl text-lg leading-relaxed">
          Official circulars, academic schedules, and upcoming administrative and departmental events for students and faculty members.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: LIVE Notice Board (News) */}
        <section className="flex flex-col h-full">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-widest text-sm">
              Official Circulars & Notices
            </h2>
          </div>

          <div className="bg-white border-t-4 border-[#8C1515] border-x border-b border-gray-200 shadow-sm rounded-sm flex-grow">
            {currentNewsItems.length > 0 ? (
              currentNewsItems.map((notice, index) => (
                <div 
                  key={notice._id} 
                  className={`p-6 hover:bg-slate-50 transition-colors duration-200 ${index !== currentNewsItems.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <div className="mb-2">
                    <span className="text-[#8C1515] font-bold text-xs tracking-widest uppercase">
                      Issued: {notice.date || 'Recent'}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">{notice.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{notice.description}</p>
                  
                  {(notice.fileUrl || notice.externalLink) && (
                    <div>
                      <a 
                        href={notice.fileUrl || notice.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-[#8C1515] text-sm font-bold hover:underline decoration-2 underline-offset-4 transition-all"
                      >
                        {notice.fileUrl ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                        )}
                        {notice.fileUrl ? 'View Official Document' : 'Access External Portal'}
                      </a>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-10 text-center bg-slate-50">
                <p className="text-gray-500 text-sm font-medium">No official circulars have been published recently.</p>
              </div>
            )}
          </div>

          {/* News Pagination Controls */}
          {totalNewsPages > 1 && (
            <div className="flex justify-between items-center mt-4 px-1">
              <button
                onClick={() => setNewsPage(prev => Math.max(prev - 1, 1))}
                disabled={newsPage === 1}
                className="px-4 py-2 border rounded text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-40 disabled:hover:bg-white hover:bg-gray-100 text-gray-700 bg-white"
              >
                &larr; Previous
              </button>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Page {newsPage} of {totalNewsPages}
              </span>
              <button
                onClick={() => setNewsPage(prev => Math.min(prev + 1, totalNewsPages))}
                disabled={newsPage === totalNewsPages}
                className="px-4 py-2 border rounded text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-40 disabled:hover:bg-white hover:bg-gray-100 text-gray-700 bg-white"
              >
                Next &rarr;
              </button>
            </div>
          )}
        </section>

        {/* Right Column: LIVE Department Events */}
        <section className="flex flex-col h-full">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-widest text-sm">
              Academic & Departmental Events
            </h2>
          </div>

          <div className="space-y-6 flex-grow">
            {currentEventItems.length > 0 ? (
              currentEventItems.map(event => (
                <div key={event._id} className="bg-white border border-gray-200 border-l-4 border-l-[#8C1515] p-6 shadow-sm rounded-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  {/* Event Meta Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 p-4 bg-slate-50 border border-gray-100 rounded-sm">
                    {event.date && (
                      <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        {event.date}
                      </div>
                    )}
                    {event.time && (
                      <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {event.time}
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-700 font-medium sm:col-span-2">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        {event.location}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>
                  
                  {/* Administrative Action Buttons */}
                  {event.isPaid && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                      <button className="bg-[#8C1515] border border-[#8C1515] text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#6b0f0f] transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-[#8C1515] focus:outline-none">
                        Submit Payment (₹{event.price})
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-10 text-center border border-gray-200 bg-slate-50 rounded-sm">
                <p className="text-gray-500 font-medium text-sm">No official departmental events are currently scheduled.</p>
              </div>
            )}
          </div>

          {/* Events Pagination Controls */}
          {totalEventPages > 1 && (
            <div className="flex justify-between items-center mt-4 px-1">
              <button
                onClick={() => setEventsPage(prev => Math.max(prev - 1, 1))}
                disabled={eventsPage === 1}
                className="px-4 py-2 border rounded text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-40 disabled:hover:bg-white hover:bg-gray-100 text-gray-700 bg-white"
              >
                &larr; Previous
              </button>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Page {eventsPage} of {totalEventPages}
              </span>
              <button
                onClick={() => setEventsPage(prev => Math.min(prev + 1, totalEventPages))}
                disabled={eventsPage === totalEventPages}
                className="px-4 py-2 border rounded text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-40 disabled:hover:bg-white hover:bg-gray-100 text-gray-700 bg-white"
              >
                Next &rarr;
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}