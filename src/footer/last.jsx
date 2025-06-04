
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className='mx-auto container px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {/* <div class="w-full h-80 bg-neutral-200 dark:bg-neutral-800 relative rounded-xl">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <div class="w-16 h-16 bg-[#3A86FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#3A86FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-neutral-800 dark:text-white mb-2">Our Location</h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                Delhi, India
              </p>
            </div>
          </div>
          
          
          <div class="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 opacity-20">
            <div class="col-span-1 row-span-1 bg-[#3A86FF]/20"></div>
            <div class="col-span-2 row-span-1 bg-[#3A86FF]/10"></div>
            <div class="col-span-1 row-span-1 bg-[#3A86FF]/30"></div>
            <div class="col-span-2 row-span-1 bg-[#3A86FF]/20"></div>
            <div class="col-span-3 row-span-1 bg-[#3A86FF]/10"></div>
            <div class="col-span-1 row-span-1 bg-[#3A86FF]/30"></div>
            <div class="col-span-2 row-span-1 bg-[#3A86FF]/20"></div>
            
            <div class="col-span-2 row-span-1 bg-[#FF006E]/10"></div>
            <div class="col-span-1 row-span-1 bg-[#FF006E]/20"></div>
            <div class="col-span-3 row-span-1 bg-[#FF006E]/10"></div>
            <div class="col-span-4 row-span-1 bg-[#FF006E]/30"></div>
            <div class="col-span-2 row-span-1 bg-[#FF006E]/20"></div>
            
            <div class="col-span-3 row-span-1 bg-[#3A86FF]/20"></div>
            <div class="col-span-2 row-span-1 bg-[#3A86FF]/10"></div>
            <div class="col-span-5 row-span-1 bg-[#3A86FF]/30"></div>
            <div class="col-span-2 row-span-1 bg-[#3A86FF]/20"></div>
            
            <div class="col-span-2 row-span-1 bg-[#FF006E]/10"></div>
            <div class="col-span-4 row-span-1 bg-[#FF006E]/20"></div>
            <div class="col-span-3 row-span-1 bg-[#FF006E]/10"></div>
            <div class="col-span-3 row-span-1 bg-[#FF006E]/30"></div>
            
            <div class="col-span-4 row-span-1 bg-[#3A86FF]/20"></div>
            <div class="col-span-2 row-span-1 bg-[#3A86FF]/10"></div>
            <div class="col-span-4 row-span-1 bg-[#3A86FF]/30"></div>
            <div class="col-span-2 row-span-1 bg-[#3A86FF]/20"></div>
            
            <div class="col-span-2 row-span-1 bg-[#FF006E]/10"></div>
            <div class="col-span-3 row-span-1 bg-[#FF006E]/20"></div>
            <div class="col-span-3 row-span-1 bg-[#FF006E]/10"></div>
            <div class="col-span-4 row-span-1 bg-[#FF006E]/30"></div>
          </div>
        </div> */}
        <div className='first'>
      <span className="text-3xl bg-gradient-to-r from bg-blue-500 via-purple-500 to-pink-500  bg-clip-text text-transparent ">Jitendra Singh Bhandari</span>
      <p className='pt-5'>Professional Full-Stack Mobile & Web Developer providing high-quality development services and innovative solutions for your digital needs.</p>
       <div className="flex gap-4 items-center pt-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 shrink-0 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-blue-500"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
      
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 shrink-0 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-blue-500"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
      
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 shrink-0 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-red-500"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
      
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 shrink-0 rounded-full bg-[#2e2f33] flex items-center justify-center  hover:bg-blue-500"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>

               <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 shrink-0 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-green-500"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>

            </div>
      </div>  
      <div className='second '>
        <div className='flex justify-left relative pb-2'>
          <h2 className='text-2xl font-bold'>Quick Links
         <span id="se" className='w-18 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute left-1 bottom-0 rounded-full md'></span>
          </h2></div>

          <div className='pt-4'>
        <ul>
          <li>
            <div className='flex pb-1'>              
            <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 mr-2 mt-1.5 text-[#3A86FF]' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg><a href='home.jsx' className='text-slate-300 hover:text-white'>Home</a></div></li>
          <li>
            <div className='flex pb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 mt-1.5 text-[#3A86FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                 <a href='about_us.jsx' className='text-slate-300 hover:text-white'>About Me</a>
                  </div> </li>
          <li>
            <div className='flex pb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 mt-1.5 text-[#3A86FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                 <a href='services.jsx' className='text-slate-300 hover:text-white'>Services</a>
                  </div> </li>
         <li>
            <div className='flex pb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 mt-1.5 text-[#3A86FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                 <a href='project.jsx' className='text-slate-300 hover:text-white'>Projects</a>
                  </div> </li>
         <li>
            <div className='flex pb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 mt-1.5 text-[#3A86FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                 <a href='team.jsx' className='text-slate-300 hover:text-white'>Team</a>
                  </div> </li>
                  <li>
            <div className='flex pb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 mt-1.5 text-[#3A86FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                 <a href='contact.jsx' className='text-slate-300 hover:text-white'>Contact</a>
                  </div> </li>

                  <li>
            <div className='flex pb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 mt-1.5 text-[#3A86FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                 <a href='services.jsx' className='text-slate-300 hover:text-white'>Privacy Policy</a>
                  </div> </li>
        </ul>
        </div>
      </div>
<div className='third '>
        <div className='flex justify-left relative pb-2'>
          <h2 className='text-2xl font-bold'>Services
         <span id="se" className='w-18 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute  left-1 bottom-0 rounded-full'></span>
          </h2></div>

          <div className='pt-4'>
        <ul>
          <li>
            <div className='flex pb-1'>              
            <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 mr-2 mt-1.5 text-red-700' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg><a href='project.jsx' className='text-slate-300 hover:text-white'>Mobile App Development</a></div></li>
          <li>
            <div className='flex pb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 mt-1.5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                 <a href='project.jsx' className='text-slate-300 hover:text-white'>Web Development</a>
                  </div> </li>
          <li>
            <div className='flex pb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 mt-1.5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                 <a href='project.jsx' className='text-slate-300 hover:text-white'>Custom Software Solutions</a>
                  </div> </li>
         <li>
            <div className='flex pb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 mt-1.5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                 <a href='project.jsx' className='text-slate-300 hover:text-white'>UI/UX Optimization</a>
                  </div> </li>
         <li>
            <div className='flex pb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 mt-1.5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                 <a href='project.jsx' className='text-slate-300 hover:text-white'>E-Commerce Solutions</a>
                  </div> </li>

            
        </ul>
        </div>
      </div>
        <div id='fourth'>
          <div className='flex justify-left relative pb-2'>
          <h2 className='text-2xl font-bold'>Contact Us <span id="se" className='w-18 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute left-1 bottom-0 rounded-full '></span></h2></div>
        <div id='symobol_main ' className=' flex  pt-2 '>
        <div id='left ' className='w-12 h-12 rounded-full  text-center   mr-4 shrink-0'>
            <span class="material-icons text-blue-500 pt-3">
        call
</span>
        </div>
        <div id='main_text' className=' flex flex-col pt-3'>
        
        <p className='text-slate-300'>+91 9785631195</p>
        </div>
        </div>

                <div id='symobol_main ' className=' flex  pt-2 '>
        <div id='left ' className='w-12 h-12 rounded-full mr-4 pl-2 shrink-0'>
            <span class="material-icons text-red-500 pt-3 ">
        mail
</span>
        </div>
        <div id='main_text' className=' flex flex-col pt-3'>
        <p className='text-slate-300 '>jitendrasingh97850@gmail.com</p>
        </div>
        </div>

                <div id='symobol_main ' className=' flex pb-4 pt-2 '>
        <div id='left ' className='  text-center pl-2  mr-4 shrink-0'>
            <span class="material-icons text-blue-500 pt-3 mr-4 ">
        location_on
</span>
        </div>
        <div id='main_text' className=' flex flex-col pt-3'>
        
        <p className='text-slate-300'>Jaipur, India</p>
        </div>
        </div>
        <h2 className='text-xl'> Subscribe To Newsletter</h2>
        <input type='textbox ' placeholder='Your Email' className='bg-slate-800 mt-2 p-3 rounded-xl w-full px-4 py-2'>
              </input>
        </div>

        
    </div>
  )
}

export default Footer
