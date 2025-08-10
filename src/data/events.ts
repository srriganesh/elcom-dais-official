// Event registration data
// To add/update events, modify this file and commit to GitHub

export interface EventRegistration {
  id: string;
  name: string;
  registrationLink?: string;
  description?: string;
  isActive: boolean;
}

export const eventRegistrations: EventRegistration[] = [
  {
    id: "inaugural",
    name: "Inaugural Event",
    registrationLink: "", // Will be populated from events data
    description: "Join us for the grand opening ceremony",
    isActive: true,
  },
  {
    id: "ai",
    name: "AI Workshop: Future of Intelligence",
    registrationLink: "https://forms.google.com/sample-ai-form", // Demo link - replace with actual
    description: "Explore artificial intelligence and machine learning fundamentals",
    isActive: true,
  },
  {
    id: "embedded",
    name: "Embedded Systems",
    registrationLink: "",
    description: "Hands-on embedded systems programming and projects",
    isActive: false,
  },
  {
    id: "robotics",
    name: "Robotics",
    registrationLink: "",
    description: "Build and program autonomous robots",
    isActive: false,
  },
  {
    id: "network",
    name: "Computer Network",
    registrationLink: "",
    description: "Network protocols and infrastructure design",
    isActive: false,
  },
  {
    id: "vlsi",
    name: "VLSI",
    registrationLink: "",
    description: "VLSI design and semiconductor technology",
    isActive: false,
  },
  {
    id: "industrial",
    name: "Industrial Projects",
    registrationLink: "",
    description: "Real-world industrial engineering projects",
    isActive: false,
  },
  {
    id: "placement",
    name: "Mock Placement Drive",
    registrationLink: "",
    description: "Practice interviews and placement preparation",
    isActive: false,
  },
  {
    id: "communication",
    name: "Communication Skills",
    registrationLink: "",
    description: "Enhance your professional communication abilities",
    isActive: false,
  },
];

/*
HOW TO UPDATE EVENT DATA VIA GITHUB:

1. LOCATION: This file is located at `src/data/events.ts`

2. TO ADD/UPDATE EVENTS:
   - Edit the `eventRegistrations` array above
   - For each event, update:
     * name: Display name for the event
     * registrationLink: Google Form URL (leave empty if not ready)
     * description: Brief description of the event
     * isActive: Set to true when registration is open

3. EXAMPLE UPDATE:
   {
     id: "ai",
     name: "AI Workshop: Advanced Machine Learning",
     registrationLink: "https://forms.google.com/your-actual-form-link",
     description: "Deep dive into neural networks and AI applications",
     isActive: true,
   }

4. COMMIT PROCESS:
   - Make changes to this file
   - Commit to GitHub with a descriptive message like "Update AI workshop registration"
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