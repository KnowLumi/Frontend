import Navigation from "../landingpage/Navigation";
import "./MyLearning/learning.css";
import Fundamentals from "./MyLearning/Fundamentals";
import DayLearning from "./MyLearning/DayLearning";
const DayProgress = () => {
  return (
    <div className="flex flex-col bg-[#F7F7F7]">
      <Navigation />
      <div className="flex mx-6 md:mx-20 gap-8 mt-20 md:mt-28">
        <Fundamentals />
        <DayLearning />
      </div>
    </div>
  );
};

export default DayProgress;
