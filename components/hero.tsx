import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-aps-primary via-aps-primary/90 to-aps-secondary text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Reliable Electrical Solutions for Modern Infrastructure
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our range of precision-engineered MCBs, modular boxes, and electrical accessories—designed to meet industry standards and support the demands of today’s businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-aps-primary hover:bg-white/90" asChild>
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-aps-primary hover:bg-white/90" asChild>
              <Link href="/contact">Get Consultation</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-aps-accent" />
              <span className="text-white/90">Premium Quality</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-aps-accent" />
              <span className="text-white/90">Expert Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-aps-accent" />
              <span className="text-white/90">Trusted Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
