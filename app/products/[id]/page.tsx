'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ShoppingCart, Heart, Share2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useWishlist } from '@/components/wishlist-provider'

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

async function getProduct(id: string): Promise<Product | null> {
  const queryParams = new URLSearchParams({ _id: id })
  const response = await fetch(`/api/products?${queryParams}`)
  const data = await response.json() // <-- Parse JSON here

  return data.products[0] || null // <-- Access products from parsed data
}

export default function ProductDetailPage({ params }: { params: { id: string } | Promise<{ id: string }> }) {
  // Unwrap params if it's a Promise (Next.js migration)
  const resolvedParams = typeof params.then === 'function' ? React.use(params) : params;
  const id = resolvedParams.id;

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [cartItems, setCartItems] = useState(0)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isItemSaved } = useWishlist()
  const [isSaving, setIsSaving] = useState(false)

  // Check if product is saved
  const isSaved = product ? isItemSaved(product._id) : false

  // Load product data using useEffect
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await getProduct(id)
        setProduct(productData)
      } catch (error) {
        console.error('Error loading product:', error)
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }
    
    loadProduct()
  }, [id])

  const handleAddToCart = async () => {
    if (!product) return
    
    setIsAddingToCart(true)
    
    // Simulate adding to cart
    await new Promise(resolve => setTimeout(resolve, 500))
    
    setCartItems(prev => prev + 1)
    setIsAddingToCart(false)
    
    // Show success message
    alert(`${product.name} has been added to your cart!`)
  }

  const handleShare = async () => {
    if (!product) return
    
    const shareData = {
      title: product.name,
      text: `Check out this ${product.type.toLowerCase()}: ${product.name}`,
      url: window.location.href
    }

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData)
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href)
        alert('Product link copied to clipboard!')
      }
    } catch (error) {
      console.error('Error sharing:', error)
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert('Product link copied to clipboard!')
      } catch (clipboardError) {
        alert('Unable to share. Please copy the URL manually.')
      }
    }
  }

  const handleSave = async () => {
    if (!product) return
    
    setIsSaving(true)
    
    // Simulate saving to wishlist
    await new Promise(resolve => setTimeout(resolve, 300))
    
    if (isSaved) {
      removeFromWishlist(product._id)
      alert(`${product.name} has been removed from your wishlist!`)
    } else {
      addToWishlist({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image[0],
        type: product.type
      })
      alert(`${product.name} has been saved to your wishlist!`)
    }
    
    setIsSaving(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aps-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading product details...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!product) {
    notFound()
  }

  const featuresArray = product.features.split('|')

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-aps-primary">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-aps-primary">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <Button variant="ghost" asChild className="mb-6 text-aps-primary hover:text-aps-primary/80">
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg border">
                <Image
                  src={product.image[0] || "/placeholder.svg?height=600&width=600&text=Product+Image"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.image.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.image.slice(1, 4).map((img, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg border">
                      <Image
                        src={img || "/placeholder.svg?height=200&width=200&text=Image"}
                        alt={`${product.name} ${index + 2}`}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-aps-primary text-white">{product.type}</Badge>
                  {product.variant && (
                    <Badge variant="secondary">{product.variant}</Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <div className="flex items-center space-x-4">
                  {/* <span className="text-4xl font-bold text-aps-primary">
                    ${parseFloat(product.price).toLocaleString()}
                  </span> */}
                  {product.color && (
                    <span className="text-muted-foreground">Color: {product.color}</span>
                  )}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {featuresArray.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-aps-primary rounded-full"></div>
                      <span className="text-sm">{feature.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button 
                  size="lg" 
                  className="flex-1 bg-aps-primary hover:bg-aps-primary/90"
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {isAddingToCart ? 'Adding...' : 'Add to Cart'}
                </Button> */}
                {/* <Button 
                  size="lg" 
                  variant="outline" 
                  className={`border-aps-primary hover:bg-aps-primary hover:text-white ${
                    isSaved ? 'bg-aps-primary text-white' : 'text-aps-primary'
                  }`}
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  <Heart className={`h-5 w-5 mr-2 ${isSaved ? 'fill-current' : ''}`} />
                  {isSaving ? 'Saving...' : isSaved ? 'Saved' : 'Save'}
                </Button> */}
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-aps-primary text-aps-primary hover:bg-aps-primary hover:text-white"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
              </div>

              <div className="bg-aps-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold text-aps-primary mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  We are here to assist you with any questions or concerns about this product. We can provide detailed information and support to ensure you make the best choice for your needs.
                </p>
                <Link href="/contact">
                  <Button variant="outline" size="sm" className="border-aps-primary text-aps-primary hover:bg-aps-primary hover:text-white">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          {product.tableData && product.tableData.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Technical Information</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {product.tableData.map((table, tableIndex) => (
                  <Card key={tableIndex} className="border-aps-primary/20">
                    <CardHeader>
                      <CardTitle className="text-aps-primary">{table.tableName}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-aps-primary/20">
                              {table.columns.map((column, colIndex) => (
                                <th key={colIndex} className="text-left py-2 px-4 font-semibold text-aps-primary">
                                  {column}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {table.rows.map((row, rowIndex) => (
                              <tr key={rowIndex} className="border-b border-muted">
                                {table.columns.map((column, colIndex) => (
                                  <td key={colIndex} className="py-2 px-4 text-sm">
                                    {row[column]}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
