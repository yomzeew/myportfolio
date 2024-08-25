import projectone from './images/5.png'
const Card=({key,link,title,image,message,})=>{
    return(
        <>
       
        <a href={link} target="_blank">
        <div className="w-64 h-80 rounded-2xl flex flex-col">
            <div className="rounded-t-2xl">
                {image}

            </div>
            <div className='dark:bg-gray-600 bg-slate-300 flex-1 rounded-b-2xl'>
                <p className='font-semibold text-lg px-3 dark:text-spotcolor text-black'>{title}</p>
                <p className='text-xs text-justify px-3'>{message}</p>

            </div>

        </div>
        </a>
        </>
    )
}
export default Card