import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setuserData] = useState([]);
  const [index, setindex] = useState(1);

  const getData = async () => {
    console.log(`Data fetched`);
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setuserData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-rose-500 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 overflow-hidden rounded-xl w-44 bg-white">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                key={idx}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto p-8 h-screen text-white">
      {/* <button
        onClick={getData}
        className="bg-amber-400 text-indigo-700 mb-2 px-5 py-2 rounded active:scale-95 font-semibold"
      >
        Fetch Data
      </button> */}

      <div className="flex h-[82%] flex-wrap gap-4">{printUserData}</div>
      <div className="flex justify-center items-center p-4 gap-4">
        <button
          className="bg-emerald-300 text-indigo-700 rounded px-4 py-2 font-semibold text-sm cursor-pointer"
          onClick={() => {
            if (index > 1) {
              setindex(index - 1);
              setuserData([])
            }
          }}
        >
          Previous
        </button>
        <h4>Page {index}</h4>
        <button
          className="bg-emerald-300 text-indigo-700 rounded px-4 py-2 font-semibold text-sm cursor-pointer"
          onClick={() => {
            setindex(index + 1);
            setuserData([])
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
