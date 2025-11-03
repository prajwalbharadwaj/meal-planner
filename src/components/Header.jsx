import Image from "../assets/image/header.jpg";

const Header = () => {
  return (
    <div className="h-[300px] bg-gray-100 grid place-content-center text-center relative">
      <div className="w-full absolute z-0 h-[300px] ">
        <img src={Image} alt="logo" className="h-[300px] w-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent to-black"></div>
      </div>
      <div className="z-1 text-white grid gap-3">
        <h1 className="text-5xl">Meal Planner</h1>
        <p className="text-xl">Plan your meals, eat healthy, stay organized</p>
      </div>
    </div>
  );
};

export default Header;
