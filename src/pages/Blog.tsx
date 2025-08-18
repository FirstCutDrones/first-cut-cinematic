import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Top 5 Signature Holes in Arizona",
      excerpt: "Discover the most stunning and challenging signature holes across Arizona's premier golf destinations, from Scottsdale to Sedona.",
      author: "First Cut Drones Team",
      date: "December 15, 2024",
      image: "https://images.unsplash.com/photo-1593001874117-4bfa8437c8f4?w=800&q=80",
      category: "Golf Destinations",
      readTime: "5 min read"
    },
    {
      title: "What to Know Before Hiring a Golf Drone Operator",
      excerpt: "Essential questions to ask, regulations to consider, and tips for getting the best results from your golf course drone videography project.",
      author: "Mike Rodriguez",
      date: "December 10, 2024", 
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
      category: "Industry Insights",
      readTime: "7 min read"
    },
    {
      title: "Behind the Scenes: Filming at Pebble Beach",
      excerpt: "An exclusive look at our recent shoot at one of golf's most iconic venues, including the challenges and rewards of aerial filming on the coast.",
      author: "Sarah Chen",
      date: "December 5, 2024",
      image: "https://images.unsplash.com/photo-1586877079513-46ef4e2d52fb?w=800&q=80",
      category: "Behind the Scenes",
      readTime: "6 min read"
    },
    {
      title: "The Future of Golf Course Marketing",
      excerpt: "How aerial videography and drone technology are revolutionizing the way golf courses attract and engage with potential visitors.",
      author: "Tom Williams",
      date: "November 28, 2024",
      image: "https://images.unsplash.com/photo-1614800750498-1ad5ce3c6610?w=800&q=80",
      category: "Marketing",
      readTime: "8 min read"
    },
    {
      title: "Drone Filming Tips for Golf Tournaments",
      excerpt: "Professional techniques and best practices for capturing tournament action from above while following all regulations and safety protocols.",
      author: "First Cut Drones Team",
      date: "November 20, 2024",
      image: "https://images.unsplash.com/photo-1571012066817-bb69d37b9870?w=800&q=80",
      category: "Technical",
      readTime: "10 min read"
    },
    {
      title: "Course Design Through a Drone's Eye",
      excerpt: "How aerial perspectives reveal the architectural genius of golf course design and help golfers appreciate strategic elements from above.",
      author: "Emily Johnson",
      date: "November 15, 2024",
      image: "https://images.unsplash.com/photo-1566919047554-d863ee04cff5?w=800&q=80",
      category: "Golf Design",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Golf Destinations", "Industry Insights", "Behind the Scenes", "Marketing", "Technical", "Golf Design"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-glow">
              Blog & Insights
            </h1>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Explore the intersection of golf and drone technology. From course spotlights to technical insights, 
              discover everything about aerial golf videography.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <Card className="card-hover overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center space-x-4 text-sm text-foreground-secondary mb-4">
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">Featured</span>
                    <span>{posts[0].category}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                  <p className="text-foreground-secondary mb-6 text-lg">{posts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-foreground-secondary">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4 text-golden" />
                        <span>{posts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-golden" />
                        <span>{posts[0].date}</span>
                      </div>
                      <span>{posts[0].readTime}</span>
                    </div>
                    <Link to="#" className="flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 text-golden" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post, index) => (
                <Card key={index} className="card-hover group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground-secondary mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-foreground-secondary">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-golden" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-background-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-foreground-secondary mb-8">
              Get the latest insights on golf drone videography, course spotlights, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border focus:ring-2 focus:ring-accent focus:border-accent"
              />
              <button className="btn-cinematic px-6 py-3 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <MobileCTA />
    </div>
  );
};

export default Blog;