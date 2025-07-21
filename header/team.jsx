import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Bhavesh',
    role: 'Backend Developer',
    description: 'Expert in building robust backend systems and REST-APIs with Express.js and Mongoose.',
    skills: ['Express.js', 'MongoDB'],
    gradient: 'from-purple-500 via-pink-500 to-pink-600',
  },
  {
    name: 'Jaykishan',
    role: 'Android Developer',
    description: 'Passionate developer with expertise in Dart and AngularJS, focused on building responsive and scalable web and Android applications.',
    skills: ['Dart', 'Angular.js'],
    gradient: 'from-pink-500 via-purple-500 to-blue-500',
  },
  {
    name: 'Nitish',
    role: 'Frontend Developer',
    description: 'Skilled programmer specializing in creating perfect responsive website which are upto date according to the new evolving tech.',
    skills: ['Javascript', 'React'],
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
  },
{
    name: 'Vandana',
    role: 'Full Stack Developer',
    description: 'Quality assurance expert with experience in React as well as in backend.',
    skills: ['MERN', 'Javscript'],
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
  },
// {
//     name: 'Sagar Kalra',
//     role: 'Accountant',
//     description: 'Expert in financial management and accounting with comprehensive knowledge of Tally software.',
//     skills: ['Tally', 'Accounting'],
//     gradient: 'from-blue-500 via-purple-500 to-pink-500',
//   },

];

const Team = () => {
  return (
    <div>
    <section className="bg-neutral-900 text-white py-16 px-6">
      <div className='flex justify-center'>
      <h2 className="text-4xl font-bold text-center mb-4 relative pb-3 ">Our Team
        <span id="se" className='w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full'></span>
      </h2>
      </div>
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
    
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container max-w-7xl gap-4 pl-6 pb-10 mx-auto  '>

        <div className='bg-neutral-800 text-center p-8 rounded-2xl'>
          <div className='flex justify-center'>
          <div  className='w-12 h-12 rounded-full bg-blue-500/30 text-blue-500 text-center pt-3 shrink-0 '> 
            <span class="material-icons">
groups
</span>
          </div  >
          </div>
          
         <h2 className='text-3xl font-bold'> 5+</h2>
          <p className='text-slate-300'>Team Members</p>
        </div>

 <div className='bg-neutral-800  text-center p-8 rounded-2xl'>
          <div className='flex justify-center'>
          <div  className='w-12 h-12 rounded-full bg-red-500/30 text-red-500 text-center pt-3 '> 
            <span class="material-icons">
business_center
</span>
          </div  >
          </div>
          
         <h2 className='text-3xl font-bold text-center'> 20+</h2>
          <p className='text-slate-300'>Projects Completed</p>
        </div>

 <div className='bg-neutral-800  text-center p-8 rounded-2xl'>
          <div className='flex justify-center'>
          <div  className='w-12 h-12 rounded-full bg-blue-500/30 text-blue-500 text-center pt-3 '> 
            <span class="material-icons">
sentiment_satisfied
</span>
          </div  >
          </div>
          
         <h2 className='text-3xl font-bold'> 15+</h2>
          <p className='text-slate-300'>Happy Clients</p>
        </div>

         <div className='bg-neutral-800  text-center p-8 rounded-2xl'>
          <div className='flex justify-center'>
          <div  className='w-12 h-12 rounded-full bg-red-500/30 text-red-500 text-center pt-3 '> 
            <span class="material-icons">
schedule
</span>
          </div  >
          </div>
          
         <h2 className='text-3xl font-bold'> 24/7</h2>
          <p className='text-slate-300'>Support Available</p>
        </div>


  </div>  
    
    <div className='text-center'> 
      <h3 className='text-4xl text-bold pb-3 '>Ready to Work With Our Team?</h3>
      <p className='text-slate-300'>Let's collaborate to transform your ideas into exceptional digital experiences.</p>

      <a  href="#contact" className=' inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 mt-5 rounded-2xl'>Get In Touch</a>
    </div>

    </div>
    
  );
};

export default Team;
