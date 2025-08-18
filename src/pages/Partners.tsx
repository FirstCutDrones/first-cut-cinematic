import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Camera, Award } from "lucide-react";

const Partners = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-golden" />,
      title: "Expand Membership Reach",
      description: "Attract new members with stunning aerial showcases that highlight your course's premium amenities and exclusive features."
    },
    {
      icon: <Award className="h-8 w-8 text-golden" />,
      title: "Tournament Coverage Excellence", 
      description: "Professional event documentation that enhances your tournament reputation and attracts future prestigious golf events."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-golden" />,
      title: "Increased Marketing Reach",
      description: "Professional aerial content that showcases your course's unique features and drives social media engagement."
    },
    {
      icon: <Camera className="h-8 w-8 text-golden" />,
      title: "Volume Discounts & Licensing",
      description: "Significant savings on multiple services with full commercial usage rights across all your marketing channels."
    }
  ];

  const partnershipFeatures = [
    "Signature hole flyovers",
    "Full 18-hole course documentation",
    "Course overview and aerial shots",
    "Tournament coverage and event documentation", 
    "Promotional video creation",
    "Social media content package",
    "Raw footage library access",
    "Live streaming capabilities",
    "Multiple course coverage",
    "Quarterly content updates",
    "Professional editing and post-production",
    "Dedicated account manager",
    "Commercial usage rights",
    "Custom delivery formats"
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
                      <div className="text-golden">{benefit.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-foreground-secondary text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Package Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Partnership Package</h2>
              <p className="text-xl text-foreground-secondary">
                Comprehensive aerial videography solution for golf courses of all sizes.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="card-hover">
                <CardContent className="p-12">
                  <h3 className="text-3xl font-bold mb-6 text-center">Complete Golf Course Partnership</h3>
                  <p className="text-foreground-secondary mb-8 text-center text-lg">
                    Professional aerial videography package including tournament coverage, course documentation, 
                    and marketing content creation with full commercial usage rights.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {partnershipFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button className="btn-cinematic text-lg px-12 py-3">
                      Get Custom Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
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