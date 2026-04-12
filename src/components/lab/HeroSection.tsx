'use client'

export default function HeroSection() {
  return (
    <section className="bg-dark pt-12 sm:pt-16 pb-0">
      <div className="max-w-[95vw] mx-auto px-0 w-full relative z-10 mb-[-80px]">
        {/* Logo */}
        <div className="mb-6 ml-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl text-accent">&gt;</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-light text-white">
              Creative<span className="italic">Rush</span>
            </h2>
            <div className="w-2.5 h-5 sm:w-3 sm:h-6 bg-accent ml-0.5" />
          </div>
        </div>

        {/* Tagline */}
        <div className="bg-accent px-4 sm:px-6 py-5 sm:py-8 rounded-sm inline-block sm:min-w-[500px] lg:min-w-[650px]">
          <h1 className="font-sans text-2xl sm:text-4xl lg:text-5xl text-dark leading-relaxed text-left font-light">
            Cinematic Vision Meets AI
          </h1>
          <p className="font-sans text-sm sm:text-lg lg:text-xl text-dark/80 mt-2 sm:mt-3 text-left font-light max-w-xl">
            A media lab exploring generative AI tools for film production — from character design to scene control.
          </p>
        </div>
      </div>
    </section>
  )
}
