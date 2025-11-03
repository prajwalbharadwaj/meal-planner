const Button = ({ children, type = "button" }) => {
  let classes = "";
  if (type === "button") {
    classes +=
      "bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-xl";
  } else if (type === "plain") {
    classes += "hover:bg-orange-600 hover:text-white p-2 rounded-xl";
  } else if (type === "secondary") {
    classes += "bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-xl";
  } else if (type === "outline") {
    classes +=
      "py-2 px-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-500 hover:text-white";
  }
  return (
    <div
      className={`flex items-center gap-2 justify-center cursor-pointer ${classes}`}
    >
      {children}
    </div>
  );
};

export default Button;
