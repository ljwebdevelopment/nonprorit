import Footer from './components/Footer'
import Header from './components/Header'
import Apply from './sections/Apply'
import Donate from './sections/Donate'
import FounderGuides from './sections/FounderGuides'
import FounderSpotlight from './sections/FounderSpotlight'
import GrantDetails from './sections/GrantDetails'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import ImpactBar from './sections/ImpactBar'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <ImpactBar />
        <HowItWorks />
        <GrantDetails />
        <FounderSpotlight />
        <FounderGuides />
        <Apply />
        <Donate />
      </main>
      <Footer />
    </div>
  )
}
