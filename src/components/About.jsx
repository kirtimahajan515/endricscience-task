import React from 'react';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div 
       className="relative sm:right-30 md:left-0 max-w-4xl flex flex-col gap-6 text-center md:text-left px-4 sm:px-8">

        {/* ------ Heading ------- */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          About Endricscience
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
          We offer access to top-tier, cross-disciplinary journals across<br />
          the realms of Medical Science, Artificial Intelligence, and
          Multidisciplinary. <br />As a distinguished global publisher
          of open-access journals.
        </p>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button className="w-32 h-10 bg-gray-200 text-black rounded-full shadow-lg hover:bg-blue-400 transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
