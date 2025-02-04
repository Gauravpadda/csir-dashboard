import Button from "./button";

export default function Appbar(){
    return <>
    <div className="h-[60px] w-full bg-[#243642] grid grid-cols-4  content-center border-b-1 border-[#E2F1E7] fixed">
        <div className="flex flex-col justify-center items-center"><Button title="HOME" path="/"/></div>
        <div className="flex flex-col justify-center items-center"><Button title="RGB DATA" path="/rgbsensor"/></div>
        <div className="flex flex-col justify-center items-center"><Button title="GAS SENSOR DATA" path="/gassensor"/></div>
        <div className="flex flex-col justify-center items-center"><Button title="SPECTRAL DATA" path="spectralsensor"/></div>
    </div>
    
    </>
}