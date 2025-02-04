import { useNavigate } from "react-router-dom"
export default function Button({title,path,width}){
    const navigate=useNavigate();
    return <button 
    onClick={()=>{
        navigate(path)
    }}
    className="h-8 w-[fit] bg-[#387478] rounded-xl p-4 border-1 text-[#E2F1E7] border-[#E2F1E7] cursor-pointer text-center flex flex-col justify-center items-center">
        {title}
    </button>
}