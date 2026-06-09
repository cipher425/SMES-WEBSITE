import React, { useState, useEffect } from 'react';
import { client } from '../lib/sanityClient';

export default function RegistrationPage() {
  const [formUrl, setFormUrl] = useState('');

  useEffect(() => {
    // Fetch the registration link from Sanity
    client.fetch(`*[_type == "departmentSettings"][0]{ registrationFormUrl }`)
      .then((data) => {
        if (data?.registrationFormUrl) {
          setFormUrl(data.registrationFormUrl);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-center">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-[#8C1515]">Join SMES</h2>
        <p className="text-gray-600 leading-relaxed">
          Please click the button below to open the official registration form. 
          <br />
          <span className="text-sm italic">You will be redirected to Google Forms to complete your registration and upload payment proof.</span>
        </p>
      </div>

      {/* Button to open form in new tab */}
      {formUrl ? (
        <div className="mt-8">
          <a 
            href={formUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#8C1515] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Register Now
          </a>
        </div>
      ) : (
        <div className="p-10 text-center border-2 border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-500">Loading registration portal...</p>
        </div>
      )}

      {/* Optional: Add a reminder about the payment */}
      <div className="mt-12 p-6 bg-gray-50 border border-gray-100 rounded-lg text-left">
        <h4 className="font-bold text-gray-900 mb-2">Registration Instructions:</h4>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-2">
          <li>Ensure you have your payment screenshot ready.</li>
          <li>Keep your Transaction ID handy.</li>
          <li>Make sure you are signed in to your Google account to upload the payment file.</li>
        </ul>
      </div>
    </div>
  );
}