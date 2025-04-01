
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-cream shadow-sm">
      <div className="container py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Remote Work Insights Calculator</h1>
          <p className="text-sm text-muted-foreground">Optimize your workforce productivity</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
