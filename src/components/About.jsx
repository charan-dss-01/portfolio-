import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex flex-col flex-col-reverse justify-center items-center gap-4 h-auto md:flex mt-6 md:justify-around md:flex-row">
        <div className="w-72 md:w-96 lg:w-120 flex flex-col">
          <p className="text-start  text-2xl text-gray-700 text-xl lg:text-xl xl:text-3xl">
            <span className="text-3xl block text-orange-500 font-bold mb-3">Hi, I'm Charan,</span>
            A passionate web developer. Currently, I am studying Computer Science Engineering at MVSR Engineering College. I have a strong interest in web development, and I'm enthusiastic about it.
          </p>
          <div className="mt-6">
          <button className="p-3 text-white bg-orange-500 rounded hover:text-black transition duration-300 ease-in-out">Resume</button>

          <Link to="/projects"><button className="p-3 ml-2 border-black border-2 border-solid rounded">View Work</button></Link>
          </div>
          <div className="mt-4 mb-4 flex  flex-col gap-2">
              <p className="text-grey">follow me on:</p>
              <div className="flex gap-6">
              <a href="https://www.instagram.com/dss.charan_143/?utm_source=ig_web_button_share_sheet"><i class="fa-brands fa-instagram text-3xl hover:text-orange-500 transition duration-300 ease-in-out cursor-pointer"></i></a>
            <a href="https://www.linkedin.com/in/charandonthu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin text-3xl hover:text-orange-500 transition duration-300 ease-in-out cursor-pointer"></i></a>
            <a><i class="fa-brands fa-github text-3xl hover:text-orange-500 cursor-pointer"></i></a>
              </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:ml-8 relative flex justify-center items-center"> {/* Added bg-red-100 for visibility */}
        <img
              src="/assets/charan.jpg"
              alt="Profile"
              className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-300 hover:border-orange-500 transition duration-300 ease-in-out shadow-lg"
            />
        </div>
      </div>
    </div>
  );
}
