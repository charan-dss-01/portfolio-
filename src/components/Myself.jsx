import React from 'react';
import { Link } from 'react-router-dom';

export default function Myself() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-20 px-4">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Section with Enhanced Effects */}
                <div className="relative group flex justify-center order-last lg:order-first">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <img
                            src="/assets/charan.jpg"
                            alt="Charan Donthu"
                            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Animated Border Effect */}
                        <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-orange-500 transition-all duration-500">
                            <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-spin-slow [border-style:dotted] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </div>
                    
                    {/* Floating Dots Decoration */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 opacity-0 lg:opacity-100 transition-opacity duration-500">
                        <div className="absolute w-3 h-3 bg-orange-500 rounded-full animate-float"></div>
                        <div className="absolute w-2 h-2 bg-orange-400 rounded-full animate-float-delayed"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="mb-12 relative inline-block">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 relative">
                            About Me
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 mt-2"></span>
                        </h1>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            I'm <span className="text-orange-500 font-semibold">Charan</span>, a passionate Computer Science Engineering student at MVSR Engineering College specializing in modern web development. My focus lies in creating innovative digital experiences that combine aesthetic appeal with technical excellence.
                        </p>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            With expertise spanning full-stack development, I craft responsive websites and intuitive interfaces. Certified in cutting-edge web technologies, I'm committed to continuous innovation in this dynamic field.
                        </p>
                    </div>

                    <div className="pt-8">
                        <Link 
                            to="/contact"
                            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30"
                        >
                            Let's Collaborate
                            <i className="fa-solid fa-arrow-right ml-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}