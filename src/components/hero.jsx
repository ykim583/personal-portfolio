import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';
import HomePic from '../assets/Home.jpg';
import Resume from "../assets/CV_2024.pdf";

const hero = () => {
    return(
    <div className="w-full h-screen bg-cover bg-center brightness-80" style={{ backgroundImage: `url(${HomePic})` }}>
        <section className='flex justify-around items-center pt-28 space-x-60 lg:flex-row text-white'>
            <div className='lg:w-1/3'>
                <p className='text-4xl mb-5 text-slate-300'>Welcome</p>
                <h1 className='text-6xl'>Min's Personal Website</h1>
                <hr/>
                <p className='mt-5 text-xl text-slate-300 font-mono'>
                    As a Final Year Software Engineering student at the University of Auckland, 
                    I am deeply committed to continuous skill development and dedicate 
                    my free time to building programming projects. My passion for innovation 
                    drives me to explore creative solutions and deliver exceptional results. 
                    Whether working independently or collaboratively, I bring 
                    high professionalism, adaptability, and effective communication 
                    to foster strong teamwork and successful project outcomes.
                </p>
            </div>
            <div className='lg:w-1/3 pt-20'>
                <p className='text-4xl mb-4'>About Me</p> 
                <p className='text-slate-300 font-mono'>
                    Building a world class website using React + Vite + Tailwind CSS
                    To explore more about me, please click
                    the link below!
                </p>
                <a href={Resume} download="Min's Resume" className="bg-white text-black px-10 py-2 my-3 rounded-full 
                hover:bg-gray-400 hover:text-white inline-block text-center cursor-pointer">
                Download Resume
                </a>

                <div className='flex mt-5 space-x-4 cursor-pointer'>
                    <BsFacebook size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                    <BsTwitter size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                    <BsInstagram size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                    <BsLinkedin size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                </div>
            </div>
        </section>
    </div>
    )
}

export default hero
