import React from 'react';
import new_two from '../assets/new_two.jpg';
import A_two from '../assets/A_two.png';
import A_three from '../assets/A_three.jpg';
import journal_two from '../assets/journal_two.jpg';

const Articles = () => {
  
  const articles = [
    {
      image: new_two,
      title: "Exploring Cutting Edge Approaches",
      author: "By Simran Prajapati",
      category: "Tech",
      date: "20 November 2024",
      abstract:
        "Pulmonary fibrosis, a progressive lung disease,presents a significant challenge in clinical management....",
      metadata: "2024 | Volume 1 | Issue 1",
      accessibility: "Open Access",
    },
    {
      image: A_two,
      title: "Exploring Cutting Edge Approaches",
      author: "By Simran Prajapati",
      category: "Tech",
      date: "20 November 2024",
      abstract:
        "Pulmonary fibrosis, a progressive lung disease,presents a significant challenge in clinical management....",
      metadata: "2024 | Volume 1 | Issue 1",
    },
    {
      image: A_three,
      title: "Exploring Cutting Edge Approaches",
      author: "By Simran Prajapati",
      category: "Tech",
      date: "20 November 2024",
      abstract:
        "Pulmonary fibrosis, a progressive lung disease,presents a significant challenge in clinical management....",
      metadata: "2024 | Volume 1 | Issue 1",
      accessibility: "Open Access",
    },
    {
      image: journal_two,
      title: "Exploring Cutting Edge Approaches",
      author: "By Simran Prajapati",
      category: "Tech",
      date: "20 November 2024",
      abstract:
        "Pulmonary fibrosis, a progressive lung disease,presents a significant challenge in clinical management....",
      metadata: "2024 | Volume 1 | Issue 1",
    },
  ];

  return (
    <div className="h-auto px-6 sm:px-8 lg:px-12">
     
      <div 
        style={{padding: "50px 100px"}}
        className="flex justify-between">
        <h2 className="text-3xl sm:text-5xl font-bold">Recent Articles</h2>
        <button className="bg-blue-700 text-white w-22 h-6 rounded-full hover:bg-blue-800 hidden sm:block">
          READ ALL
        </button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 " style={{margin:"0px 40px"}}>
        {articles.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 flex flex-col  border border-gray-200 shadow-lg"
          >
            <div className="flex justify-between mb-4" style={{margin:"5px 20px"}}>
              <span className="text-sm font-semibold text-blue-500">
                {item.category}
              </span>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="flex flex-col gap-3" style={{padding: "10px 10px"}}>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <h4 className="text-sm text-black">{item.author}</h4>

              <p className="text-sm text-black-200 mt-2">
                <span className='text-blue-800 text-sm font-bold'>Abstract</span><br />
                {item.abstract}
              </p>

              <div className='flex gap-10'>
                <p className="text-sm text-gray-500">{item.metadata}</p>
                <p className="text-sm text-black font-medium">{item.accessibility}</p>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---- Pagination Controls ----- */}
     
    <div
        style={{ padding: "50px 0px" }}
        className="flex justify-center items-center gap-8 mt-8">
          
        <button className="w-22 h-8 border-2 border-gray-400 rounded-full text-gray-400 text-center font-medium">
          &larr; BACK
        </button>

        <div className="flex space-x-2 gap-3">
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        </div>

        <button className="w-22 h-8 bg-blue-600 text-white rounded-full text-center">
          NEXT &rarr;
        </button>

    </div>


    </div>
  );
};

export default Articles;
