import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Hemant',
    role: 'Laravel/PHP Developer',
    description: 'Expert in building robust backend systems and RESTful APIs with Laravel and PHP.',
    skills: ['Laravel', 'PHP'],
    gradient: 'from-purple-500 via-pink-500 to-pink-600',
  },
  {
    name: 'Rahul',
    role: 'Laravel Developer',
    description: 'Passionate developer with expertise in Laravel framework and modern web development practices.',
    skills: ['Laravel', 'Full-Stack'],
    gradient: 'from-pink-500 via-purple-500 to-blue-500',
  },
  {
    name: 'Suraj',
    role: 'Software Developer',
    description: 'Skilled programmer specializing in custom software solutions and application development.',
    skills: ['Java', 'Software'],
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
  },
{
    name: 'Tushar',
    role: 'QA Tester',
    description: 'Quality assurance expert with experience in Selenium and Java for comprehensive testing solutions.',
    skills: ['Java', 'Selenium'],
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
  },
{
    name: 'Sagar Kalra',
    role: 'Accountant',
    description: 'Expert in financial management and accounting with comprehensive knowledge of Tally software.',
    skills: ['Tally', 'Accounting'],
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
  },

];

const Team = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">Our Team</h2>
      <div className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
        Meet the talented professionals behind our exceptional work. Each member brings unique expertise to deliver quality solutions.
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg">
            <div className={`bg-gradient-to-r ${member.gradient} p-8 flex flex-col items-center`}>
              <div className="text-white text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-16 h-16" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="flex gap-2 mb-4">
                {member.skills.map((skill, idx) => (
                  <span key={idx} className="bg-neutral-950/30 px-3 py-1 rounded-full text-xs  text-white border border-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-blue-500 font-medium mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm mb-4">{member.description}</p>
              <div className="flex justify-center gap-4 text-xl text-gray-400">
                <a href="#"><FaGithub /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Team;
