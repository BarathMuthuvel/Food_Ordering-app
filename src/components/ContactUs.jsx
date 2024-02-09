import React from 'react';
function ContactUs() {
  return (
    <div>
        <h1 className='font-sans text-3xl p-4 m-4'>Contact Us Page</h1>
        <input type='text' className='border border-black p-2 m-2' placeholder='Name' />
        <input type='text' className='border border-black p-2 m-2' placeholder='message...' />
        <button type='button' className='border border-black p-2 m-2 rounded-lg'>Submit</button>
    </div>
  )
}

export default ContactUs