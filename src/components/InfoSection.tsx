
import { Card } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Check, Clock, Users, Laptop } from "lucide-react";

const InfoSection = () => {
  return (
    <div className="space-y-8">
      <section id="about" className="py-10">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6 text-primary">Understanding Remote Work Productivity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                The Remote Work Insights Calculator empowers businesses to make data-driven decisions about their work policies. With the 
                rising trend of remote and hybrid work models, organizations need reliable tools to measure the financial and productivity 
                impacts of these strategies.
              </p>
              <p>
                Our calculator analyzes multiple factors including office costs, technology investments, and productivity levels to provide 
                a comprehensive overview of how remote work affects your bottom line and organizational efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Key Benefits:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Quantify potential cost savings from reduced office space</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Understand productivity differences between remote and in-office work</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Calculate return on investment for remote work technology</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Make informed decisions about hybrid work policies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-10 bg-secondary/5 rounded-lg">
        <div className="container">
          <h2 className="text-2xl font-bold mb-10 text-center text-primary">How Our Calculator Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Input Your Data</h3>
                <p className="text-sm text-muted-foreground">
                  Enter your workforce information including employee count, salaries, office costs, and current
                  productivity metrics.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-secondary/10 p-3 rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Advanced Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Our algorithm processes your data to calculate potential savings, productivity impacts, and return
                  on technology investments.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-accent/10 p-3 rounded-full mb-4">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Actionable Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Receive detailed visualizations and comprehensive reports that help you make informed
                  decisions about your remote work strategy.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-10">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-primary">Benefits of Remote Work Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Talent Acquisition & Retention</h3>
                <p className="text-sm text-muted-foreground">
                  Remote work options expand your talent pool beyond geographical boundaries, allowing access to global expertise.
                  Workers increasingly prioritize flexibility, making remote work policies a competitive advantage for recruitment
                  and retention.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-secondary/10 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Cost Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Reducing office space requirements translates to significant savings on real estate, utilities, and facility
                  maintenance. Remote work can reduce unplanned absences and increase employee productivity through improved
                  work-life balance.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Lightbulb className="h-5 w-5 text-accent-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Business Continuity</h3>
                <p className="text-sm text-muted-foreground">
                  Distributed workforce models enhance resilience against localized disruptions like natural disasters or public health emergencies.
                  Remote work infrastructure ensures operations can continue under various circumstances.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-blue/10 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Productivity Enhancement</h3>
                <p className="text-sm text-muted-foreground">
                  Many employees report higher productivity when working remotely due to fewer interruptions, reduced commute stress,
                  and more comfortable work environments. Our calculator helps quantify these productivity benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="seo-content" className="py-10">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6 text-primary">Remote Work Productivity in the Indian Context</h2>
          <div className="space-y-4">
            <p>
              The landscape of remote work in India has evolved dramatically since 2020. With the IT sector leading the way, 
              Indian businesses across various industries have discovered the potential benefits of hybrid and fully remote work models. 
              According to recent industry reports, over 73% of Indian companies have implemented some form of remote work policy, 
              recognizing its impact on both operational costs and employee satisfaction.
            </p>
            <p>
              For Indian businesses, the financial implications of remote work are particularly significant. Office space in major 
              metropolitan areas like Mumbai, Bangalore, and Delhi commands premium rates, often representing a substantial portion of 
              operational expenses. By implementing strategic remote work policies, businesses can optimize their real estate investments 
              while maintaining or even enhancing productivity.
            </p>
            <p>
              Our Remote Work Insights Calculator is specifically designed for the Indian market, with calculations based on rupee currency 
              and consideration for local business practices. Whether you're a startup looking to maximize resources or an established 
              enterprise seeking to modernize work policies, this tool provides actionable insights tailored to Indian business realities.
            </p>
            <p>
              Beyond the immediate financial benefits, remote work strategies can help Indian businesses address unique challenges such 
              as traffic congestion in urban centers, long commute times for employees, and the need to access talent from tier-2 and 
              tier-3 cities. Our calculator helps quantify these benefits, allowing decision-makers to make informed choices about the 
              future of work at their organizations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
