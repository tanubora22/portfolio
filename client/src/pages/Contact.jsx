import React from 'react';
import Particle from '../components/Particle';
import ContactForm from '../components/contact/Contact';
import Findme from '../components/Skillset/Findme';

const Contact = () => {
  return (
    <section className="px-6 py-16 sm:px-12 lg:px-24 bg-gradient-to-r from-gray-500 to-gray-800">
      <div className="max-w-screen-lg mx-auto">
        <ContactForm />
       <Findme/>
      </div>
    </section>
  );
}

export default Contact;
