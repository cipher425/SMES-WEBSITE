import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../lib/sanityClient';

export default function Footer() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    // Fetch the Department Settings from Sanity
    client.fetch(`*[_type == "departmentSettings"][0]`)
      .then((data) => setSettings(data))
      .catch(console.error);
  }, []);

  return (
    <footer className="bg-[#3b0d0d] text-white pt-20 pb-8 mt-12 border-t-8 border-[#8C1515]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Middle Section: Logo, Name, and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
          
          {/* Logo and Name Block */}
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 flex items-center justify-center shrink-0">
               <img 
                 src="/nitj.png" 
                 alt="SMES Logo" 
                 className="w-full h-full object-contain opacity-80 mix-blend-screen" 
               />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-3xl font-bold tracking-tight uppercase text-white">
                NIT Jamshedpur
              </h3>
              <div className="h-0.5 w-16 bg-[#8C1515] rounded-full my-3"></div>
              <p className="text-xs text-gray-300 font-medium tracking-widest uppercase">
                Society For Metallurgical Engineering Students
              </p>
            </div>
          </div>

          {/* Contact Information Block (Dynamic) */}
          <div className="text-sm text-gray-300 space-y-4 text-left lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-[#8C1515] pl-6 lg:pl-0 lg:pr-6">
            <div>
              <p className="font-bold text-white uppercase tracking-widest text-[10px] mb-1 opacity-70">Department Office</p>
              <p className="font-medium">Dept. of Metallurgical & Materials Engineering</p>
            </div>
            
            {/* Address pulled from Sanity */}
            <div className="leading-relaxed text-gray-400 whitespace-pre-wrap">
              <p>{settings?.address || "Adityapur, Jamshedpur, Jharkhand - 831014\nIndia"}</p>
            </div>

            {/* Phone & Email pulled from Sanity */}
            <div className="pt-2 text-gray-200">
              <p className="hover:text-white transition-colors cursor-pointer">
                Office: {settings?.generalPhone || "+91-657-237 1234"}
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                Email: {settings?.generalEmail || "smes.mme@nitjsr.ac.in"}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Society For Metallurgical Engineering Students. 
            <span className="mx-2">|</span> 
            National Institute of Technology Jamshedpur. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}