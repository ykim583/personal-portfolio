import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import HomePic from '../assets/Home.jpg';
import Resume from "../assets/Youngmin Kim Resume.pdf";

import { TypeAnimation } from 'react-type-animation';

const hero = () => {
    return (
        <div className="w-full min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${HomePic})` }}>
          <div className="absolute inset-0 bg-slate-950/60"></div>
          <section className='relative flex flex-col lg:flex-row justify-around items-center pt-32 pb-16 lg:space-x-40 text-white px-6 lg:px-0'>
            
            <div className='flex flex-col items-center lg:items-start lg:w-1/3'>
              <p className='text-4xl pb-5 font-semibold text-slate-200'>Welcome</p>
              
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1000,
                  "Tech Consultant & Developer",
                  1000,
                  "Based in Auckland, NZ",
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{fontSize: "1.6em", display: "inline-block", color: "#A5B4FC"}}
                repeat={Infinity}
              />

              <hr className="w-16 border-indigo-400/50 my-5"/>
              <p className='text-lg sm:text-xl text-slate-300 text-center lg:text-left leading-relaxed bg-white/5 lg:bg-transparent border border-white/10 lg:border-0 rounded-2xl lg:rounded-none p-5 lg:p-0 backdrop-blur-sm lg:backdrop-blur-none'>
              I enjoy building things that are both technically sound and genuinely useful —
              from full-stack web applications to research-driven engineering projects.
              I care about understanding a problem properly before reaching for a solution,
              and I'm always looking for the next thing worth building.
              </p>
            </div>
            
            <div className='flex flex-col items-center lg:items-start lg:w-1/3 space-y-5 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mt-10 lg:mt-40'>
              <p className='text-3xl font-semibold text-indigo-300'>About Me</p> 
              <p className='text-slate-300 text-center lg:text-left leading-relaxed'>
                Outside of code, I enjoy exploring new technologies and staying involved in
                community initiatives. Take a look through my projects below, or feel free
                to reach out — I'm always happy to chat.
              </p>
              <a href={Resume} download="Youngmin Kim Resume" className="bg-indigo-500 text-white px-10 py-2.5 rounded-full 
              hover:bg-indigo-400 active:scale-95 transition-all inline-block text-center cursor-pointer font-medium self-center lg:self-start">
                Download Resume
              </a>
              <div className='flex pb-2 pt-2 space-x-4 cursor-pointer self-center lg:self-start'>
                <a href="https://www.linkedin.com/in/kim-youngmin/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <BsLinkedin size={30} className='border-2 border-white/30 hover:border-indigo-400 hover:text-indigo-400 active:scale-90 rounded-full p-1 hover:scale-110 transition-all'/>
                </a>
                <a href="https://github.com/ykim583" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <AiFillGithub size={30} className='border-2 border-white/30 hover:border-indigo-400 hover:text-indigo-400 active:scale-90 rounded-full p-1 hover:scale-110 transition-all'/>
                </a>
                <a href="https://www.instagram.com/mins_chocolate?utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <BsInstagram size={30} className='border-2 border-white/30 hover:border-indigo-400 hover:text-indigo-400 active:scale-90 rounded-full p-1 hover:scale-110 transition-all'/>
                </a>
              </div>
            </div>
          </section>
        </div>
      );
    }
    
export default hero;