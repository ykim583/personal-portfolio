import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';
import HomePic from '../assets/Home.jpg';
import Resume from "../assets/Example Resume.pdf";
import { TypeAnimation } from 'react-type-animation';

const hero = () => {
    return (
        <div className="w-full min-h-screen bg-cover bg-center brightness-80" style={{ backgroundImage: `url(${HomePic})` }}>
          <section className='flex flex-col lg:flex-row justify-around items-center pt-28 lg:space-x-60 text-white px-4 lg:px-0'>
            
            <div className='flex flex-col items-center lg:items-start lg:w-1/3'>
              <p className='text-4xl mt-10 pb-5 font-semibold text-slate-300'>Welcome</p>
              
              <TypeAnimation
                sequence={[
                  "Your Personal Website",
                  1000,
                  "COMPSCI 732/SOFTENG 750",
                  1000,
                  "Let's Begin",
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{fontSize: "2em", display: "inline-block", color: "#F5EEF8"}}
                repeat={Infinity}
              />

              <hr></hr>
              <p className='mt-5 text-xl text-slate-300 font-mono text-center lg:text-left'>
              Example Abstraction Content
              As an enthusiastic Web Developer with a penchant for both front-end and back-end technologies, 
              I immerse myself in crafting seamless user experiences and robust server-side applications. 
              My journey in the world of coding began out of sheer curiosity and quickly evolved into a fervent passion, 
              leading me to constantly seek out new technologies and methodologies. 
              I'm keen for design and a systematic approach to problem-solving.
              </p>
            </div>
            
            <div className='flex flex-col items-center lg:w-1/3 pt-20 space-y-5'>
              <p className='text-4xl mb-4'>About Me</p> 
              <p className='text-slate-300 font-mono text-center lg:text-left'>
                You can customise your About me here. This website is built using React + Vite + Tailwind CSS.
                To explore more about me, please click the link below!
              </p>
              <a href={Resume} download="Example Resume" className="bg-white text-black px-10 py-2 rounded-full 
              hover:bg-gray-400 hover:text-white inline-block text-center cursor-pointer">
                Download Resume
              </a>
              <div className='flex pb-5 space-x-4 cursor-pointer'>
                <a href="https://www.facebook.com/">
                  <BsFacebook size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                </a>
                <a href="https://twitter.com/">
                  <BsTwitter size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                </a>
                <a href="https://www.instagram.com/">
                  <BsInstagram size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                </a>
                <a href="https://www.linkedin.com/">
                  <BsLinkedin size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                </a>
              </div>
            </div>
          </section>
        </div>
      );
    }
    
export default hero;