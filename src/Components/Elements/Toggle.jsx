import React from 'react'

import { useState } from 'react';

function Toggle() {
  const [video, setVideo] = useState(null);

  const handleVideoChange = (newVideo) => {
    setVideo(newVideo);
  };

  return (
    <>
      <div className="learn text-center">
        <div className="video">
          {video}
        </div>
        <div className="btn   flex justify-center space-x-4 mt-10 border-2 w-[600px] ml-[60vh] ">
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 border border-blue-500" onClick={() => handleVideoChange('Code')}>
            Code
          </button>
          <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 border border-green-500" onClick={() => handleVideoChange('Plan')}>
            Plan
          </button>
          <button className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300 border border-yellow-500" onClick={() => handleVideoChange('Collaborate')}>
            Collaborate
          </button>
          <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 border border-red-500" onClick={() => handleVideoChange('Automate')}>
            Automate
          </button>
          <button className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300 border border-purple-500" onClick={() => handleVideoChange('Secure')}>
            Secure
          </button>
        </div>
        <p className='text-slate-400 mt-5 font-medium'>Build code quickly and more securely with GitHub Copilot embedded <br /> throughout your workflows.</p>
      </div>
    </>
  )
}

export default Toggle
