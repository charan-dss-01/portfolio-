import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/assets/resume-ol.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Charan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Hi, I'm Charan
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Passionate Full Stack Developer specializing in modern web technologies. 
              Currently pursuing Computer Science Engineering at MVSR Engineering College, 
              focused on creating impactful digital experiences through clean code 
              and innovative solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={handleDownload}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30"
            >
              Download Resume
            </button>
            <Link 
              to="/projects"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Link>
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <p className="text-gray-500 mb-4">Connect with me:</p>
            <div className="flex justify-center lg:justify-start gap-6">
              {[
                { 
                  icon: 'instagram',
                  url: 'https://www.instagram.com/dss.charan_143/',
                  color: 'hover:text-orange-500'
                },
                { 
                  icon: 'linkedin',
                  url: 'https://www.linkedin.com/in/charandonthu',
                  color: 'hover:text-blue-600'
                },
                { 
                  icon: 'github',
                  url: 'https://github.com/charan-dss-01/',
                  color: 'hover:text-gray-800'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl text-gray-600 transition-all duration-300 ${social.color}`}
                >
                  <i className={`fa-brands fa-${social.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative group flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden transform transition-all duration-500 hover:rotate-3">
            <img
              src="/assets/charan.jpg"
              alt="Charan Donthu"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-orange-500 rounded-full bg-white shadow-xl hidden lg:block" />
        </div>
      </div>
    </div>
  );
}