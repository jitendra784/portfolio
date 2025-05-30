import React from 'react'

function Test_card({ initials, name, title, text, rating }){
  return (
    <div className='py-20 bg-neutral-800 '> 
   

<div className='text-center group '>
<div className="bg-[#2e2f33] p-8 rounded-xl shadow-md text-left flex flex-col group-center items-start  gap-6 m-7  shrink-0">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
          {initials}
        </div>
        <div className="flex items-center text-yellow-400 text-lg">
          {"★".repeat(rating)}
        </div>
      </div>
      <p className="text-lg mb-6">"{text}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </div>
    </div>

    

    </div>
  )
}

export default Test_card
