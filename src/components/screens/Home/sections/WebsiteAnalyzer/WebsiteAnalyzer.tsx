'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function WebsiteAnalyzer() {
  const [url, setUrl] = useState('');

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-black rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4 text-start text-white">
        Analyze Any Website
      </h2>

      <div className="flex items-center border border-dashed border-gray-300 rounded-lg px-4 py-3">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL (e.g., example.com)"
          className="flex-grow bg-transparent outline-none text-white-700"
        />
        {/* <FaArrowRight className="text-gray-400" /> */}
      </div>

      <p className="text-sm text-center text-gray-500 mt-2">
        Get instant insights on Crawlability and AI agent readiness
      </p>

      <div className="flex justify-center gap-4 mt-5">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-md shadow hover:scale-105 transition">
          Start Website Analysis
        </button>
        <button className="bg-white border border-gray-300 text-black px-6 py-2 rounded-md shadow hover:scale-105 transition">
          View Sample Report
        </button>
      </div>
    </div>
  );
}
