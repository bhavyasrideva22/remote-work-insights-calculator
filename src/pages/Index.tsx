
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorForm from "@/components/CalculatorForm";
import ResultsDisplay from "@/components/ResultsDisplay";
import InfoSection from "@/components/InfoSection";
import { ProductivityData, CalculationResults } from "@/types/calculator";
import { calculateResults } from "@/utils/calculations";

const Index = () => {
  const [calculationData, setCalculationData] = useState<ProductivityData | null>(null);
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = (data: ProductivityData) => {
    const calculationResults = calculateResults(data);
    setCalculationData(data);
    setResults(calculationResults);
    setHasCalculated(true);
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-b from-primary/10 to-cream">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Remote Work Productivity Calculator
            </h1>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
              Analyze the financial and productivity impacts of remote work on your organization
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Calculate Your Savings</h2>
                <CalculatorForm onCalculate={handleCalculate} />
              </div>
              <div id="results">
                {calculationData && results && (
                  <ResultsDisplay 
                    data={calculationData} 
                    results={results} 
                    visible={hasCalculated} 
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        
        <InfoSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
