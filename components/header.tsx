'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Menu, X, ShoppingCart, User, Phone, Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart } from '@/components/cart-provider'
import { useWishlist } from '@/components/wishlist-provider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()
  const { getTotalItems: getWishlistItems } = useWishlist()
  const wishlistItemCount = getWishlistItems()

  return (
    <>
      {/* Top Bar */}
      <div className="bg-aps-primary text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9811085508</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>rajeevmetals@yahoo.co.in</span>
              </div>
            </div>
            {/* <div className="hidden md:flex items-center space-x-4">
              <Link href="/support" className="hover:text-aps-accent transition-colors">
                Support
              </Link>
              <Link href="/contact" className="hover:text-aps-accent transition-colors">
                Contact
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/aps-logo.png"
                alt="APS Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-aps-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/products" className="text-foreground hover:text-aps-primary transition-colors font-medium">
                Products
              </Link>
              <Link href="/about" className="text-foreground hover:text-aps-primary transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-aps-primary transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 border-aps-primary/20 focus:border-aps-primary"
                />
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* <Button variant="ghost" size="icon" className="hover:text-aps-primary">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative hover:text-aps-primary">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 bg-aps-accent text-white rounded-full text-xs flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button> */}
              {/* <Button variant="ghost" size="icon" className="relative hover:text-aps-primary">
                <Heart className="h-5 w-5" />
                {wishlistItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 bg-aps-secondary text-white rounded-full text-xs flex items-center justify-center">
                    {wishlistItemCount}
                  </span>
                )}
              </Button> */}
              <Link href="/contact" className="text-foreground hover:text-aps-primary transition-colors font-medium">
                <Button className="bg-aps-primary hover:bg-aps-primary/90">
                  Contact
                </Button>
              </Link>
              
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t py-4">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10 pr-4"
                  />
                </div>
                <nav className="flex flex-col space-y-2">
                  <Link href="/" className="text-foreground hover:text-aps-primary transition-colors py-2 font-medium">
                    Home
                  </Link>
                  <Link href="/products" className="text-foreground hover:text-aps-primary transition-colors py-2 font-medium">
                    Products
                  </Link>
                  <Link href="/about" className="text-foreground hover:text-aps-primary transition-colors py-2 font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="text-foreground hover:text-aps-primary transition-colors py-2 font-medium">
                    Contact
                  </Link>
                </nav>
                {/* <div className="flex items-center space-x-4 pt-4 border-t">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-2 -right-2 h-5 w-5 bg-aps-accent text-white rounded-full text-xs flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </Button>
                  <Button variant="ghost" size="icon" className="relative">
                    <Heart className="h-5 w-5" />
                    {wishlistItemCount > 0 && (
                      <span className="absolute -top-2 -right-2 h-5 w-5 bg-aps-secondary text-white rounded-full text-xs flex items-center justify-center">
                        {wishlistItemCount}
                      </span>
                    )}
                  </Button>
                  <Button className="bg-aps-primary hover:bg-aps-primary/90 flex-1">
                    Get Quote
                  </Button>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
