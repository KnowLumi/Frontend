import Navigation from "../landingpage/Navigation";
import "./MyLearning/learning.css";
import Fundamentals from "./MyLearning/Fundamentals";
import WeekProgress from "./MyLearning/WeekProgress";
import { Outlet } from "react-router-dom";

const MyLearning = () => {
  return (
    <div className="flex flex-col bg-[#F7F7F7]">
      <Navigation />
      <div className="flex mx-6 md:mx-20 gap-8 mt-20 md:mt-28">
        <Fundamentals />
        <WeekProgress />
      </div>
      <Outlet/>
    </div>
  );
};

export default MyLearning;
