
import { useState, useEffect } from "react";
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
  Instagram,
  ArrowUp
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [animatedCounts, setAnimatedCounts] = useState({
    projects: 0,
    rating: 0,
    satisfaction: 0
  });

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counters
  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 50, rating: 49, satisfaction: 100 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setAnimatedCounts({
          projects: Math.floor(targets.projects * progress),
          rating: Math.floor(targets.rating * progress) / 10,
          satisfaction: Math.floor(targets.satisfaction * progress)
        });
        
        if (step >= steps) {
          clearInterval(timer);
          setAnimatedCounts({
            projects: targets.projects,
            rating: 4.9,
            satisfaction: targets.satisfaction
          });
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });

    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  const techStack = [
    "Flutter", "Firebase", "React", "WordPress", "Kotlin", "Swift", "Node.js", 
    "MongoDB", "Stripe", "Razorpay", "Google Maps API", "WooCommerce"
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
      rating: 5,
      avatar: "photo-1494790108755-2616b612b786"
    },
    {
      name: "Rahul Gupta", 
      company: "TechStart Solutions",
      text: "Amazing work on our company website. The design is modern, loads fast, and we're getting more leads than ever. Great value for money!",
      rating: 5,
      avatar: "photo-1472099645785-5658abf4ff4e"
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl text-gray-900 animate-fade-in">Pankaj Dev Studio</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">About</button>
              <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Services</button>
              <button onClick={() => scrollToSection("portfolio")} className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Portfolio</button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-24 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-20"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-600 rounded-full animate-pulse opacity-30 animation-delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-8 h-8 bg-blue-500 rounded-full animate-pulse opacity-25 animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              <span className="text-blue-600 inline-block hover:scale-105 transition-transform duration-300">Smart Apps.</span><br />
              <span className="text-gray-900 inline-block hover:scale-105 transition-transform duration-300">Stunning Websites.</span><br />
              <span className="text-blue-600 inline-block hover:scale-105 transition-transform duration-300">Scalable Results.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto animate-fade-in animation-delay-500">
              I help startups and small businesses build beautiful, high-performing websites and mobile apps that drive growth and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1000">
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection("portfolio")} 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Pankaj Dev Studio</h2>
              <p className="text-xl text-gray-600 mb-6">
                With over 3 years of experience in mobile and web development, I specialize in creating digital solutions that help businesses grow and succeed in today's competitive market.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I've worked with startups, small businesses, and entrepreneurs to bring their ideas to life through clean code, modern design, and user-focused experiences.
              </p>
              
              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{animatedCounts.projects}+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{animatedCounts.rating}★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{animatedCounts.satisfaction}%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Flutter", "Firebase", "React", "WordPress", "Kotlin", "Swift"].map((tech, index) => (
                  <Badge 
                    key={tech} 
                    className="bg-blue-100 text-blue-800 py-2 px-4 text-center hover:bg-blue-200 transition-colors duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex justify-center animate-fade-in animation-delay-500">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center transform hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Pankaj - Mobile & Web Developer"
                    className="w-64 h-64 object-cover rounded-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Technologies I Work With</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...techStack, ...techStack].map((tech, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-gray-700 font-medium whitespace-nowrap">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">Services I Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-300">
              From concept to deployment, I provide end-to-end development solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300 group-hover:scale-110 transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex} 
                          variant="secondary" 
                          className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors duration-300"
                        >
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-300">
              Here are some recent projects that showcase my expertise in mobile and web development.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 transform hover:-translate-y-3 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&h=400`} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                    <Badge className="bg-blue-600 text-white group-hover:bg-blue-700 transition-colors duration-300">{project.category}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors duration-300"
                      >
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">Why Choose Me?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-300">
              I focus on delivering exceptional results with a client-first approach.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseMe.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all duration-500 border-0 bg-white transform hover:-translate-y-2 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-110 transform">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-300">
              Don't just take my word for it - here's what my clients say about working with me.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-500 border-0 bg-white transform hover:-translate-y-2 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic group-hover:text-gray-900 transition-colors duration-300">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={`https://images.unsplash.com/${testimonial.avatar}?auto=format&fit=crop&w=80&h=80&q=80`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">Pricing Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-300">
              Transparent pricing for every business size and requirement.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`p-8 hover:shadow-xl transition-all duration-500 border-2 transform hover:-translate-y-3 hover:scale-105 animate-fade-in ${
                  pkg.popular 
                    ? 'border-blue-500 bg-blue-50 hover:bg-blue-100' 
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <Badge className="bg-blue-600 text-white px-4 py-1 animate-pulse">Most Popular</Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2 hover:scale-110 transition-transform duration-300">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center animate-fade-in" style={{ animationDelay: `${featureIndex * 100}ms` }}>
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className={`w-full py-3 transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                      : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
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
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">Let's Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-300">
              Ready to start your project? Get in touch and let's discuss how I can help bring your ideas to life.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in animation-delay-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span className="text-lg text-gray-600">pankaj@devstudio.com</span>
                </div>
                <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span className="text-lg text-gray-600">+91 98765 43210</span>
                </div>
              </div>
              <Button 
                onClick={openWhatsApp}
                className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 flex items-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </Button>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                    <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                    <Github className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                    <Instagram className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
            <Card className="p-8 border-0 bg-white shadow-xl animate-fade-in animation-delay-700 transform hover:scale-105 transition-all duration-300">
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
                    className="w-full transition-all duration-300 focus:scale-105"
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
                    className="w-full transition-all duration-300 focus:scale-105"
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
                    className="w-full transition-all duration-300 focus:scale-105"
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
                    className="w-full transition-all duration-300 focus:scale-105"
                    placeholder="Tell me about your project requirements..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
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
                <li><button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform">About</button></li>
                <li><button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform">Services</button></li>
                <li><button onClick={() => scrollToSection("portfolio")} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform">Portfolio</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors duration-300">Mobile Apps</li>
                <li className="hover:text-white transition-colors duration-300">Website Development</li>
                <li className="hover:text-white transition-colors duration-300">SEO Optimization</li>
                <li className="hover:text-white transition-colors duration-300">Maintenance & Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Pankaj Dev Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 animate-bounce"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-8 left-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Index;
