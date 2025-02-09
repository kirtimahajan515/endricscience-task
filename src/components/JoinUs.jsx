import React from "react";
import punch from "../assets/punch.png";
import feather from "../assets/feather.png";

const JoinUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#0B2447] text-white px-6 md:px-20 lg:px-40">
    
      <div className="relative w-full md:w-[45%] h-100 p-6 bg-[#E8F0FC] text-black shadow-lg flex flex-col gap-6 justify-center items-start mb-6 md:mb-0 md:mr-4" style={{paddingLeft:"100px"}}>
        {/* background-image */}
        <img
          src={feather}
          alt="Feather Icon"
          className="absolute bottom-5 right-6 w-40 h-40 opacity-5"
        />
        {/* content */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Join As Author
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          We welcome proposals for high-quality English<br /> language content that
          empowers international<br /> legal professionals with insights, analysis,
          and solutions.<br /> Our goal is to collaborate professionally,<br /> efficiently,
          and amicably. Let’s create valuable<br /> products together!
        </p>
        <button className="bg-blue-600 text-white w-40 h-8 rounded-full hover:bg-blue-800 px-6 py-2 text-sm md:text-base sm:px-8 sm:py-4">
          PUBLISH WITH US
        </button>
      </div>

     
      <div 
      style={{paddingLeft : "70px"}}
      className="relative w-full md:w-[45%] h-100  p-6 bg-blue-700 text-white shadow-lg flex flex-col gap-6 justify-center items-start">
        {/* background image */}
        <img
          src={punch}
          alt="Punch Icon"
          className="absolute bottom-16 right-18 w-40 h-40 opacity-12"
        />
        {/* content */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Join As Editor<br /> or Reviewer
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          Our Editorial Board reflects Endricscience's <br />commitment to excellence,
          featuring top<br /> scientists and researchers. Explore our diverse<br />
          portfolio of peer-reviewed, open-access journals<br /> to find the perfect
          fit for your niche.
        </p>
        <button className="bg-white text-blue-700 w-36 h-8 rounded-full hover:bg-gray-200 px-6 py-2 text-sm md:text-base">
          JOIN US NOW
        </button>
      </div>
    </div>
  );
};

export default JoinUs;






