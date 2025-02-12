import Appbar from "../components/appbar";
import Button from "../components/button";
import Calendar from "../components/calendar";
import Card from "../components/card";
export default function Gassensor() {
    return (
        <div className="h-dvh w-full overflow-auto overflow-x-hidden bg-[linear-gradient(120deg,#062726_20%,#8a4fff_40%,#c3bef7_50%,#8a4fff_60%,#102b3f_80%)] absolute">
            <Appbar />
            {/* Gas Sensor Data Header */}
            <div className="w-full h-10 grid grid-cols-12 mt-14 justify-between">
                <div className="text-[#E2F1E7] text-4xl col-span-4 px-4 pl-8 pt-2">
                    Gas Sensor Data
                </div>
                <div className="text-[#E2F1E7] text-xl col-span-2 px-4 col-start-8 py-4">
                    <Calendar />
                </div>
                <div className="text-[#E2F1E7] col-span-1 col-start-11 px-4 mt-2 mr-12">
                    <Button title="Download" />
                </div>
            </div>

            {/* Overview & Visualize Buttons */}
            <div className="w-full h-10 grid grid-cols-12 mt-2 justify-between p-3 pl-8">
                <div className="text-[#E2F1E7] bg-[#c3bef7] col-span-3 rounded-xl flex justify-around py-1">
                    <Button title="Overview" />
                    <Button title="Visualise" />
                </div>
            </div>

            {/* Cards Section */}
            <div className="w-full h-44 grid grid-cols-3 gap-8 mt-4 p-3 pl-8">
                <Card />
                <Card />
                <Card />
            </div>

            {/* Pie Chart & Data Section */}
            <div className="w-full h-[55%]  mt-1 p-3 pl-8 grid grid-cols-12 gap-4">
                <div className="text-[#242926] bg-[#5f5490] col-span-7 rounded-xl py-1 w-full text-4xl flex flex-col justify-center items-center">
                    Pie Chart
                </div>
                <div className="text-[#242926] bg-[#5f5490] rounded-xl col-span-5 text-4xl flex flex-col justify-center items-center py-1 w-full">
                    Data
                </div>
            </div>
        </div>
    );
}
