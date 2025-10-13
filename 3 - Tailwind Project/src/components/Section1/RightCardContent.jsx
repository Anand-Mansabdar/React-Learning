import React from "react";

const RightCardContent = ({ tag }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className=" bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold ">
        1
      </h2>
      <div>
        <p className="text-lg text-white mb-10 leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore
          eveniet voluptas omnis quas labore!
        </p>
        <div className="flex justify-between">
          <button className="bg-indigo-600 text-white font-medium px-8 py-3 rounded-full">
            {tag}
          </button>
          <button>
            <i className="ri-arrow-right-line bg-indigo-600 text-white font-medium px-4 py-4 rounded-full"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
