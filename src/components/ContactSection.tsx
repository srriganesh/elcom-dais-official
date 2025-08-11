import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, ImageIcon, MessageCircleMore } from "lucide-react"; // ✅ using MessageCircleMore for WhatsApp-like icon
import React from "react";

// Manually import your gallery images here
import galleryImg1 from "@/assets/gallery/img1.jpg";
import galleryImg2 from "@/assets/gallery/img2.jpg";
import galleryImg3 from "@/assets/gallery/img3.jpg";
import galleryImg4 from "@/assets/gallery/img4.jpg";
import galleryImg5 from "@/assets/gallery/img5.jpg";
import galleryImg6 from "@/assets/gallery/img6.jpg";
import galleryImg7 from "@/assets/gallery/img7.jpg";
import galleryImg8 from "@/assets/gallery/img8.jpg";

const galleryImages = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
  galleryImg7,
  galleryImg8,
];

const Gallery = () => {
  if (galleryImages.length === 0) {
    return (
      <div
        className="w-full h-64 bg-muted flex flex-col items-center justify-center rounded-md border border-border cyber-border cursor-pointer hover:glow-primary transition"
        onClick={() => alert("Gallery coming soon!")}
      >
        <ImageIcon className="w-12 h-12 text-muted-foreground mb-2" />
        <p className="text-muted-foreground">No Photos Available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {galleryImages.map((imgSrc, idx) => (
        <img
          key={idx}
          src={imgSrc}
          alt={`Gallery Image ${idx + 1}`}
          className="w-full h-32 object-cover rounded-md shadow-sm hover:scale-105 transition-transform cursor-pointer"
          onClick={() => window.open(imgSrc, "_blank")}
        />
      ))}
    </div>
  );
};

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
            {/* Email */}
            <a
              href="mailto:elcomdais2k25@gmail.com"
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-primary">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  elcomdais2k25@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+919080149394" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center glow-secondary">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  +91 90801 49394
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">SRC SASTRA, Kumbakonam</p>
                <a
                  href="https://maps.app.goo.gl/WocaXmRgPHsSLCnKA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-lg hover:opacity-90 transition"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="pt-8">
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Instagram */}
              <Button
                size="sm"
                variant="outline"
                className="cyber-border hover:glow-primary"
                asChild
              >
                <a
                  href="https://www.instagram.com/elcom_dais?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>

              {/* LinkedIn */}
              <Button
                size="sm"
                variant="outline"
                className="cyber-border hover:glow-primary"
                asChild
              >
                <a
                  href="https://www.linkedin.com/company/elcom-dais/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>

              {/* WhatsApp (lucide-react alternative) */}
              <Button
                size="sm"
                variant="outline"
                className="cyber-border hover:glow-primary"
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
        </div>

        {/* Photo Gallery */}
        <Card className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6">Photo Gallery</h3>
            <Gallery />
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
