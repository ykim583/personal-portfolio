const nav = () => {
    return (
    <>
        <div className="flex items-center justify-between p-10 lg:flex-row">
            <div>
                <a href="#" className="text-white font-mono text-3xl tracking-wider flex items center">Min</a>
            </div>
            <div className="space-x-4">
                <a href="#" className="hover:bg-indigo-300 rounded-full px-5 py-2 text-xl text-white">Home</a>
                <a href="#" className="hover:bg-indigo-300 rounded-full px-5 py-2 text-xl text-white">About</a>
                <a href="#" className="hover:bg-indigo-300 rounded-full px-5 py-2 text-xl text-white">Projects</a>
                <a href="#" className="hover:bg-indigo-300 rounded-full px-5 py-2 text-xl text-white">Gallery</a>
                <a href="#" className="hover:bg-indigo-300 rounded-full px-5 py-2 text-xl text-white">Contact</a>
            </div>
        </div>
    </>
    )
}

export default nav