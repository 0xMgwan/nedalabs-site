'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode))
      document.documentElement.classList.toggle('dark', JSON.parse(savedMode))
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('darkMode', JSON.stringify(newMode))
    document.documentElement.classList.toggle('dark', newMode)
  }

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Developers', href: '#developers' },
    { name: 'About', href: '#about' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-black shadow-sm border-b border-gray-800'
            : 'bg-white shadow-sm border-b border-gray-200'
          : isDarkMode
          ? 'bg-black'
          : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3">
              <img 
                src="/assets/logos/nedalabs.jpg" 
                alt="Neda Labs Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className={`text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Neda Labs
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors font-semibold ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-lg transition-all ${
                isDarkMode
                  ? 'bg-gray-900 text-yellow-400 hover:bg-gray-800'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="#contact"
              className={`px-6 py-2.5 font-semibold transition-colors ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              Contact
            </a>
            <a
              href="https://www.nedapay.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all ${
                isDarkMode
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all ${
                isDarkMode
                  ? 'bg-gray-900 text-yellow-400'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${
            isDarkMode
              ? 'bg-black border-gray-800'
              : 'bg-white border-gray-200'
          }`}>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors font-semibold ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-black'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className={`font-semibold transition-colors ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="https://www.nedapay.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 rounded-lg font-bold text-center ${
                  isDarkMode
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
