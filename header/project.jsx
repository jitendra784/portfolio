import Project_card from "./project_card"

function Project(){
    return(
        <section id="project">
        <div className="py-20 bg-neutral-100 dark:bg-neutral-800">
            <div className="text-center ">
                <div className="flex justify-center relative ">
            <h2 className="text-4xl font-bold mb-3 ">Projects <span id="se" className='w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full'></span>
      </h2>
      </div>
            <p className="pt-2">Explore my latest work and see how I bring ideas to life with code and creativity.</p>
            {/* <div className="flex gap-3 justify-center mt-4 text-xs md:text-base">
            <button className="bg-blue-400 text-white rounded-full p-2">All Projects</button>
            <button className="bg-slate-500 text-white rounded-full p-2">Mobile Apps</button>
            <button className="bg-slate-500 text-white rounded-full p-2">Websites</button>
            <button className="bg-slate-500 text-white rounded-full p-2">Custom Software</button>

            </div> */}
            </div>

            <div className="mx-auto px-4 container grid grid-cols-1  gap-6 sm:grid-cols-1 lg:grid-cols-3 items-stretch">
            {/* <Project_card techLabel="Flutter"
        icon="smartphone"
        title="E-Commerce Mobile App"
        description="A feature-rich shopping application with seamless checkout process and real-time inventory tracking."
        text1="Flutter"
        text2="Firebase"
        text3="State Management"/> */}


        <Project_card techLabel="React"
        icon="desktop_windows"
        title="Human Resource Management System"
        description="A comprehensive employee management system with employee dashboard, task management, analytics and user authentication."
        text1="React"
        text2="Mongoose"
        text3="Express.js "
        live=""
        git="https://github.com/bhaveshtank1016/ITPL_Dashboard"
        />

        <Project_card techLabel="React "
        icon="attach_money"
        title="Tennis and Pickleball Court Website"
        description="A website which give us over view about all courts made in tennis and pickleball which include responsive design and good User Interface"
        text1="Javascript "
        text2="React"
        text3="Tailwindcss"
        live="https://storied-souffle-f85e1c.netlify.app/"
        git="https://github.com/jitendra784/Tennis-and-pickleball-courts"/>
        
        
        
        {/* <Project_card techLabel="Java"
        icon="settings"
        title="Inventory Management System"
        description="A custom software solution for tracking inventory, managing suppliers, and generating reports."
        text1="Java"
        text2="SQL"
        text3="Desktop App"/> */}

        <Project_card techLabel="React"
        icon="photo_camera"
        title=" Portfolio"
        description="A visually captivating portfolio website that highlights my work and innovation with cutting-edge technologies I'm actively exploring and developing."
        text1="React"
        text2="JavaScript"
        text3="Tailwindcss"
        git="https://github.com/jitendra784/portfolio"
        />

        {/* <Project_card techLabel="Kotlin"
        icon="chat_bubble"
        title="Chat Application"
        description="AA real-time messaging platform with group chats, file sharing, and end-to-end encryption."
        text1="Kotlin"
        text2="Firebase"
        text3="Real-time"/> */}
        

</div>
        </div>
        </section>
    )
}
export default Project;