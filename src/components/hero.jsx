import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';
import HomePic from '../assets/Home.jpg';
const hero = () => {
    return(
    <div className="w-full h-screen bg-cover bg-center brightness-75" style={{ backgroundImage: `url(${HomePic})` }}>
        <section className='flex justify-around items-center pt-28 space-x-60 lg:flex-row text-white'>
            <div className='lg:w-1/3'>
                <p className='text-4xl mb-5 text-slate-300'>Welcome</p>
                <h1 className='text-6xl'>Min's Personal Website</h1>
                <hr/>
                <p className='mt-10 text-xl text-slate-300 font-mono'>
                    As a Final Year Software Engineering student at the University of Auckland, 
                    I am deeply committed to continuous skill development and dedicate 
                    my free time to building programming projects. My passion for innovation 
                    drives me to explore creative solutions and deliver exceptional results. 
                    Whether working independently or collaboratively, I bring 
                    high professionalism, adaptability, and effective communication 
                    to foster strong teamwork and successful project outcomes.
                </p>
            </div>
            <div className='lg:w-1/3'>
                <p className='text-4xl mb-4'>About Me</p> 
                <p className='mt-10 text-slate-300 font-mono'>
                    Let's build a classic website app out of it!
                </p>
            </div>
        </section>
    </div>
    )
}

export default hero
