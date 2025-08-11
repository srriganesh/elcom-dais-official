import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, Sparkles } from "lucide-react";
import { eventDomains } from "@/data/events";

const EventModal = ({ isOpen, onClose, domainKey }) => {
  if (!domainKey || !eventDomains[domainKey]) return null;

  const domain = eventDomains[domainKey];
  const activeEvents = domain.events.filter(event => event.isActive);
  const hasEvents = activeEvents.length > 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-background to-muted/30 border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {domain.name}
          </DialogTitle>
          <p className="text-muted-foreground mt-2">{domain.description}</p>
        </DialogHeader>

        <div className="mt-6">
          {hasEvents ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold">Available Events</span>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {activeEvents.length}
                </Badge>
              </div>
              
              {activeEvents.map((event, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-primary/20 bg-gradient-to-r from-card to-muted/20 hover:from-primary/5 hover:to-secondary/5 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{event.name}</h3>
                    <Badge variant="outline" className="border-primary/40 text-primary">
                      Active
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground"
                    onClick={() => window.open(event.registrationLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Register Now
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground">Events Coming Soon!</h3>
              <p className="text-muted-foreground mb-4">
                Exciting events in {domain.name} are being planned. Stay tuned for updates!
              </p>
              
              <div className="flex justify-center space-x-1 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Follow us for the latest announcements
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;