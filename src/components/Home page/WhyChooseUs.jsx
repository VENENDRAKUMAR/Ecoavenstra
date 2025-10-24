import { Users, Target, Palette, Zap, PenTool, Search, TrendingUp, Cpu, HeadphonesIcon, DollarSign } from "lucide-react"
import WhyChoose from "../../assets/whyChoose.jpg"

const features = [
  {
    icon: Users,
    title: "Experience Developers",
    description: "Our seasoned team brings years of expertise to deliver exceptional solutions.",
  },
  {
    icon: Target,
    title: "Audience Centric Design",
    description: "We create designs that resonate with your target audience and drive engagement.",
  },
  {
    icon: Palette,
    title: "Custom UI UX",
    description: "Bespoke user interfaces crafted to provide intuitive user experiences.",
  },
  {
    icon: Zap,
    title: "Future Ready",
    description: "Built with cutting-edge technologies to ensure scalability.",
  },
  {
    icon: PenTool,
    title: "Mesmerizing Content",
    description: "Compelling content that captures attention and communicates effectively.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description: "Optimized for search engines to maximize your online visibility.",
  },
  {
    icon: TrendingUp,
    title: "Brand Value Elevated",
    description: "Strategic solutions that enhance your brand perception.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology Used",
    description: "Leveraging the latest tools and frameworks for high performance.",
  },
  {
    icon: HeadphonesIcon,
    title: "Long Term Support",
    description: "Comprehensive ongoing support to ensure optimal performance.",
  },
  {
    icon: DollarSign,
    title: "Competitively Priced",
    description: "Premium quality services at competitive rates with exceptional value.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-[#101010] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                We Are One Of The Top
                <span className="text-blue-400"> Digital Solutions</span>
                <br />
                <span className="text-green-400">Company With Latest Technologies</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 text-pretty">
                At Ecoavenstra, we craft performance-first digital solutions that don't just look great — they drive
                measurable business growth. From custom development to strategic consulting, we focus on what truly
                matters: speed, performance, and conversions that elevate your brand.
              </p>
            </div>

            {/* Features Grid - Compact 2x5 layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-700 hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

           
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute top-4 right-4 w-16 h-16 opacity-30">
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 w-16 h-16 opacity-30">
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-green-400 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/10 to-green-500/10 p-2">
              <img
                src={WhyChoose}
                alt="Ecoavenstra team collaborating on innovative digital solutions"
                className="w-full h-[500px] object-cover rounded-xl"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
