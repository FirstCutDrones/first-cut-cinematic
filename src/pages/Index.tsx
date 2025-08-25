import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Play, Camera, Users } from "lucide-react";
import { useEffect, useState } from "react";
// Using public path instead of import to avoid bundling issues

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sloganScale, setSloganScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate slogan scale based on scroll position
      // Scale down the slogan for the first 3 viewport heights of scrolling
      const scaleScrollThreshold = window.innerHeight * 3;
      if (currentScrollY <= scaleScrollThreshold) {
        const scale = Math.max(0, 1 - (currentScrollY / scaleScrollThreshold) * 0.8);
        setSloganScale(scale);
      } else {
        setSloganScale(0.2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Camera className="h-8 w-8 text-golden" />,
      title: "Trip Highlights",
      description: "Capture the memorable moments of your golf getaway with cinematic aerial footage, full audio cart cams, and action sequences.",
      link: "/services"
    },
    {
      icon: <Play className="h-8 w-8 text-golden" />,
      title: "Signature Flyovers", 
      description: "Showcase your course's most iconic holes with professional drone videography and stunning aerial perspectives.",
      link: "/services"
    },
    {
      icon: <Users className="h-8 w-8 text-golden" />,
      title: "Full Course Packages",
      description: "Complete documentation of all 18 holes with detailed flyovers, perfect for course marketing and promotion.",
      link: "/services"
    }
  ];

  const testimonials = [
    {
      quote: "First Cut Drones captured our bachelor party weekend perfectly. The aerial shots of Pebble Beach were absolutely incredible.",
      author: "Mike Rodriguez",
      course: "Pebble Beach Golf Links"
    },
    {
      quote: "The signature hole flyover they shot for our course has become our most popular marketing video. Bookings increased 40%.",
      author: "Sarah Chen",
      course: "Desert Canyon Golf Club"
    },
    {
      quote: "Professional, creative, and delivered exactly what we envisioned. The guys trip highlight reel exceeded all expectations.",
      author: "Tom Williams", 
      course: "TPC Scottsdale"
    }
  ];

  return (
    <div className="relative">
      {/* Fixed Video Background */}
      <div className="fixed inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/1111039609?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&controls=0"
          className="w-full h-full"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '177.78vh', // 16:9 aspect ratio
            transform: 'translate(-50%, -50%)',
            border: 'none'
          }}
          allow="autoplay; fullscreen"
          title="Golf Course Aerial Video"
        />
      </div>

      {/* Navigation */}
      <Navigation />
      
      {/* Fixed Slogan that scales with scroll */}
      <div 
        className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none"
        style={{
          opacity: sloganScale > 0.1 ? 1 : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      >
        <div 
          className="text-center px-4 max-w-4xl mx-auto"
          style={{
            transform: `scale(${sloganScale})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
            Your Golf Game,<br />
            <span className="text-golden">
              From a New Perspective
            </span>
          </h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-20 bg-transparent" style={{ marginTop: '300vh' }}>
        <div className="bg-background">
          {/* Company Introduction - Simplified layout */}
          <div className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Where Precision Meets Innovation</h2>
              <p className="text-xl text-foreground-secondary leading-relaxed">
                First Cut Drones specializes in cinematic drone videography, capturing every moment of the beauty and excitement of golf like never before for golf courses, tournaments, and golf adventures. 
              </p>
            </div>
          </div>

          {/* Services - Less boxey design */}
          <div className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Our Services</h2>
                <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
                  Professional drone videography services tailored for golf courses, events, and memorable golf experiences.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-gradient-primary rounded-lg p-8 text-center transition-transform hover:scale-105">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-golden/20 rounded-full mb-6">
                      <div className="text-golden">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-foreground/90 mb-6">{service.description}</p>
                    <Button asChild variant="outline" className="border-golden text-golden hover:bg-golden hover:text-card">
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials - Simplified */}
          <div className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
                <p className="text-xl text-foreground-secondary">
                  Trusted by golf courses, event organizers, and golf enthusiasts worldwide.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gradient-primary rounded-lg p-8 transition-transform hover:scale-105">
                    <blockquote className="text-lg italic mb-6 text-foreground/90">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-golden/30 pt-4">
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-foreground/80">{testimonial.course}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA - Simplified */}
          <div className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Golf Content?</h2>
              <p className="text-xl text-foreground-secondary mb-8">
                Let's create something cinematic together. From signature hole flyovers to complete course documentation, 
                we bring your golf story to life from above.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-golden text-lg px-8 py-3">
                  <Link to="/quote">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" className="text-lg px-8 py-3 border-foreground text-foreground hover:bg-foreground hover:text-background">
                  <Link to="/gallery">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>

          <MobileCTA />
        </div>
      </div>
    </div>
  );
};

export default Index;
