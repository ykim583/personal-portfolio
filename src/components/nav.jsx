import {FaHouseChimney} from 'react-icons/fa6'
import {Link} from "react-router-dom"

const nav = () => {
    return (
    <>
        <div className="flex items-center justify-between p-7 lg:flex-row bg-gray-600 bg-opacity-30 fixed w-full z-10">
            <div>
                <li className="text-2xl lg:text-3xl text-white font-mono tracking-wider flex items-center space-x-3"><FaHouseChimney/><span><Link to={"/"}>Min</Link></span></li>
            </div>
            <ul className="flex lg:space-x-3">
                <li className='hover:bg-gray-400 rounded-full px-3 py-1 sm:px-5 sm:py-2 text-lg sm:text-xl text-white'>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className='hover:bg-gray-400 rounded-full px-3 py-1 sm:px-5 sm:py-2 text-lg sm:text-xl text-white'>
                    <Link to={"/project"}>Project</Link>
                </li>
                <li className='hover:bg-gray-400 rounded-full px-3 py-1 sm:px-5 sm:py-2 text-lg sm:text-xl text-white'>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    </>
    )
}

export default nav


