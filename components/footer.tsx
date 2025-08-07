import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-aps-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/aps-logo.png"
              alt="APS Logo"
              width={120}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/80">
              Leading ISO-certified manufacturer of MCBs, modular boxes, and electrical solutions—designed to meet the evolving needs of modern infrastructure and global businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-aps-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              {/* <Link href="#" className="text-white/80 hover:text-aps-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </Link> */}
              <Link href="#" className="text-white/80 hover:text-aps-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              {/* <Link href="#" className="text-white/80 hover:text-aps-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </Link> */}
            </div>
          </div>

          {/* Products & Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Products & Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-white/80 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              {/* <li>
                <Link href="/products?type=Equipment" className="text-white/80 hover:text-white transition-colors">
                  Equipment
                </Link>
              </li> */}
              {/* <li>
                <Link href="/products?type=Industrial" className="text-white/80 hover:text-white transition-colors">
                  Industrial Solutions
                </Link>
              </li> */}
              {/* <li>
                <Link href="/solutions" className="text-white/80 hover:text-white transition-colors">
                  Custom Solutions
                </Link>
              </li> */}
              {/* <li>
                <Link href="/support" className="text-white/80 hover:text-white transition-colors">
                  Technical Support
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About APS
                </Link>
              </li>
              {/* <li>
                <Link href="/careers" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </Link>
              </li> */}
              {/* <li>
                <Link href="/news" className="text-white/80 hover:text-white transition-colors">
                  News & Updates
                </Link>
              </li> */}
              {/* <li>
                <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li> */}
              {/* <li>
                <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-aps-accent" />
                <span className="text-white/80">rajeevmetals@yahoo.co.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-aps-accent" />
                <span className="text-white/80">+91 9811085508</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-aps-accent" />
                <span className="text-white/80">H-135, Sector 5, Bawana Industrial Area, Delhi, India</span>
              </div>
            </div>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-block bg-aps-accent text-white px-6 py-2 rounded-lg hover:bg-aps-accent/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 APS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
