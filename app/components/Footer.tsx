'use client'

import { MapPin, Mail, Phone, Twitter, Linkedin, Github } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
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
    <footer className={`pt-16 pb-8 border-t-2 transition-colors ${
      isDarkMode ? 'bg-black text-white border-white' : 'bg-black text-white border-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/assets/logos/nedalabs.jpg" 
                alt="Neda Labs Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-2xl font-black tracking-tight">Neda Labs</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building the future of finance in East Africa with cutting-edge digital solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4 tracking-tight">Products</h3>
            <ul className="space-y-3">
              <li><a href="https://www.ntzs.co.tz/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">nTZS Stablecoin</a></li>
              <li><a href="https://www.nedapay.xyz/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Instant Payments</a></li>
              <li><a href="https://nedapayplus.xyz/docs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Developer APIs</a></li>
              <li><a href="#jukumu" className="text-gray-300 hover:text-white transition-colors">JUKUMU Network</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4 tracking-tight">Resources</h3>
            <ul className="space-y-3">
              <li><a href="https://nedapayplus.xyz/docs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="https://nedapayplus.xyz/docs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="https://nedapayplus.xyz/docs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Guides</a></li>
              <li><a href="mailto:support@nedapay.xyz" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4 tracking-tight">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:support@nedapay.xyz" className="hover:text-white transition-colors">
                  support@nedapay.xyz
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+255123456789" className="hover:text-white transition-colors">
                  +255 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Neda Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#compliance" className="text-gray-400 hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
