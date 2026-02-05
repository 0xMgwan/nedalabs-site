import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import Products from './components/Products'
import Features from './components/Features'
import JUKUMU from './components/JUKUMU'
import Developers from './components/Developers'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <Products />
      <Features />
      <JUKUMU />
      <Developers />
      <CTA />
      <Footer />
    </main>
  )
}
