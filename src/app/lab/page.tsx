'use client'

import { useEffect } from 'react'
import HeroSection from '@/components/lab/HeroSection'
import LabExperiments from '@/components/lab/LabExperiments'
import CompanyLogos from '@/components/lab/CompanyLogos'

const team = [
  {
    name: 'Sai Pradeep Medarametla',
    role: 'Business & Venture',
    photo: '/images/lab/team/pradeep.webp',
    bio: 'Startup builder and investor, deployed over $50M in global consumer tech capital scaling ventures from seed to growth.',
  },
  {
    name: 'Eole Cervenka',
    role: 'AI / ML Engineering',
    photo: '/images/lab/team/eole.webp',
    bio: 'AI/ML Engineer shipping production-ready generative AI for VFX — from model development to GPU infrastructure.',
  },
  {
    name: 'Ajith Gonamanda',
    role: 'Film & Creative Direction',
    photo: '/images/lab/team/ajith.webp',
    bio: 'Filmmaker and storyteller crafting human-centered narratives that bridge culture, empathy, and innovation.',
  },
]

export default function LabPage() {
  useEffect(() => {
    document.body.classList.add('lab-dark')
    return () => document.body.classList.remove('lab-dark')
  }, [])

  return (
    <div className="bg-dark">
      <HeroSection />
      <LabExperiments />

      {/* Team Section */}
      <section id="team" className="bg-dark py-section-mobile sm:py-section-desktop">
        <div className="max-w-[95vw] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-lg sm:mb-xl ml-1 sm:ml-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-accent flex-shrink-0" />
            <h2 className="font-sans text-lg lg:text-xl text-white leading-relaxed text-left font-light">
              Team
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8 items-center">
            {team.map((member) => (
              <div key={member.name} className="w-full md:w-[76.5%] lg:w-[56.67%]">
                <div className="bg-gray-800/50 p-md sm:p-lg rounded-sm border border-gray-700 flex flex-col md:flex-row gap-md md:gap-lg items-start">
                  <div className="w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 flex-shrink-0 rounded-sm overflow-hidden border border-gray-600">
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-base sm:text-lg font-sans font-medium text-white text-left">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-accent font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="font-sans font-light text-sm text-gray-400 leading-relaxed text-left">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Previously At */}
          <div className="mt-xl sm:mt-2xl max-w-content-default mx-auto">
            <div className="text-center mb-md sm:mb-lg">
              <h3 className="text-sm sm:text-base font-sans font-light text-gray-500 uppercase tracking-wider">
                Previously at
              </h3>
            </div>
            <CompanyLogos />
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section className="bg-dark py-section-mobile sm:py-section-desktop border-t border-gray-800">
        <div className="max-w-content-narrow mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-light text-white mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-gray-400 font-light mb-8 max-w-md mx-auto">
            We work with filmmakers, studios, and creative teams exploring AI for production.
          </p>

          <a
            href="mailto:contact@creativerush.me"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-dark font-semibold rounded hover:opacity-90 transition"
          >
            Get in touch
          </a>

          <div className="flex items-center justify-center gap-6 mt-8">
            <a href="https://x.com/CreativeRushHQ" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="X">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </a>
            <a href="https://instagram.com/creativerushhq" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
            <a href="https://youtube.com/@CreativeRushHQ" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
