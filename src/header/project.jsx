import Project_card from "./project_card"

function Project(){
    return(
        <div className="py-20 bg-neutral-100 dark:bg-neutral-800">
            <div className="text-center ">
                <div className="flex justify-center relative ">
            <h2 className="text-4xl font-bold mb-3 ">Projects <span id="se" className='w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full'></span>
      </h2>
      </div>
            <p className="pt-2">Explore my latest work and see how I bring ideas to life with code and creativity.</p>
            <div className="flex gap-3 justify-center mt-4 text-xs md:text-base">
            <button className="bg-blue-400 text-white rounded-full p-2">All Projects</button>
            <button className="bg-slate-500 text-white rounded-full p-2">Mobile Apps</button>
            <button className="bg-slate-500 text-white rounded-full p-2">Websites</button>
            <button className="bg-slate-500 text-white rounded-full p-2">Custom Software</button>

            </div>
            </div>

            <div className="mx-auto px-4 container grid grid-cols-1  gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            <Project_card techLabel="Flutter"
        icon="smartphone"
        title="E-Commerce Mobile App"
        description="A feature-rich shopping application with seamless checkout process and real-time inventory tracking."
        text1="Flutter"
        text2="Firebase"
        text3="State Management"/>


        <Project_card techLabel="Laravel"
        icon="desktop_windows"
        title="Corporate Portal"
        description="A comprehensive business management system with employee dashboard, task management, and analytics."
        text1="Laravel"
        text2="MySQL"
        text3="Vue.js "/>

        <Project_card techLabel="React Native"
        icon="attach_money"
        title="Expense Tracker"
        description="A personal finance app with budget planning, expense tracking, and visual reports to help users manage finances"
        text1="React Native"
        text2="Redux"
        text3="Charts"/>
        
        
        
        <Project_card techLabel="Java"
        icon="settings"
        title="Inventory Management System"
        description="A custom software solution for tracking inventory, managing suppliers, and generating reports."
        text1="Java"
        text2="SQL"
        text3="Desktop App"/>

        <Project_card techLabel="PHP"
        icon="photo_camera"
        title="Photography Portfolio"
        description="A visually stunning website showcasing a photographer's work with image galleries and booking system."
        text1="PHP"
        text2="JavaScript"
        text3="Responsive"/>

        <Project_card techLabel="Kotlin"
        icon="chat_bubble"
        title="Chat Application"
        description="AA real-time messaging platform with group chats, file sharing, and end-to-end encryption."
        text1="Kotlin"
        text2="Firebase"
        text3="Real-time"/>
        

</div>
        </div>
    )
}
export default Project