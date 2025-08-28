import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Camera, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  const inclusions = [
    {
      icon: <Award className="h-8 w-8 text-golden" />,
      title: "Tournament Coverage",
      description: "Professional aerial documentation of your tournaments and special events, capturing the excitement and prestige of your venue."
    },
    {
      icon: <Camera className="h-8 w-8 text-golden" />,
      title: "Hole by Hole Course Overview", 
      description: "Complete aerial documentation of every hole on your course, showcasing the layout, challenges, and beauty of your design."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-golden" />,
      title: "Promotional Video",
      description: "Custom-crafted promotional video that highlights your course's best features and attracts new players and events."
    },
    {
      icon: <Users className="h-8 w-8 text-golden" />,
      title: "Website Sizzle Reel",
      description: "Dynamic short-form video content perfect for your website homepage to immediately capture visitor attention and showcase your course."
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
      {/* Logo in top left */}
      <Link to="/" className="fixed top-6 left-6 z-50">
        <img 
          src="/lovable-uploads/7d271c3f-61a5-41fc-a837-1441aa4f9d86.png" 
          alt="First Cut Drones" 
          className="h-20 w-auto"
        />
      </Link>
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Golf Course Partnerships
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed">
              Partner with First Cut Drones to elevate your golf course marketing with professional aerial videography. 
              Increase bookings, enhance your brand, and showcase your course like never before.
            </p>
          </div>
        </section>

        {/* Package Inclusions Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Package Inclusions</h2>
              <p className="text-lg text-foreground-secondary">
                Everything included in our comprehensive golf course partnership package.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inclusions.map((inclusion, index) => (
                <Card key={index} className="border-border bg-gradient-subtle">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {inclusion.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">{inclusion.title}</h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed">{inclusion.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Package Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Package</h2>
              <p className="text-lg text-foreground-secondary">
                Comprehensive aerial videography solution for golf courses of all sizes.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border-border bg-gradient-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-foreground">Complete Golf Course Partnership</h3>
                  <p className="text-foreground-secondary mb-6 text-center">
                    Professional aerial videography package including tournament coverage, course documentation, 
                    and marketing content creation with full commercial usage rights.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {partnershipFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-golden rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-sm text-foreground-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button asChild className="btn-golden text-lg px-8 py-3">
                      <Link to="/quote">Get Custom Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-foreground-secondary">
                See how our partner courses have transformed their marketing and increased revenue.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-golden">40%</div>
                <h3 className="text-xl font-semibold">Increase in Tee Time Bookings</h3>
                <p className="text-foreground-secondary">
                  Desert Canyon Golf Club saw a 40% increase in online bookings within 3 months of implementing 
                  our signature hole flyover in their marketing campaigns.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-golden">250%</div>
                <h3 className="text-xl font-semibold">Social Media Engagement Growth</h3>
                <p className="text-foreground-secondary">
                  Mountain View Resort experienced a 250% increase in social media engagement after featuring 
                  our aerial content across their digital platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg text-foreground-secondary mb-8">
              Join our network of forward-thinking golf courses that are leveraging the power of aerial videography 
              to enhance their marketing and increase revenue.
            </p>
            <div className="flex justify-center">
              <Button asChild className="btn-golden text-lg px-8 py-3">
                <Link to="/quote">Request Partnership Quote</Link>
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