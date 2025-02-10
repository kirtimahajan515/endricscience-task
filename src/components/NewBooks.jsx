import React from "react";
import journal_one from "../assets/journal_one.jpg";
import new_two from "../assets/new_two.jpg";
import journal_two from "../assets/journal_two.jpg";
import google from "../assets/google.jpg";
import embase from "../assets/embase.jpg";

const NewBooks = () => {
  const books = [
    {
      id: 1,
      title: "Advanced Physical Chemistry Practical Guide",
      author: "Charles Brown, Lisa Anderson",
      eisbn: "eISBN: 978-1-68108-910-2, 2022",
      isbn: "ISBN: 978-1-4028-9462-6",
      discount: "AFTER 25% DISCOUNT",
      price: "$183",
      image: journal_one,
    },
    {
      id: 2,
      title: "Advanced Physical Chemistry Practical Guide",
      author: "Charles Brown, Lisa Anderson",
      eisbn: "eISBN: 978-1-68108-910-2, 2022",
      isbn: "ISBN: 978-1-4028-9462-6",
      discount: "AFTER 25% DISCOUNT",
      price: "$183",
      image: new_two,
    },
    {
      id: 3,
      title: "Advanced Physical Chemistry Practical Guide",
      author: "Charles Brown, Lisa Anderson",
      eisbn: "eISBN: 978-1-68108-910-2, 2022",
      isbn: "ISBN: 978-1-4028-9462-6",
      discount: "AFTER 25% DISCOUNT",
      price: "$183",
      image: journal_two,
    },
  ];

  return (
    <section className="px-4 md:px-12 py-12">
      
      <div
        className="flex justify-between items-center mb-8"
        style={{ margin: "60px 80px" }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold">New Books</h2>
        <button className="bg-blue-700 w-24 h-8 text-white rounded-full py-2 px-6 text-sm hidden sm:block">
          VIEW ALL
        </button>
      </div>

      {/* Books Grid */}
      <div className="flex flex-wrap justify-center md:justify-center items-center text-center gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className=" bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 w-[430px]"
          >
            <div>
              <img
                src={book.image}
                className="w-40 h-full object-cover rounded-2xl mb-4"
              />
            </div>

            <div className="flex flex-col gap-2 text-left justify-center">
              <h3 className="text-lg font-bold">{book.title}</h3>

              <p className="text-blue-600 text-sm">{book.author}</p>

              <div>
                <p className="text-gray-600 text-sm">{book.eisbn}</p>
                <p className="text-gray-600 text-sm">{book.isbn}</p>
              </div>

              <div className="flex gap-7">
                <p className="text-black-600 text-sm font-semibold mt-2">
                  {book.discount}
                </p>
                <button className="mt-4 bg-blue-500 text-white w-22 h-9 rounded-full hover:bg-blue-600">
                  BUY {book.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{ padding: "50px 0px" }}
        className="flex justify-center items-center gap-8 mt-8"
      >
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


{/*     {/* Indexing & Services Section */} */}
   <div
        style={{ marginTop: "20px" }}
        className="bg-blue-600 text-white mt-16 p-12 min-w-screen h-90 rounded-lg flex flex-col lg:flex-row justify-center items-center gap-12 sm:gap-16 sm:justify-center"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
            Indexing & <br className="md:hidden" /> Services
        </h2>

        <div className="flex flex-row sm:flex-row justify-center items-center gap-8 sm:gap-12">
          <div>
            <img
              src={google}
              alt=""
              className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto rounded-2xl"
            />
          </div>
          <div className="w-40 bg-white sm:w-48 md:w-60 lg:w-74 h-45 flex justify-center items-center rounded-2xl">
            <img src={embase}
            alt="Elsevier" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default NewBooks;
