import {FaHouseChimney} from 'react-icons/fa6'
import {Link} from "react-router-dom"

const nav = () => {
    return (
    <>
        <div className="flex items-center justify-between p-7 lg:flex-row bg-gray-600 bg-opacity-30 fixed w-full z-10">
            <div>
                <a href="" className="text-white font-mono text-3xl tracking-wider flex items-center space-x-3"><FaHouseChimney/><span>Min</span></a>
            </div>
            <ul className="flex space-x-3">
                <li className='hover:bg-gray-400 rounded-full px-5 py-2 text-xl text-white'>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className='hover:bg-gray-400 rounded-full px-5 py-2 text-xl text-white'>
                    <Link to={"/about"}>About</Link>
                </li>
                <li className='hover:bg-gray-400 rounded-full px-5 py-2 text-xl text-white'>
                    <Link to={"/project"}>Project</Link>
                </li>
                <li className='hover:bg-gray-400 rounded-full px-5 py-2 text-xl text-white'>
                    <Link to={"/gallery"}>Gallery</Link>
                </li>
                <li className='hover:bg-gray-400 rounded-full px-5 py-2 text-xl text-white'>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    </>
    )
}

export default nav


