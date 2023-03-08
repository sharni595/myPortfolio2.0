// import React, { useRef } from 'react';
// //import { validateEmail } from '../../utils/helpers';
// import emailjs from 'emailjs-com';
// //temporarily removed useState for deployment purposes


//      emailjs.sendForm('gmail', 'portfolio_contact', e.target, 'user_n9Ca98N2r2z38WCsdmkc6')

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('this works???')

    emailjs.sendForm('service_6tlofpp', 'portfolio_contact', form.current, 'user_n9Ca98N2r2z38WCsdmkc6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <view>
      <h1 className="text-5xl font-bold text-center p-4">Say hi!</h1>
      <div className="flex justify-center h-screen mx-auto">
        <form ref={form} onSubmit={sendEmail}>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label>Your name</label>
              <input type="text" name="name" className='block border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-light-blue-300' />
            </div>
            <div className='order-last'>
              <label>Your email</label>
              <input type="email" name="email" className='block border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-light-blue-300' />
            </div>
            <div className='row-span-2'>
            <label>Message</label>
              <textarea name="message" className='resize-none border rounded-md border-light-blue-400 w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-36' />
            </div>
          </div>
          <button className="w-full bg-gray-600 text-white font-bold py-3 px-4 rounded text-2xl my-4" type="submit">Send</button>
        </form>
      </div>
    </view>
  );
};
export default Contact;