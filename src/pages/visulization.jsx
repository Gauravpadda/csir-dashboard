import Appbar from "../components/appbar";
import Button from "../components/button";
import Card from "../components/card";
import Calendar from "../components/calendar";
import { ScrollEffect } from "../components/scrolleffect";

export default function Visualise() {
  return (
    <div className="h-screen w-full bg-[linear-gradient(120deg,#062726_20%,#8a4fff_40%,#c3bef7_50%,#8a4fff_60%,#102b3f_80%)] absolute">
      <Appbar />
      <div className="w-full h-10 grid grid-cols-12  mt-[60px] justify-between">
        <div className="text-[#ffffff] text-4xl col-span-4 px-4 pl-8 pt-2">Gas Sensor Data</div>
        <div className="text-[#ffffff] text-xl col-span-2 px-4 col-start-10 py-4">
          <Calendar />
        </div>
      </div>
      <div className="w-full h-10 grid grid-cols-12  mt-2 justify-between  p-3 pl-8">
        <div className="text-[#ffffff] bg-[#c3bef7] col-span-3 rounded-xl flex justify-around py-1">
          <Button title="Overview" />
          <Button title="Visualise" />
        </div>
      </div>
      <div className="w-full h-[78%]  mt-2 p-3 pb-0 pl-8 grid grid-cols-12 gap-4">
        
          <div className="text-[#242926] bg-[#5f5490] col-span-3 h-48 rounded-xl py-1 w-full mr-12 text-4xl flex flex-col justify-center items-center">
            Selection Of graphs
          </div>
        
        
          <div className="text-[#242926] bg-[#5f5490]  rounded-xl col-span-9  text-4xl py-1 w-full h-[95%]">
            different graphs
          </div>
        
      </div>
    </div>
  );
}
