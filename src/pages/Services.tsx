import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import signatureHole from "@/assets/signature-hole.jpg";
import fullCourse from "@/assets/full-course.jpg";
import guysTrip from "@/assets/guys-trip.jpg";

const Services = () => {
  const services = [
    {
      title: "Signature Hole Flyover",
      description: "Cinematic aerial footage of your course's most iconic hole. Perfect for marketing and social media.",
      price: "$250",
      image: signatureHole,
      features: ["30-60 second highlight reel", "4K resolution", "Professional editing", "Multiple angles"]
    },
    {
      title: "Full Course Package", 
      description: "Complete aerial documentation of all 18 holes with detailed flyovers and course overview.",
      price: "$3,000",
      image: fullCourse,
      features: ["All 18 holes covered", "Course overview shots", "Promotional package", "Raw footage included"]
    },
    {
      title: "Guy Trip Highlights",
      description: "Capture the memorable moments of your golf getaway with friends. Action shots and group highlights.",
      price: "$850",
      image: guysTrip,
      features: ["Follow group play", "Action sequences", "Celebration moments", "Same-day highlights"]
    },
    {
      title: "Raw Drone Footage",
      description: "Unedited 4K drone footage for your own post-production needs. Perfect for golf course marketing teams.",
      price: "$500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      features: ["Unedited 4K footage", "Multiple flight sessions", "Various angles", "Professional drone pilot"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-glow">
              Services
            </h1>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              Professional drone videography services tailored for golf courses, tournaments, and golf adventures.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-hover group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-image w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-golden text-golden-foreground px-3 py-1 rounded-full font-bold">
                          {service.price}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-foreground-secondary mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-foreground-secondary flex items-center">
                            <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="btn-cinematic w-full">
                        Request Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Requests */}
        <section className="py-16 px-4 bg-background-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Custom Requests</h2>
            <p className="text-xl text-foreground-secondary mb-8">
              Have a unique project in mind? We specialize in custom drone videography solutions for golf events, tournaments, and special occasions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Tournament Coverage</h3>
                <p className="text-foreground-secondary text-sm">Multi-day event documentation with live streaming capabilities</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Golf Course Marketing</h3>
                <p className="text-foreground-secondary text-sm">Comprehensive marketing package for course promotion</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Special Events</h3>
                <p className="text-foreground-secondary text-sm">Weddings, corporate events, and private celebrations</p>
              </div>
            </div>
            <Button className="btn-golden text-lg px-8 py-3">
              Discuss Your Project
            </Button>
          </div>
        </section>
      </main>

      <MobileCTA />
    </div>
  );
};

export default Services;