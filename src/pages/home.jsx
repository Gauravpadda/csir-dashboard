import Appbar from "../components/appbar";
import Card from "../components/card";

export default function Home(){
    return <div className="h-screen w-full bg-[#243642] absolute">
        <Appbar/>
        {/* rgb sensor */}
        <div className="w-full h-full grid grid-cols-2  bg-[#243642] mt-[60px]">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-6xl text-[#E2F1E7]">RGB DATA</p>
                <p className="text-xl text-[#E2F1E7] mt-2">Spectral Data of the leaves proper visualization of the different wavelengths used</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center p-20 pt-24 pb-52">
                <Card>hello</Card>
            </div>
        </div>
        {/* gas sensor */}
        <div className="w-full h-full grid grid-cols-2  bg-[#243642]">
            
            <div className="w-full h-full flex flex-col justify-center items-center p-20 pt-24 pb-52">
                <Card>hello</Card>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center p-20 pt-24 pb-52">
            <p className="text-6xl text-[#E2F1E7]">RGB DATA</p>
            <p className="text-xl text-[#E2F1E7] mt-2">Spectral Data of the leaves proper visualization of the different wavelengths used</p>
            
            </div>
        </div>
        {/* spectral sensor */}
        <div className="w-full h-full grid grid-cols-2  bg-[#243642]  ">
            <div className="w-full h-full flex flex-col justify-center items-center p-20 pt-24 pb-52">
            <p className="text-6xl text-[#E2F1E7]">RGB DATA</p>
            <p className="text-xl text-[#E2F1E7] mt-2">Spectral Data of the leaves proper visualization of the different wavelengths used</p>
            
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center p-20 pt-24 pb-52">
                <Card>hello</Card>
            </div>
        </div>
        <div className="bg-[#243642] h-[300px]">
            hello
        </div>
    </div>
}