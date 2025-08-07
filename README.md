# APS Industrial Solutions Website

A professional Next.js website for APS Industrial Solutions featuring product catalog, company information, and contact functionality.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

\`\`\`
aps-website/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── about/
│   │   └── page.tsx             # About us page
│   ├── contact/
│   │   └── page.tsx             # Contact form page
│   ├── products/
│   │   ├── page.tsx             # All products listing
│   │   └── [id]/
│   │       └── page.tsx         # Individual product details
│   └── api/                     # API routes
│       ├── contact/
│       │   └── route.ts         # Contact form handler
│       └── products/
│           └── route.ts         # Products API endpoint
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   └── ...
│   ├── header.tsx               # Site header with navigation
│   ├── footer.tsx               # Site footer
│   ├── hero.tsx                 # Homepage hero section
│   ├── featured-products.tsx    # Homepage featured products
│   ├── about-section.tsx        # Homepage about section
│   ├── stats-section.tsx        # Homepage statistics
│   ├── customers-section.tsx    # Homepage testimonials
│   ├── product-card.tsx         # Product display card
│   ├── product-grid.tsx         # Products grid with filters
│   ├── product-filters.tsx      # Product filtering component
│   └── pagination.tsx           # Pagination component
├── public/                      # Static assets
│   └── images/
│       └── aps-logo.png         # Company logo
├── lib/                         # Utility functions
│   └── utils.ts                 # Common utilities
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
├── tailwind.config.ts           # Tailwind CSS configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies and scripts
└── tsconfig.json                # TypeScript configuration
\`\`\`

## 🎨 Features

### Homepage
- Professional hero section
- Featured products (showOnHomePage: true)
- Company overview and statistics
- Customer testimonials
- Responsive design

### Products
- Product grid with professional cards
- Individual product detail pages
- Technical specifications tables
- Multiple product images
- Filtering and pagination ready

### About Us
- Company story and timeline
- Leadership team profiles
- Factory location and images
- Company achievements

### Contact
- Professional contact form
- Email integration ready
- Contact information cards
- Success/error handling

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
\`\`\`
NEXT_PUBLIC_API_URL=your-api-url
\`\`\`

### Email Integration
Update `/app/api/contact/route.ts` with your email service:
- SendGrid
- Resend
- Nodemailer
- Or any other email provider

### API Integration
Replace mock data in `/app/api/products/route.ts` with your actual backend endpoints.

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Pages

- **Homepage**: `/` - Company overview and featured products
- **Products**: `/products` - All products grid
- **Product Details**: `/products/[id]` - Individual product page
- **About**: `/about` - Company information and team
- **Contact**: `/contact` - Contact form and information

## 🎨 Styling

- **Framework**: Tailwind CSS
- **Components**: shadcn/ui
- **Colors**: APS brand colors (blue primary, red accent)
- **Typography**: Professional, clean fonts
- **Responsive**: Mobile-first design

## 🔌 API Endpoints

### Products API
- `GET /api/products` - Get all products with filtering
- Query parameters:
  - `page` - Page number
  - `limit` - Items per page
  - `type` - Product type filter
  - `color` - Color filter
  - `search` - Search query
  - `showOnHomePage` - Featured products only

### Contact API
- `POST /api/contact` - Submit contact form
- Body: `{ name, email, phone, company, subject, message, inquiryType }`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
1. Run `npm run build`
2. Deploy the `.next` folder
3. Set environment variables

## 📞 Support

For technical support or questions about the website, contact the development team.
\`\`\`

```typescriptreact file="components/product-filters.tsx"
[v0-no-op-code-block-prefix]'use client'

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
