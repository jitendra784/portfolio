import { FaGlobe, FaCode, FaUser, FaMoon } from 'react-icons/fa';
function Home(){
    return (
        <div className='container mx-auto '>
        <div className="w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 justify-items-center p-10">

         <div id = "left" className="w-full p-4 bg-neutral-900 mt-7">   
        
        <h1 className=" text-4xl text-white">Hi , I am <span className="bg-gradient-to-r from bg-blue-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">Jitendra Singh Bhandari</span></h1>
        <p className="text-xl pt-4">MERN Stack  Developer</p>
        <p className=" pt-4 text-slate-100 pb-2">Crafting high-performance, visually stunning applications with cutting-edge technologies and sleek design.</p>
        <a href="project" className=" inline-block mt-5 px-5 py-2 
        text-slate-900  rounded-2xl  bg-sky-500 
         hover:bg-[#3A86FF] duration-500  hover:text-white transform hover:-translate-y-1  ">View My Projects</a>
        <a href='#contact' className =" inline-block ml-3  px-5 py-2 bg-black border-2 border-amber-700 rounded-2xl hover:bg-rose-500 transform hover:-translate-y-1 transition-transform duration-300 hover:text-black ">Contact Me</a>
    </div>

    {/* <div id="right" className="w-100 h-70 mt-7  bg-gra bg-gradient-to-br from bg-slate-950  via-bg-red-500  to-pink-500  rounded-3xl"></div> */}

   {/*  Image starts from here  */}

<div className="mt-15 bg-gradient-to-r from-indigo-900 via-purple-900 to-black rounded-xl p-4 w-3/4 h-[220px] flex items-center justify-center relative">
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
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:flex gap-4 px-4 py-6 justify-items-center">
  <button className="w-30 h-10 bg-neutral-800 text-blue-500 rounded-xl shrink-0">JavaScript</button>
  <button className="w-30 h-10 bg-neutral-800 text-red-500 rounded-xl shrink-0">HTML</button>
  <button className="w-30 h-10 bg-neutral-800 text-blue-500 rounded-xl shrink-0">CSS</button>
  <button className="w-30 h-10 bg-neutral-800 text-red-500 rounded-xl shrink-0">React</button>
  <button className="w-30 h-10 bg-neutral-800 text-blue-500 rounded-xl shrink-0">Java</button>
  <button className="w-30 h-10 bg-neutral-800 text-red-500 rounded-xl shrink-0">MongoDB</button>
  <button className="w-30 h-10 bg-neutral-800 text-blue-500 rounded-xl shrink-0">Mongoose</button>
  <button className="w-30 h-10 bg-neutral-800 text-red-500 rounded-xl shrink-0">Express.js</button>
</div>

    </div>
    )
}
export default Home