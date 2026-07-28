import React from 'react'
import AucklandNight from '../assets/AucklandNight.jpg'

const contact = () => {
  return (
    <div
      className='relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-5'
      style={{ backgroundImage: `url(${AucklandNight})` }}
    >
        <div className='absolute inset-0 bg-slate-950/60'></div>

        <div className="relative w-full max-w-md bg-slate-900/70 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="mb-6 text-center">
                <p className="mb-1 font-bold text-white text-2xl">
                    Connect With Me
                </p>
                <p className="text-sm text-slate-400">
                    Send a message, I'll get back to you soon.
                </p>
            </div>

            <form action="https://getform.io/f/raeqrrga" method="POST" className="space-y-3">
                <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full rounded-lg bg-slate-950/60 border border-white/10 py-2.5 px-3.5 text-white placeholder:text-slate-500 outline-none focus:border-indigo-400 transition-colors text-sm"
                    name="name"
                    required
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full rounded-lg bg-slate-950/60 border border-white/10 py-2.5 px-3.5 text-white placeholder:text-slate-500 outline-none focus:border-indigo-400 transition-colors text-sm"
                    name="email"
                    required
                />
                <textarea
                    id="textarea"
                    name="textarea"
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full rounded-lg bg-slate-950/60 border border-white/10 py-2.5 px-3.5 text-white placeholder:text-slate-500 outline-none focus:border-indigo-400 transition-colors resize-none text-sm"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full py-2.5 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-400 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </div>
    </div>
  )
}

export default contact