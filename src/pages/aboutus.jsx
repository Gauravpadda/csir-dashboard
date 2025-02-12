import Appbar from "../components/appbar";
import Card from "../components/card";

export default function Aboutus() {
    return <div className="h-screen w-full bg-[linear-gradient(120deg,#062726_20%,#8a4fff_40%,#c3bef7_50%,#8a4fff_60%,#102b3f_80%)] absolute overflow-hidden">
        <Appbar />
        {/* rgb sensor */}
        <div className="w-full h-[90%] lg:h-full grid grid-cols-1 lg:grid-cols-1 mt-[60px]">
            
            <div className="w-full h-full flex flex-col justify-center items-center p-4 lg:p-20 lg:pt-24 lg:pb-52">
                <Card>About us </Card>
            </div>
        </div>
        
        
    </div>
}