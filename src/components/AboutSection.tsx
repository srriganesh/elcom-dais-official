import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <SectionContainer id="about" title="About Us" className="cyber-grid">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 glow-primary">
              <Lightbulb className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Innovation</h3>
            <p className="text-muted-foreground">
              Content will be updated soon
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 glow-secondary">
              <Users className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-secondary">Community</h3>
            <p className="text-muted-foreground">
              Content will be updated soon
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Excellence</h3>
            <p className="text-muted-foreground">
              Content will be updated soon
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;