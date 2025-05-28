import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";

interface ServiceDetails {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  image: string;
}

const servicesData: Record<string, ServiceDetails> = {
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "We create powerful, scalable, and user-friendly mobile applications using Flutter for both Android and iOS platforms. Our mobile apps are designed to provide seamless user experiences while meeting your business objectives.",
    features: [
      "Cross-platform development with Flutter",
      "Native performance optimization",
      "Real-time data synchronization",
      "Push notification integration",
      "Offline functionality",
      "Secure authentication",
      "Analytics and tracking",
      "App store deployment"
    ],
    benefits: [
      "Faster time to market",
      "Cost-effective development",
      "Consistent user experience",
      "Easy maintenance and updates",
      "Scalable architecture",
      "Enhanced security"
    ],
    process: [
      {
        title: "Discovery & Planning",
        description: "We analyze your requirements and create a detailed project roadmap."
      },
      {
        title: "Design & Prototyping",
        description: "Our designers create intuitive and engaging user interfaces."
      },
      {
        title: "Development",
        description: "We build your app using best practices and modern technologies."
      },
      {
        title: "Testing & Quality Assurance",
        description: "Rigorous testing ensures a bug-free and smooth user experience."
      },
      {
        title: "Deployment & Launch",
        description: "We handle the app store submission process and launch your app."
      }
    ],
    image: "photo-1551650975-87deedd944c3"
  },
  "website-development": {
    title: "Website Development",
    description: "From simple landing pages to complex e-commerce platforms, we build websites that drive results. Our web development services combine modern design with powerful functionality.",
    features: [
      "Responsive web design",
      "E-commerce integration",
      "Content Management Systems",
      "Custom web applications",
      "SEO optimization",
      "Performance optimization",
      "Security implementation",
      "Analytics integration"
    ],
    benefits: [
      "Enhanced online presence",
      "Improved user engagement",
      "Increased conversion rates",
      "Better search engine visibility",
      "Scalable solutions",
      "Easy content management"
    ],
    process: [
      {
        title: "Requirement Analysis",
        description: "Understanding your business goals and target audience."
      },
      {
        title: "Design & Wireframing",
        description: "Creating visually appealing and user-friendly designs."
      },
      {
        title: "Development",
        description: "Building your website with clean, efficient code."
      },
      {
        title: "Testing & Optimization",
        description: "Ensuring performance and compatibility across devices."
      },
      {
        title: "Launch & Support",
        description: "Deploying your website and providing ongoing maintenance."
      }
    ],
    image: "photo-1460925895917-afdab827c52f"
  },
  "seo-optimization": {
    title: "SEO & App Store Optimization",
    description: "Boost your online visibility and drive organic traffic with our comprehensive SEO and ASO services. We use data-driven strategies to improve your rankings and increase conversions.",
    features: [
      "Keyword research and analysis",
      "On-page SEO optimization",
      "Technical SEO audit",
      "Content strategy",
      "Link building",
      "Local SEO",
      "App store optimization",
      "Performance tracking"
    ],
    benefits: [
      "Increased organic traffic",
      "Better search rankings",
      "Improved conversion rates",
      "Enhanced online visibility",
      "Long-term sustainable growth",
      "Data-driven insights"
    ],
    process: [
      {
        title: "Audit & Analysis",
        description: "Comprehensive review of your current online presence."
      },
      {
        title: "Strategy Development",
        description: "Creating a customized optimization plan."
      },
      {
        title: "Implementation",
        description: "Executing on-page and technical optimizations."
      },
      {
        title: "Content Creation",
        description: "Developing SEO-friendly content."
      },
      {
        title: "Monitoring & Reporting",
        description: "Tracking progress and making data-driven adjustments."
      }
    ],
    image: "photo-1571781926291-c477ebfd024b"
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    description: "Build your brand presence and engage with your audience through strategic social media campaigns. We help you create meaningful connections and drive business growth.",
    features: [
      "Social media strategy",
      "Content creation",
      "Community management",
      "Paid advertising",
      "Influencer marketing",
      "Analytics and reporting",
      "Crisis management",
      "Brand monitoring"
    ],
    benefits: [
      "Increased brand awareness",
      "Better audience engagement",
      "Higher conversion rates",
      "Improved customer loyalty",
      "Cost-effective marketing",
      "Real-time performance tracking"
    ],
    process: [
      {
        title: "Strategy Development",
        description: "Creating a comprehensive social media plan."
      },
      {
        title: "Content Planning",
        description: "Developing engaging and relevant content."
      },
      {
        title: "Campaign Execution",
        description: "Implementing and managing social media campaigns."
      },
      {
        title: "Community Engagement",
        description: "Building and nurturing your online community."
      },
      {
        title: "Analysis & Optimization",
        description: "Measuring results and refining strategies."
      }
    ],
    image: "photo-1611162617213-7d7a39e9b1d7"
  }
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <Button onClick={() => navigate("/")} className="mt-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          onClick={() => navigate("/")} 
          variant="ghost" 
          className="mb-8 hover:bg-blue-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{service.description}</p>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <div className="grid grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
              <div className="grid grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-8">
              <div className="mb-8">
                <img 
                  src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=800&h=600`}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Process</h2>
                {service.process.map((step, index) => (
                  <Card key={index} className="p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails; 