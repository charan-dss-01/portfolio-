import React, { useState } from 'react';

export default function Contact() {
    const [success, setSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "280fbff9-c3d7-43b6-8c4d-67774b0bc6f5");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          setSuccess(true); // Show success message
          console.log("Success", res);
          // Optionally, you can reset the form fields here
          event.target.reset();
          // Hide success message after 5 seconds
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
      };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center py-10 px-4 md:px-10">
            <div className="w-full max-w-md md:mr-10 mb-10 md:mb-0 border-black border-3 rounded-md shadow-md p-4">
                <h1 className="text-4xl font-extrabold text-gray-600 mb-6 text-center">Get in touch</h1>
                <div className="space-y-4">
                    <div className="flex items-center mb-4">
                        <i className="fa-solid fa-location-dot text-orange-500 text-2xl mr-4"></i>
                        <span className="text-gray-700 text-xl">Hyderabad</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <i className="fa-solid fa-envelope text-orange-500 text-2xl mr-4"></i>
                        <span className="text-gray-700 text-xl">cdonthu816@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fa-solid fa-phone text-orange-500 text-2xl mr-4"></i>
                        <span className="text-gray-700 text-xl">9849490777</span>
                    </div>
                    <div className="mt-4 mb-4 flex  flex-col gap-2">
              <p className="text-grey">follow me on:</p>
              <div className="flex gap-6">
              <a href="https://www.instagram.com/dss.charan_143/?utm_source=ig_web_button_share_sheet"><i class="fa-brands fa-instagram text-3xl text-orange-500  cursor-pointer"></i></a>
            <a href="https://www.linkedin.com/in/charandonthu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin text-3xl text-orange-500  cursor-pointer"></i></a>
            <a><i class="fa-brands fa-github text-3xl text-orange-500 cursor-pointer"></i></a>
              </div>
          </div>
                </div>
            </div>
            <div className="w-full max-w-md border-black border-3 border-solid rounded-md shadow-md p-4">
                <form className="flex flex-col space-y-4 text-black" onSubmit={onSubmit}>
                    <input
                        type="text"
                        required
                        placeholder="Your Name"
                        name="name"
                        className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="email"
                        required
                        placeholder="Your Email"
                        name="email"
                        className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="text"
                        required
                        name="subject"
                        placeholder="Subject"
                        className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        name="message"
                        className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-orange-500 text-white font-bold py-3 rounded-md shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            {/* Success Message Card */}
            {success && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img className="h-16 w-16 mx-auto mb-4" src="/assets/success.png" alt="Success" />
                        <p className="text-xl text-gray-800 mb-4">Message sent successfully!</p>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none"
                            onClick={() => setSuccess(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
