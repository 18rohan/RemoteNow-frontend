import "../assets/tailwind.css";

const Card = (jobs) => {
  console.log("cards:", jobs);

  return (
    <div>
      <div className="max-w-md rounded-lg m-2 bg-white  hover:bg-blue-50 md:bg-opacity-50 shadow-lg overflow-hidden ">
        <div className="md:flex flex-col">
          <div className="md:flex m-4 rounded">
            <img
              className="h-20 w-full md:w-20  object-cover rounded-lg "
              src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
              alt="logo"
            />
          </div>
          <div className="px-4 py-1 flex flex-col justify-start items-start">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {jobs.jobs.position_title}
            </div>

            <p class="mt-2 text-gray-500 text-sm">{jobs.jobs.timezone}</p>
            <p class="mt-2 text-gray-500 text-sm">
              Vacancies: {jobs.jobs.total_vacancy}
            </p>
            <div className="flex flex-row ">
              <button className=" bg-blue-200  rounded-lg text-blue-700 font-bold text-xs  my-1  py-1  w-full md:w-40">
                {jobs.jobs.locations_allowed[0]}
              </button>
              <button className=" bg-blue-200  rounded-lg text-blue-700  font-bold  text-xs my-1 mx-1 py-1 w-full md:w-40">
                {jobs.jobs.locations_allowed[1]}
              </button>
            </div>

            <div className="flex flex-row w-full md:w-full">
              <button className=" bg-blue-500  rounded-lg text-white font-bold text-sm   m-4 py-2  w-full md:w-36">
                Apply
              </button>
              <button className=" bg-gray-300  rounded-lg text-gray-800 font-bold   text-sm m-4 py-2 w-full md:w-36">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
