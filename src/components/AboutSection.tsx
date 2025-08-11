import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <SectionContainer id="about" title="About Us" className="cyber-grid">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-primary transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 glow-primary group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-primary-foreground transition-colors">Innovation</h3>
            <p className="text-muted-foreground">
              Driven by passion, innovation, and a commitment to excellence, we provide a dynamic platform for students to explore the world of electronics, communication, and emerging technologies.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-secondary transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 glow-secondary group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-secondary group-hover:text-primary-foreground transition-colors">Community</h3>
            <p className="text-muted-foreground">
              We foster a collaborative environment where students can enhance their technical skills, engage in hands-on projects, participate in workshops and competitions, and connect with industry experts.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-accent transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-accent group-hover:text-primary-foreground transition-colors">Excellence</h3>
            <p className="text-muted-foreground">
              We aim to inspire future engineers to contribute meaningfully to technological advancements and societal development, bridging the gap between academia and industry.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;