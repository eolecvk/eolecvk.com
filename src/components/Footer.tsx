export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-content-wide mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Eole Cervenka
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/eolecvk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eole-cervenka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
