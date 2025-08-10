// Event domains and their events data
// To add/update events, modify this file and commit to GitHub

export interface DomainEvent {
  id: string;
  name: string;
  registrationLink?: string;
  description?: string;
  isActive: boolean;
}

export interface EventDomain {
  id: string;
  name: string;
  description: string;
  events: DomainEvent[];
}

export const eventDomains: EventDomain[] = [
  {
    id: "ai",
    name: "AI (Artificial Intelligence)",
    description: "Explore the world of artificial intelligence and machine learning",
    events: [
      {
        id: "ai-workshop-1",
        name: "AI Fundamentals Workshop",
        registrationLink: "https://forms.google.com/sample-ai-form", // Demo link - replace with actual
        description: "Introduction to AI concepts and applications",
        isActive: true,
      },
      {
        id: "ai-workshop-2",
        name: "Machine Learning Bootcamp",
        registrationLink: "",
        description: "Hands-on ML training and projects",
        isActive: false,
      },
    ],
  },
  {
    id: "embedded",
    name: "EMBEDDED Systems",
    description: "Dive into embedded systems programming and hardware integration",
    events: [
      {
        id: "embedded-1",
        name: "Arduino Programming Workshop",
        registrationLink: "",
        description: "Learn Arduino programming from basics to advanced",
        isActive: false,
      },
      {
        id: "embedded-2",
        name: "IoT Development Challenge",
        registrationLink: "",
        description: "Build IoT solutions using embedded systems",
        isActive: false,
      },
    ],
  },
  {
    id: "robotics",
    name: "Robotics",
    description: "Build and program autonomous robots and robotic systems",
    events: [
      {
        id: "robotics-1",
        name: "Robot Building Competition",
        registrationLink: "",
        description: "Design and build autonomous robots",
        isActive: false,
      },
    ],
  },
  {
    id: "network",
    name: "Computer Network",
    description: "Master network protocols, security, and infrastructure design",
    events: [
      {
        id: "network-1",
        name: "Network Security Workshop",
        registrationLink: "",
        description: "Learn cybersecurity and network protection",
        isActive: false,
      },
    ],
  },
  {
    id: "vlsi",
    name: "VLSI",
    description: "VLSI design, semiconductor technology, and chip development",
    events: [
      {
        id: "vlsi-1",
        name: "VLSI Design Challenge",
        registrationLink: "",
        description: "Design and simulate VLSI circuits",
        isActive: false,
      },
    ],
  },
  {
    id: "industrial",
    name: "Industrial Projects",
    description: "Real-world industrial engineering projects and applications",
    events: [
      {
        id: "industrial-1",
        name: "Industry Collaboration Project",
        registrationLink: "",
        description: "Work on live industrial problems",
        isActive: false,
      },
    ],
  },
  {
    id: "placement",
    name: "Mock Placement Drive",
    description: "Practice interviews and placement preparation sessions",
    events: [
      {
        id: "placement-1",
        name: "Technical Interview Prep",
        registrationLink: "",
        description: "Master technical interviews and coding challenges",
        isActive: false,
      },
    ],
  },
  {
    id: "communication",
    name: "Communication Skills",
    description: "Enhance your professional communication and presentation abilities",
    events: [
      {
        id: "communication-1",
        name: "Public Speaking Workshop",
        registrationLink: "",
        description: "Improve your presentation and speaking skills",
        isActive: false,
      },
    ],
  },
];

/*
HOW TO UPDATE EVENT DATA VIA GITHUB:

1. LOCATION: This file is located at `src/data/events.ts`

2. TO ADD/UPDATE EVENTS IN DOMAINS:
   - Find the domain you want to update in the `eventDomains` array
   - Add new events to the `events` array within that domain
   - For each event, update:
     * id: Unique identifier for the event
     * name: Display name for the event
     * registrationLink: Google Form URL (leave empty if not ready)
     * description: Brief description of the event
     * isActive: Set to true when registration is open

3. EXAMPLE - Adding a new AI event:
   In the "ai" domain, add to the events array:
   {
     id: "ai-workshop-3",
     name: "Deep Learning Masterclass",
     registrationLink: "https://forms.google.com/your-actual-form-link",
     description: "Advanced deep learning techniques and neural networks",
     isActive: true,
   }

4. COMMIT PROCESS:
   - Make changes to this file
   - Commit to GitHub with a descriptive message like "Add new AI workshop event"
   - Changes will automatically sync to Lovable

5. REGISTRATION LINK FORMAT:
   - Use complete Google Forms URLs
   - Format: "https://forms.google.com/your-form-id"
   - Test links before committing

6. EVENT STATUS:
   - isActive: true = Registration open, shows "Register Now" button
   - isActive: false = Registration closed, shows "Registration Coming Soon"
   - No registrationLink = Shows "Details Coming Soon" message
*/