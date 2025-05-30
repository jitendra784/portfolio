import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Contact(){
    return(
        <div className="mx-auto container px-4 pt-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Get In Touch</h1>
                <p>Ready to Discuss your project? Reach out to us for a consultation or just to say hello.</p>
            </div>

            <div id="main" className="md:grid-cols-1 lg:grid-cols-2 grid grid-cols-1  p-7 mb-7">
                <div id="left" className="bg-neutral-700 p-6 rounded-2xl" >
                <h2 className="text-3xl pb-5 ">Contact Information</h2>
                <p> Feel free to reach out to us through any of these channels. We're eager to hear about your project and how we can help.</p>

                <div className="grid grid-cols-1">
                <div id='symobol_main ' className=' flex pb-4 pt-4 '>
        <div id='left ' className='w-12 h-12 rounded-full  text-center border-1 hover:bg-blue-300 duration-300 
        bg-blue-500/30 hover:border-blue-600 hover:border-2 mr-4 shrink-0'>
            <span class="material-icons text-blue-800 pt-3">
        call
</span>
        </div>
        <div id='main_text' className=' flex flex-col'>
        <h4 className='text-xl font-bold'>Phone</h4>
        <p>+91 93342 74325</p>
        </div>
        </div>
                <div id='symobol_main ' className=' flex pb-4 pt-4 '>
        <div id='left ' className='w-12 h-12 rounded-full  text-center border-1 hover:bg-red-300 duration-300 
        bg-red-500/30 hover:border-red-600 hover:border-2 mr-4 shrink-0'>
            <span class="material-icons text-red-800 pt-3">
        mail
</span>
        </div>
        <div id='main_text' className=' flex flex-col'>
        <h4 className='text-xl font-bold'>Email</h4>
        <p>rk9600460@gmail.com</p>
        </div>
        </div>

                <div id='symobol_main ' className=' flex pb-4 pt-4 '>
        <div id='left ' className='w-12 h-12 rounded-full  text-center border-1 hover:bg-blue-300 duration-300 
        bg-blue-500/30 hover:border-blue-600 hover:border-2 mr-4 shrink-0'>
            <span class="material-icons text-blue-800 pt-3">
        location_on
</span>
        </div>
        <div id='main_text' className=' flex flex-col'>
        <h4 className='text-xl font-bold'>Location</h4>
        <p>Delhi, India</p>
        </div>
        </div>

                <h2 className="text-xl pt-2">Comment With Us</h2>
                 <div className="flex gap-4 items-center pt-3">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#2e2f33] flex items-center justify-center hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </a>
      </div>
                </div>

                </div>
                <div id="right">
<div className=" bg-[#1f1f1f] p-8 rounded-xl shadow-lg ml-5">
      <h2 className="text-white text-2xl font-bold mb-6">Send Us a Message</h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-md bg-[#2e2f33] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Your Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 rounded-md bg-[#2e2f33] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="+1 (123) 456-7890"
            className="w-full px-4 py-2 rounded-md bg-[#2e2f33] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Subject
          </label>
          <input
            type="text"
            placeholder="Project Inquiry"
            className="w-full px-4 py-2 rounded-md bg-[#2e2f33] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Your Message
          </label>
          <textarea
            rows="4"
            placeholder="Please describe your project or inquiry..."
            className="w-full px-4 py-2 rounded-md bg-[#2e2f33] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="flex items-start">
          <input type="checkbox" className="mr-2 mt-1" />
          <p className="text-sm text-white">
            I consent to having this website store my submitted information so
            they can respond to my inquiry.
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>

                </div>

            </div>
        </div>
    )
}
export default Contact