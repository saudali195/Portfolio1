import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>

        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Tools and Frameworks in my Workflow</h2>
          <p className='text-gray-500 pt-2'>
          I have a strong proficiency in HTML and CSS, enabling me to create responsive, user-friendly web designs with a focus on clean, semantic code. My expertise in JavaScript and TypeScript allows me to build dynamic, interactive web applications while ensuring maintainability and scalability. I am skilled in using modern front-end frameworks and libraries, such as React or Angular, to enhance functionality and performance. With a keen eye for detail and a passion for web development, I strive to create seamless and engaging user experiences.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.JS</h2>
              <h2 data-aos="zoom-in-up">Next.JS</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.JS</h2>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Skills
