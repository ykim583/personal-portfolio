import {FaHouseChimney} from 'react-icons/fa6'

const nav = () => {
    return (
    <>
        <div className="flex items-center justify-between p-7 lg:flex-row bg-white bg-opacity-30 fixed w-full z-10">
            <div className>
                <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center space-x-3"><FaHouseChimney/><span>Min</span></a>
            </div>
            <div className="space-x-3">
                <a href="#" className="hover:bg-gray-400 rounded-full px-5 py-2 text-xl text-white">Home</a>
                <a href="#" className="hover:bg-gray-400 rounded-full px-5 py-2 text-xl text-white">About</a>
                <a href="#" className="hover:bg-gray-400 rounded-full px-5 py-2 text-xl text-white">Projects</a>
                <a href="#" className="hover:bg-gray-400 rounded-full px-5 py-2 text-xl text-white">Gallery</a>
                <a href="#" className="hover:bg-gray-400 rounded-full px-5 py-2 text-xl text-white">Contact</a>
            </div>
        </div>
    </>
    )
}

export default nav

