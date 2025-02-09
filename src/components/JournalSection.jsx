import React from "react";
import journal_one from "../assets/journal_one.jpg";
import journal_two from "../assets/journal_two.jpg";
import journal_three from "../assets/journal_three.jpg";
import journal_four from "../assets/journal_four.jpg";
import bar from '../assets/bar.jpg'

const JournalSection = () => {
  
  const journals = [
    {
      id: 1,
      category: "Health",
      date: "20 November 2024",
      title: "Health Innovation & Life Sciences",
      metrics: {
        acceptanceRate: "50%",
        submissionToDecision: "20 Days",
        submissionToPublication: "5 Days",
        closure: "NA",
        citationIndicator: "NA",
        impactFactor: "NA",
      },
      image: journal_one,
      icon: bar,
    },
    {
      id: 2,
      title: "International Journal of Health Evidence",
      category: "Health",
      date: "20 November 2024",
      metrics: {
        acceptanceRate: "50%",
        submissionToDecision: "20 Days",
        submissionToPublication: "5 Days",
        closure: "NA",
        citationIndicator: "NA",
        impactFactor: "NA",
      },
      image: journal_two,
      icon: bar,
    },
    {
      id: 3,
      title: "Hospital and Pharmacy Practice",
      category: "Health",
      date: "20 November 2024",
      metrics: {
        acceptanceRate: "50%",
        submissionToDecision: "20 Days",
        submissionToPublication: "5 Days",
        closure: "NA",
        citationIndicator: "NA",
        impactFactor: "NA",
      },
      image: journal_three,
      icon: bar,
    },
    {
      id: 4,
      title: "Health Ecological & Environmental Research",
      category: "Health",
      date: "20 November 2024",
      metrics: {
        acceptanceRate: "50%",
        submissionToDecision: "20 Days",
        submissionToPublication: "5 Days",
        closure: "NA",
        citationIndicator: "NA",
        impactFactor: "NA",
      },
      image: journal_four,
      icon: bar,
    },
  ];

  return (
    <section className="py-12 bg-gray-50 h-auto">
      <div 
       style={{padding: "30px 0px", marginLeft:"30px"}}
      className="container mx-auto px-4">
        {/* title */}
        <div 
        style={{ padding: "30px 50px" }}
        className="flex justify-between items-center mb-8 px-4 sm:px-6 ">
          <h2 className="text-3xl sm:text-5xl font-bold">Our Journals</h2>
          <button className="bg-blue-700 w-24 h-8 text-white rounded-full py-2 px-6 text-sm hidden sm:block">
            READ ALL
          </button>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 px-4">
          {journals.map((journal) => (
            <div
              key={journal.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* content */}
              <div 
              style={{padding: "10px 30px"}}
              className="flex justify-between items-center p-4 bg-gray-50">
                <span className="text-sm text-blue-600 font-semibold">
                  {journal.category}
                </span>
                <span className="block text-sm text-gray-500">
                  {journal.date}
                </span>
              </div>

              {/* image */}
              
              <img
                src={journal.image}
                alt={journal.title}
                className="w-full h-36 object-cover"
              />
             

              <div className="p-4">
                <h3 
                  style={{margin:"5px 20px"}}
                  className=" text-2xl font-bold text-black">
                  {journal.title}
                </h3>
                
                <div 
                className="flex gap-4" 
                style={{padding:" 5px 20px"}}>
                  <img src={journal.icon} alt="icon" className="w-5 h-6"/>
                  <p className="text-blue-600 font-bold text-xl">Journal metrics</p>
                </div>

                {/* metrics */}
                <div 
                style={{padding: "10px 10px", paddingBottom:"20px"}}
                className="mt-4 text-sm text-black">

                  <p>Acceptance rate <span className="text-gray-200 font-bold"> ---------------------- </span>  
                    <span className="font-bold">{journal.metrics.acceptanceRate}</span>
                  </p>
                  <p>
                    Submission to final decision <span className="text-gray-200 font-bold"> --------- </span>
                    <span className="font-bold">{journal.metrics.submissionToDecision}</span>
                  </p>
                  <p>
                    Submission to publication <span className="text-gray-200 font-bold"> ----------- </span> 
                    <span className="font-bold">{journal.metrics.submissionToPublication}</span>
                  </p>
                  <p>Closure <span className="text-gray-200 font-bold"> ------------------------------- </span> {journal.metrics.closure}</p>
                  <p>
                    Journal Citation Indicator <span className="text-gray-200 font-bold"> ------------ </span>
                    {journal.metrics.citationIndicator}
                  </p>
                  <p>Impact Factor <span className="text-gray-200 font-bold"> ------------------------- </span> {journal.metrics.impactFactor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
        style={{ padding: "30px 0px" }}
        className="flex justify-center items-center gap-8 mt-8">
          <button className="w-22 h-8 border-2 border-gray-400 rounded-full text-gray-400 text-center font-medium">
            &larr;BACK
          </button>
          <div className="flex space-x-2 gap-3">
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
          </div>
          <button className="w-22 h-8 bg-blue-600 text-white rounded-full text-center">
            NEXT&rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;




