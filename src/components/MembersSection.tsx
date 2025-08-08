import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { User, Star } from "lucide-react";

const MembersSection = () => {
  return (
    <SectionContainer id="members" title="Our Team">
      <div className="text-center mb-12">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the brilliant minds behind ELCOM DAIS
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-muted/30 border-border cyber-border group hover:glow-primary transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Member Name</h3>
              <p className="text-primary mb-2">Position</p>
              <p className="text-muted-foreground text-sm">
                Member details will be updated soon
              </p>
              <div className="flex justify-center mt-4 space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default MembersSection;