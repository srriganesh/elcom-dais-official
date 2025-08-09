import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Trophy } from "lucide-react";

// Import event images
import aiEventImg from "@/assets/events/ai-event.jpg";
import embeddedSystemsImg from "@/assets/events/embedded-systems.jpg";
import roboticsImg from "@/assets/events/robotics.jpg";
import computerNetworkImg from "@/assets/events/computer-network.jpg";
import vlsiImg from "@/assets/events/vlsi.jpg";
import industrialProjectsImg from "@/assets/events/industrial-projects.jpg";
import mockPlacementImg from "@/assets/events/mock-placement.jpg";
import communicationSkillsImg from "@/assets/events/communication-skills.jpg";

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
          { name: "AI (Artificial Intelligence)", image: aiEventImg },
          { name: "EMBEDDED Systems", image: embeddedSystemsImg },
          { name: "Robotics", image: roboticsImg },
          { name: "Computer Network", image: computerNetworkImg },
          { name: "VLSI", image: vlsiImg },
          { name: "Industrial projects", image: industrialProjectsImg },
          { name: "Mock placement drive", image: mockPlacementImg },
          { name: "Communication skills", image: communicationSkillsImg }
        ].map((event, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-primary transition-all duration-300 overflow-hidden">
            <div className="h-48 relative overflow-hidden">
              <img 
                src={event.image} 
                alt={event.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                Upcoming
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {event.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Join us for an exciting {event.name.toLowerCase()} event with industry experts and hands-on learning
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