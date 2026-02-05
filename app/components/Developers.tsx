'use client'

import { Code, Terminal, BookOpen, Zap, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Developers() {
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
    <section id="developers" className={`py-24 relative overflow-hidden transition-colors ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-full mb-6 ${
              isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
            }`}>
              <Code className="w-4 h-4" />
              For Developers
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Build with Powerful APIs
            </h2>
            
            <p className={`text-xl mb-8 leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
              Integrate global payout infrastructure into your application with our comprehensive API suite. Built for developers, by developers.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'RESTful & GraphQL APIs',
                'Comprehensive documentation',
                'Sandbox environment for testing',
                'Webhook support for real-time events',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                  <span className={isDarkMode ? 'text-white' : 'text-gray-700'}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://nedapayplus.xyz/docs"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:shadow-lg ${
                  isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                View Documentation
              </a>
              <a
                href="https://www.nedapay.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:shadow-lg border-2 ${
                  isDarkMode
                    ? 'bg-black text-white border-white'
                    : 'bg-white text-black border-black'
                }`}
              >
                <Zap className="w-5 h-5" />
                Get Started
              </a>
            </div>
          </div>

          <div className={`rounded-2xl p-8 border-2 shadow-lg ${
            isDarkMode ? 'bg-black border-white' : 'bg-white border-black'
          }`}>
            <div className="flex items-center gap-2 mb-6">
              <Terminal className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              <span className={`text-sm font-mono ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Quick Start Example</span>
            </div>

            <pre className="text-sm font-mono overflow-x-auto">
              <code className={isDarkMode ? 'text-green-400' : 'text-green-600'}>
{`// Initialize Neda Labs SDK
import { NedaLabs } from '@nedalabs/sdk';

const neda = new NedaLabs({
  apiKey: process.env.NEDA_API_KEY
});

// Create a payout
const payout = await neda.payouts.create({
  amount: 50000,
  currency: 'TZS',
  type: 'mobile_money',
  phone: '+255712345678'
});

console.log(payout.status);
// => "processing"`}
              </code>
            </pre>

            <div className={`mt-6 pt-6 border-t-2 ${isDarkMode ? 'border-white' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between text-sm">
                <span className={isDarkMode ? 'text-white' : 'text-gray-600'}>Response time</span>
                <span className={`font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>~150ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
