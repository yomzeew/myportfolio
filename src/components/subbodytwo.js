import avater from './images/avatarhead.png'
import signaturewhite from './images/signaturewhite.png'
import signatureblack from './images/signatureblack.png'
import projectOneImage from './images/5.png';
import projectTwoImage from './images/2.png';
import projectThreeImage from './images/3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDartLang, faFlutter, faGithubSquare, faInstagramSquare, faJsSquare, faLaravel, faLinkedinIn, faNodeJs, faReact, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import {faArrowAltCircleLeft,faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import Card from './card';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Subbodytwo=({theme})=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
   const cardarray=[
    {
        link:'https://robofrontend.vercel.app/',
        image:<img src={projectOneImage} className='w-full h-auto object-contain rounded-t-2xl'  />,
        title:'RoboAdvisor',
        message:'Our Trading Platform is a cutting-edge solution designed to meet the needs of both novice and experienced traders. Built with advanced technology and a user-centric approach, the platform offers a robust and intuitive environment for trading a wide range of financial instruments, including stocks, cryptocurrencies, forex, and commodities.'
    },
    {
        link:'https:miresumi.vercel.app',
        image:<img src={projectTwoImage} className='w-full h-auto object-contain rounded-t-2xl'  />,
        title:'Miresumi CV Builder',
        message:'The Resume Builder App is a powerful and intuitive tool designed to help users create professional resumes effortlessly. Built with modern web technologies like React and Express.js the app offers a seamless user experience across both desktop and mobile platforms.'
    },
    {
        link:'https:appychild.uk',
        image:<img src={projectThreeImage} className='w-full h-auto object-contain rounded-t-2xl'  />,
        title:'AppyChild Day Care',
        message:'The Resume Builder App is a powerful and intuitive tool designed to help users create professional resumes effortlessly. Built with modern web technologies like React and Express.js the app offers a seamless user experience across both desktop and mobile platforms.'
    },
   ]
   const cardarraytwo=[
    {
        link:'https://robofrontend.vercel.app/',
        image:<img src={projectOneImage} className='w-full h-auto object-contain rounded-t-2xl'  />,
        title:'Bible App',
        message:'Our Trading Platform is a cutting-edge solution designed to meet the needs of both novice and experienced traders. Built with advanced technology and a user-centric approach, the platform offers a robust and intuitive environment for trading a wide range of financial instruments, including stocks, cryptocurrencies, forex, and commodities.'
    },
    {
        link:'https:miresumi.vercel.app',
        image:<img src={projectTwoImage} className='w-full h-auto object-contain rounded-t-2xl'  />,
        title:'XChangrate App',
        message:'The Resume Builder App is a powerful and intuitive tool designed to help users create professional resumes effortlessly. Built with modern web technologies like React and Express.js the app offers a seamless user experience across both desktop and mobile platforms.'
    },
    {
        link:'https:appychild.uk',
        image:<img src={projectThreeImage} className='w-full h-auto object-contain rounded-t-2xl'  />,
        title:'Datamaxs',
        message:'The Resume Builder App is a powerful and intuitive tool designed to help users create professional resumes effortlessly. Built with modern web technologies like React and Express.js the app offers a seamless user experience across both desktop and mobile platforms.'
    },
   ]
   console.log(cardarray[0].image)
   
    return(
        <>
        <div className="dark:bg-gray-800 w-full  bg-bgimage bg-right-bottom bg-no-repeat bg-blend-multiply justify-around items-center bg-slate-200 dark:text-white text-black px-10 py-10 mt-10">
            <div className='w-full md:justify-around justify-center items-center  flex-col flex md:flex-row'>
            <div className='h-auto '>
                <img src={avater} className='w-56 h-56'/>
                <div className='bg-spotcolor rounded-2xl h-16 opacity-70 w-56 -mt-10 absolute z-50'/>
                <div className='relative z-50 h-16 w-56 -mt-10'>
                    <div className='text-center font-bold'>Oluwasuyi Babayomi</div>
                    <div className='flex items-center  justify-around mt-2'>
                    <FontAwesomeIcon size='xl' icon={faLinkedinIn}  />
                <FontAwesomeIcon size='xl' icon={faInstagramSquare} />
                <FontAwesomeIcon size="xl" icon={faGithubSquare} />
                <FontAwesomeIcon size='xl' icon={faWhatsappSquare} />

                    </div>
              
                </div>

            </div>
            <div className='md:w-1/2 w-full md:mt-0 mt-5'>
                <div>
                <div className="font-thin underline">About ME</div>
                <div className='text-justify'>
                Mobile and Web Developer with 5 Years of Experience
With five years of hands-on experience in mobile and web development, 
I specialize in React Native, JavaScript, Express.js, and Laravel. 
My expertise spans both front-end and back-end technologies, 
allowing me to build full-stack applications that are robust, scalable, 
and user-friendly. Over the past two years, I've also honed my skills in Dart and Flutter, 
developing cross-platform mobile applications with a focus on performance and a seamless user experience. 
I am passionate about creating innovative solutions and continuously expanding my knowledge in emerging technologies.
                </div>
<div className='flex justify-end w-full'>
    <img src={theme==='light'?signatureblack:signaturewhite} />
</div>
                </div>
            </div>

            </div>

            <div className='mt-10 bg-bgimage bg-left-top bg-no-repeat bg-blend-multiply w-full flex justify-center flex-col items-center '>
                <div className='text-center underline text-xl font-thin rounded-2xl bg-spotcolor py-3 px-6'>Skill</div>
                <div className='text-3xl text-center font-bold mt-5'>
                    <p>The skills and technologies</p>
                    <p>Am reall good at</p>
                </div>
                <div className='flex flex-wrap justify-center md:gap-0 gap-5 md:justify-around mt-5 md:w-1/2 w-full'>
                    <div>
                       
                        <FontAwesomeIcon size="3x" icon={faJsSquare} />
                        <div>JavaScript</div>
                    </div>
                    <div>
                       
                        <FontAwesomeIcon size="3x" icon={faReact} />
                        <div>React</div>
                    </div>
                    <div>
                       
                        <FontAwesomeIcon size="3x" icon={faDartLang} />
                        <div>Dart</div>
                    </div>
                    <div>
                       
                        <FontAwesomeIcon size="3x" icon={faNodeJs} />
                        <div>Nodejs</div>
                    </div>
                    <div>
                       
                        <FontAwesomeIcon size="3x" icon={faFlutter} />
                        <div>Flutter</div>
                    </div>
                    <div>
                       
                       <FontAwesomeIcon size="3x" icon={faLaravel} />
                       <div>Laravel</div>
                   </div>
                </div>

            </div>
            <div className='mt-10 bg-bgimage bg-left-top bg-no-repeat bg-blend-multiply w-full flex justify-center flex-col items-center '>
                <div className='text-center underline text-xl font-thin rounded-2xl bg-spotcolor py-3 px-6'>Works</div>
                <div className='text-3xl text-center font-bold mt-5'>
                    <p>Things I ve built so far</p>
                </div>
                <div className='mt-5 flex justify-center w-full mb-5'>
                <div className='dark:bg-gray-900 bg-gray-400 rounded-2xl h-8 opacity-70 w-56  absolute z-50'/>
                <div className='relative z-50 h-8 w-56'>
                    <div className='text-center font-bold'>Web Applictaions</div>
                </div>

                </div>
                <div className='flex w-full md:overflow-hidden overflow-y-hidden overflow-x-scroll md:justify-center gap-5'>
               {cardarray.map((item,index)=>(
                <div className='md:mt-0 mt-3'>
                     <Card
                key={index}
                link={item.link}
                 title={item.title}
                 image={item.image}
                 message={item.message}
                 />
                </div>
               
               ))}
               

                </div>
                <div className='mt-5 flex justify-center gap-2'>
                    {cardarray.map((index,item)=>(
                        <div key={index} className='h-3 w-3 rounded-full dark:bg-yellow-50 bg-gray-900'></div>
                ))}
                  
                </div>
                <div className='mt-5 flex justify-center w-full mb-5'>
                <div className='dark:bg-gray-900 bg-gray-400 rounded-2xl h-8 opacity-70 w-56  absolute z-50'/>
                <div className='relative z-50 h-8 w-56'>
                    <div className='text-center font-bold'>Mobile Applictaions</div>
                </div>

                </div>
                <div className='flex w-full md:overflow-hidden overflow-y-hidden overflow-x-scroll md:justify-center gap-5'>
               {cardarraytwo.map((item,index)=>(
                <div className='md:mt-0 mt-3'>
                     <Card
                key={index}
                link={item.link}
                 title={item.title}
                 image={item.image}
                 message={item.message}
                 />
                </div>
               
               ))}
               

                </div>
                <div className='mt-5 flex justify-center gap-2'>
                    {cardarray.map((index,item)=>(
                        <div key={index} className='h-3 w-3 rounded-full dark:bg-yellow-50 bg-gray-900'></div>
                ))}
                  
                </div>
               



            </div>
        
            

           
            
           


        </div>
        </>
    )

}
export default Subbodytwo