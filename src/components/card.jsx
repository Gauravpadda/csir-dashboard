export default function Card({children}){
    return <>
        <div className="h-full w-full bg-[#cad2c5] rounded-4xl flex flex-col justify-center items-center ">
            {children}
        </div>
    </>
}