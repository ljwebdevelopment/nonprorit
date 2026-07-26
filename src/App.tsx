import Footer from './components/Footer'
import Header from './components/Header'
import Apply from './sections/Apply'
import FounderGuides from './sections/FounderGuides'
import GrantDetails from './sections/GrantDetails'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import Support from './sections/Support'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <GrantDetails />
        <FounderGuides />
        <Apply />
        <Support />
      </main>
      <Footer />
    </div>
  )
}
