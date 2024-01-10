import React from "react";
import Header from "@/components/Header";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-700 mb-4">
              Have questions or need assistance? Feel free to contact us through
              the information below.
            </p>
            <p className="text-gray-700 mb-2">
              Email: info@mauimicrogreens.net
            </p>
            <p className="text-gray-700 mb-2">Phone: +1 123-456-7890</p>
            <p className="text-gray-700 mb-2">
              Address: 1234 Kahului Street, Honolulu, HI
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>
            <form className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border-gray-300 border-solid border py-2 px-3 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border-gray-300 border-solid border py-2 px-3 rounded-md"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="border-gray-300 border-solid border py-2 px-3 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
