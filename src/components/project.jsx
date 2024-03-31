import React from 'react'
import por1 from '../assets/1.jpeg'
import por2 from '../assets/2.jpg'
import por3 from '../assets/3.png'
import por4 from '../assets/4.png'
import {AiFillGithub} from 'react-icons/ai'
import {HiAcademicCap} from "react-icons/hi";

export const project = () => {
  return (
    <div className='pt-28 min-h-[115vh] bg-gradient-to-b from-white to-gray-700'>
      <div className='px-7 grid sm:grid-cols-2 gap-6'>

        <div className='flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-10 sm:pr-5'>
          <a href="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-ykim583" className='group h-48 sm:h-80 col-span-3'>
            <img src={por1} alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-105 rounded-lg'/>
          </a>
          <div className='flex flex-col col-span-5 p-4 mx-auto my-auto'>
            <h2 className='text-gray-200 font-bold text-xl leading-10'>Front End + UX/UI</h2>
            <p className='text-black'>This is a Project using MERN STACK and creating React app <AiFillGithub size={50} className='mx-auto' color='#FFFFFF'/></p>
          </div>
        </div>

        <div className='flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-10 sm:pr-5'>
          <a href="https://www.360internationalblog.com/ambassador/youngmin-kim/" className='group h-48 sm:h-80 col-span-3'>
            <img src={por2} alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-105 rounded-lg'/>
          </a>
          <div className='flex flex-col col-span-5 p-4 mx-auto my-auto'>
            <h2 className='text-gray-200 font-bold text-xl leading-10'>Digital Ambassador</h2>
            <p className='text-black'>This is a Project for promoting exchange university as an ambassador <HiAcademicCap size={50} className='mx-auto' color='#FFFFFF'/></p>
          </div>
        </div>

        <div className='flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-10 sm:pr-5'>
          <a href="https://github.com/ykim583/FullStackWebsite" className='group h-48 sm:h-80 col-span-3'>
            <img src={por3} alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-105 rounded-lg'/>
          </a>
          <div className='flex flex-col col-span-5 p-4 mx-auto my-auto'>
            <h2 className='text-gray-200 font-bold text-xl leading-10'>Full Stack Development</h2>
            <p className='text-black'>This is a Project using PHP,MYSQL,HTML academic project done in exchange <AiFillGithub size={50} className='mx-auto' color='#FFFFFF'/></p>
          </div>
        </div>

        <div className='flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-10 sm:pr-5'>
          <a href="https://github.com/ykim583/First2DGame" className='group h-48 sm:h-80 col-span-3'>
            <img src={por4} alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-105 rounded-lg'/>
          </a>
          <div className='flex flex-col col-span-5 p-4 mx-auto my-auto'>
            <h2 className='text-gray-200 font-bold text-xl leading-10'>Game Development</h2>
            <p className='text-black'>This is a Project done using Java for game development <AiFillGithub size={50} className='mx-auto' color='#FFFFFF'/></p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default project
