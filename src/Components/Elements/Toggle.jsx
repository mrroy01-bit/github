import { useState } from 'react'
import Code from '../video/code.mp4'
import Collaborate from '../video/collaborate.webp'
import Plan from '../video/plan.webp'
import Automate from '../video/Automate.webp'
import Secure from '../video/secure.webp'

function Toggle() {
  const [video, setVideo] = useState(Code); // Set Code as the initial video
  const [img, setImg] = useState(Plan); // Set Plan as the initial image
  const [isVideoVisible, setVideoVisibility] = useState(true); // Set video visibility to true
  const [isCodeToggle, setCodeToggle] = useState(true); // Set code toggle to true

  const handleVideoChange = (newVideo) => {
    setVideo(newVideo);
    setVideoVisibility(true); // Show video when video is changed
    setCodeToggle(true); // Set code toggle to true when video is changed
  };
  const handleImageChange = (newImage) => {
    setImg(newImage);
    setVideoVisibility(false); // Hide video when image is changed
    setCodeToggle(false); // Set code toggle to false when image is changed
  };

  return (
    <>
      <div className="learn text-center " >
        <div className="toggle-video">
        {isVideoVisible && <video src={video} autoPlay loop muted></video>}
        {!isVideoVisible && <img src={img} alt="" />}
        </div>
        <div className="btn flex justify-center space-x-4 mt-10 border-2 w-[600px] ml-[60vh] font-medium">
          <button id='btn-animation' className={`code-toggle pl-[20px] pt-[14x] pr-10 mb-[10px] ${isCodeToggle ? ' text-white   transition duration-300  ' : ' text-white transition duration-300 '}`} onClick={() => handleVideoChange(Code)}>
            Code
          </button>
            <>
              <button id='btn-animation' className={`btn-toggle   ${isCodeToggle ? 'text-white  transition duration-300 border ' : ' text-white   transition duration-300 '}`} onClick={() => handleImageChange(Plan)}>
                Plan
              </button>
              <button id='btn-animation' className={`btn-toggle   ${isCodeToggle ? 'text-white  transition duration-300 border ' : ' text-white  transition duration-300 '}`} onClick={() => handleImageChange(Collaborate)}>
                Collaborate
              </button>
              <button id='btn-animation' className={`btn-toggle   ${isCodeToggle ?' text-white transition duration-300 border'  : ' text-white   transition duration-300  '}`} onClick={() => handleImageChange(Automate)}>
                Automate
              </button>
              <button id='btn-animation' className={`btn-toggle   ${isCodeToggle ? ' text-white  transition duration-300 border ' : ' text-white   transition duration-300 '}`} onClick={() => handleImageChange(Secure)}>
                Secure
              </button>
              <button className='animation start-home'></button>
            </>
          
        </div>
        <p className='text-slate-400 mt-5 font-medium'>Build code quickly and more securely with GitHub Copilot embedded <br /> throughout your workflows.</p>
      </div>
    </>
  )
}

export default Toggle
