// src/lib/data.js

export const newsData = [
  { 
    id: 1, 
    title: "Call for Papers: Green Steel", 
    date: "Oct 15, 2026", 
    description: "Submit your review-based documentation and reports on hydrogen-based steelmaking.", 
    link: "#" 
  },
  { 
    id: 2, 
    title: "Lab Equipments Upgraded", 
    date: "Oct 10, 2026", 
    description: "New Powder XRD instrumentation is now operational in the main department lab.", 
    link: "#" 
  },
  { 
    id: 3, 
    title: "Tata Steel Internship Drive", 
    date: "Oct 05, 2026", 
    description: "Registration is now open for summer core manufacturing and research internships.", 
    link: "#" 
  }
];

// src/lib/data.js

export const facultyData = [
  { id: 1, name: "Dr. Chandra Shekhar Chowdhary", role: "HOD & Associate Professor", image: "/faculty/csc.jpg", description: "Expert in Process Metallurgy." },
  { id: 2, name: "Dr. Ashok Kumar", role: "Professor", image: "/faculty/ashok-kumar.jpg", description: "Specializes in Iron & Steel." },
  { id: 3, name: "Dr. Rina Sahu", role: "Associate Professor", image: "/faculty/rina-sahu.jpg", description: "Focuses on Advanced Characterization." },
  { id: 4, name: "Dr. Amit Patel", role: "Assistant Professor", image: "/faculty/amit-patel.jpg", description: "Research in Nanotechnology." },
  { id: 5, name: "Dr. Anushree Dutta", role: "Assistant Professor", image: "/faculty/anushree-dutta.jpg", description: "Expert in Physical Metallurgy." },
  { id: 6, name: "Dr. Aravind Gali", role: "Assistant Professor", image: "/faculty/aravind-gali.jpg", description: "Specializes in Extractive Metallurgy." },
  { id: 7, name: "Dr. Ashwinee Kumar", role: "Assistant Professor", image: "/faculty/ashwinee-kumar.jpg", description: "Focuses on Advanced Materials." },
  { id: 8, name: "Dr. Binay Kumar", role: "Assistant Professor", image: "/faculty/binay-kumar.jpg", description: "Research in Mineral Beneficiation." },
  { id: 9, name: "Dr. Jichil Majhi", role: "Assistant Professor", image: "/faculty/jichil-majhi.jpg", description: "Expert in Computational Materials Science." },
  { id: 10, name: "Dr. Monalisa Mandal", role: "Assistant Professor", image: "/faculty/monalisa-mandal.jpg", description: "Specializes in Corrosion Engineering." },
  { id: 11, name: "Dr. Ram Krishna", role: "Assistant Professor", image: "/faculty/ram-krishna.jpg", description: "Focuses on Powder Metallurgy." },
  { id: 12, name: "Dr. Renu Kumari", role: "Assistant Professor", image: "/faculty/renu-kumari.jpg", description: "Research in Sustainable Metallurgical Processes." },
];

export const smesData = [
  { id: 1, name: "Rahul Singh", role: "President", image: "https://via.placeholder.com/150", description: "Final year undergrad overseeing all society operations." },
  { id: 2, name: "Priya Sharma", role: "Vice President", image: "https://via.placeholder.com/150", description: "Manages industrial relations and sponsorships." },
  { id: 3, name: "Aman Gupta", role: "General Secretary", image: "https://via.placeholder.com/150", description: "Coordinates workshops and guest lectures." },
  { id: 4, name: "Sneha Reddy", role: "Technical Head", image: "https://via.placeholder.com/150", description: "Leads coding and core software training." },
];

// ... keep your existing newsData and eventsData below

export const eventsData = [
  { 
    id: 1, 
    title: "Advances in Steelmaking Technology", 
    date: "Nov 10, 2026", 
    time: "02:00 PM",
    location: "LT-3, MMME Building",
    description: "Industry talk by Tata Steel executives.", 
    registrationLink: "#", 
    isPaid: false, 
    price: 0 
  },
  { 
    id: 2, 
    title: "Materials Characterization Workshop", 
    date: "Nov 18, 2026", 
    time: "10:00 AM",
    location: "Materials Lab",
    description: "Hands-on workshop focusing on Powder vs. Single Crystal XRD.", 
    registrationLink: "#", 
    isPaid: true, 
    price: 150 
  },
  { 
    id: 3, 
    title: "DSA & Coding for Core Engineers", 
    date: "Nov 25, 2026", 
    time: "04:00 PM",
    location: "Computer Center",
    description: "Pattern-recognition strategies for solving algorithmic questions.", 
    registrationLink: "#", 
    isPaid: false, 
    price: 0 
  },
  
];