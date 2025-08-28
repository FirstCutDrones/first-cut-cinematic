import { Link } from "react-router-dom";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Camera, Video, Users } from "lucide-react";

const Tournaments = () => {
  const features = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Complete Tournament Coverage",
      description: "From opening ceremonies to award presentations, we capture every pivotal moment of your tournament."
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Player Action Shots",
      description: "Dynamic aerial footage of players in action, showcasing the skill and intensity of competitive golf."
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Highlight Reels",
      description: "Professional tournament highlight videos perfect for promotion, memories, and social media."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Crowd & Atmosphere",
      description: "Capture the energy and excitement of spectators and the overall tournament atmosphere."
    }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/236168c4-4b17-4bc4-aef8-189909e9a01b.png",
      alt: "Tournament golf course aerial view"
    },
    {
      id: 2,
      src: "/lovable-uploads/8d91ef05-4509-4733-82d2-efdf4f334b64.png",
      alt: "Golf tournament sunset shot"
    },
    {
      id: 3,
      src: "/lovable-uploads/61767fed-6d4f-4ea9-a60d-60d020ea5a1f.png",
      alt: "Tournament players on course"
    },
    {
      id: 4,
      src: "/lovable-uploads/235a98b2-5c7a-4b4e-b0d3-376b892bfa2c.png",
      alt: "Golf course tournament setup"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Logo in top left */}
      <Link to="/" className="fixed top-6 left-6 z-50">
        <img 
          src="/lovable-uploads/b81b82a2-dbad-4b88-b8c8-858730d1a2de.png" 
          alt="First Cut Drones" 
          className="h-20 w-auto"
        />
      </Link>

      {/* Main Content */}
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              Tournament Coverage
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed mb-8">
                Elevate your golf tournament with cinematic drone coverage that captures every moment 
                of excitement, competition, and triumph. From dramatic course overviews to intimate 
                player moments, we document the complete tournament experience from above.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-border bg-gradient-subtle">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-golden">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16 py-12 bg-gradient-primary rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Showcase Your Tournament?
            </h2>
            <p className="text-xl text-foreground-secondary mb-8 max-w-2xl mx-auto">
              Let us capture the drama, skill, and excitement that makes your tournament unforgettable.
            </p>
            <Button asChild className="btn-golden text-lg px-8 py-3">
              <Link to="/quote">Get Tournament Quote</Link>
            </Button>
          </div>

          {/* Gallery Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Tournament Moments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group cursor-pointer overflow-hidden rounded-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <MobileCTA />
    </div>
  );
};

export default Tournaments;