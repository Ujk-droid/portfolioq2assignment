'use client';

import React, { useState } from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";  // Assuming you have a sparkles component
import Swal from 'sweetalert2';
import { Meteors } from "@/app/components/ui/meteors";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);

    form.append("access_key", "9bda5b9c-29c1-402e-b099-2de22660da48");

    const object = Object.fromEntries(form);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Good job!",
        text: "Form submitted successfully!",
        icon: "success"
      });
    }
  }

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-black">
      {/* Stars Effect as Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore />{/* Rendering the component correctly */}
      </div>

      {/* Form Content */}
      <div className="w-full max-w-md lg:max-w-lg relative z-10 mx-2"> {/* Reduced max-width */} 
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-10 overflow-hidden rounded-2xl"> {/* Reduced padding */}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto">
              <div className="flex flex-col text-center w-full mb-8"> {/* Reduced margin-bottom */}
                <h1 className="sm:text-2xl text-xl font-medium title-font mb-9 text-white">Contact Us</h1> {/* Reduced font size */}
              </div>
              <form onSubmit={handleSubmit} className="w-full space-y-4"> {/* Reduced space between fields */}
                <div className="flex flex-wrap -mx-2">
                  <div className="p-2 w-full sm:w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1.5 px-3 transition-colors duration-200 ease-in-out" /* Reduced padding */
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/2">
                    <div className="relative">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1.5 px-3 transition-colors duration-200 ease-in-out" /* Reduced padding */
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-28 text-base outline-none text-gray-700 py-1.5 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" /* Reduced height */
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button type="submit" className="flex mx-auto text-black bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg"> {/* Reduced padding */}
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
          <Meteors number={20} />

        </div>
      </div>
    </div>
  );
};

export default Contact;