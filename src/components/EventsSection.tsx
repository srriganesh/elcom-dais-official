import React, { useState } from "react";

interface Event {
  name: string;
  date?: string;
  time?: string;
  venue?: string;
  image?: string;
  registration?: string;
}

const EventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      name: "Inaugural Event",
      date: "11/08/2025",
      time: "3:00 PM",
      venue: "Auditorium",
      image: "/images/inaugural-event.jpg",
      registration: "Running Time",
    },
    { name: "Tech Talk", registration: "Registration opening soon" },
    { name: "Coding Contest", registration: "Registration opening soon" },
    { name: "Workshop", registration: "Registration opening soon" },
  ];

  const handleEventClick = (event: Event) => {
    if (event.name === "Inaugural Event") {
      setSelectedEvent(event);
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Events</h2>

        {/* Inaugural Event Top & Center */}
        <div className="flex justify-center mb-8">
          {events
            .filter((e) => e.name === "Inaugural Event")
            .map((event, index) => (
              <div
                key={index}
                onClick={() => handleEventClick(event)}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 border-2 border-transparent hover:border-yellow-400 group"
                style={{ width: "300px" }}
              >
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-black">
                    {event.name}
                  </h3>
                  <p className="mb-1">{event.date}</p>
                  <p className="mb-1">{event.venue}</p>
                  <button className="mt-2 px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors">
                    {event.registration}
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Other Events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events
            .filter((e) => e.name !== "Inaugural Event")
            .map((event, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 border-2 border-transparent hover:border-yellow-400 group"
              >
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-black">
                    {event.name}
                  </h3>
                  <p className="mb-1">{event.date || "Date: TBA"}</p>
                  <p className="mb-1">{event.venue || "Venue: TBA"}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors">
                    {event.registration}
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Modal for inaugural event image */}
        {selectedEvent && selectedEvent.image && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedEvent(null)}
          >
            <div className="bg-white p-4 rounded shadow-lg max-w-lg w-full">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.name}
                className="w-full h-auto"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
