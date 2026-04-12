'use client'

const experiments = [
  {
    title: 'Character replacement',
    description: 'Real-time face swap and digital makeup for film and TV post-production.',
    video: '/images/lab/homepage/side-by-side-example.mp4',
    poster: '/images/lab/homepage/video-poster.webp',
    align: 'left' as const,
  },
  {
    title: 'Character design',
    description: 'AI-assisted 3D character concepting from text and reference images.',
    video: '/images/lab/homepage/character_design.mp4',
    align: 'right' as const,
  },
  {
    title: 'Character control',
    description: 'Motion transfer and pose-driven animation for digital characters.',
    video: '/images/lab/homepage/character_control.mp4',
    align: 'left' as const,
  },
  {
    title: 'Scene control',
    description: 'AI-driven camera and environment control for animated sequences.',
    video: '/images/lab/homepage/animation_scene_control.mp4',
    poster: '/images/lab/homepage/video-poster.webp',
    align: 'right' as const,
  },
]

export default function LabExperiments() {
  return (
    <section id="lab" className="bg-gray-900 py-section-mobile sm:py-section-desktop pt-[120px]">
      <div className="max-w-[95vw] mx-auto px-0">
        <div className="mt-md mb-lg sm:mb-xl ml-1 sm:ml-2">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-accent flex-shrink-0" />
            <h2 className="font-sans text-lg lg:text-xl text-white leading-relaxed text-left font-light">
              Experiments
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-14">
          {experiments.map((exp) => (
            <div
              key={exp.title}
              className={`relative w-full md:w-[51%] lg:w-[50%] ${
                exp.align === 'right' ? 'md:ml-auto' : 'md:mr-auto'
              }`}
            >
              <div className="relative overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={exp.poster}
                  className="w-full h-auto rounded-sm shadow-md"
                >
                  <source src={exp.video} type="video/mp4" />
                </video>
              </div>
              <div
                className={`md:absolute ${
                  exp.align === 'left'
                    ? 'md:left-full md:top-0 md:ml-6 lg:ml-8'
                    : 'md:right-full md:top-0 md:mr-6 lg:mr-8'
                } mt-4 md:mt-0 md:w-[280px] lg:w-[320px]`}
              >
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-sans font-light text-white ${
                  exp.align === 'right' ? 'text-left md:text-right' : 'text-left'
                }`}>
                  {exp.title}
                </h3>
                <p className={`text-sm sm:text-base font-normal text-gray-400 mt-2 leading-relaxed ${
                  exp.align === 'right' ? 'text-left md:text-right' : 'text-left'
                }`}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
