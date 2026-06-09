// src/pages/Membership.jsx
import { useState } from 'react';

export default function Membership() {
  const [formData, setFormData] = useState({ name: '', email: '', department: '', year: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted to API:", formData);
    alert("Registration Sent!");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 border-l-4 border-maroon-700 pl-4">Join SMES</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-200 shadow-sm rounded">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" required className="w-full border border-gray-300 rounded p-2" 
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Institute Email</label>
            <input type="email" required className="w-full border border-gray-300 rounded p-2"
              value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select className="w-full border border-gray-300 rounded p-2" 
               value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})}>
              <option value="">Select Dept</option>
              <option value="MME">Metallurgical & Materials Engineering</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year of Study</label>
            <input type="text" required placeholder="e.g. 2nd Year" className="w-full border border-gray-300 rounded p-2"
              value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} />
          </div>
          <button type="submit" className="w-full bg-maroon-700 text-white font-bold py-2 px-4 rounded hover:bg-maroon-900 mt-4">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}