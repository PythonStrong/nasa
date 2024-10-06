import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='text-gray-300  w-full h-screen relative contact' name='contact'>
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col items-center justify-center w-full h-full'>
        <h1 className='text-4xl font-bold  border-b-4 border-pink-600 text-center mb-11'>Contact</h1>
        <div className="form-container ">
          <form method='POST' class="form">
            <div class="form-group">
              <label for="email">Name</label>
              <input type="text" name="name" id="name" required="name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" required="email" />
            </div>
            <div class="form-group">
              <label for="textarea">How Can I Help You?</label>
              <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
            </div>
            <div className='flex items-center gap-4'>
              <button type="submit" class=" form-submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
