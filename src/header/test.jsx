import Test_card from "./test_card"

function Test(){
    return(
        <div className="bg-neutral-800 w-full">
        <div className="bg-neutral-800 w-full container overflow-hidden py-20 mx-auto "> 
            <div className='grid pt-10'>
    <h1 className='text-4xl text-center font-bold relative block '>Testimonials</h1>
    <div className=' w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute left-1/2  transform translate-x-1/2    '></div>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
        <Test_card initials= "AS"
    name= "Amanda Smith"
    title = "Marketing Director, StyleHouse"
    text=      "Our website redesign project was handled with utmost professionalism. The team's expertise in Laravel and frontend technologies resulted in a fast, responsive website that perfectly represents our brand. I highly recommend their services. "
    rating = "5" />

    <Test_card initials= "MJ"
    name= "Michael Johnson"
    title = "Operations Manager, LogisTech"
    text=      "We needed a custom inventory management system, and Rahul's team delivered a solution that perfectly fits our business needs. The software is intuitive, efficient, and has significantly improved our operational workflow. Great job!"
    rating = "5"  />
    </div>
    <div className="text-center">  <h3>Trusted by Companies Worldwide</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3 gap-6 pt-5">
                <button className="bg-blue-500/30 p-4 rounded-2xl"> Tech Corp </button>
                <button className="bg-red-500/30 p-4 rounded-2xl">Tnnovex</button>
                <button className="bg-blue-500/30 p-4 rounded-2xl">DigiTrend</button>
                <button className="bg-red-500/30 p-4 rounded-2xl">NextWave</button>
                <button className="bg-blue-500/30 p-4 rounded-2xl">FutureLab</button>
            </div>
    </div>

        <div>
            <h1 className="text-4xl font-bold p-5  text-center">Ready To Start Your Project?</h1>
            <p className="text-center">Join our satisfied clients and let us bring your digital ideas to life with our expertise and creativity.</p>
            <div className="flex justify-center mt-3 gap-4">
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-2xl ">Contact Us Today</button>
            <button className="bg-slate-500 rounded-2xl p-4">Explore Project</button>
            </div>
        </div>

        </div>
        </div>
    )
}
export default Test