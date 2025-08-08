import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-primary">
              <span className="text-primary-foreground font-bold text-sm">ED</span>
            </div>
            <span className="text-lg font-bold text-glow">ELCOM DAIS</span>
          </div>
          
          <p className="text-muted-foreground">
            Electronics Engineering Excellence at SASTRA University
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by ELCOM DAIS Team</span>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © 2024 ELCOM DAIS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;