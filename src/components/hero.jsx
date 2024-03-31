import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';
import HomePic from '../assets/Home.jpg';
import Resume from "../assets/CV_2024.pdf";

const hero = () => {
    return (
        <div className="w-full min-h-screen bg-cover bg-center brightness-80" style={{ backgroundImage: `url(${HomePic})` }}>
          <section className='flex flex-col lg:flex-row justify-around items-center pt-28 lg:space-x-60 text-white px-4 lg:px-0'>
            
            <div className='flex flex-col items-center lg:items-start lg:w-1/3'>
              <p className='text-4xl mb-5 text-slate-300'>Welcome</p>
              <h1 className='text-6xl text-center lg:text-left'>Min's Personal Website</h1>
              <hr/>
              <p className='mt-5 text-xl text-slate-300 font-mono text-center lg:text-left'>
                As a Final Year Software Engineering student at the University of Auckland, 
                I am deeply committed to continuous skill development and dedicate 
                my free time to building programming projects. My passion for innovation 
                drives me to explore creative solutions and deliver exceptional results. 
                Whether working independently or collaboratively, I bring 
                high professionalism, adaptability, and effective communication 
                to foster strong teamwork and successful project outcomes.
              </p>
            </div>
            
            <div className='flex flex-col items-center lg:w-1/3 pt-20 space-y-5'>
              <p className='text-4xl mb-4'>About Me</p> 
              <p className='text-slate-300 font-mono text-center lg:text-left'>
                Building a better working world. This website is built using React + Vite + Tailwind CSS.
                To explore more about me, please click the link below!
              </p>
              <a href={Resume} download="Min's Resume" className="bg-white text-black px-10 py-2 rounded-full 
              hover:bg-gray-400 hover:text-white inline-block text-center cursor-pointer">
                Download Resume
              </a>
              <div className='flex mt-5 space-x-4 cursor-pointer'>
                <a href="https://www.facebook.com/">
                  <BsFacebook size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                </a>
                <a href="https://twitter.com/?lang=en-nz">
                  <BsTwitter size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                </a>
                <a href="https://www.instagram.com/">
                  <BsInstagram size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                </a>
                <a href="https://www.linkedin.com/in/kim-youngmin/">
                  <BsLinkedin size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                </a>
              </div>
            </div>
          </section>
        </div>
      );
    }
    
export default hero;