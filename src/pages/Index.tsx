import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Play, Camera, Users } from "lucide-react";
import { useEffect, useState } from "react";
// Using public path instead of import to avoid bundling issues

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [logoScale, setLogoScale] = useState(1);
  const [textScale, setTextScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate different scales for logo and text
      const scaleScrollThreshold = window.innerHeight * 3;
      if (currentScrollY <= scaleScrollThreshold) {
        const progress = currentScrollY / scaleScrollThreshold;
        
        // Logo zooms out (scales down faster)
        const logoScale = Math.max(0.1, 1 - progress * 1.2);
        setLogoScale(logoScale);
        
        // Text only zooms in and stays at that scale
        const textScale = Math.min(1.5, 1 + progress * 0.8);
        setTextScale(textScale);
      } else {
        setLogoScale(0.1);
        setTextScale(1.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    {
      src: "/lovable-uploads/1248dd04-4651-4e22-9cf0-d05c9d2166e7.png", 
      title: "Trips",
      alt: "Group of golfers on desert golf course"
    },
    {
      src: "/lovable-uploads/236168c4-4b17-4bc4-aef8-189909e9a01b.png",
      title: "Tournaments", 
      alt: "Golf course with mountain backdrop and players"
    },
    {
      src: "/lovable-uploads/8d91ef05-4509-4733-82d2-efdf4f334b64.png",
      title: "Courses",
      alt: "Beautiful sunset over golf course with water reflection"
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

      
      {/* Fixed Logo and Slogan that scale differently with scroll */}
      <div 
        className="fixed inset-0 z-10 flex items-start justify-center pt-16 pointer-events-none"
        style={{
          opacity: logoScale > 0.05 || textScale > 0.1 ? 1 : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <div 
            className="-mb-4 flex justify-center"
            style={{
              transform: `scale(${logoScale})`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img 
              src="/lovable-uploads/235a98b2-5c7a-4b4e-b0d3-376b892bfa2c.png" 
              alt="First Cut Drones Logo" 
              className="w-[32rem] h-[32rem] md:w-[48rem] md:h-[48rem] object-contain"
            />
          </div>
          
          {/* Text */}
          <div
            style={{
              transform: `scale(${textScale})`,
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

          {/* Gallery Section */}
          <div className="w-full flex">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative flex-1">
                <div className="relative overflow-hidden group cursor-pointer">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[60vh] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-4xl font-light text-white text-center z-10">
                      {image.title}
                    </h3>
                  </div>
                </div>
                {index < galleryImages.length - 1 && (
                  <div className="absolute top-0 right-0 w-px h-full bg-transparent border-r border-background/30"></div>
                )}
              </div>
            ))}
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
