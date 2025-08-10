import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, ImageIcon } from "lucide-react";
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
const galleryImages = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg7, galleryImg8];

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
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">SRC SASTRA, Kumbakonam</p>
              <a
                href="https://maps.app.goo.gl/WocaXmRgPHsSLCnKA" // placeholder link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-lg hover:opacity-90 transition"
              >
                View on Map
              </a>
            </div>
          </div>

        {/* Social Media */}
        <div className="pt-8">
          <h4 className="text-lg font-medium mb-4">Follow Us</h4>
          <div className="flex space-x-4">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4"
                  fill="currentColor"
                >
                  <path d="M380.9 97.1C339-3.6 211.6-32 112 39.1 12.3 110.1-16.1 237.5 54.9 337.2c22.6 32 52.5 57.1 87.2 73.7l-14.2 61.2c-2.5 10.8 7.5 20.1 18 16l66.4-25.7c98.2 26.3 203.4-23.6 239.4-118.5 36.1-94.9-7.4-203.7-70.8-247.8zM222.6 369.9c-34.2 0-67.9-9.8-96.5-28.4l-6.9-4.5-40.2 15.6 7.7-33.3-5.4-6.9c-59.6-76.7-44.2-186.9 32.6-246.5 76.8-59.6 186.9-44.2 246.5 32.6 59.6 76.8 44.2 186.9-32.6 246.5-28.6 22.1-64.4 34.9-105.2 34.9zm92.5-123.9c-4.6-2.3-27.3-13.4-31.5-15-4.2-1.5-7.3-2.3-10.4 2.3-3.1 4.6-11.9 15-14.6 18.1-2.7 3.1-5.4 3.5-10 1.2-4.6-2.3-19.4-7.2-36.9-22.9-13.6-12.1-22.8-27.1-25.5-31.7-2.7-4.6-.3-7.1 2-9.4 2-2 4.6-5.4 6.9-8.1 2.3-2.7 3.1-4.6 4.6-7.7 1.5-3.1.8-5.8-.4-8.1-1.2-2.3-10.4-24.9-14.2-34.2-3.8-9.2-7.7-7.9-10.4-8-2.7-.1-5.8-.1-8.8-.1s-8.1 1.2-12.3 5.8c-4.2 4.6-16.1 15.8-16.1 38.5s16.5 44.7 18.8 47.7c2.3 3.1 32.4 49.5 78.5 69.4 10.9 4.7 19.4 7.5 26 9.6 10.9 3.4 20.8 2.9 28.6 1.7 8.7-1.3 27.3-11.2 31.2-22.1 3.8-10.9 3.8-20.2 2.7-22.1-1.1-1.9-4.2-3.1-8.8-5.4z" />
                </svg>
              </a>
            </Button>
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
