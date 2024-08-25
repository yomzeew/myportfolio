import { useEffect } from "react"
import ThemeToggle from "./ToogleMode"

const Header=({themeprops})=>{
    const themefunction=(value)=>{
        themeprops(value)

    }
    useEffect(()=>{
        themefunction()
    },[])
    return(
        <>
        <div className="bg-slate-200 dark:bg-gray-800 w-full px-3 h-12 flex items-center abel-regular rounded-2xl border border-gray-600 ">
            <div className="flex justify-between items-center w-full">
                <div className="text-2xl">
                <span className="text-spotcolor">{'<'}</span><span className="dark:text-white text-black">{'Suyi/>'}</span>

                </div>
                <div className="flex gap-2">
                    <ThemeToggle
                    themeprops={(value)=>themefunction(value)}
                    />
                    <button className="rounded-xl bg-spotcolor h-8 px-3">Contact us</button>
                </div>
               
            </div>

        </div>
        </>
    )
}
export default Header