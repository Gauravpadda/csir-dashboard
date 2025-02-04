import Appbar from "../components/appbar";
import Button from "../components/button";
import Card from "../components/card";

export default function Visualise(){
    return <div className="h-screen w-full bg-[#243642] absolute">
        <Appbar/>
        {/* rgb sensor */}
        <div className="w-full h-10 grid grid-cols-12 bg-[#243642] mt-[60px] justify-between">
            <div className="text-[#E2F1E7] text-4xl col-span-4 px-4 pl-8 pt-2">Gas Sensor Data</div>
            <div className="text-[#E2F1E7] text-4xl col-span-6 px-4 pt-2 col-start-9 col-end-12">calender</div>
            
        </div>
        {/* rgb sensor */}
        <div className="w-full h-10 grid grid-cols-12 bg-[#243642] mt-2 justify-between  p-3 pl-8">
            <div className="text-[#E2F1E7] bg-[#cad2c5] col-span-3 rounded-xl flex justify-around py-1">
                <Button title="Overview" ></Button>
                <Button title="Visualise" ></Button>
            </div>
            
        </div>
        
        <div className="w-full h-[78%] bg-[#243642] mt-2 p-3 pb-0 pl-8 grid grid-cols-12 gap-4">
            <div className="text-[#242926] bg-[#cad2c5] col-span-3 h-48 rounded-xl py-1 w-full mr-12 text-4xl flex flex-col justify-center items-center">
                Selection Of graphs
            </div>
            <div className="text-[#242926] bg-[#cad2c5]  rounded-xl col-span-9  text-4xl py-1 w-full h-[95%]">
                different graphs
            </div>
            
        </div>
        
    </div>
}   