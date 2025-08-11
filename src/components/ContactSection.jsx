import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, ImageIcon, MessageCircleMore } from "lucide-react"; // ✅ using MessageCircleMore for WhatsApp-like icon
import React from "react";

// Manually import your gallery images here
import img1 from "@/assets/gallery/img1.jpg";
import img2 from "@/assets/gallery/img2.jpg";
import img3 from "@/assets/gallery/img3.jpg";
import img4 from "@/assets/gallery/img4.jpg";
import img5 from "@/assets/gallery/img5.jpg";
import img6 from "@/assets/gallery/img6.jpg";
import img7 from "@/assets/gallery/img7.jpg";
import img8 from "@/assets/gallery/img8.jpg";

const ContactSection = () => {
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <SectionContainer id="contact" title="Contact & Gallery">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <Card className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">elcomdais@sastra.ac.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">SASTRA University, Thanjavur</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
              <div className="flex space-x-3">
                {/* Instagram */}
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-pink-500/10 hover:border-pink-500 transition-colors"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/elcomdais?igsh=MWtlc2NwOTJ2aTBscQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4 text-pink-500" />
                  </a>
                </Button>

                {/* LinkedIn */}
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-blue-500/10 hover:border-blue-500 transition-colors"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/company/elcom-dais/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 text-blue-500" />
                  </a>
                </Button>

                {/* WhatsApp (lucide-react alternative) */}
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-green-500/10 hover:border-green-500 transition-colors"
                  asChild
                >
                  <a
                    href="https://whatsapp.com/channel/0029VbBDfFmBFLgNjbP7uT1K"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircleMore className="w-4 h-4 text-green-500" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gallery */}
        <Card className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border">
          <CardContent className="p-8">
            <div className="flex items-center space-x-2 mb-6">
              <ImageIcon className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-primary">Gallery</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer group"
                >
                  <img 
                    src={image} 
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;