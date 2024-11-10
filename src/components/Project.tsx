import React from 'react'
import Heading from './Heading';
import Card from './Card';




const data = [
    {
        id : 0,
        Title : "CSS-Variable Clock",
        desc :  "An HTML-CSS Based Variable clock with adjustable work and break intervals, featuring a minimalist, retro-style timer display. Perfect for focused, timed productivity sessions.",
        img: "/img-01.webp",
        tags : ["HTML" , "CSS" , "NODE" , "Typescript" , "Variable Clock"]
    },
    {
        id: 1,
        title : "Pomodoro Clock",
        desc : "A digital Pomodoro clock with adjustable session and break lengths, featuring a retro flip-clock timer. Includes start, stop, and clear controls in a clean, minimalist design to enhance productivity.",
        img: "/img-02.webp",
        tags : ["Productivity Tool" , "HTML" , "CSS" , "NODE" , "Typescript"] 
    },
    {
        id: 2,
        title : "Draft CountDown Timer",
        desc: "AA clean, Draft minimalist countdown timer that displays hours, minutes, and seconds in a flip-clock style. The red and black color scheme draws attention to the countdown, making it ideal for tracking time until an event or deadline.",
        img : "/img-03.webp",
        tags : ["HTML" , "CSS" , "NODE" , "Typescript" ,, "UX / UI Design" ,]
    },
    
    {
        id: 3,
        title : "Pure CSS SVG Countdown (Ready)",
        desc : "A pure CSS countdown timer using SVG, where a circular progress bar is animated with stroke properties. This example demonstrates a simple 60-second countdown.",
        img : "/img-04.webp",
        tags : ["HTML" , "CSS" , "NODE" , "Typescript" , "Animation"]

    },

    {
        id : 4,
        title : "Dyname Interactive Resume Builder",
        desc : "A user-friendly resume builder created by Saud Muhammad Ali, allowing individuals to input personal details, education, and upload a profile picture to generate a professional resume. Simple and efficient for quick resume creation.",
        img : "/img-05.PNG",
        tags : ["HTML" , "CSS" , "Typescript" , "Resume Builder"]
    }

]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'  data-aos="zoom-in-up">
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags as string[]}
            />))}
        </div>
      
    </div>
  )
}

export default Projects
