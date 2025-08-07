import { Suspense } from 'react'
import Header from '@/components/header'
import ProductGrid from '@/components/product-grid'
import Footer from '@/components/footer'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-r from-aps-primary to-aps-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Products</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Explore our comprehensive range of industrial equipment and professional solutions 
                designed to meet the highest standards of quality and performance.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Suspense fallback={<ProductGridSkeleton />}>
              <ProductGrid />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-muted rounded-lg h-64 mb-4"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded w-2/3 mb-2"></div>
          <div className="h-6 bg-muted rounded w-1/3"></div>
        </div>
      ))}
    </div>
  )
}
