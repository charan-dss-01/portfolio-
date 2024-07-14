import React from 'react';

const ProjectCard = ({ image, title, description }) => {
    return (
        <div className="max-w-xl rounded overflow-hidden shadow-lg mx-auto mb-8 transform hover:scale-105 transition duration-300 ease-in-out">
            <img src={image} alt={title} className="w-full h-auto" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="container mx-auto py-12">
            <div className="text-center mb-8">
                <div className="inline-block bg-white border-b-4 border-orange-500">
                    <h1 className="text-4xl font-extrabold text-gray-600">
                        Projects
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard
                    image="/assets/wm.PNG"
                    title="Weather Masters"
                    description="Weather Masters is a Flask and javascript based web application that provides real-time weather information. This documentation aims to guide users through the application's structure, functionality, and usage."
                />
                <ProjectCard
                    image="/assets/pic11.PNG"
                    title="Cipher Hub"
                    description="The Cipher Hub presentation  will explore the art of  encrypting and decrypting  text using HTML, CSS, JS, and  Flask. We will delve into  various encryption algorithms  and demonstrate how to  implement them in web  development."
                />
                <ProjectCard
                    image="/assets/mm-1.PNG"
                    title="Meme Generator"
                    description="The HTML/CSS/JS/Flask Meme Generator is a web application that allows users to create custom memes using a collection of popular meme templates sourced from the internet."
                />
                <ProjectCard
                    image="/assets/gn1.PNG"
                    title="Game Nexus"
                    description="Game Nexus is an immersive online gaming platform crafted using HTML, CSS, and JavaScript. The project boasts a sleek and responsive design, captivating users with a dynamic interface."
                />
            </div>
        </div>
    );
};

export default Projects;
