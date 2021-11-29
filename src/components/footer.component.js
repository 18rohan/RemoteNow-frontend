import '../assets/tailwind.css';


const Footer = (jobs)=> {
  console.log("cards:",jobs)
  const jobs1 = jobs;
  return (
    
    

      <div>
        
      
      <div className="max-w-md py-5 rounded-3xl mx-2 m-1 bg-gradient-to-r from-blue-300  hover:bg-blue-100 md:bg-opacity-50 shadow-lg overflow-hidden " >
    
      <div className="md:flex flex-col">
   <p className="text-3xl text-gray-800 p-4 font-semibold ">Learn how to stand out more</p>
<div className="px-4 py-1">

      
      <div className="flex flex-row ">
      
      
      </div>
      
      <div className="flex flex-row w-full md:w-full">
      <button className=" bg-blue-500  rounded-3xl text-white font-bold text-sm   m-4 py-2  w-full md:w-40">Learn Tips</button>
      <button className=" bg-gray-300  rounded-3xl text-gray-800 font-bold   text-sm m-4 py-2 w-full md:w-36">Favourite</button>
      </div>
      </div>

      </div>
        
      </div>
      
      </div>


    

  );
}

export default Footer;
