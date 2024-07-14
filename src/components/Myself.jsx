import React from 'react';
import { Link } from 'react-router-dom';

export default function Myself() {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="w-full flex flex-col justify-center items-center gap-6 md:flex-row md:justify-around">
                <div className="relative flex justify-center items-center mt-6 md:mt-0 md:ml-8">
                    <img
                        src="/assets/charan.jpg"
                        alt="Profile"
                        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-gray-300 hover:border-orange-500 transition duration-300 ease-in-out shadow-lg"
                    />
                </div>
                <div className="w-full max-w-3xl px-4 md:px-0 flex flex-col">
                    <div className="text-center mb-8">
                        <div className="inline-block bg-white border-b-4 border-orange-500">
                            <h1 className="text-4xl font-extrabold text-gray-600">
                                About
                            </h1>
                        </div>
                    </div>
                    <p className="text-start text-gray-700 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-sans">
                        Hello, I'm Charan, a Computer Science Engineering student at MVSR Engineering College. I'm deeply passionate about web development aiming to create innovative and user-friendly digital experiences.
                        <br /><br />
                        With a strong foundation in web development, I excel in building elegant websites and intuitive interfaces. Certified in web development, I am dedicated to continuous learning to stay ahead in this dynamic field. Driven by creativity and attention to detail, I am eager to collaborate on projects that challenge the norm and redefine digital experiences. Let's work together to innovate and create something extraordinary.
                    </p>
                    <div className="mt-6 flex justify-center">
                       <Link to="/contact"><button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out">
                        Let's Collaborate <i class="fa-solid fa-arrow-right"></i>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
