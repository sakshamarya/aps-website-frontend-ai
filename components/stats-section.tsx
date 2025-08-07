export default function StatsSection() {
  const stats = [
    { number: "500+", label: "Global Clients", description: "Trusted by companies worldwide" },
    { number: "25+", label: "Years Experience", description: "Decades of industry expertise" },
    { number: "10,000+", label: "Products Delivered", description: "Successful installations" },
    { number: "99.8%", label: "Customer Satisfaction", description: "Exceptional service record" }
  ]

  return (
    <section className="py-20 bg-aps-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <div className="w-24 h-1 bg-aps-accent mx-auto mb-6"></div>
          <p className="text-white/90 max-w-2xl mx-auto">
            These numbers represent our commitment to excellence and the trust our clients place in us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-aps-accent mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-white/80 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
