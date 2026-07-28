import { useState } from 'react'
import SeoulNight from '../assets/SeoulNight.jpg'
import ThesisPdf from '../assets/Youngmin_Kim_Graduation_Thesis.pdf'
import { AiFillGithub } from 'react-icons/ai'
import { FaGlobe, FaAward } from 'react-icons/fa'
import { HiDocumentText, HiX } from 'react-icons/hi'

const PROJECTS = [
  {
    index: '01',
    title: '360° Digital Exchange Ambassador',
    description: "Represented the University of Auckland as a Digital Exchange Ambassador, sharing my exchange experience at Korea University and supporting prospective students through their study abroad journey.",
    tags: ['Leadership', 'Global Exchange'],
    type: 'link',
    href: 'https://www.360internationalblog.com/ambassador/youngmin-kim/',
    Icon: FaGlobe,
  },
  {
    index: '02',
    title: 'Smart Inventory Management System',
    description: "Part IV research project comparing BLE and UWB technology for indoor asset tracking in university labs, paired with a companion iOS app.",
    tags: ['Research', 'IoT', 'Swift'],
    type: 'modal',
    Icon: HiDocumentText,
  },
  {
    index: '03',
    title: "Commissioner's Award, Military Manpower Administration",
    description: "Recognised with the Commissioner Award from the Ministry of Korean Military Admission during my service in the Republic of Korea Army.",
    tags: ['Award', '2025'],
    type: 'link',
    href: 'https://www.worldkorean.net/news/articleView.html?idxno=56137',
    Icon: FaAward,
  },
  {
    index: '04',
    title: 'Personal Portfolio Website',
    description: "This very site — a personal portfolio built with React, Vite, and Tailwind CSS, open-sourced for anyone curious how it's put together.",
    tags: ['React', 'Vite', 'Tailwind'],
    type: 'link',
    href: 'https://github.com/ykim583/personal-portfolio',
    Icon: AiFillGithub,
  },
]

export const project = () => {
  const [isThesisOpen, setIsThesisOpen] = useState(false)

  return (
    <div className='relative min-h-screen bg-cover bg-center pt-24' style={{ backgroundImage: `url(${SeoulNight})` }}>
      <div className='absolute inset-0 bg-slate-950/75'></div>

      <div className='relative py-10 px-5 sm:px-7'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch'>
          {PROJECTS.map(({ index, title, description, tags, type, href, Icon }) => {
            const cardContent = (
              <>
                <div className='flex items-center justify-between mb-4'>
                  <span className='font-mono text-3xl sm:text-4xl font-bold text-indigo-400/30 leading-none'>{index}</span>
                  <Icon size={26} className='text-indigo-400 shrink-0' />
                </div>
                <h2 className='text-white font-bold text-xl leading-8 mb-2'>{title}</h2>
                <p className='text-slate-300 text-sm leading-relaxed mb-4'>{description}</p>
                <div className='flex flex-wrap gap-2 mt-auto pt-2'>
                  {tags.map((tag) => (
                    <span key={tag} className='text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 rounded-full px-3 py-1'>
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )

            const cardClass = 'group flex flex-col text-left rounded-2xl bg-slate-900/70 backdrop-blur-sm border border-white/10 overflow-hidden z-10 shadow-xl transition-all duration-200 hover:border-indigo-400/40 hover:shadow-indigo-500/10 hover:-translate-y-1 active:scale-[0.98] active:border-indigo-400/40 p-6 sm:p-7 h-full w-full cursor-pointer'

            if (type === 'modal') {
              return (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsThesisOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setIsThesisOpen(true)
                    }
                  }}
                  className={cardClass}
                >
                  {cardContent}
                </div>
              )
            }

            return (
              <a key={index} href={href} target="_blank" rel="noreferrer" className={cardClass}>
                {cardContent}
              </a>
            )
          })}
        </div>
      </div>

      {isThesisOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6'
          onClick={() => setIsThesisOpen(false)}
        >
          <div
            className='relative w-full h-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-white/10'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsThesisOpen(false)}
              aria-label="Close"
              className='absolute top-3 right-3 z-10 flex items-center justify-center h-10 w-10 rounded-full bg-slate-800 text-white active:bg-slate-700 sm:hover:bg-slate-700 transition-colors'
            >
              <HiX size={22} />
            </button>
            <iframe
              src={ThesisPdf}
              title="A Smart Inventory Management System with Asset Tracking"
              className='w-full h-full'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default project