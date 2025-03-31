import React from 'react';
import './App.css'


const SkillCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 mb-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <div className="flex-shrink-0">
                <img src={icon} alt={title} className="h-12 w-12 img-filter" />
            </div>
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

const SectionHeading = ({ title }) => {
    return (
        <div className="mt-12 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        </div>
    );
};

const SkillsPage = () => {
    return (
        <div className="container mx-auto py-12">
            <div className="text-center mb-8">
                <div className="inline-block bg-white border-b-4 border-orange-500">
                    <h1 className="text-4xl font-extrabold text-gray-600">
                        Skills
                    </h1>
                </div>
            </div>
            <SectionHeading title="Languages" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SkillCard
                    icon="/assets/c2.png"
                    title="C Programming"
                    description="Proficient in C programming language."
                />
                <SkillCard
                    icon="/assets/c++2.png"
                    title="C++ Programming"
                    description="Experienced in C++ programming language."
                />
                <SkillCard
                    icon="/assets/java.png"
                    title="Java"
                    description="Skilled in Java programming language."
                />
             <SkillCard
                    icon="/assets/python2.png"
                    title="Python"
                    description="Proficient in Python programming language."
                />
                {/* Add more SkillCard components for other languages */}
            </div>

            <SectionHeading title="Web-Devolepment" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SkillCard
                    icon="/assets/html.png"
                    title="HTML"
                    description="Skilled in HTML for web development."
                />
                <SkillCard
                    icon="/assets/css.png"
                    title="CSS"
                    description="Proficient in CSS for styling web pages."
                />
                <SkillCard
                    icon="/assets/javascript.png"
                    title="JavaScript"
                    description="Skilled in JavaScript for frontend development."
                />
                <SkillCard
                    icon="/assets/flask2.png"
                    title="Flask"
                    description="Experienced in Flask web framework."
                />
                {/* Add more SkillCard components for frameworks */}
            </div>
            <SectionHeading title="Databases" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SkillCard
                    icon="/assets/mysql.png"
                    title="MySql"
                    description="Skilled in MySQL database administration."
                />
                <SkillCard
                    icon="/assets/sqlite3.png"
                    title="Sqlite3"
                    description="Proficient in SQLite3 database management."
                />
                {/* Add more SkillCard components for frontend frameworks */}
            </div>

            <SectionHeading title="Frontend Frameworks" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SkillCard
                    icon="/assets/react2.png"
                    title="React"
                    description="Skilled in React library for frontend development."
                />
                <SkillCard
                    icon="/assets/bootstarp.png"
                    title="Bootstrap"
                    description="Experienced in Bootstrap framework."
                />
                <SkillCard
                    icon="/assets/tailwind.png"
                    title="Tailwind CSS"
                    description="Experienced in Tailwind CSS framework."
                />
            </div>
        </div>
    );
};

export default SkillsPage;
