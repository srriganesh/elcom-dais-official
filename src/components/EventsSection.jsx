import React, { useState } from "react";
import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { events } from "@/data/events";
import EventModal from "./EventModal";

const EventsSection = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreEvents = (domainKey) => {
    setSelectedDomain(domainKey);
    setIsModalOpen(true);
  };

  return (
    <SectionContainer id="events" title="Upcoming Events">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Card 
            key={event.id} 
            className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-primary transition-all duration-300 overflow-hidden"
          >
            <div className="relative">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                {event.isSpecial && (
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Special Event
                  </Badge>
                )}
              </div>
            </div>
            
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {event.description}
              </p>
              
              {event.isSpecial && (
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {event.venue}
                  </div>
                </div>
              )}
              
              <Button 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground glow-primary transition-all duration-300"
                onClick={() => {
                  if (event.isSpecial) {
                    // Handle special event registration
                    window.open('#', '_blank'); // Replace with actual registration link
                  } else {
                    handleExploreEvents(event.domainKey);
                  }
                }}
              >
                {event.isSpecial ? 'Register Now' : 'Explore Events'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <EventModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        domainKey={selectedDomain}
      />
    </SectionContainer>
  );
};

export default EventsSection;