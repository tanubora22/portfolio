import React from 'react';

const Study = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-500 to-gray-800 text-white" id="study">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500 hover:text-yellow-400 transition duration-300">My Education</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            Here's a little about my educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* School Section */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-3xl font-semibold text-yellow-500">School</h3>
            <p className="text-lg text-gray-300 mt-4">
              I completed my schooling from <span className="font-bold">S.M.V.S.V.M. INTER COLLEGE BAGERPUR MORADABAD</span>, where I developed a strong foundation in science and mathematics.
            </p>
            <ul className="mt-4 text-gray-400">
              <li className='text-yellow-500'><strong className='text-gray-400'>Grade:</strong> 12th</li>
              <li className='text-yellow-500'><strong className='text-gray-400'>Board:</strong> UP Board</li>
              <li className='text-yellow-500'><strong className='text-gray-400'>Year:</strong> 2021</li>
            </ul>
          </div>

          {/* College Section */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-3xl font-semibold text-yellow-500">College</h3>
            <p className="text-lg text-gray-300 mt-4">
              I pursued my higher education at <span className="font-bold">Mahatma Jyotiba Phule Rohilkhand University</span> where I honed my skills in computer science.
            </p>
            <ul className="mt-4 text-gray-400">
              <li className='text-yellow-500'><strong className='text-gray-400'>Degree:</strong  > Bachelor of Computer Applications (BCA)</li>
              <li className='text-yellow-500' ><strong className='text-gray-400'>Specialization:</strong> Computer Science</li>
              <li className='text-yellow-500'><strong className='text-gray-400'>Year:</strong> 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
