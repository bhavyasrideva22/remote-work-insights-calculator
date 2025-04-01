
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Calculator, InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProductivityData } from "@/types/calculator";

type CalculatorFormProps = {
  onCalculate: (data: ProductivityData) => void;
};

const CalculatorForm = ({ onCalculate }: CalculatorFormProps) => {
  const [employeeCount, setEmployeeCount] = useState<number>(10);
  const [avgSalary, setAvgSalary] = useState<number>(40000);
  const [remotePercent, setRemotePercent] = useState<number>(50);
  const [officePerEmployee, setOfficePerEmployee] = useState<number>(8000);
  const [techInvestment, setTechInvestment] = useState<number>(5000);
  const [inOfficeProductivity, setInOfficeProductivity] = useState<number>(85);
  const [remoteProductivity, setRemoteProductivity] = useState<number>(90);

  const handleCalculate = () => {
    // Validate inputs
    if (employeeCount <= 0 || avgSalary <= 0 || officePerEmployee < 0 || techInvestment < 0) {
      toast.error("Please enter valid positive numbers for all fields");
      return;
    }

    const productivityData: ProductivityData = {
      employeeCount,
      avgSalary,
      remotePercent,
      officePerEmployee,
      techInvestment,
      inOfficeProductivity,
      remoteProductivity,
    };

    onCalculate(productivityData);
    toast.success("Calculation complete!");
  };

  return (
    <Card className="p-6 bg-white shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Input Your Workforce Data</h2>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="employeeCount">Number of Employees</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total number of employees in your organization</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="employeeCount"
              type="number"
              min="1"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(parseInt(e.target.value) || 0)}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="avgSalary">Average Annual Salary (₹)</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Average annual salary per employee in INR</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="avgSalary"
              type="number"
              min="1000"
              value={avgSalary}
              onChange={(e) => setAvgSalary(parseInt(e.target.value) || 0)}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Label htmlFor="remotePercent">Remote Work Percentage</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Percentage of time employees work remotely</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <span className="text-sm font-medium">{remotePercent}%</span>
          </div>
          <Slider
            id="remotePercent"
            min={0}
            max={100}
            step={5}
            value={[remotePercent]}
            onValueChange={(values) => setRemotePercent(values[0])}
            className="py-4"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="officePerEmployee">Annual Office Cost Per Employee (₹)</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Annual cost per employee for office space, utilities, etc.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="officePerEmployee"
              type="number"
              min="0"
              value={officePerEmployee}
              onChange={(e) => setOfficePerEmployee(parseInt(e.target.value) || 0)}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="techInvestment">Technology Investment Per Employee (₹)</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Annual investment in technology per remote employee</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="techInvestment"
              type="number"
              min="0"
              value={techInvestment}
              onChange={(e) => setTechInvestment(parseInt(e.target.value) || 0)}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Label htmlFor="inOfficeProductivity">In-Office Productivity (%)</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Estimated productivity level for in-office employees</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span className="text-sm font-medium">{inOfficeProductivity}%</span>
            </div>
            <Slider
              id="inOfficeProductivity"
              min={50}
              max={100}
              step={1}
              value={[inOfficeProductivity]}
              onValueChange={(values) => setInOfficeProductivity(values[0])}
              className="py-4"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Label htmlFor="remoteProductivity">Remote Productivity (%)</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Estimated productivity level for remote employees</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span className="text-sm font-medium">{remoteProductivity}%</span>
            </div>
            <Slider
              id="remoteProductivity"
              min={50}
              max={100}
              step={1}
              value={[remoteProductivity]}
              onValueChange={(values) => setRemoteProductivity(values[0])}
              className="py-4"
            />
          </div>
        </div>
        
        <Button 
          onClick={handleCalculate}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          Calculate Productivity Impact
        </Button>
      </div>
    </Card>
  );
};

export default CalculatorForm;
