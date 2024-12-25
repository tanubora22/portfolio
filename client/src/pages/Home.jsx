import React from 'react';
import homeLogo from '/about.png';
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import Study from '../components/Home/Study';
import Resume from '../components/Resume';

const Home = () => {
  return (
    <section>
      <div className="relative w-full h-screen bg-gradient-to-r from-gray-500 to-gray-800" id="home">

        <Particle />

        <div className="absolute inset-0 flex justify-center items-center text-white">
          <div className="w-full max-w-screen-xl px-6 py-8 md:px-12 text-center space-y-8 md:space-y-0 md:flex md:flex-row md:items-center">
            <div className="md:w-2/3 text-left md:mr-8 space-y-4">
              <h1 className="text-3xl font-bold md:text-5xl">
                Hi There!{" "}
                <span role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="text-4xl font-bold text-white leading-tight">
                I'M{" "}
                <span className="text-indigo-200">
                  Tanu Singh Bora
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mt-4 max-w-lg">
                A passionate Frontend Developer with a knack for creating beautiful, responsive, and user-friendly websites.
              </p>
              <div className="mt-6">
                <Type />
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <img
                src={homeLogo}
                alt="Tanu Singh Bora"
                className="w-full max-w-lg rounded-full shadow-xl transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      <About />
      <Study />
      <Resume/>
    </section>
  );
};

export default Home;
