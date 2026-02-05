'use client'

import { Coins, Zap, Code, Network, Users, Globe, TrendingUp, Shield, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const products = [
  {
    icon: Coins,
    title: 'BOT-Regulated Stablecoins',
    description: 'Bank of Tanzania regulated digital currency providing stability and trust for East African markets.',
    features: ['Full regulatory compliance', '1:1 TZS backing', 'Instant settlements', 'Transparent reserves'],
    link: 'https://www.ntzs.co.tz/',
  },
  {
    icon: Zap,
    title: 'Instant Payments',
    description: 'Lightning-fast payment infrastructure for businesses and individuals across borders.',
    features: ['Real-time processing', 'Multi-currency support', 'Low transaction fees', '99.99% uptime'],
    link: 'https://www.nedapay.xyz/',
  },
  {
    icon: Code,
    title: 'Developer APIs',
    description: 'Comprehensive API suite for global payouts and financial integrations.',
    features: ['RESTful & GraphQL APIs', 'Comprehensive documentation', 'Sandbox environment', 'Webhook support'],
    link: 'https://nedapayplus.xyz/docs',
  },
  {
    icon: Network,
    title: 'JUKUMU Network',
    description: 'Regenerative finance platform supporting sustainable community impact and financial inclusion.',
    features: ['Community impact focus', 'Eco-friendly initiatives', 'Financial inclusion', 'Transparent impact tracking'],
    link: '#jukumu',
  }
]

const stats = [
  { icon: Users, value: '50K+', label: 'Active Users' },
  { icon: Globe, value: '15+', label: 'Countries' },
  { icon: TrendingUp, value: '$100M+', label: 'Transaction Volume' },
  { icon: Shield, value: '100%', label: 'Secure & Compliant' }
]

export default function Products() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedMode = localStorage.getItem('darkMode')
    setIsDarkMode(savedMode ? JSON.parse(savedMode) : false)
    
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark')
      setIsDarkMode(isDark)
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    
    return () => observer.disconnect()
  }, [])

  if (!mounted) return null

  return (
    <section id="products" className={`py-24 transition-colors ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 text-sm font-bold rounded-full mb-4 ${
            isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
          }`}>
            Our Products
          </span>
          <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            Building the Future of Finance
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-white' : 'text-gray-700'
          }`}>
            Comprehensive digital financial solutions designed for the modern economy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 overflow-hidden ${
                  isDarkMode
                    ? 'bg-black border-white'
                    : 'bg-white border-black'
                }`}
              >
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    isDarkMode ? 'bg-white' : 'bg-black'
                  }`}>
                    <Icon className={`w-8 h-8 ${isDarkMode ? 'text-black' : 'text-white'}`} />
                  </div>

                  <h3 className={`text-2xl font-black mb-3 tracking-tight ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>
                    {product.title}
                  </h3>

                  <p className={`mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-700'
                  }`}>
                    {product.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-700'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                          isDarkMode ? 'bg-white' : 'bg-black'
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={product.link}
                    target={product.link.startsWith('http') ? '_blank' : undefined}
                    rel={product.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center font-bold group-hover:gap-2 transition-all ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    Learn more
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl p-12 ${
          isDarkMode
            ? 'bg-black border-2 border-white'
            : 'bg-black'
        }`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <Icon className={`w-8 h-8 mx-auto mb-4 ${isDarkMode ? 'text-white' : 'text-white'}`} />
                <div className={`text-4xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-white'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-300'}`}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
