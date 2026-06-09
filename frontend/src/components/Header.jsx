import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { client } from "../lib/sanityClient";

export default function Header() {
  const location = useLocation();
  const [contactInfo, setContactInfo] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fetch dynamic contact data from Sanity CMS on mount
  useEffect(() => {
    client
      .fetch(`*[_type == "departmentSettings"][0]{
        generalEmail,
        address
      }`)
      .then((data) => setContactInfo(data))
      .catch(console.error);
  }, []);

  // Close mobile drawer menu when navigating between pages
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "People", path: "/team" },
    { name: "News & Events", path: "/news-events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
      
      {/* Tier 1: Top Bar (Contact Info & Social Media Links) */}
      <div className="bg-[#3b0d0d] text-gray-300 text-xs sm:text-sm py-2 font-normal">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-3">

          {/* Dynamic Contact Details */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 text-center sm:text-left font-normal">
            
            {/* Email Link */}
            <a
              href={`mailto:${contactInfo?.generalEmail || "smes.mme@nitjsr.ac.in"}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span className="font-normal break-all">
                {contactInfo?.generalEmail || "smes.mme@nitjsr.ac.in"}
              </span>
            </a>

            <span className="hidden sm:inline text-gray-600 font-light" aria-hidden="true">
              |
            </span>

            {/* Location Link */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="font-normal break-words">
                {contactInfo?.address?.split("\n")[0] || "NIT Jamshedpur, Jharkhand, India"}
              </span>
            </div>
          </div>

          {/* Social Platforms Profiles */}
          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/smes-nitjsr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300 transition-colors flex items-center"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/smes_nitjsr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300 transition-colors flex items-center"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="hover:text-white text-gray-300 transition-colors flex items-center"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Branding Header & Navigation Row */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 h-20 flex items-center justify-between gap-4">

          {/* Branding Hub */}
          <Link to="/" className="flex items-center gap-3 min-w-0 flex-1">
            <img
              src="/logo.png"
              alt="SMES Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 object-contain"
            />
            <div className="min-w-0">
              <h1 className="font-bold text-gray-900 uppercase leading-tight text-[11px] sm:text-sm md:text-base lg:text-lg break-words">
                <span className="sm:hidden">SMES NIT Jamshedpur</span>
                <span className="hidden sm:inline">Society For Metallurgical Engineering Students</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider mt-0.5">
                NIT Jamshedpur
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-8 shrink-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold whitespace-nowrap transition-colors relative py-1 ${
                    isActive
                      ? "text-[#8C1515] border-b-2 border-[#8C1515]"
                      : "text-gray-600 hover:text-[#8C1515]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              to="/register"
              className="ml-4 bg-[#8C1515] text-white px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-black transition-all whitespace-nowrap shadow-sm active:scale-[0.97]"
            >
              Register
            </Link>
          </nav>

          {/* Mobile Hamburguer Menu Trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#8C1515] hover:bg-gray-50 shrink-0 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Flyout Panel */}
      {menuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-white border-b border-gray-200 shadow-xl z-50">
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2.5 rounded-sm text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#8C1515]/5 text-[#8C1515]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#8C1515]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-gray-100">
              <Link
                to="/register"
                className="block w-full text-center bg-[#8C1515] text-white py-3 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-black transition-all shadow-sm"
              >
                Register Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}