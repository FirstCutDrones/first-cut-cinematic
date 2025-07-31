import Navigation from "@/components/Navigation";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    date: "",
    location: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get Your Quote
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to capture your golf experience from above? Let's discuss your project and create something cinematic together.
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="signature-hole">Signature Hole Flyover - $250</SelectItem>
                        <SelectItem value="full-course">Full Course Package - $3,000</SelectItem>
                        <SelectItem value="guys-trip">Guy Trip Highlights - $850</SelectItem>
                        <SelectItem value="raw-footage">Raw Drone Footage - $500</SelectItem>
                        <SelectItem value="custom">Custom Request</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Course/Location *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="mt-2"
                        placeholder="e.g., Pebble Beach Golf Links"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Project Details</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="mt-2"
                      rows={4}
                      placeholder="Tell us more about your project, special requirements, or any questions you have..."
                    />
                  </div>

                  <Button type="submit" className="btn-golden w-full text-lg py-3">
                    Submit Quote Request
                  </Button>

                  <p className="text-sm text-foreground-secondary text-center">
                    We'll get back to you within 24 hours with a detailed quote and project timeline.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Prefer to Call or Email?</h3>
              <div className="space-y-2">
                <p className="text-foreground-secondary">
                  Email: <span className="text-accent">hello@firstcutdrones.com</span>
                </p>
                <p className="text-foreground-secondary">
                  Phone: <span className="text-accent">(555) 123-GOLF</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MobileCTA />
    </div>
  );
};

export default Quote;