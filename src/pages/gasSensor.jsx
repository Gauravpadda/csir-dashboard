import Appbar from "../components/appbar";
import Button from "../components/button";
import Calendar from "../components/calendar";
import Card from "../components/card";

export default function Gassensor(){
    return <div className="h-screen w-full bg-[#243642] absolute">
        <Appbar/>
        {/* rgb sensor */}
        <div className="w-full h-10 grid grid-cols-12 bg-[#243642] mt-[60px] justify-between">
            <div className="text-[#E2F1E7] text-4xl col-span-4 px-4 pl-8 pt-2">Gas Sensor Data</div>
            <div className="text-[#E2F1E7] text-xl col-span-2 px-4 col-start-9 py-4">
                <Calendar/>
            </div>
            <div className="text-[#E2F1E7] col-span-1 col-start-12 px-4 mt-2 mr-11">
                <Button title="Download" ></Button>
            </div>
        </div>
        {/* rgb sensor */}
        <div className="w-full h-10 grid grid-cols-12 bg-[#243642] mt-2 justify-between  p-3 pl-8">
            <div className="text-[#E2F1E7] bg-[#cad2c5] col-span-3 rounded-xl flex justify-around py-1">
                <Button title="Overview" ></Button>
                <Button title="Visualise" ></Button>
            </div>
            
        </div>
        <div className="w-full h-44 flex bg-[#243642] mt-2 justify-around  p-3 pl-8">
            <div className="text-[#242926] bg-[#cad2c5] col-span-3 rounded-xl py-1 w-full mr-12 text-4xl flex flex-col justify-center items-center">
                Channel 1
            </div>
            <div className="text-[#242926] bg-[#cad2c5] col-span-3 rounded-xl  text-4xl flex flex-col justify-center items-center py-1 w-full mx-12">
                Channel 2
            </div>
            <div className="text-[#242926] bg-[#cad2c5] col-span-3 rounded-xl  text-4xl flex flex-col justify-center items-center py-1 w-full mx-12">
                Channel 3
            </div>
            
        </div>
        <div className="w-full h-[60%] bg-[#243642] mt-2 p-3 pl-8 grid grid-cols-12 gap-4">
            <div className="text-[#242926] bg-[#cad2c5] col-span-7 rounded-xl py-1 w-full mr-12 text-4xl flex flex-col justify-center items-center">
                pie chart
            </div>
            <div className="text-[#242926] bg-[#cad2c5]  rounded-xl col-span-5  text-4xl flex flex-col justify-center items-center py-1 w-full ">
                data
            </div>
            
        </div>
        
    </div>
}