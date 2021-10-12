import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from 'emailjs-com';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'portfolio_contact', e.target, 'user_n9Ca98N2r2z38WCsdmkc6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    // const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    // const { name, email, message } = formState;

    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
    //     if(e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         //isValid conditional statement
    //         if(!isValid){
    //             setErrorMessage('Your email is invalid');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if(!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }

    //     if(!errorMessage){
    //         setFormState({...formState, [e.target.name]: e.target.value})
    //     }
    // }
    // console.log('errorMessage', errorMessage);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }

    return (
        <section>
            <h1 className="text-5xl font-bold text-center p-4">Contact me</h1>
           <div className="flex justify-center h-screen mx-auto">
                <form id="contact-form" onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" 
                            
                            className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                            />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" 
                            
                            className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                            />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea rows="5" name="message" 
                                
                                className="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56"
                                />
                    </div>
                    {/* {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )} */}
                    <button className="w-full bg-gray-600 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded text-2xl" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;