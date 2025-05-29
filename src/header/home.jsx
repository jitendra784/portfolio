import { FaGlobe, FaCode, FaUser, FaMoon } from 'react-icons/fa';
function Home(){
    return (
        <div className='container mx-auto '>
        <div className="w-full mx-auto px-4 flex justify-evenly p-10">

         <div id = "left" className="w-1/2 p-4 bg-neutral-900 mt-7">   
        
        <h1 className=" text-4xl text-white">Hi , I am <span className="bg-gradient-to-r from bg-blue-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">Jitendra Singh Bhandari</span></h1>
        <p className="text-xl pt-4">Full-Stack Mobile & Web Developer</p>
        <p className=" pt-4 text-slate-100">Crafting high-performance, visually stunning applications with cutting-edge technologies and sleek UI/UX design.</p>
        <button className=" mt-5 w-40 h-10 
        text-slate-900  rounded-2xl  bg-sky-500 
         hover:bg-[#3A86FF] duration-500  hover:text-white transform hover:-translate-y-1  ">View My Projects</button>
        <button className="ml-3 w-30 h-10 bg-black border-2 border-amber-700 rounded-2xl hover:bg-rose-500 transform hover:-translate-y-1 hover:text-black duration-300">Contact Me</button>
    </div>

    {/* <div id="right" className="w-100 h-70 mt-7  bg-gra bg-gradient-to-br from bg-slate-950  via-bg-red-500  to-pink-500  rounded-3xl"></div> */}

   {/*  Image starts from here  */}

<div className="mt-15 bg-gradient-to-r from-indigo-900 via-purple-900 to-black rounded-xl p-4 w-[470px] h-[220px] flex items-center justify-center relative">
  <div className="bg-gradient-to-r from-blue-500 to-pink-500 w-40 h-40 rounded-full flex items-center justify-center">
    <span className="text-white text-5xl">{`</>`}</span>
  </div>

  <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
    <FaGlobe className="text-blue-600" />
  </div>

  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
    <FaCode className="text-blue-600" />
  </div>

  <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
    <FaUser className="text-pink-600" />
  </div>

  <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
    <FaMoon className="text-pink-600" />
  </div>
</div>

    </div>
    <div className='flex space-x-8 pl-20'>
    <button className='w-30 h-10 bg-neutral-800 text-blue-500 rounded-xl'> JavaScript</button>
    <button className='w-30 h-10 bg-neutral-800 text-red-500 rounded-xl' > HTML/CSS</button>
    <button className='w-30 h-10 bg-neutral-800 text-blue-500 rounded-xl'>Flutter</button>
    <button className='w-30 h-10 bg-neutral-800 text-red-500 rounded-xl'>React Native</button>
    <button className='w-30 h-10 bg-neutral-800 text-blue-500 rounded-xl'>Java</button>
    <button className='w-30 h-10 bg-neutral-800 text-red-500 rounded-xl'>Kotlin</button>
    <button className='w-30 h-10 bg-neutral-800 text-blue-500 rounded-xl'>Laravel</button>
    <button className='w-30 h-10 bg-neutral-800 text-red-500 rounded-xl'>PHP</button>
    </div>
    </div>
    )
}
export default Home