
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, Settings, TrendingUp, Star, Mail, Phone, MessageCircle } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hi%20Pankaj,%20I'm%20interested%20in%20your%20development%20services!", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Android/iOS App Development",
      description: "Cross-platform mobile apps using Flutter for seamless performance on both Android and iOS.",
      features: ["Flutter Development", "Native Performance", "Cross-Platform", "App Store Deployment"]
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Website Development",
      description: "From one-page sites to complex e-commerce platforms, built with modern technologies.",
      features: ["One-Page Sites", "Business Websites", "E-commerce", "Responsive Design"]
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Maintenance & Support",
      description: "Ongoing support packages to keep your apps and websites running smoothly.",
      features: ["Bug Fixes", "Updates", "Performance Optimization", "Security Patches"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "SEO & App Store Optimization",
      description: "Boost your visibility with SEO for websites and ASO for mobile apps.",
      features: ["Search Engine Optimization", "App Store Optimization", "Analytics Setup", "Performance Tracking"]
    }
  ];

  const portfolio = [
    {
      title: "FitTrack - Fitness App",
      description: "A comprehensive fitness tracking app with workout plans, progress monitoring, and social features.",
      tech: ["Flutter", "Firebase", "REST API"],
      image: "photo-1571019613454-1cb2f99b2d8b"
    },
    {
      title: "ShopEasy - E-commerce Platform",
      description: "Full-featured e-commerce website with payment integration, inventory management, and admin dashboard.",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "photo-1556742049-0cfed4f6a45d"
    },
    {
      title: "TaskMaster - Productivity App",
      description: "Cross-platform productivity app for team collaboration and project management.",
      tech: ["Flutter", "GraphQL", "AWS"],
      image: "photo-1611224923853-80b023f02d71"
    },
    {
      title: "LocalBiz - Business Directory",
      description: "Location-based business directory website with maps integration and review system.",
      tech: ["React", "Google Maps API", "PostgreSQL"],
      image: "photo-1507003211169-0a1dd7228f2d"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Pankaj delivered our mobile app ahead of schedule and exceeded our expectations. His attention to detail and communication throughout the project was exceptional.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      company: "Local Restaurant Chain",
      text: "The e-commerce website Pankaj built for us increased our online sales by 200%. Professional, reliable, and great value for money.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Pankaj</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-600 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection("portfolio")} className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection("testimonials")} className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">P</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Pankaj</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              I help businesses grow with fast, beautiful websites and mobile apps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Let's Build Your App or Website!
              </Button>
              <Button 
                onClick={() => scrollToSection("portfolio")} 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, I provide comprehensive development solutions for your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="bg-blue-50 text-blue-700">
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
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some recent projects that showcase my expertise in mobile and web development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&h=400`} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-blue-600 text-white">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it - here's what my clients have to say about working with me.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">pankaj@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">+1 (234) 567-8900</span>
                </div>
              </div>
              <Button 
                onClick={openWhatsApp}
                className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="w-full"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Pankaj</h3>
            <p className="text-gray-400 mb-6">Freelance Mobile & Web Developer</p>
            <p className="text-gray-500">© 2024 Pankaj. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
