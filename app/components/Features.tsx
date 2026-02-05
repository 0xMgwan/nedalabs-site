'use client'

import { Lock, Zap, Globe, BarChart3, Headphones as HeadphonesIcon, Shield } from 'lucide-react'
import { useState, useEffect } from 'react'

const features = [
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: 'Enterprise-level encryption and compliance with international security standards.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process transactions in milliseconds with our optimized infrastructure.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with partners and customers across 15+ countries seamlessly.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Monitor transactions and performance with comprehensive dashboards.'
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Full compliance with local and international financial regulations.'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Expert support team available round the clock to assist you.'
  }
]

export default function Features() {
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
    <section className={`py-24 transition-colors ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 text-sm font-bold rounded-full mb-4 ${
            isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
          }`}>
            Why Choose Neda Labs
          </span>
          <h2 className={`text-4xl md:text-5xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Built for Trust & Performance
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            Enterprise-grade infrastructure designed for the demands of modern finance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group p-8 rounded-xl border-2 hover:shadow-xl transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-black border-white hover:border-gray-300'
                    : 'bg-white border-black hover:border-gray-700'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  isDarkMode ? 'bg-white' : 'bg-black'
                }`}>
                  <Icon className={`w-5 h-5 ${isDarkMode ? 'text-black' : 'text-white'}`} />
                </div>
                
                <h3 className={`text-xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {feature.title}
                </h3>
                
                <p className={`leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
