import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Award, Users, Wrench } from 'lucide-react'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Driving Innovation in Electrical Manufacturing
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              For over two decades, APS has been a trusted name in electrical manufacturing—delivering precision-engineered solutions that power efficiency and reliability across industries.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We specialize in high-quality MCBs, modular boxes, and electrical enclosures, combining advanced engineering with a commitment to ISO 9001:2015-certified quality and customer satisfaction. From small workshops to large industrial installations, our solutions are built to perform and exceed expectations.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-aps-primary" />
                <span>ISO 9001:2015 Certified Manufacturing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-aps-primary" />
                <span>24/7 Technical Support & Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-aps-primary" />
                <span>Global Distribution Network</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-aps-primary" />
                <span>Custom Engineering Solutions</span>
              </div>
            </div>

            <Button size="lg" className="bg-aps-primary hover:bg-aps-primary/90" asChild>
              <Link href="/about">Learn More About APS</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="border-aps-primary/20">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-aps-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Quality First</h3>
                <p className="text-muted-foreground text-sm">
                  Every product undergoes rigorous quality control to ensure exceptional performance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-aps-primary/20">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-aps-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Expert Team</h3>
                <p className="text-muted-foreground text-sm">
                  Our experienced engineers and technicians provide unmatched expertise.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-aps-primary/20">
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-aps-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Custom Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Tailored engineering solutions to meet your specific requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-aps-primary/20">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-aps-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Proven Results</h3>
                <p className="text-muted-foreground text-sm">
                  Thousands of successful installations across global markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
