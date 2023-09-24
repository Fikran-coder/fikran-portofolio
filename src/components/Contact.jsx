import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="md:h-screen pt-40 py-20 md:pt-48 bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg h-full mx-auto">
        <div className="mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Contact
          </p>
          <p className="py-6">
            Feel free to get in touch with me using the form below:
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/e440a7cf-0a77-4389-a4fc-99cb3c469814"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 mb-4 bg-transparent border-b-2 border-gray-500 text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 mb-4 bg-transparent border-b-2 border-gray-500 text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="p-3 mb-4 bg-transparent border-b-2 border-gray-500 text-white focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-b from-orange-200 to-orange-600 hover:from-orange-300 hover:to-orange-700 transition-all duration-300 px-6 py-3 mx-auto rounded-md text-white shadow-md hover:shadow-lg focus:outline-none"
            >
              Send Message To Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
