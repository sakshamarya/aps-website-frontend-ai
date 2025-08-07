'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, ShoppingCart, Eye } from 'lucide-react'
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

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const featuresArray = product.features.split('|').slice(0, 2)
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isItemSaved } = useWishlist()
  const isSaved = isItemSaved(product._id)

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking heart
    
    if (isSaved) {
      removeFromWishlist(product._id)
    } else {
      addToWishlist({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image[0],
        type: product.type
      })
    }
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:shadow-aps-primary/10">
      <div className="relative overflow-hidden">
        <Link href={`/products/${product._id}`}>
          <Image
            src={product.image[0] || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        {/* <Button
          size="icon"
          variant="ghost"
          className={`absolute top-3 right-3 shadow-sm ${
            isSaved ? 'bg-aps-primary text-white hover:bg-aps-primary/90' : 'bg-white/90 hover:bg-white'
          }`}
          onClick={handleWishlistToggle}
        >
          <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
        </Button> */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className="bg-aps-primary text-white">
            {product.type}
          </Badge>
          {product.variant && (
            <Badge variant="secondary" className="bg-white/90 text-aps-primary">
              {product.variant}
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-6">
        <Link href={`/products/${product._id}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-aps-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        {featuresArray.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {featuresArray.map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs border-aps-primary/20 text-aps-primary">
                  {feature.trim()}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div>
            {/* <span className="text-2xl font-bold text-aps-primary">
              ${parseFloat(product.price).toLocaleString()}
            </span> */}
            {product.color && (
              <p className="text-sm text-muted-foreground">Color: {product.color}</p>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-2">
        {/* <Button className="flex-1 bg-aps-primary hover:bg-aps-primary/90" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button> */}
        <Button variant="outline" size="sm" asChild className="border-aps-primary text-aps-primary hover:bg-aps-primary hover:text-white">
          <Link href={`/products/${product._id}`}>
            <Eye className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
