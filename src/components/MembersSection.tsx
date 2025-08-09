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
      position: "Elcom Dias Coordinator",
      organization: "SRC, SASTRA",
      image: "/assets/team/dr-revathy-k.png"
    },
    {
      name: "Dr Gayathri Devi T",
      position: "Elcom Dias Coordinator",
      organization: "SRC, SASTRA",
      image: "/assets/team/dr-gayathri-devi-t.png"
    },
    {
      name: "Krishna Sai Sanjeevi Singh",
      position: "President",
      organization: "Elcom Dias",
      image: "/assets/team/krishna-sai-sanjeevi-singh.png"
    }
  ];

  return (
    <SectionContainer id="members" title="Our Team">
      <div className="text-center mb-12">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the brilliant minds behind ELCOM DAIS
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-primary transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary text-primary-foreground text-lg font-semibold flex items-center justify-center hidden">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary mb-2">{member.position}</p>
              <p className="text-muted-foreground text-sm">
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