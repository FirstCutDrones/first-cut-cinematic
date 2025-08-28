import { Link } from "react-router-dom";
import MobileCTA from "@/components/MobileCTA";

const Trips = () => {
  const tripImages = [
    {
      id: 1,
      src: "/lovable-uploads/1248dd04-4651-4e22-9cf0-d05c9d2166e7.png",
      alt: "Group golf trip in desert setting"
    },
    {
      id: 2,
      src: "/lovable-uploads/235a98b2-5c7a-4b4e-b0d3-376b892bfa2c.png",
      alt: "Golf course aerial view with mountains"
    },
    {
      id: 3,
      src: "/lovable-uploads/236168c4-4b17-4bc4-aef8-189909e9a01b.png",
      alt: "Scenic golf course with water features"
    },
    {
      id: 4,
      src: "/lovable-uploads/61767fed-6d4f-4ea9-a60d-60d020ea5a1f.png",
      alt: "Golf trip group photo on course"
    },
    {
      id: 5,
      src: "/lovable-uploads/8d91ef05-4509-4733-82d2-efdf4f334b64.png",
      alt: "Sunset golf course aerial perspective"
    },
    {
      id: 6,
      src: "/lovable-uploads/a5ef7576-77d1-4c55-8a75-a848484b9c51.png",
      alt: "Golf course landscape with dramatic lighting"
    }
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

      {/* Main Content */}
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              Golf Trips
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed mb-8">
                Capturing the camaraderie, adventure, and unforgettable moments of your golf trips. 
                From behind-the-scenes friendship to elevated experiences on world-class courses, 
                we document every aspect of your golf journey from a cinematic perspective.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tripImages.map((image) => (
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
      </main>

      <MobileCTA />
    </div>
  );
};

export default Trips;