import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  problem: string;
  solution: string[];
  impact: string[];
  tools: string;
}

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyModal = ({ caseStudy, isOpen, onClose }: CaseStudyModalProps) => {
  if (!caseStudy) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-2">
            {caseStudy.title}
          </DialogTitle>
          <p className="text-lg text-muted-foreground">{caseStudy.subtitle}</p>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Client Context */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
              {/* <div className="w-2 h-2 bg-primary rounded-full mr-3"></div> */}
              Client Context
            </h3>
            <p className="text-muted-foreground leading-relaxed">{caseStudy.context}</p>
          </div>

          {/* Problem */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
              {/* <div className="w-2 h-2 bg-primary rounded-full mr-3"></div> */}
              Problem
            </h3>
            <p className="text-muted-foreground leading-relaxed">{caseStudy.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
              {/* <div className="w-2 h-2 bg-primary rounded-full mr-3"></div> */}
              Solution
            </h3>
            <ul className="space-y-2">
              {caseStudy.solution.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed flex items-start pb-2">
                  <span className="text-primary text-xl mb-2 mr-2 mt-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
              {/* <div className="w-2 h-2 bg-accent rounded-full mr-3"></div> */}
              Impact
            </h3>
            <ul className="space-y-2">
              {caseStudy.impact.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed flex items-start pb-1">
                  <span className="text-primary text-xl mb-2 mr-2 mt-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
              {/* <div className="w-2 h-2 bg-primary rounded-full mr-3"></div> */}
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tools.split(', ').map((tool, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/20 text-primary">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;