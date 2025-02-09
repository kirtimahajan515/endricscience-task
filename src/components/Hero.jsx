import hero from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[calc(100vh-64px)] sm:h-[calc(100vh-80px)] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${hero})` }}>
      
      <div className="relative md:right-40 text-left max-w-2xl flex-col flex gap-8 px-4 sm:px-8">
        {/* heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Welcome To Endricscience
        </h1>

        <div className='w-32 sm:w-40 h-1 bg-blue-400 mb-6'></div>

        {/* description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Embrace open access publishing to enhance the visibility and influence
          of your medical, artificial intelligence, and multidisciplinary
          research, amplifying the reach and impact of both your society and
          academic career.
        </p>

        {/* button */}
        <button className="w-44 h-10 bg-blue-100 text-black font-medium rounded-full shadow-lg hover:bg-blue-400 hover:text-white transition">
          PUBLISH WITH US
        </button>
      </div>
    </section>
  );
};

export default Hero;





