import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Play, Camera, Users } from "lucide-react";
// Using public path instead of import to avoid bundling issues

const Index = () => {
  const services = [
    {
      icon: <Camera className="h-8 w-8 text-golden" />,
      title: "Trip Highlights",
      description: "Capture the memorable moments of your golf getaway with cinematic aerial footage and action sequences.",
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <iframe
              src="https://player.vimeo.com/video/1111039609?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&controls=0"
              className="w-full h-full object-cover md:scale-100 scale-150"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allow="autoplay; fullscreen"
              title="Golf Course Aerial Video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white fade-in">
              Your Golf Game,<br />
              <span className="text-golden">
                From a New Perspective
              </span>
            </h1>
          </div>
        </section>

        {/* Hero Text Section */}
        <section className="bg-black py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Cinematic drone videography that captures the precision, beauty, and excitement of golf like never before.
            </p>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20 px-4 bg-background-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Where Precision Meets Innovation</h2>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              First Cut Drones specializes in luxury drone videography for golf courses, tournaments, and golf adventures. 
              We blend the precision of golf with cutting-edge drone technology to create cinematic content that captures 
              every moment from breathtaking aerial perspectives.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Services</h2>
              <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
                Professional drone videography services tailored for golf courses, events, and memorable golf experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-hover group">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors">
                      <div className="text-golden">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-foreground-secondary mb-6">{service.description}</p>
                    <Button asChild variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground">
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-background-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl text-foreground-secondary">
                Trusted by golf courses, event organizers, and golf enthusiasts worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-8">
                    <blockquote className="text-lg italic mb-6 text-foreground-secondary">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-foreground-secondary">{testimonial.course}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
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
              <Button asChild variant="outline" className="text-lg px-8 py-3">
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <MobileCTA />
    </div>
  );
};

export default Index;
