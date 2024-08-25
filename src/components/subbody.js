import profileimage from './images/Layer 1.png'

const Subbody=()=>{
    return(
        <>
        <div className="dark:bg-gray-800 w-full flex-col-reverse flex md:flex-row  justify-around items-center bg-slate-200 dark:text-white text-black px-10 py-10 bg-repeat-round rounded-t-2xl mt-3 bg-bgimage bgimagsize  bg-transparent bg-blend-multiply bg-center">
            <div>
            <p className="text-4xl">Hi, I'm </p> 
           <p className="text-5xl font-semibold dark:text-spotcolor text-grey-200 mt-3">Oluwasuyi Babayomi</p> 
           <p className="mt-3 font-thin">I am <span className="dark:text-spotcolor text-grey-200">Web/Mobile Developer</span> with 5 years Experience</p> 
           <div className="mt-3">
            <button className="bg-spotcolor rounded-2xl h-12 px-3">Make Booking</button>
           </div>

            </div>
            <div>
                <div className='rounded-full md:w-96 md:h-96 w-56 h-56 dark:bg-black bg-slate-200 '>
                    <div className='w-32 h-32 bg-spotcolor rounded-full absolute'/>

                     
                <img className='object-contain object-center  rounded-b-full md:w-64 md:h-auto w-56 h-56 relative z-50' src={profileimage}/>
                


                </div>
               
            </div>
           


        </div>
        </>
    )
}
export default Subbody