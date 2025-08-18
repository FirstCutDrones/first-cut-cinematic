import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background-secondary/95 backdrop-blur-md border-t border-border p-4">
      <div className="flex items-center justify-center space-x-4">
        <Button asChild className="btn-golden flex-1">
          <Link to="/quote">Start your Project</Link>
        </Button>
        <Button variant="outline" size="icon" className="shrink-0">
          <MessageCircle className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MobileCTA;