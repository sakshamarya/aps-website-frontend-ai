'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/product-card'
import Pagination from '@/components/pagination'
import ProductFilters from '@/components/product-filters'

interface Product {
  _id: string
  name: string
  variant: string
  image: string[]
  price: string
  type: string
  color: string
  description: string
  features: string
  tableData: Array<{
    tableName: string
    columns: string[]
    rows: Record<string, string>[]
  }>
  showOnHomePage: boolean
}

interface ProductsResponse {
  products: Product[]
  total: number
  page: number
  totalPages: number
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [filters, setFilters] = useState({
    type: '',
    color: '',
    minPrice: '',
    maxPrice: '',
    search: ''
  })

  const fetchProducts = async (page: number = 1) => {
    setLoading(true)
    try {
      // Replace with your actual API endpoint
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: '12',
        ...Object.fromEntries(Object.entries(filters).filter(([_, v]) => v !== ''))
      })
      
      const response = await fetch(`/api/products?${queryParams}`)
      const data: ProductsResponse = await response.json()
      
      setProducts(data.products)
      setTotalPages(data.totalPages)
      setCurrentPage(data.page)
    } catch (error) {
      console.error('Error fetching products:', error)
      // Fallback to mock data for demo
      setProducts(mockProducts)
      setTotalPages(2)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts(currentPage)
  }, [currentPage, filters])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  if (loading) {
    return <ProductGridSkeleton />
  }

  return (
    <div className="space-y-8">
      {/* <ProductFilters onFiltersChange={handleFiltersChange} /> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
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

// Mock data matching your schema
const mockProducts: Product[] = [
  {
    _id: "687fe43e92504529f018fce7",
    name: "Professional Equipment",
    variant: "Standard",
    image: [
      "/placeholder.svg?height=300&width=300&text=Equipment",
      "/placeholder.svg?height=300&width=300&text=Equipment+2"
    ],
    price: "1299",
    type: "Equipment",
    color: "Silver",
    description: "High-quality professional equipment designed for optimal performance and reliability in demanding environments.",
    features: "Durable Construction|Advanced Technology|Easy Maintenance|Professional Grade",
    tableData: [
      {
        tableName: "Specifications",
        columns: ["Feature", "Value"],
        rows: [
          { "Feature": "Weight", "Value": "15kg" },
          { "Feature": "Dimensions", "Value": "50x30x20cm" }
        ]
      }
    ],
    showOnHomePage: true
  },
  {
    _id: "687fe43e92504529f018fce8",
    name: "Industrial Solution",
    variant: "Premium",
    image: [
      "/placeholder.svg?height=300&width=300&text=Industrial",
      "/placeholder.svg?height=300&width=300&text=Industrial+2"
    ],
    price: "2499",
    type: "Industrial",
    color: "Black",
    description: "Advanced industrial solution engineered for maximum efficiency and long-term reliability in commercial applications.",
    features: "Heavy Duty|Energy Efficient|Smart Controls|24/7 Operation",
    tableData: [
      {
        tableName: "Technical Specs",
        columns: ["Parameter", "Specification"],
        rows: [
          { "Parameter": "Power", "Specification": "5kW" },
          { "Parameter": "Capacity", "Specification": "1000L" }
        ]
      }
    ],
    showOnHomePage: true
  }
]
