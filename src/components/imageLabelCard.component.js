import "../assets/tailwind.css";

const ImageCard = (props) => {
  return (
    <div>
      <div className="  w-32  bg-white rounded-xl m-2  flex justify-center align-items md:max-h-40  bg-opacity-50 shadow-lg overflow-hidden ">
        <img src={props.imageurl} className="object-cover" alt="brand logo" />
      </div>
    </div>
  );
};

export default ImageCard;
