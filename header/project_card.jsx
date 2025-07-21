import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Project_card({techLabel,icon,title,description,text1,text2,text3,live,git}) {
  return (
    <div id='card_main group '>
      {/* <div className='mt-10 bg-neutral-800 relative w-full rounded-2xl shadow-lg h-full  overflow-hidden transform hover:-translate-y-2 duration-300'>
      <div className='bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-12 h-48 pl-6 pr-6 relative'><div className='text-5xl text-white flex justify-center items-center h-20'> <span class="material-icons">
        {icon}
      </span>
      </div>
      </div>
<div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
          {techLabel}
        </div>
        
      <div className='p-6'>
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      <p className='text-sm text-gray-300 mb-4'>{description}</p>
      <div className='flex  gap-2 mb-4'>
        <div className='p-2 bg-blue-500/30 text-blue-500 rounded-3xl text-xs text-center shrink-0'>{text1} </div>
        <div className='p-2 bg-red-500/30 text-red-500 rounded-full text-xs text-center'>{text2}</div>
        <div className='p-2 bg-slate-500/30 text-white rounded-full text-xs text-center' >{text3}</div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex'>

        <a href='#live' className='text-blue-500'>
          
         Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" className='' /></a>
</div>

      <div className=''>
        <a href='#github' className='text-red-500'>Github 
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>


      </div>

      </div>
      </div> */}

      <div className=" relative bg-neutral-800 shadow-lg overflow-hidden transform hover:-translate-y-2 duration-300 flex flex-col h-full mt-10 rounded-2xl ">
  
  <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-48 flex justify-center items-center">
    <span className="material-icons text-white text-5xl ">{icon} </span>
  </div>

  <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
    {techLabel}
  </div>

  <div className="p-6 flex flex-col flex-grow justify-between">
    <div className="flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      
      <p className="text-sm text-gray-300 mb-4 min-h">
        {description}
      </p>

      <div className="flex gap-2 mb-4 mt-auto">
        <div className="p-2 bg-blue-500/30 text-blue-500 rounded-3xl text-xs text-center shrink-0">{text1}</div>
        <div className="p-2 bg-red-500/30 text-red-500 rounded-full text-xs text-center">{text2}</div>
        <div className="p-2 bg-slate-500/30 text-white rounded-full text-xs text-center">{text3}</div>
      </div>
    </div>

    <div className="flex justify-between items-center">
      <a href={live} className="text-blue-500">
        Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
      </a>
      <a href={git} className="text-red-500">
        GitHub <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Project_card
