import React from "react";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import google from "../assets/google.jpg";
import crossref2 from "../assets/crossref2.jpg";

const boardMembers = [
  { name: "Dr. Ranjeet Kumar", country: "India", image: one },
  { name: "Dr. Ranjeet Kumar", country: "India", image: two },
  { name: "Dr. Victoria Garcia", country: "Australia", image: three },
  { name: "Dr. Amit Sharma", country: "India", image: four },
  { name: "Dr. Amira S Ahmed", country: "UAE", image: five },
];

const BoardMembers = () => {
  return (
    <section className="bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-4xl font-bold mb-6" style={{ padding: "40px 150px" }}>
            Recently Joined Board Members
        </h2>
            
    {/* ------ Grid for board members ------- */}
      <div className="flex justify-center items-center gap-3 min-w-screen flex-wrap sm:w-1/2 md:w-1/3 lg:w-1/5 overflow-hidden text-center shadow-md">
        {boardMembers.map((member, index) => (
          <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 bg-blue-600 text-white">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm">{member.country}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ----- Indexing & Services Section ------- */}

        <div
          style={{ marginTop: "20px" }}
          className="bg-blue-600 text-white mt-16 p-12 min-w-screen h-90 flex flex-col lg:flex-row justify-center items-center gap-12 sm:gap-16 sm:justify-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
            Associated <br />
            Organization
          </h2>

          <div className="flex flex-row sm:flex-row justify-center items-center gap-8 sm:gap-12">
            <div>
              <img
                src={google}
                alt=""
                className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto rounded-2xl"
              />
            </div>
            <div className="w-40 bg-white sm:w-48 md:w-65 lg:w-74 h-30 flex justify-center items-center rounded-2xl">
              <img
                src={crossref2}
                alt=""
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;



