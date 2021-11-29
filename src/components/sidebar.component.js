import '../assets/tailwind.css';


const Sidebar = ()=> {
  return (


      <div className="w-md  my-10 bg-white rounded-lg shadow-md overflow-hidden " >
        <div className="text-gray-800   flex flex-col px-4 justify-center   py-3 ">
            <div className="py-3 font-bold text-lg text-gray-900">Job Type</div>
            <div className="flex flex-col ">

                <div className="flex flex-row">
                <input type="checkbox"/>
                <p className="leading-3 px-2 text-gray-700 font-light">Full time</p>
                </div>
                <div className="flex flex-row my-4">
                <input type="checkbox"/>
                <p className="leading-3 px-2 text-gray-700 font-light">Part time</p>
                </div>
                <div className="flex flex-row ">
                <input type="checkbox"/>
                <p className="leading-3 px-2 font-light">Contract</p>
                </div>
                <div className="flex flex-row my-4 ">
                <input type="checkbox"/>
                <p className="leading-3 px-2 font-light">Intern</p>
                </div>
            </div>
        </div>
        <div className="text-gray-800   flex flex-col  ">
        <div className="text-gray-800  border border-gray-100 flex flex-col px-4 justify-center   ">

            <div className="py-3 font-bold text-lg text-gray-900">Job Category</div>
            <div className="flex flex-row">
            <div className="flex flex-col">

                <div className="flex flex-row ">
                <input type="checkbox"/>
                <p className="leading-3 px-2 text-gray-700 font-light">Design</p>
                </div>
                <div className="flex flex-row my-4">
                <input type="checkbox"/>
                <p className="leading-3 px-2 text-gray-700 font-light">Marketing</p>
                </div>
                <div className="flex flex-row ">
                <input type="checkbox"/>
                <p className="leading-3 px-2 font-light">Finance</p>
                </div>
                <div className="flex flex-row my-4 ">
                <input type="checkbox"/>
                <p className="leading-3 px-2 font-light">Softwares</p>
                </div>
            </div>
            <div className="flex flex-col px-3">
            <div className="flex flex-row">
                <input type="checkbox"/>
                <p className="leading-3 px-2 text-gray-700 font-light">Design</p>
                </div>
                <div className="flex flex-row my-4">
                <input type="checkbox"/>
                <p className="leading-3 px-2 text-gray-700 font-light ">Design</p>
                </div>
                </div>
                </div>
        </div>
        </div>
        <div className="text-gray-800 border border-gray-100  flex flex-col px-4">
        <div className="py-3 font-bold text-lg text-gray-900">Experience</div>
        <div className="flex flex-col">

            <div className="flex flex-row">
            <input type="checkbox"/>
            <p className="leading-3 px-2 text-gray-700 font-light">Less than 1 year</p>
            </div>
            <div className="flex flex-row my-4">
            <input type="checkbox"/>
            <p className="leading-3 px-2 text-gray-700 font-light">1-2 years</p>
            </div>
            <div className="flex flex-row ">
            <input type="checkbox"/>
            <p className="leading-3 px-2 font-light">3-5 years</p>
            </div>
            <div className="flex flex-row my-4 ">
            <input type="checkbox"/>
            <p className="leading-3 px-2 font-light">5 years +</p>
            </div>
        </div>
        </div>
        <div className="text-gray-800   flex flex-col px-4 ">
        <div className="py-3 font-bold text-lg text-gray-900">Last Updated</div>
        <div className="flex flex-col">

            <div className="flex flex-row">
            <input type="checkbox"/>
            <p className="leading-3 px-2 text-gray-700 font-light">Recently</p>
            </div>
            <div className="flex flex-row my-4">
            <input type="checkbox"/>
            <p className="leading-3 px-2 text-gray-700 font-light">24 hrs</p>
            </div>
            <div className="flex flex-row ">
            <input type="checkbox"/>
            <p className="leading-3 px-2 font-light">1 week</p>
            </div>
            <div className="flex flex-row my-4 ">
            <input type="checkbox"/>
            <p className="leading-3 px-2 font-light">1 month</p>
            </div>
        </div>
        </div>


      </div>




  );
}

export default Sidebar;
