import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <SectionContainer id="contact" title="Contact Us">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              Have questions about ELCOM DAIS? Reach out to us and we'll get back to you soon.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-primary">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">Contact info will be updated soon</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center glow-secondary">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">Contact info will be updated soon</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">SASTRA University, Thanjavur</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="pt-8">
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="cyber-border hover:glow-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="cyber-border hover:glow-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="cyber-border hover:glow-primary">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <div className="w-full h-10 bg-input border border-border rounded-md cyber-border"></div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="w-full h-10 bg-input border border-border rounded-md cyber-border"></div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <div className="w-full h-10 bg-input border border-border rounded-md cyber-border"></div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <div className="w-full h-24 bg-input border border-border rounded-md cyber-border"></div>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground glow-primary">
                Send Message
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Form functionality will be implemented soon
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;