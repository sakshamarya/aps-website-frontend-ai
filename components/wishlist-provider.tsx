'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface WishlistItem {
  id: string
  name: string
  price: string
  image: string
  type: string
}

interface WishlistContextType {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  isItemSaved: (id: string) => boolean
  getTotalItems: () => number
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  const addItem = (newItem: WishlistItem) => {
    setItems(prev => {
      const exists = prev.find(item => item.id === newItem.id)
      if (exists) return prev
      return [...prev, newItem]
    })
  }

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const isItemSaved = (id: string) => {
    return items.some(item => item.id === id)
  }

  const getTotalItems = () => {
    return items.length
  }

  const clearWishlist = () => {
    setItems([])
  }

  return (
    <WishlistContext.Provider value={{
      items,
      addItem,
      removeItem,
      isItemSaved,
      getTotalItems,
      clearWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
