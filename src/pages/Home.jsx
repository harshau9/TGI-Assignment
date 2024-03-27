import React, { useState, useEffect } from "react";
import { TfiAngleDoubleLeft,TfiAngleDoubleRight  } from "react-icons/tfi";


const Home = () => {
  const [data, setData] = useState([
    { id: 1, name: "Shoes", checked: false },
    { id: 2, name: "Men T-shirts", checked: false },
    { id: 3, name: "Makeup", checked: false },
    { id: 4, name: "Jewellery", checked: false },
    { id: 5, name: "Women T-shirt", checked: false },
    { id: 6, name: "Furniture", checked: false },
    { id: 7, name: "Water", checked: false },
    { id: 8, name: "Television", checked: false },
    { id: 9, name: "Bag", checked: false },
    { id: 10, name: "Bottle", checked: false },
    { id: 11, name: "Food", checked: false },
    { id: 12, name: "GYM", checked: false },
  ]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


  const handleCheckboxChange = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setData(updatedData);
  };
  return (
    <div className="border-2 w-4/5 md:w-1/2 lg:w-2/6 border-gray-200 m-auto mt-6  rounded-2xl text-center">
      <p className="my-6 text-3xl font-bold">Please Mark your interests</p>
      <p className="my-8 text-center">We will keep you notified.</p>
      <p className="w-3/4 m-auto text-left text-xl font-bold">
        My Saved Interests!
      </p>
      <div className="w-3/4 m-auto text-left">
        <div>
          {currentItems?.map((item) => {
            return (
              <div key={item.id} className="my-3.5 items-center">
                <input
                  type="checkbox"
                  checked={item.checked}
                  className="bg-black text-white w-6 cursor-pointer mr-3.5 h-4 align-middle"
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <label className="text-lg">{item.name}</label>
              </div>
            );
          })}
        </div>
        <div className="my-6 flex justify-center gap-20">
        <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          >
           <TfiAngleDoubleLeft />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            <TfiAngleDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
