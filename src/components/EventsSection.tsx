import { useEffect, useState } from "react";
import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, X } from "lucide-react";
import EventModal from "./EventModal";
import { eventDomains } from "@/data/events";

// Import event images
import inauguralEventImg from "@/assets/events/inaugural-event.jpg";
import aiEventImg from "@/assets/events/ai-event.jpg";
import embeddedSystemsImg from "@/assets/events/embedded-systems.jpg";
import roboticsImg from "@/assets/events/robotics.jpg";
import computerNetworkImg from "@/assets/events/computer-network.jpg";
import lecture from "@/assets/events/lecture.jpg";
import lecture2 from "@/assets/events/lecture2.jpg";
import vlsiImg from "@/assets/events/vlsi.jpg";
import ai from "@/assets/events/ai-event.jpg";
import industrialProjectsImg from "@/assets/events/industrial-projects.jpg";
import mockPlacementImg from "@/assets/events/mock-placement.jpg";
import communicationSkillsImg from "@/assets/events/communication-skills.jpg";
import rfWirelessImg from "@/assets/events/rf-wireless.jpg"; // ✅ New image for RF Design
import AboutSection from "./AboutSection";

const EventsSection = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{
    id: string;
    name: string;
    image: string;
    date?: string;
    time?: string;
    venue?: string;
    special?: boolean;
  } | null>(null);

  const events = [
    {
      id: "Lecture",
      name: "AI & IOT HANDS-ON WORKSHOP",
      image: ai,
      date: "15/09/2025",
      time: "02:00 AM",
      venue: "201",
      special: true,
      about: "Join us for an immersive AI & IoT Hands-On Workshop designed to equip you with practical skills in Artificial Intelligence and Internet of Things technologies. This workshop offers a unique opportunity to engage in interactive sessions, real-world projects, and expert-led tutorials that will empower you to innovate and excel in the rapidly evolving tech landscape."
    },
    { id: "embedded", name: "EMBEDDED Systems", image: embeddedSystemsImg, about: "Dive into the world of Embedded Systems with our hands-on workshops and competitions. Learn to design and program microcontrollers, develop IoT applications, and explore real-time operating systems. Gain practical skills through projects and challenges that prepare you for a career in this dynamic field." },
    { id: "robotics", name: "Robotics", image: roboticsImg, about: "Explore the exciting field of Robotics through our engaging events and competitions. Learn about robot design, programming, and automation technologies. Participate in hands-on workshops and challenges that will enhance your skills and prepare you for a future in robotics engineering." },
    { id: "network", name: "Computer Network", image: computerNetworkImg ,about: "Delve into the fundamentals of Computer Networking with our interactive workshops and competitions. Understand network protocols, architecture, and security through practical sessions and real-world scenarios. Enhance your skills in network design and management, preparing you for a successful career in the IT and networking industry."},
    { id: "vlsi", name: "VLSI", image: vlsiImg ,about: "Immerse yourself in the world of VLSI (Very Large Scale Integration) through our specialized workshops and competitions. Learn about chip design, semiconductor technology, and circuit simulation. Gain hands-on experience with industry-standard tools and techniques, preparing you for a career in VLSI design and microelectronics."},
    { id: "industrial", name: "Industrial projects", image: industrialProjectsImg ,about: "Engage in real-world Industrial Projects that provide hands-on experience in electronics engineering. Collaborate on projects that address industry challenges, applying theoretical knowledge to practical solutions. Gain insights into project management, teamwork, and innovation, preparing you for a successful career in the industrial sector." },
    { id: "placement", name: "Mock placement drive", image: mockPlacementImg,about: "Prepare for your career with our comprehensive Mock Placement Drive. Participate in simulated interviews, aptitude tests, and group discussions designed to mirror real-world placement scenarios. Receive valuable feedback and guidance to enhance your skills, boost your confidence, and increase your chances of success in actual job placements." },
    { id: "communication", name: "Communication skills", image: communicationSkillsImg ,about: "Enhance your Communication Skills through our targeted workshops and training sessions. Learn effective verbal and non-verbal communication techniques, presentation skills, and professional writing. Participate in interactive activities that build confidence and improve your ability to convey ideas clearly and persuasively in both personal and professional settings."},
    { id: "rf", name: "RF Design and Wireless Communication (6G)", image: rfWirelessImg ,about:"Discover the future of connectivity with RF Design and Wireless Communication (6G). This session will cover advances in antenna design, spectrum usage, and the role of 6G in building ultra-fast, intelligent networks, while highlighting opportunities for students in next-gen wireless systems."}, // ✅ New Event
  ];

  const handleEventClick = (event: typeof events[0]) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const getEventDomain = (eventId: string) => {
    return eventDomains.find(domain => domain.id === eventId);
  };

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const eventDateStr = events[0].date;
      const eventTimeStr = events[0].time;

      const [day, month, year] = eventDateStr.split("/").map(Number);
      let [time, meridian] = eventTimeStr.split(" ");
      let [hours, minutes] = time.split(":").map(Number);

      if (meridian === "PM" && hours !== 12) hours += 12;
      if (meridian === "AM" && hours === 12) hours = 0;

      const eventDate = new Date(year, month - 1, day, hours, minutes, 0);
      const diff = eventDate.getTime() - now.getTime();

      if (diff <= 0) {
        setCurrentTime("00:00:00:00");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);

      const formattedTime = `${days.toString().padStart(2, "0")}:${hoursLeft
        .toString()
        .padStart(2, "0")}:${minutesLeft
          .toString()
          .padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;

      setCurrentTime(formattedTime);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, [events]);

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
            onClick={() => handleEventClick(event)}
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
            onClick={() => handleEventClick(event)}
            className="cursor-pointer bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-primary hover:text-white hover:[&_*]:text-white transition-all duration-300 overflow-hidden"
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
              <p className="text-sm mb-6">
                Explore exciting events and competitions in {event.name.toLowerCase()} domain with
                industry experts and hands-on learning opportunities
              </p>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-300">
                Explore Events
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          domain={getEventDomain(selectedEvent.id || "")}
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedEvent(null);
          }}
        />
      )}
    </SectionContainer>
  );
};

export default EventsSection;
