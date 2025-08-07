'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          inquiryType: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-aps-primary to-aps-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Get in touch with our team of experts. We're here to help you find the perfect 
                solution for your industrial needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="border-aps-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-aps-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">
                    H-135, Sector 5, Bawana Industrial Area, Delhi, India
                  </p>
                </CardContent>
              </Card>

              <Card className="border-aps-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-aps-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Call Us</h3>
                  <p className="text-muted-foreground text-sm">
                    Rajeev: +91 9811085508<br />
                    Sanjeev: +91 9810255329<br />
                  </p>
                </CardContent>
              </Card>

              <Card className="border-aps-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-aps-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm">
                    rajeevmetals@yahoo.co.in<br />
                  </p>
                </CardContent>
              </Card>

              <Card className="border-aps-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-aps-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon - Sat: 10:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours. 
                  For urgent inquiries, please call us directly.
                </p>

                {isSubmitted ? (
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-6 text-center">
                      <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-lg text-green-800 mb-2">Message Sent Successfully!</h3>
                      <p className="text-green-700">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-aps-primary/20 focus:border-aps-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-aps-primary/20 focus:border-aps-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-aps-primary/20 focus:border-aps-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="border-aps-primary/20 focus:border-aps-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="border-aps-primary/20 focus:border-aps-primary">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="sales">Sales & Pricing</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="border-aps-primary/20 focus:border-aps-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="border-aps-primary/20 focus:border-aps-primary"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-aps-primary hover:bg-aps-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-6">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">Interactive Google Maps</p>
                    <p className="text-sm">123 Industrial Boulevard, MD 12345</p>
                  </div>
                </div>

                <Card className="border-aps-primary/20">
                  <CardHeader>
                    <CardTitle className="text-aps-primary">Why Choose APS?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-aps-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Expert Consultation</h4>
                        <p className="text-sm text-muted-foreground">
                          Our experienced team provides personalized recommendations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-aps-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Custom Solutions</h4>
                        <p className="text-sm text-muted-foreground">
                          Tailored engineering solutions for your specific needs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-aps-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Made in India</h4>
                        <p className="text-sm text-muted-foreground">
                          We are a proud Indian manufacturer, committed to quality and innovation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
