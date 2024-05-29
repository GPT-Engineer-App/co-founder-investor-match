import React from "react";
import { FaUser, FaRocket, FaMoneyBillWave } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Startup Co-Founder & Investor Matching Platform</h1>

      <div className="flex space-x-4">
        <ProfileCard icon={<FaRocket size={50} />} title="Startup" description="Create a profile for your startup and find the right co-founder or investor." />
        <ProfileCard icon={<FaUser size={50} />} title="Co-Founder" description="Create a profile to become a co-founder and find the right startup." />
        <ProfileCard icon={<FaMoneyBillWave size={50} />} title="Investor" description="Create a profile to invest in startups and find the right opportunities." />
      </div>
    </div>
  );
}

function ProfileCard({ icon, title, description }) {
  return (
    <div className="card w-80 bg-white shadow-xl p-4">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
      <button className="btn btn-primary mt-4">Create Profile</button>
    </div>
  );
}

export default App;
