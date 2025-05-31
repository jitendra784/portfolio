import PersonIcon from '@mui/icons-material/Person';
function About_us(){
    return(
        <div className='bg-neutral-800'>
        <div className=" container w-full mx-auto px-4 pt-9 mt-24 bg-neutral-800 mb-30">
            <div className="text">
            <div className='pt-10 flex justify-center'>
  <h1 className='text-4xl text-center font-bold relative inline-block pb-3'>
    About Us
  
  <span id="se" className='w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full'></span>
  </h1>
</div>
            
        <p className="text-center">Get to know me better and see how I can help bring your digital ideas to life.</p>
        </div>
        <div id='main' className=' lg:flex  gap-20 md:grid'>
        <div id="left" className="w-full lg:ml-20 lg:w-1/4 mt-10 h-50 bg-slate-900 rounded-2xl">
        <div className="text-center">
  <span className="material-icons  pt-7 ">person</span></div>


        </div>
        <div id='right' className='w-full  mt-6'>
        <h2 className='text-3xl pb-4 font-bold'>Full-Stack Mobile & Web Developer</h2>
        <p>Hi, I'm Rahul Singh, a passionate Full-Stack Developer with over a year of experience creating high-performance applications and intuitive user interfaces. I specialize in both mobile and web development, with expertise across multiple technologies and platforms.</p>
        <p className='pt-3 pb-5'>My journey in software development has equipped me with the skills to turn complex problems into elegant solutions. I'm committed to writing clean, maintainable code and creating applications that not only look great but perform exceptionally well.</p>
        <h2 className='text-2xl font-bold pb-4'> My Tech Stack</h2>
        <div className='grid grid-cols-1 gap-4 pb-16 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
        <div className=' text-center flex rounded-lg p-3  bg-neutral-600  duration-300 transform hover:scale-105'><span className='w-8 h-8 bg-blue-500 rounded-full pt-1 mr-3 text-center shrink-0'>F</span>Flutter</div>
        <div className=' text-center flex rounded-lg p-3 bg-neutral-600 transform hover:scale-105 duration-300 '><span className='w-8 h-8 bg-red-500 rounded-full pt-1 mr-3 text-center shrink-0'>R</span>React Native</div>
        <div className=' text-center flex rounded-lg p-3 bg-neutral-600 transform hover:scale-105 duration-300 '><span className='w-8 h-8 bg-blue-500 rounded-full pt-1 mr-3 text-center shrink-0'>J</span>Java</div>
        <div className=' text-center flex rounded-lg p-3 bg-neutral-600 transform hover:scale-105 duration-300 '><span className='w-8 h-8 bg-red-500 rounded-full pt-1 mr-3 text-center shrink-0'>K</span>Kotlin</div>
        <div className=' text-center flex rounded-lg p-3 bg-neutral-600 transform hover:scale-105 duration-300 '><span className='w-8 h-8 bg-blue-500 rounded-full pt-1 mr-3 text-center shrink-0'>L</span>Laravel</div>
        <div className=' text-center flex rounded-lg p-3 bg-neutral-600 transform hover:scale-105 duration-300 '><span className='w-8 h-8 bg-red-500 rounded-full pt-1 mr-3 text-center shrink-0'>P</span>PHP</div>
        </div>

        <div id='main' className='grid grid-cols-2 gap-6 sm:grid-cols-1 lg:grid-cols-2'>

        <div id='symobol_mai ' className=' flex '>
        <div id='left ' className='w-12 h-12 rounded-full  text-center border-1 hover:bg-blue-300 duration-100 hover:border-blue-600 hover:border-2 mr-4 shrink-0'>
            <span class="material-icons text-blue-800 pt-3">
        business_center
</span>
        </div>
        <div id='main_text' className=' flex flex-col'>
        <h4 className='text-xl font-bold'>Experience</h4>
        <p>1+ years in Full-Stack Development</p>
        </div>



        
        </div>

<div id='symobol_main ' className=' flex shrink-0'>
        <div id='left ' className='w-12 h-12 rounded-full  text-center border-1 hover:bg-red-200 duration-100 mr-4 hover:border-red-600 hover:border-2 shrink-0'>
            <span class="material-icons text-[#FF006E] pt-3  ">
        bolt
</span>
        </div>
        <div id='main_text' className=' flex flex-col'>
        <h4 className='text-xl font-bold'>Fast Delivery</h4>
        <p>Quick turnaround time on projects</p>
        </div>
        </div>

        <div id='symobol_main ' className=' flex pb-4 '>
        <div id='left ' className='w-12 h-12 rounded-full  text-center border-1 hover:bg-blue-300 duration-300 hover:border-blue-600 hover:border-2 mr-4 shrink-0'>
            <span class="material-icons text-blue-800 pt-3">
        lightbulb
</span>
        </div>
        <div id='main_text' className=' flex flex-col'>
        <h4 className='text-xl font-bold'>Creative Solutions</h4>
        <p>Innovative approaches to problems</p>
        </div>
        </div>

<div id='symobol_main ' className=' flex '>
        <div id='left ' className='w-12 h-12 rounded-full  text-center border-1 hover:bg-red-200 hover:border-red-600 hover:border-2  duration-300 mr-4 shrink-0 '>
            <span class="material-icons text-[#FF006E] pt-3">
        schedule
</span>
        </div>
        <div id='main_text' className=' flex flex-col'>
        <h4 className='text-xl font-bold'>Timely Support</h4>
        <p>Responsive and reliable assistance</p>
        </div>


        
        </div>

</div>

        </div>
        </div>
        </div>

        </div>
    )
}

export default About_us