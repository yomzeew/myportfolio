import { useEffect, useState } from "react"
import Subbody from "./subbody"
import Subbodytwo from "./subbodytwo"

const { default: Header } = require("./header")

const Home=()=>{
    const [theme,settheme]=useState('')
    const themefunction=(value)=>{
        settheme(value)

    }
    useEffect(()=>{
       themefunction()

    },[])
    return(
        <>
        <div className="px-5 py-3 w-full h-auto dark:bg-gray-700 bg-slate-100">
            
        <Header
        themeprops={(value)=>themefunction(value)}
        />
        <Subbody/>
        <Subbodytwo
        theme={theme}
        />


        </div>
        
        </>
    )
}    
export default Home