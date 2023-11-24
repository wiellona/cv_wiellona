import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="flex flex-col mb-10 mx-4">
      <h1 className="font-semibold text-center pb-5 text-2xl ">Leave whatever you like to say</h1>
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/33b69360-2c28-4a72-b7e9-8b629aad10f8"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea 
            name="message" 
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button type="button" className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-blue-500 drop-shadow-md hover:stroke-white">
            Send
          </button>
        </form>
      </div>
    </div>
    </section>
    
  );
}

export default Contact;