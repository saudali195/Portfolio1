import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/img1.jpeg)] bg-left lg:bg-[10%] bg-cover '
    style={{backgroundSize:"35%" , backgroundPosition : "left 100px top 100px" }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
  <div className='hidden lg:block flex justify-end items-center h-full px-20 	text-align: left'>
    <div className='text-[80px] sm:text-[100px] font-bold leading-tight'>
            <div className='time'>
              <p data-aos="zoom-in-up">I am</p> 
              <p data-aos="zoom-in-up">Saud</p>
              <p data-aos="zoom-in-up">Muhammad Ali</p>
            </div>
          </div>
        </div>
      </div>
</div>
  )
}

export default Hero
