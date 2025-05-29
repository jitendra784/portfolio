
function Nav(){
    return(
        <header className='flex container mx-auto px-4'>
    
      <nav className='bg-neutral-900 bg-opacity-90  w-full flex pt-4 pb-3 '>
      <a href="#logo"className=' font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text  text-xl flex justify-between items-center pl-25  '>Jitendra Singh Bhandari</a>
    <ul className='flex px-50 space-x-6'>
    <li><a href="home"className='text-white hover:text-red-500 duration-500'>Home</a></li>
    <li><a href="about" className='text-white hover:text-red-500 duration-500 '>About_us</a></li>
    <li><a href="service" className='text-white hover:text-red-500 duration-500'>Service</a></li>
    <li><a href="project" className='text-white hover:text-red-500 duration-500'>Project</a></li>
    <li><a href="team" className='text-white hover:text-red-500 duration-500'>Team</a> </li>
    <li><a href="test" className='text-white hover:text-red-500 duration-500'>Testimonials</a></li>
    <li><a href="contact" className='text-white hover:text-red-500 duration-500'>Contact</a></li>
    </ul>
    </nav>
    
    </header>
    )
    
    
}
export default Nav