
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Globe, 
  Settings, 
  TrendingUp, 
  Star, 
  Mail, 
  Phone, 
  MessageCircle,
  Code,
  Zap,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Github,
  Linkedin,
  Instagram
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hi%20Pankaj,%20I%20need%20help%20with%20an%20app%20or%20website%20project.", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile App Development",
      description: "Native Android & iOS apps using Flutter for seamless cross-platform performance.",
      features: ["Flutter Development", "Firebase Integration", "App Store Deployment", "Push Notifications"]
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Website Development",
      description: "From simple landing pages to complex e-commerce platforms built with modern technologies.",
      features: ["WordPress Sites", "React Applications", "E-commerce Stores", "SEO Optimized"]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "SEO & App Store Optimization",
      description: "Boost your visibility with proven SEO strategies and ASO techniques.",
      features: ["Keyword Research", "On-page SEO", "App Store Rankings", "Analytics Setup"]
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "Hosting & Maintenance",
      description: "Keep your apps and websites running smoothly with ongoing support and updates.",
      features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Bug Fixes"]
    }
  ];

  const portfolio = [
    {
      title: "FitTrack Pro",
      description: "A comprehensive fitness tracking app with workout plans, progress monitoring, and social features for fitness enthusiasts.",
      tech: ["Flutter", "Firebase", "Stripe API", "Google Fit"],
      image: "photo-1571019613454-1cb2f99b2d8b",
      category: "Mobile App"
    },
    {
      title: "ShopEasy E-commerce",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and customer analytics.",
      tech: ["React", "Node.js", "MongoDB", "Razorpay"],
      image: "photo-1556742049-0cfed4f6a45d",
      category: "Web Platform"
    },
    {
      title: "LocalBiz Directory",
      description: "Location-based business directory with maps integration, reviews, and booking system for local businesses.",
      tech: ["WordPress", "Google Maps API", "MySQL", "WooCommerce"],
      image: "photo-1507003211169-0a1dd7228f2d",
      category: "Business Website"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "FreshMart Grocery",
      text: "Pankaj built our e-commerce app in just 6 weeks. Sales increased by 300% in the first month. Highly professional and delivers on time!",
      rating: 5
    },
    {
      name: "Rahul Gupta",
      company: "TechStart Solutions",
      text: "Amazing work on our company website. The design is modern, loads fast, and we're getting more leads than ever. Great value for money!",
      rating: 5
    }
  ];

  const whyChooseMe = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Fast Delivery",
      description: "Most projects delivered within 2-6 weeks"
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Pixel Perfect Design",
      description: "Clean, modern designs that convert visitors"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Ongoing Support",
      description: "3 months free support with every project"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure & Scalable",
      description: "Built with best practices and security in mind"
    }
  ];

  const pricingPackages = [
    {
      name: "Starter",
      price: "₹5,000",
      description: "Perfect for landing pages and portfolios",
      features: ["One-page website", "Mobile responsive", "Contact form", "Basic SEO", "1 month support"],
      popular: false
    },
    {
      name: "Pro",
      price: "₹15,000",
      description: "Ideal for business websites and simple apps",
      features: ["Multi-page website", "CMS integration", "Payment gateway", "Advanced SEO", "3 months support"],
      popular: true
    },
    {
      name: "Premium",
      price: "₹40,000+",
      description: "For complex apps and e-commerce platforms",
      features: ["Custom Flutter app", "Admin dashboard", "API integration", "App store submission", "6 months support"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl text-gray-900">Pankaj Dev Studio</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-600 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection("portfolio")} className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Smart Apps.</span><br />
              <span className="text-gray-900">Stunning Websites.</span><br />
              <span className="text-blue-600">Scalable Solutions.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto">
              I help startups and small businesses build beautiful, high-performing websites and mobile apps that drive growth and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection("portfolio")} 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-lg"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Pankaj Dev Studio</h2>
              <p className="text-xl text-gray-600 mb-6">
                With over 3 years of experience in mobile and web development, I specialize in creating digital solutions that help businesses grow and succeed in today's competitive market.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I've worked with startups, small businesses, and entrepreneurs to bring their ideas to life through clean code, modern design, and user-focused experiences.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Flutter", "Firebase", "React", "WordPress", "Kotlin", "Swift"].map((tech) => (
                  <Badge key={tech} className="bg-blue-100 text-blue-800 py-2 px-4 text-center">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Pankaj - Mobile & Web Developer"
                    className="w-64 h-64 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services I Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, I provide end-to-end development solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-xl">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some recent projects that showcase my expertise in mobile and web development.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&h=400`} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-200 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Me?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I focus on delivering exceptional results with a client-first approach.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseMe.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it - here's what my clients say about working with me.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-0 bg-gray-50">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-blue-600">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pricing Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for every business size and requirement.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <Card key={index} className={`p-8 hover:shadow-xl transition-all duration-300 border-2 ${pkg.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className={`w-full py-3 ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Get in touch and let's discuss how I can help bring your ideas to life.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span className="text-lg text-gray-600">pankaj@devstudio.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span className="text-lg text-gray-600">+91 98765 43210</span>
                </div>
              </div>
              <Button 
                onClick={openWhatsApp}
                className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </Button>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                    <Github className="w-5 h-5 text-gray-600" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                    <Instagram className="w-5 h-5 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
            <Card className="p-8 border-0 bg-gray-50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <Input
                    type="text"
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full"
                    placeholder="Website, Mobile App, etc."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="w-full"
                    placeholder="Tell me about your project requirements..."
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Pankaj Dev Studio</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Building the future, one app and website at a time. Let's create something amazing together.
              </p>
              <p className="text-gray-400">pankaj@devstudio.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection("portfolio")} className="text-gray-400 hover:text-white transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mobile Apps</li>
                <li>Website Development</li>
                <li>SEO Optimization</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Pankaj Dev Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
