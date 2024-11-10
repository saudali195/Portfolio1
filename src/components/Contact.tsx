import React from 'react'
import { IoMail } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-up">Feel Free to Contact</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
            You can reach me by phone, message, or through the form submission.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <IoMail  size={30}/> naMaloomAfraad@gmail.com
            </div>
            <div className='flex gap-3 items-center'  data-aos="zoom-in-up">
           <BsTelephone size={30} /> (021) 999-999-1
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'  data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text"
                 className='h-[40px] bg-transparent border border-accent' id="name" name="name" required />
            </div>
            <div className='flex flex-col gap-1'  data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text"
                 className='h-[40px] bg-transparent border border-accent' id="email" name="email" required />
            </div>
            <div className='flex flex-col gap-1'  data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea 
                 className='bg-transparent border border-accent' id="Message" rows={8}>
                 </textarea>
            </div>
            <button className='bg-accent p-2 px-6' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
