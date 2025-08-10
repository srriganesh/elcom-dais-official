import { X, ExternalLink, Calendar, Clock, MapPin } from "lucide-react";
import { EventRegistration } from "@/data/events";

interface EventModalProps {
  event: {
    name: string;
    image: string;
    date?: string;
    time?: string;
    venue?: string;
  };
  registration: EventRegistration | undefined;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, registration, isOpen, onClose }: EventModalProps) => {
  if (!isOpen) return null;

  const handleRegistrationClick = () => {
    if (registration?.registrationLink) {
      window.open(registration.registrationLink, '_blank');
    }
  };

  const renderActionButton = () => {
    if (!registration) {
      return (
        <div className="text-center py-8">
          <div className="animate-pulse">
            <div className="text-primary text-lg font-semibold mb-2">
              🚀 Events to be Announced
            </div>
            <p className="text-muted-foreground">
              Stay tuned for exciting updates!
            </p>
          </div>
        </div>
      );
    }

    if (!registration.isActive || !registration.registrationLink) {
      return (
        <div className="text-center py-4">
          <div className="text-primary text-lg font-semibold mb-2">
            📋 Registration Coming Soon
          </div>
          <p className="text-muted-foreground text-sm">
            We're preparing something amazing for you!
          </p>
        </div>
      );
    }

    return (
      <button
        onClick={handleRegistrationClick}
        className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 group"
      >
        Register Now
        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </button>
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
              {registration?.name || event.name}
            </h2>
          </div>
        </div>

        {/* Event Details */}
        <div className="p-6">
          {/* Event Info for Inaugural Event */}
          {event.date && event.time && event.venue && (
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

          {/* Event Description */}
          {registration?.description && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About This Event</h3>
              <p className="text-muted-foreground leading-relaxed">
                {registration.description}
              </p>
            </div>
          )}

          {/* Action Button */}
          <div className="space-y-4">
            {renderActionButton()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;