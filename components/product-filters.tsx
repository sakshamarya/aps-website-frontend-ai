'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Filter, X } from 'lucide-react'

interface Filters {
  type: string
  color: string
  minPrice: string
  maxPrice: string
  search: string
}

interface ProductFiltersProps {
  onFiltersChange: (filters: Filters) => void
}

export default function ProductFilters({ onFiltersChange }: ProductFiltersProps) {
  const [filters, setFilters] = useState<Filters>({
    type: '',
    color: '',
    minPrice: '',
    maxPrice: '',
    search: ''
  })
  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = (key: keyof Filters, value: string) => {
    const filterValue = value === 'all' ? '' : value
    const newFilters = { ...filters, [key]: filterValue }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = {
      type: '',
      color: '',
      minPrice: '',
      maxPrice: '',
      search: ''
    }
    setFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== '')

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden border-aps-primary text-aps-primary hover:bg-aps-primary hover:text-white"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
        {hasActiveFilters && (
          <Button variant="ghost" onClick={clearFilters} size="sm" className="text-aps-primary hover:text-aps-primary/80">
            <X className="h-4 w-4 mr-2" />
            Clear Filters
          </Button>
        )}
      </div>

      <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
        <Card className="border-aps-primary/20">
          <CardHeader>
            <CardTitle className="text-lg text-aps-primary">Filter Products</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <Input
                  id="search"
                  placeholder="Search products..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="border-aps-primary/20 focus:border-aps-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Product Type</Label>
                <Select
                  value={filters.type}
                  onValueChange={(value) => handleFilterChange('type', value)}
                >
                  <SelectTrigger className="border-aps-primary/20 focus:border-aps-primary">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Equipment">Equipment</SelectItem>
                    <SelectItem value="Industrial">Industrial</SelectItem>
                    <SelectItem value="Professional">Professional</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="color">Color</Label>
                <Select
                  value={filters.color}
                  onValueChange={(value) => handleFilterChange('color', value)}
                >
                  <SelectTrigger className="border-aps-primary/20 focus:border-aps-primary">
                    <SelectValue placeholder="All Colors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Colors</SelectItem>
                    <SelectItem value="Black">Black</SelectItem>
                    <SelectItem value="Silver">Silver</SelectItem>
                    <SelectItem value="White">White</SelectItem>
                    <SelectItem value="Blue">Blue</SelectItem>
                    <SelectItem value="Red">Red</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="minPrice">Min Price</Label>
                <Input
                  id="minPrice"
                  type="number"
                  placeholder="$0"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  className="border-aps-primary/20 focus:border-aps-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxPrice">Max Price</Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="$10000"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  className="border-aps-primary/20 focus:border-aps-primary"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
