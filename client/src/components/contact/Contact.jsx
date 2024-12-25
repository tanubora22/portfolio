import React, { useState } from 'react';
import './contact.css';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const Contact = () => {
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [msg, setMsg] = useState("");

    const validateForm = () => {
        return name && email && contact && msg;
    };

    const Sendmail = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setNotDone(true); // Show error message if form is incomplete
            return;
        }

        const Data = {
            to_name: name,
            from_email: email,
            message: msg,
            contact: contact,
        };

        const Service_id = "service_8gdszqy";
        const Template_id = "template_zig7mvj";
        const User_id = "Eamt-dP7EHHoaGbgJ";

        try {
            const response = await emailjs.send(Service_id, Template_id, Data, User_id);
              Swal.fire({
                title: "Message sent successfully",
                icon: "success",
                draggable: true
              });   

        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Message could not be sent.",
                icon: "error",
                draggable: true
            });
            console.error("Error sending email:", error);
        }
    };

    return (
        <div className="py-12 bg-transparent">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center md:text-left mt-6">
                        <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
                        <h2 className="text-4xl font-bold text-yellow-500 mt-4">Contact me</h2>
                    </div>
                    <div>
                        <form onSubmit={Sendmail} className="space-y-6 bg-transparent p-8 rounded-lg shadow-md">
                            <input
                                type="text"
                                name="name"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {notDone && !name && <span className="text-red-500 text-sm ">Name is required.</span>}

                            <input
                                type="email"
                                name="email"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {notDone && !email && <span className="text-red-500 text-sm">Email is required.</span>}

                            <input
                                type="text"
                                name="contact"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Mobile No."
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                            {notDone && !contact && <span className="text-red-500 text-sm">Mobile number is required.</span>}

                            <textarea
                                name="message"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Message"
                                rows="5"
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                            ></textarea>
                            {notDone && !msg && <span className="text-red-500 text-sm">Message is required.</span>}

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white font-bold py-3 rounded-md hover:bg-yellow-600 transition"
                                disabled={done}
                            >
                                Send
                            </button>

                            {done && (
                                <span className="block text-green-500 mt-4">
                                    Thanks for contacting me. I will reply. You can also contact me on LinkedIn.
                                </span>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
