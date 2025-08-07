import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

export default function CustomersSection() {
  const customers = [
    {
      name: "Global Manufacturing Corp",
      logo: "/placeholder.svg?height=80&width=200&text=Global+Mfg",
      industry: "Automotive"
    },
    {
      name: "Precision Industries Ltd",
      logo: "/placeholder.svg?height=80&width=200&text=Precision+Ind",
      industry: "Aerospace"
    },
    {
      name: "Advanced Systems Inc",
      logo: "/placeholder.svg?height=80&width=200&text=Advanced+Sys",
      industry: "Electronics"
    },
    {
      name: "Industrial Solutions Group",
      logo: "/placeholder.svg?height=80&width=200&text=Industrial+Sol",
      industry: "Heavy Industry"
    },
    {
      name: "Tech Manufacturing Co",
      logo: "/placeholder.svg?height=80&width=200&text=Tech+Mfg",
      industry: "Technology"
    },
    {
      name: "Quality Products LLC",
      logo: "/placeholder.svg?height=80&width=200&text=Quality+Prod",
      industry: "Consumer Goods"
    }
  ]

  const testimonials = [
    {
      quote: "APS has been our trusted partner for over 10 years. Their equipment reliability and support are unmatched in the industry.",
      author: "John Smith",
      position: "Production Manager",
      company: "Global Manufacturing Corp"
    },
    {
      quote: "The precision and quality of APS products have significantly improved our manufacturing efficiency and product quality.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "Precision Industries Ltd"
    },
    {
      quote: "Outstanding technical support and custom solutions. APS truly understands our unique requirements.",
      author: "Michael Chen",
      position: "Plant Manager",
      company: "Advanced Systems Inc"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Trusted Customers */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
          <div className="w-24 h-1 bg-aps-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            We're proud to serve some of the world's most respected companies across various industries.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {customers.map((customer, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <img 
                    src={customer.logo || "/placeholder.svg"} 
                    alt={customer.name}
                    className="h-12 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-xs text-muted-foreground">{customer.industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-aps-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-aps-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-aps-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-sm text-aps-primary font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
