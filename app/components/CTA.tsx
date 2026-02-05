'use client'

import { ArrowRight, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CTA() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    setIsDarkMode(savedMode ? JSON.parse(savedMode) : false)
    
    const handleStorage = () => {
      const mode = localStorage.getItem('darkMode')
      setIsDarkMode(mode ? JSON.parse(mode) : false)
    }
    
    window.addEventListener('storage', handleStorage)
    const interval = setInterval(handleStorage, 100)
    
    return () => {
      window.removeEventListener('storage', handleStorage)
      clearInterval(interval)
    }
  }, [])

  return (
    <section id="get-started" className={`py-24 relative overflow-hidden transition-colors ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Ready to Transform Your Financial Operations?
        </h2>
        
        <p className={`text-xl mb-12 leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          Join thousands of businesses and developers building the future of finance with Neda Labs
        </p>

        <div className={`text-sm mb-8 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
          Explore our products and get started today
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://www.nedapay.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 ${
              isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:support@nedapay.xyz"
            className={`w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 flex items-center justify-center gap-2 ${
              isDarkMode
                ? 'bg-black text-white border-white'
                : 'bg-white text-black border-black'
            }`}
          >
            <Mail className="w-5 h-5" />
            Contact Sales
          </a>
        </div>

        <div className={`flex flex-wrap items-center justify-center gap-8 text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
