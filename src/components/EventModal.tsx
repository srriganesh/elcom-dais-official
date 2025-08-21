import { X, ExternalLink, Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { EventDomain, DomainEvent } from "@/data/events";

interface EventModalProps {
  event: {
    id: string;
    name: string;
    image: string;
    date?: string;
    time?: string;
    venue?: string;
    special?: boolean;
  };
  domain: EventDomain | undefined;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, domain, isOpen, onClose }: EventModalProps) => {
  if (!isOpen) return null;

  const handleRegistrationClick = (registrationLink: string) => {
    if (registrationLink) {
      window.open(registrationLink, '_blank');
    }
  };

  const renderEventsList = () => {
    if (!domain) {
      return (
        <div className="text-center py-12">
          <div className="animate-pulse">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-primary text-xl font-semibold mb-2">
              🚀 Events Coming Soon
            </div>
            <p className="text-muted-foreground">
              Exciting events in this domain will be announced shortly!
            </p>
          </div>
        </div>
      );
    }

    if (!domain.events || domain.events.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="animate-pulse">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-primary text-xl font-semibold mb-2">
              📋 Events to be Announced
            </div>
            <p className="text-muted-foreground">
              Stay tuned for amazing events in {domain.name}!
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Events in {domain.name}</h3>
        {domain.events.map((domainEvent) => (
          <div
            key={domainEvent.id}
            className="border border-border rounded-lg p-4 bg-gradient-to-br from-muted/30 to-transparent hover:from-muted/50 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-semibold text-lg">{domainEvent.name}</h4>
              <div className="flex gap-2">
                {domainEvent.isActive && domainEvent.registrationLink ? (
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    Open
                  </span>
                ) : (
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">
                    Soon
                  </span>
                )}
              </div>
            </div>
            
            {domainEvent.description && (
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {domainEvent.description}
              </p>
            )}

            {domainEvent.isActive && domainEvent.registrationLink ? (
              <button
                onClick={() => handleRegistrationClick(domainEvent.registrationLink!)}
                className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 group text-sm"
              >
                Register Now
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ) : (
              <div className="w-full text-center py-2 px-4 rounded-lg bg-muted/50 text-muted-foreground text-sm">
                {domainEvent.registrationLink ? "Registration Opening Soon" : "Details Coming Soon"}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-gradient-to-br from-card/95 to-background/95 border border-border cyber-border rounded-xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors z-10"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Event Image */}
        <div className="h-64 relative overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-16">
            <h2 className="text-2xl font-bold text-white mb-2">
              {event.special ? event.name : domain?.name || event.name}
            </h2>
            {domain && !event.special && (
              <p className="text-white/80 text-sm">{domain.description}</p>
            )}
          </div>
        </div>

        {/* Event Details */}
        <div className="p-6">
          {/* Event Info for Inaugural Event Only */}
          {event.special && event.date && event.time && event.venue && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{event.venue}</span>
              </div>
            </div>
          )}

          {/* Events List or Description */}
          {event.special ? (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About This Event</h3>
              <p className="text-muted-foreground leading-relaxed">
                Join us for an inspiring KLF Lecture as we journey through India’s space exploration
                 milestones – from Aryabhata to Gaganyaan. This session will highlight the remarkable 
                 legacy of SDSC SHAR and its pivotal role in shaping the future of space missions.</p>
            </div>
          ) : (
            renderEventsList()
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;