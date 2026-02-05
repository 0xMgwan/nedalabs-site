'use client'

import { Sprout, Heart, Leaf, Users, TrendingUp, Award } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function JUKUMU() {
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
    <section id="jukumu" className={`py-24 relative overflow-hidden transition-colors ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-full mb-6 ${
              isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
            }`}>
              <Sprout className="w-4 h-4" />
              Regenerative Finance
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              JUKUMU Network
            </h2>
            
            <p className={`text-xl mb-8 leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
              Empowering sustainable community development through regenerative finance. JUKUMU connects financial innovation with environmental and social impact across East Africa.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isDarkMode ? 'bg-white' : 'bg-black'
                }`}>
                  <Heart className={`w-6 h-6 ${isDarkMode ? 'text-black' : 'text-white'}`} />
                </div>
                <div>
                  <h3 className={`font-black mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Community Impact</h3>
                  <p className={isDarkMode ? 'text-white' : 'text-gray-700'}>Supporting local initiatives that create lasting positive change</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isDarkMode ? 'bg-white' : 'bg-black'
                }`}>
                  <Leaf className={`w-6 h-6 ${isDarkMode ? 'text-black' : 'text-white'}`} />
                </div>
                <div>
                  <h3 className={`font-black mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Eco-Friendly Initiatives</h3>
                  <p className={isDarkMode ? 'text-white' : 'text-gray-700'}>Funding sustainable projects that protect our environment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isDarkMode ? 'bg-white' : 'bg-black'
                }`}>
                  <Users className={`w-6 h-6 ${isDarkMode ? 'text-black' : 'text-white'}`} />
                </div>
                <div>
                  <h3 className={`font-black mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Financial Inclusion</h3>
                  <p className={isDarkMode ? 'text-white' : 'text-gray-700'}>Bringing financial services to underserved communities</p>
                </div>
              </div>
            </div>

            <a
              href="#join-jukumu"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all ${
                isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
              }`}
            >
              Join the Movement
              <Sprout className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className={`rounded-2xl p-8 shadow-lg border-2 ${
              isDarkMode ? 'bg-black border-white' : 'bg-white border-black'
            }`}>
              <TrendingUp className={`w-12 h-12 mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              <div className={`text-3xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>$5M+</div>
              <p className={isDarkMode ? 'text-white' : 'text-gray-700'}>Impact Funding</p>
            </div>

            <div className={`rounded-2xl p-8 shadow-lg border-2 mt-8 ${
              isDarkMode ? 'bg-black border-white' : 'bg-white border-black'
            }`}>
              <Users className={`w-12 h-12 mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              <div className={`text-3xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>200+</div>
              <p className={isDarkMode ? 'text-white' : 'text-gray-700'}>Communities Served</p>
            </div>

            <div className={`rounded-2xl p-8 shadow-lg border-2 ${
              isDarkMode ? 'bg-black border-white' : 'bg-white border-black'
            }`}>
              <Leaf className={`w-12 h-12 mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              <div className={`text-3xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>50+</div>
              <p className={isDarkMode ? 'text-white' : 'text-gray-700'}>Green Projects</p>
            </div>

            <div className={`rounded-2xl p-8 shadow-lg border-2 mt-8 ${
              isDarkMode ? 'bg-black border-white' : 'bg-white border-black'
            }`}>
              <Award className={`w-12 h-12 mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              <div className={`text-3xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>100%</div>
              <p className={isDarkMode ? 'text-white' : 'text-gray-700'}>Transparent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
