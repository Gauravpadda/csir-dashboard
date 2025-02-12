import Appbar from "../components/appbar";
import Button from "../components/button";
import Card from "../components/card";
import Calendar from "../components/calendar";
import { ScrollEffect } from "../components/scrolleffect";

export default function Rgbsensor() {
  return (
    <div className="h-screen w-full overflow-auto bg-[linear-gradient(120deg,#062726_20%,#8a4fff_40%,#c3bef7_50%,#8a4fff_60%,#102b3f_80%)] absolute">
      <Appbar />
      <div className="w-full h-10 grid grid-cols-12  mt-[60px] justify-between">
        <div className="text-[#ffffff] text-4xl col-span-4 px-4 pl-8 pt-2">RGB Data</div>
        <div className="text-[#ffffff] text-xl col-span-2 px-4 col-start-8 py-4">
          <Calendar />
        </div>
        <div className="text-[#ffffff] col-span-1 col-start-11 px-4 mt-2 mr-11">
          <Button title="Download" />
        </div>
      </div>
      <div className="w-full h-10 grid grid-cols-12  mt-2 justify-between  p-3 pl-8">
        <div className="text-[#ffffff] bg-[#c3bef7] col-span-3 rounded-xl flex justify-around py-1">
          <Button title="Overview" />
          <Button title="Visualise" path="/visualise" />
        </div>
      </div>
      <div className="w-full h-44 grid  mt-2 grid-cols-4 gap-8 p-3 pl-8">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
          {/* <div className="text-[#242926] bg-[#cad2c5] col-span-3 rounded-xl py-1 w-full mr-12 text-4xl flex flex-col justify-center items-center">
            
          </div> */}
        
        
          {/* <div className="text-[#242926] bg-[#cad2c5] col-span-3 rounded-xl text-4xl flex flex-col justify-center items-center py-1 w-full mx-12">
            G Value
          </div>
       
       
          <div className="text-[#242926] bg-[#cad2c5] col-span-3 rounded-xl text-4xl flex flex-col justify-center items-center py-1 w-full mx-12">
            B value
          </div>

    
          <div className="text-[#242926] bg-[#cad2c5] col-span-3 rounded-xl text-4xl flex flex-col justify-center items-center py-1 w-full mx-12">
            Session ID
          </div> */}
       
      </div>
      <div className="w-full h-[55%]  mt-2 p-3 pl-8 grid grid-cols-12 gap-4">
        
          <div className="text-[#242926] bg-[#5f5490] col-span-7 rounded-xl py-1 w-full mr-12 text-4xl flex flex-col justify-center items-center">
            Pie Chart
          </div>
        
        
          <div className="text-[#242926] bg-[#5f5490]  rounded-xl col-span-5  text-4xl flex flex-col justify-center items-center py-1 w-full ">
            Data
          </div>
        
      </div>
    </div>
  );
}
