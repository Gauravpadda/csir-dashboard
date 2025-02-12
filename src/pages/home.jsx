import Appbar from "../components/appbar";
import Card from "../components/card";

export default function Home() {
    return <div className="h-screen w-full bg-[linear-gradient(120deg,#062726_20%,#8a4fff_40%,#c3bef7_50%,#8a4fff_60%,#102b3f_80%)] absolute overflow-auto">
        <Appbar />
        {/* rgb sensor */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2   mt-[60px]">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-6xl text-[#E2F1E7] text-center">RGB DATA</p>
                <p className="text-xl text-[#E2F1E7] m-2 text-center">Spectral Data of the leaves proper visualization of the different wavelengths used</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center p-4 lg:p-20 lg:pt-24 lg:pb-52">
                <Card>hello</Card>
            </div>
        </div>
        {/* Gas Sensor Section - Fixed */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 ">
            {/* Text Section */}
            <div className="w-full h-full flex flex-col justify-center items-center p-4 lg:p-20 lg:pt-24 lg:pb-52 order-1 lg:order-2">
                <p className="text-6xl text-[#E2F1E7] text-center">Gas Sensor DATA</p>
                <p className="text-xl text-[#E2F1E7] mt-2 text-center">Spectral Data of the leaves proper visualization of the different wavelengths used</p>
            </div>

            {/* Card Section - Fixed height and padding */}
            <div className="w-full h-full flex flex-col justify-center items-center p-4 lg:p-20 lg:pt-24 lg:pb-52 order-2 lg:order-1">
                <Card>hello</Card>
            </div>
        </div>

        {/* Spectral Sensor Section - Fixed */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 ">
            <div className="w-full h-full flex flex-col justify-center items-center p-4 lg:p-20 lg:pt-24 lg:pb-52">
                <p className="text-6xl text-[#E2F1E7] text-center">Spectral Sensor DATA</p>
                <p className="text-xl text-[#E2F1E7] mt-2 text-center">Spectral Data of the leaves proper visualization of the different wavelengths used</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center p-4 lg:p-20 lg:pt-24 lg:pb-52">
                <Card>hello</Card>
            </div>
        </div>
        <div className=" h-[300px]">
            hello
        </div>
    </div>
}