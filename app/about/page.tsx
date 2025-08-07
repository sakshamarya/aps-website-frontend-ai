import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Mail, Clock, Award, Users, Factory, Globe } from 'lucide-react'

export default function AboutPage() {
  const milestones = [
    { year: "1999", title: "Company Founded", description: "APS established with a vision to revolutionize industrial manufacturing" },
    { year: "2005", title: "ISO Certification", description: "Achieved ISO 9001:2000 certification for quality management" },
    { year: "2010", title: "Global Expansion", description: "Opened international offices and distribution centers" },
    { year: "2015", title: "Innovation Center", description: "Launched state-of-the-art R&D facility" },
    { year: "2020", title: "Digital Transformation", description: "Integrated IoT and Industry 4.0 technologies" },
    { year: "2024", title: "Sustainability Initiative", description: "Committed to carbon-neutral manufacturing by 2030" }
  ]

  const leadership = [
    {
      name: "Rajeev Arya",
      position: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300&text=CEO",
      bio: "25+ years of experience in industrial manufacturing and business leadership."
    },
    {
      name: "Sanjeev Arya",
      position: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300&text=CTO",
      bio: "PhD in Mechanical Engineering with expertise in automation and robotics."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-aps-primary to-aps-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">About APS</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Leading the future of industrial manufacturing with innovative solutions, 
                exceptional quality, and unwavering commitment to customer success.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Established in 1997, APS was born out of a simple idea: to build reliable, high-quality electrical products that empower businesses and ensure safety at every level.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  What began as a small engineering initiative has grown into a brand known for precision manufacturing, customer-centric solutions, and a relentless drive to raise industry standards. At the heart of APS is a passion for solving real-world challenges with innovation, integrity, and a commitment to excellence—values that continue to shape everything we do.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-aps-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Global Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-aps-primary mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <img 
                  src="/placeholder.svg?height=400&width=600&text=Factory+Overview" 
                  alt="APS Factory Overview"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/placeholder.svg?height=200&width=300&text=Manufacturing+Floor" 
                    alt="Manufacturing Floor"
                    className="w-full rounded-lg shadow-md"
                  />
                  <img 
                    src="/placeholder.svg?height=200&width=300&text=Quality+Control" 
                    alt="Quality Control"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
              <div className="w-24 h-1 bg-aps-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key milestones that have shaped APS into the industry leader we are today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="border-aps-primary/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="bg-aps-primary text-white mb-4">{milestone.year}</Badge>
                    <h3 className="font-bold text-lg mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
              <div className="w-24 h-1 bg-aps-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced professionals leading APS into the future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="border-aps-primary/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <img 
                      src={leader.image || "/placeholder.svg"} 
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                    <p className="text-aps-primary font-medium mb-3">{leader.position}</p>
                    <p className="text-muted-foreground text-sm">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Factory Location */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Manufacturing Facility</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our state-of-the-art manufacturing facility spans over 200,000 square feet 
                  and houses the latest in precision manufacturing equipment. Located in the 
                  heart of the industrial district, our facility is designed for efficiency, 
                  quality, and environmental sustainability.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Factory className="h-5 w-5 text-aps-primary" />
                    <span>200,000 sq ft manufacturing facility</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-aps-primary" />
                    <span>ISO 9001:2015 certified operations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-aps-primary" />
                    <span>500+ skilled employees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-aps-primary" />
                    <span>Global distribution network</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-aps-primary mr-2" />
                    Visit Our Facility
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Address:</strong> H-135, Sector 5, Bawana Industrial Area, Delhi, India</p>
                    <p><strong>Phone:</strong> +91 9811085508</p>
                    <p><strong>Email:</strong> rajeevmetals@yahoo.co.in</p>
                    <p><strong>Hours:</strong> Monday - Saturday, 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Google Maps</p>
                    <p className="text-sm">123 Industrial Boulevard, MD 12345</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/placeholder.svg?height=200&width=300&text=Factory+Exterior" 
                    alt="Factory Exterior"
                    className="w-full rounded-lg shadow-md"
                  />
                  <img 
                    src="/placeholder.svg?height=200&width=300&text=Production+Line" 
                    alt="Production Line"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
