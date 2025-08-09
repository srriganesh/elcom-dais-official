import { useEffect, useState } from "react";
import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, X } from "lucide-react";

// Import event images
import inauguralEventImg from "@/assets/events/inaugural-event.jpg";
import aiEventImg from "@/assets/events/ai-event.jpg";
import embeddedSystemsImg from "@/assets/events/embedded-systems.jpg";
import roboticsImg from "@/assets/events/robotics.jpg";
import computerNetworkImg from "@/assets/events/computer-network.jpg";
import vlsiImg from "@/assets/events/vlsi.jpg";
import industrialProjectsImg from "@/assets/events/industrial-projects.jpg";
import mockPlacementImg from "@/assets/events/mock-placement.jpg";
import communicationSkillsImg from "@/assets/events/communication-skills.jpg";

const EventsSection = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const formattedTime = `${hours
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")} ${ampm}`;
      setCurrentTime(formattedTime);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const events = [
    {
      name: "Inaugural Event",
      image: inauguralEventImg,
      date: "11/08/2025",
      time: "03:00 PM",
      venue: "Auditorium",
      special: true,
    },
    { name: "AI (Artificial Intelligence)", image: aiEventImg },
    { name: "EMBEDDED Systems", image: embeddedSystemsImg },
    { name: "Robotics", image: roboticsImg },
    { name: "Computer Network", image: computerNetworkImg },
    { name: "VLSI", image: vlsiImg },
    { name: "Industrial projects", image: industrialProjectsImg },
    { name: "Mock placement drive", image: mockPlacementImg },
    { name: "Communication skills", image: communicationSkillsImg },
  ];

  return (
    <SectionContainer id="events" title="Events" className="cyber-grid">
      <div className="text-center mb-12">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover exciting electronics engineering competitions and workshops
        </p>
      </div>

      {/* Inaugural Event Centered */}
      <div className="flex justify-center mb-8">
        {events.slice(0, 1).map((event, index) => (
          <Card
            key={index}
            onClick={() => setShowModal(true)}
            className="cursor-pointer bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-primary hover:text-white hover:[&_*]:text-white transition-all duration-300 overflow-hidden max-w-md w-full"
          >
            <div className="h-56 relative overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-3">{event.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center justify-center text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center justify-center text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.venue}</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold shadow-md hover:opacity-90">
                {currentTime}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Other Events */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {events.slice(1).map((event, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-primary hover:text-white hover:[&_*]:text-white transition-all duration-300 overflow-hidden"
          >
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
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">{event.name}</h3>
              <p className="text-sm mb-4">
                Join us for an exciting {event.name.toLowerCase()} event with
                industry experts and hands-on learning
              </p>
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Date: TBA</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Time: TBA</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Venue: TBA</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold shadow-md hover:opacity-90">
                Registration Opening Soon
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal for inaugural event image */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-3xl w-full">
            <button
              className="absolute top-3 right-3 bg-black/70 text-white rounded-full p-2 hover:bg-black"
              onClick={() => setShowModal(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={inauguralEventImg}
              alt="Inaugural Event"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default EventsSection;
