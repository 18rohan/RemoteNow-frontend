import "../assets/tailwind.css";

const InputComponent = (props) => {
  const sizes = {
    full: "w-full",
    half: "w-1/2",
    threefourth: "w-9/12",
    almostfull: "w-11/12",
    quarter: "w-1/16",
  };
  const LeftMargins = { 0: "ml-0", 2: "ml-2", 4: "ml-4", 6: "ml-6" };
  const colors = {
    white: "text-white",
    black: "text-gray-800",
    blue: "text-blue-600",
    green: "text-green-800",
  };
  const styles = { row: "flex-row", column: "flex-col" };
  for (var key in sizes) {
    if (key === props.size) {
      var size = sizes[key];
    }
  }

  for (var item in LeftMargins) {
    if (item === props.leftmargin) {
      var leftmargin = LeftMargins[item];
    }
  }

  for (var item1 in colors) {
    if (item1 === props.label_color) {
      var label_color = colors[item1];
    }
  }
  for (var item2 in styles) {
    if (item2 === props.styles) {
      var layout_style = styles[item2];
    }
  }
  const finalsize = size ? size : sizes[0];
  const finalLeftMargin = leftmargin ? leftmargin : LeftMargins[0];
  const finalLabelColor = label_color ? label_color : colors[0];
  const final_layout_style = layout_style ? layout_style : styles[1];

  return (
    <div
      className={`w-full ml-0  flex flex-col md:flex md:${final_layout_style} md:${finalLeftMargin} w-1/2  ${finalsize} mt-2  mb-1`}
    >
      <div className="flex justify-start items-start md:flex w-full">
        <label
          className={`${finalLabelColor} dark:text-gray-100 flex justify-start items-center w-full font-bold md:w-full text-right mb-2 md:mb-2 pr-4`}
        >
          {props.Label}
        </label>
      </div>
      <input
        className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputComponent;
