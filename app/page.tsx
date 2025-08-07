import { Suspense } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import FeaturedProducts from '@/components/featured-products'
import AboutSection from '@/components/about-section'
import CustomersSection from '@/components/customers-section'
import StatsSection from '@/components/stats-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <AboutSection />
        <StatsSection />
        <CustomersSection />
      </main>
      <Footer />
    </div>
  )
}
