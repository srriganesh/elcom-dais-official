import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Trophy } from "lucide-react";

const EventsSection = () => {
  return (
    <SectionContainer id="events" title="Events" className="cyber-grid">
      <div className="text-center mb-12">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover exciting electronics engineering competitions and workshops
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "AI (Artificial Intelligence)",
          "EMBEDDED Systems", 
          "Robotics",
          "Computer Network",
          "VLSI",
          "Industrial projects",
          "Mock placement drive",
          "Communication skills"
        ].map((eventName, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-primary transition-all duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Trophy className="w-16 h-16 text-primary/60" />
              </div>
              <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Upcoming
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {eventName}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Join us for an exciting {eventName.toLowerCase()} event with industry experts and hands-on learning
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Date: TBA</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Time: TBA</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Venue: TBA</span>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground"
                size="sm"
              >
                Registration Opening Soon
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default EventsSection;