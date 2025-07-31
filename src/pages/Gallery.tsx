import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const Gallery = () => {
  const categories = [
    {
      title: "Guy Trip Highlights",
      videos: [
        { id: 1, thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", title: "Scottsdale Boys Weekend" },
        { id: 2, thumbnail: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80", title: "Pebble Beach Adventure" },
        { id: 3, thumbnail: "https://images.unsplash.com/photo-1555081920-c13e4743702f?w=800&q=80", title: "Bachelor Party Golf" },
      ]
    },
    {
      title: "Signature Hole Flyovers",
      videos: [
        { id: 4, thumbnail: "https://images.unsplash.com/photo-1593001874117-4bfa8437c8f4?w=800&q=80", title: "Ocean Course #17" },
        { id: 5, thumbnail: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80", title: "Desert Canyon Par 3" },
        { id: 6, thumbnail: "https://images.unsplash.com/photo-1586877079513-46ef4e2d52fb?w=800&q=80", title: "Mountain Vista #18" },
      ]
    },
    {
      title: "Hole-by-Hole Walkthroughs",
      videos: [
        { id: 7, thumbnail: "https://images.unsplash.com/photo-1614800750498-1ad5ce3c6610?w=800&q=80", title: "TPC Stadium Course" },
        { id: 8, thumbnail: "https://images.unsplash.com/photo-1566919047554-d863ee04cff5?w=800&q=80", title: "Whistling Straits" },
        { id: 9, thumbnail: "https://images.unsplash.com/photo-1571012066817-bb69d37b9870?w=800&q=80", title: "Augusta National Style" },
      ]
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
              Gallery
            </h1>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              Experience golf from a whole new perspective. Browse our collection of cinematic drone footage from courses around the world.
            </p>
          </div>
        </section>

        {/* Gallery Categories */}
        {categories.map((category, index) => (
          <section key={index} className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{category.title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video) => (
                  <Card key={video.id} className="card-hover group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 px-4 bg-background-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Capture Your Course Next</h2>
            <p className="text-xl text-foreground-secondary mb-8">
              Ready to showcase your golf course or capture your next golf adventure? Let's create something cinematic together.
            </p>
            <Button className="btn-golden text-lg px-8 py-3">
              Start Your Project
            </Button>
          </div>
        </section>
      </main>

      <MobileCTA />
    </div>
  );
};

export default Gallery;