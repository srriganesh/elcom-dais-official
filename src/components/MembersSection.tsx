import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MembersSection = () => {
  const teamMembers = [
    {
      name: "Dr Santhi B",
      position: "Dean",
      organization: "SRC, SASTRA",
      image: "/assets/team/dr-santhi-b.png"
    },
    {
      name: "Dr Narasimhan D",
      position: "Associate Dean",
      organization: "SRC, SASTRA",
      image: "/assets/team/dr-narasimhan-d.png"
    },
    {
      name: "Dr Alli Rani A",
      position: "Associate Dean",
      organization: "SRC, SASTRA",
      image: "/assets/team/dr-alli-rani-a.png"
    },
    {
      name: "Dr Revathy K",
      position: "Assistant Professor II \\n Elcom Dais coordinator",
      organization: "SRC, SASTRA",
      image: "/assets/team/dr-revathy-k.png"
    },
    {
      name: "Dr Gayathri Devi T",
      position: "Assistant Professor II \\n Elcom Dais coordinator",
      organization: "SRC, SASTRA",
      image: "/assets/team/dr-gayathri-devi-t.png"
    },
    {
      name: "Krishnasingh Sai Sanjeevi Singh",
      position: "President",
      organization: "Elcom Dais",
      image: "/assets/team/krishna-sai-sanjeevi-singh.png"
    }
  ];

  return (
    <SectionContainer id="members" title="Our Leaders">
      <div className="text-center mb-12">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the brilliant minds behind ELCOM DAIS
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-primary transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-all duration-300 relative">
                <div className="w-full h-full rounded-full border-2 border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary text-primary-foreground text-lg font-semibold flex items-center justify-center hidden rounded-full">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-foreground transition-colors">{member.name}</h3>
              <p className="text-primary mb-2 group-hover:text-primary-foreground/90 transition-colors">{member.position}</p>
              <p className="text-muted-foreground text-sm group-hover:text-primary-foreground/70 transition-colors">
                {member.organization}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default MembersSection;
