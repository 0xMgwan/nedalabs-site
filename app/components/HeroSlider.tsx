'use client'

import { useState, useEffect } from 'react'
import { Coins, Zap, Code, Network, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    icon: Coins,
    subtitle: 'BOT-Regulated',
    title: "nTZS Tanzania's First Regulated Stablecoin",
    description: 'Secure, compliant stablecoins regulated by the Bank of Tanzania. Bringing stability and trust to digital payments across East Africa.',
    cta: 'Explore nTZS',
    link: 'https://www.ntzs.co.tz/',
    image: '/assets/logos/ntzs.jpg'
  },
  {
    icon: Zap,
    subtitle: 'NEDApay',
    title: 'Lightning-Fast Transactions',
    description: 'Send and receive payments instantly across borders. Low fees, high speed, and complete transparency for businesses and individuals.',
    cta: 'Start Sending',
    link: 'https://www.nedapay.xyz/',
    image: '/assets/logos/nedapay.jpg'
  },
  {
    icon: Code,
    subtitle: 'Developer APIs',
    title: 'Build with Powerful APIs',
    description: 'Integrate global payout infrastructure into your application. Comprehensive documentation, SDKs, and support for developers.',
    cta: 'View Docs',
    link: 'https://nedapayplus.xyz/docs'
  },
  {
    icon: Network,
    subtitle: 'Regenerative Finance',
    title: 'JUKUMU Network',
    description: 'Empowering sustainable community development through ReFi. Supporting financial inclusion and eco-friendly initiatives across East Africa.',
    cta: 'Join Movement',
    link: '#jukumu'
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedMode = localStorage.getItem('darkMode')
    const darkMode = savedMode ? JSON.parse(savedMode) : false
    setIsDarkMode(darkMode)
    
    const handleDarkModeChange = () => {
      const mode = localStorage.getItem('darkMode')
      setIsDarkMode(mode ? JSON.parse(mode) : false)
    }
    
    window.addEventListener('storage', handleDarkModeChange)
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark')
      setIsDarkMode(isDark)
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    
    return () => {
      window.removeEventListener('storage', handleDarkModeChange)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  if (!mounted) return null

  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full">
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => {
                const Icon = slide.icon
                return (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="relative group">
                      <div className={`relative rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg border-2 max-w-4xl mx-auto overflow-hidden transition-colors ${
                        isDarkMode
                          ? 'bg-black border-white'
                          : 'bg-white border-black'
                      }`}>
                        <div className="relative z-10 text-center space-y-6">
                          <div className="inline-flex items-center justify-center">
                            {slide.image ? (
                              <img 
                                src={slide.image} 
                                alt={slide.title}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-lg"
                              />
                            ) : (
                              <div className={`relative p-4 rounded-2xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-black'}`}>
                                <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${isDarkMode ? 'text-white' : 'text-white'}`} />
                              </div>
                            )}
                          </div>

                          <div>
                            <span className={`inline-block px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg ${
                              isDarkMode
                                ? 'bg-white text-black'
                                : 'bg-black text-white'
                            }`}>
                              {slide.subtitle}
                            </span>
                          </div>

                          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight ${
                            isDarkMode ? 'text-white' : 'text-black'
                          }`}>
                            {slide.title}
                          </h1>

                          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium ${
                            isDarkMode ? 'text-white' : 'text-gray-700'
                          }`}>
                            {slide.description}
                          </p>

                          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <a
                              href={slide.link}
                              target={slide.link.startsWith('http') ? '_blank' : undefined}
                              rel={slide.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className={`group/btn inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                                isDarkMode
                                  ? 'bg-white text-black'
                                  : 'bg-black text-white'
                              }`}
                            >
                              {slide.cta}
                              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                            <a
                              href="mailto:support@nedapay.xyz"
                              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 ${
                                isDarkMode
                                  ? 'bg-black text-white border-white'
                                  : 'bg-white text-black border-black'
                              }`}
                            >
                              Contact Sales
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? isDarkMode ? 'w-8 h-2 bg-white' : 'w-8 h-2 bg-black'
                    : isDarkMode ? 'w-2 h-2 bg-white hover:bg-white' : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-20 border-2 ${
          isDarkMode
            ? 'bg-black border-white text-white'
            : 'bg-white hover:bg-gray-50 border-black text-black'
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-20 border-2 ${
          isDarkMode
            ? 'bg-black border-white text-white'
            : 'bg-white hover:bg-gray-50 border-black text-black'
        }`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Scroll to explore</span>
          <div className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${
            isDarkMode ? 'border-white' : 'border-gray-700'
          }`}>
            <div className={`w-1.5 h-3 rounded-full animate-pulse ${isDarkMode ? 'bg-white' : 'bg-gray-700'}`} />
          </div>
        </div>
      </div>
    </section>
  )
}
