import React from 'react'

const contact = () => {
  return (
    <div className='w-full min-h-screen pt-28 bg-gradient-to-b from-white to-gray-700'>
        <div className="mx-auto max-w-3xl py-7 bg-gray-400 rounded-3xl">
            <div>
                <div className="mb-4 text-center sm:text-center">
                    <p
                        className="mb-4 font-bold text-white text-3xl sm:text-5xl">
                        Connect With me
                    </p>
                    <p className="max-w-3xl text-xl font-bold text-slate-300">
                        Contact Information Field
                    </p>
                </div>
            </div>

            <div className="p-5 text-center" id="form">
                    <h2 className="mb-2 text-2xl font-bold text-gray-300">Want to know about me?</h2>
                    <form action="https://getform.io/f/raeqrrga" method="POST">
                        <div>
                            <div className="sm:mb-4">
                                <div className="sm:mb-4">
                                    <input type="text" id="name" placeholder="Your name" className="mb-2 w-10/12 rounded-md border border-gray-400 py-2 pl-2 sm:mb-0" name="name" required/>
                                </div>
                                <div className="sm:mb-4">
                                    <input type="email" id="email" placeholder="Your email address" className="mb-2 w-10/12 rounded-md border border-gray-400 py-2 pl-2 sm:mb-0" name="email" required/>
                                </div>
                            </div>
                            <div className="sm:mb-2">
                                <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-10/12 rounded-md border border-gray-400 py-2 pl-2 sm:mb-0" required></textarea>
                            </div>
                            <div className="sm:mb-2">
                                <button type="submit" className="px-20 py-3 bg-white text-black rounded-full">Send Message</button>
                            </div>
                        </div>
                    </form>
              </div>
        </div>
    </div>
  )
}

export default contact