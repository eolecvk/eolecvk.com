import Container from '@/components/Container'
import Link from 'next/link'

export const metadata = {
  title: 'About - Eole Cervenka',
  description: 'Machine Learning Engineer specializing in LLM pipelines, computer vision, and GenAI applications',
}

export default function AboutPage() {
  return (
    <Container maxWidth="narrow" className="py-section-desktop">
      <div className="flex flex-col items-center mb-12">
        <div className="w-48 h-48 mb-8 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 border-4 border-accent/20">
          <img
            src="/eole.webp"
            alt="Eole Cervenka"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center">About Me</h1>
      </div>

      <div className="prose prose-lg dark:prose-invert mx-auto">
        <p>
          I'm a Machine Learning Engineer with 9+ years of experience building AI/ML systems from research to production.
          Currently, I specialize in LLM pipelines, computer vision, and GenAI applications.
        </p>

        <p>
          My work spans from Hollywood studios to enterprise consulting—I've helped transition deepfake research into
          production at Deep Voodoo, built LLM pipelines at lambda.ai that power AI-generated news sites, and developed
          ML solutions across Fortune 500 companies at BCG.
        </p>

        <p>
          One of my recent highlights: my Stable Diffusion inference benchmark was cited by Google Research in their
          Muse paper. I also maintain popular fine-tuning demos on Hugging Face and contribute to the GenAI community
          through open-source projects.
        </p>

        <p>
          When I'm not optimizing model performance, I'm exploring new creative applications of AI—which led me to
          cofound <a href="https://creativerush.me" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-80">CreativeRush</a>,
          a MediaLab dedicated to experimenting with GenAI workflows for film creators.
        </p>

        <h2>Skills & Technologies</h2>
        <div className="flex flex-wrap gap-3 not-prose mb-6">
          {[
            'LLM Pipelines',
            'Computer Vision',
            'GenAI',
            'Python',
            'PyTorch',
            'Stable Diffusion',
            'Model Fine-tuning',
            'Data Engineering',
            'MLOps',
            'GCP/AWS/Azure',
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        <h2>Connect</h2>
        <div className="flex gap-4 items-center not-prose">
          <a
            href="https://github.com/eolecvk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded hover:border-accent transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/eole-cervenka/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded hover:border-accent transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-dark font-semibold rounded hover:opacity-90 transition"
          >
            View Resume
          </Link>
        </div>
      </div>
    </Container>
  )
}
