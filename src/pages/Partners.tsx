import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Camera, Award } from "lucide-react";

const Partners = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increased Marketing Reach",
      description: "Professional aerial content that showcases your course's unique features and drives social media engagement."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Higher Tee Time Conversions",
      description: "Cinematic course previews that convert potential visitors into bookings through compelling visual storytelling."
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Volume Discounts",
      description: "Significant savings on multiple services including seasonal packages and ongoing content creation."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Licensing Rights",
      description: "Full commercial usage rights for all content across your marketing channels and promotional materials."
    }
  ];

  const packages = [
    {
      title: "Starter Package",
      description: "Perfect for smaller courses looking to enhance their digital presence",
      features: [
        "Signature hole flyover",
        "Course overview shots",
        "Social media package",
        "Basic editing included"
      ],
      pricing: "Starting at $500"
    },
    {
      title: "Professional Package",
      description: "Comprehensive solution for established golf courses and resorts",
      features: [
        "Full 18-hole documentation",
        "Promotional video creation",
        "Raw footage library",
        "Quarterly updates"
      ],
      pricing: "Starting at $2,500"
    },
    {
      title: "Enterprise Package",
      description: "Complete marketing solution for luxury resorts and tournament venues",
      features: [
        "Multiple course coverage",
        "Event documentation",
        "Live streaming capabilities",
        "Dedicated account manager"
      ],
      pricing: "Custom pricing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-glow">
              Golf Course Partner Program
            </h1>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Partner with First Cut Drones to elevate your golf course marketing with professional aerial videography. 
              Increase bookings, enhance your brand, and showcase your course like never before.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-background-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Partnership Benefits</h2>
              <p className="text-xl text-foreground-secondary">
                Discover how our partnership program can transform your course marketing and boost revenue.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                      <div className="text-accent">{benefit.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-foreground-secondary text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Partnership Packages</h2>
              <p className="text-xl text-foreground-secondary">
                Choose the package that best fits your course's needs and marketing goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                    <p className="text-foreground-secondary mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-golden mb-6">{pkg.pricing}</div>
                    <Button className="btn-cinematic w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-16 px-4 bg-background-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
              <p className="text-xl text-foreground-secondary">
                See how our partner courses have transformed their marketing and increased revenue.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="text-4xl font-bold text-accent">40%</div>
                <h3 className="text-2xl font-semibold">Increase in Tee Time Bookings</h3>
                <p className="text-foreground-secondary">
                  Desert Canyon Golf Club saw a 40% increase in online bookings within 3 months of implementing 
                  our signature hole flyover in their marketing campaigns.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="text-4xl font-bold text-golden">250%</div>
                <h3 className="text-2xl font-semibold">Social Media Engagement Growth</h3>
                <p className="text-foreground-secondary">
                  Mountain View Resort experienced a 250% increase in social media engagement after featuring 
                  our aerial content across their digital platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-foreground-secondary mb-8">
              Join our network of forward-thinking golf courses that are leveraging the power of aerial videography 
              to enhance their marketing and increase revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-golden text-lg px-8 py-3">
                Request Partnership Quote
              </Button>
              <Button variant="outline" className="text-lg px-8 py-3">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <MobileCTA />
    </div>
  );
};

export default Partners;