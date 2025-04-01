
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { DownloadIcon, Mail, FileText, ChartBarIcon, BarChart2 } from "lucide-react";
import { generatePDF } from "@/utils/pdfGenerator";
import { sendEmail } from "@/utils/emailSender";
import { formatCurrency } from "@/utils/formatters";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProductivityData, CalculationResults } from "@/types/calculator";
import ProductivityChart from "./charts/ProductivityChart";
import CostSavingsChart from "./charts/CostSavingsChart";
import ROIChart from "./charts/ROIChart";

interface ResultsDisplayProps {
  data: ProductivityData;
  results: CalculationResults;
  visible: boolean;
}

const ResultsDisplay = ({ data, results, visible }: ResultsDisplayProps) => {
  const [emailAddress, setEmailAddress] = useState("");
  
  if (!visible) return null;

  const handleDownload = async () => {
    try {
      await generatePDF(data, results);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to download PDF");
    }
  };

  const handleSendEmail = async () => {
    if (!emailAddress || !/^\S+@\S+\.\S+$/.test(emailAddress)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      await sendEmail(emailAddress, data, results);
      toast.success(`Results sent to ${emailAddress}`);
      setEmailAddress("");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email");
    }
  };

  return (
    <div className="animate-fade-in">
      <Card className="p-6 bg-white shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <ChartBarIcon className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Productivity Analysis Results</h2>
          </div>
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1 border-primary text-primary hover:bg-primary/10"
                >
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">Email</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Send Results via Email</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      placeholder="your@email.com"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                    />
                  </div>
                  <Button onClick={handleSendEmail} className="w-full">Send Results</Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button 
              onClick={handleDownload} 
              variant="outline" 
              size="sm"
              className="flex items-center gap-1 border-primary text-primary hover:bg-primary/10"
            >
              <DownloadIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Annual Cost Savings</h3>
            <p className="text-2xl font-bold text-primary">{formatCurrency(results.annualSavings)}</p>
          </Card>
          <Card className="p-4 bg-secondary/10 border-secondary/20">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Productivity Impact</h3>
            <p className="text-2xl font-bold text-secondary">
              {results.productivityChange > 0 ? '+' : ''}{results.productivityChange.toFixed(2)}%
            </p>
          </Card>
          <Card className="p-4 bg-accent/10 border-accent/20">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">ROI</h3>
            <p className="text-2xl font-bold text-accent-foreground">
              {results.roi.toFixed(2)}%
            </p>
          </Card>
        </div>

        <Tabs defaultValue="productivity" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="productivity">Productivity</TabsTrigger>
            <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
            <TabsTrigger value="roi">ROI</TabsTrigger>
          </TabsList>
          <TabsContent value="productivity" className="h-80">
            <ProductivityChart data={data} results={results} />
          </TabsContent>
          <TabsContent value="costs" className="h-80">
            <CostSavingsChart data={data} results={results} />
          </TabsContent>
          <TabsContent value="roi" className="h-80">
            <ROIChart data={data} results={results} />
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 bg-muted/30 p-4 rounded-md">
          <div className="flex items-start gap-2">
            <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold mb-1">Summary</h3>
              <p className="text-sm text-muted-foreground">
                With {data.remotePercent}% remote work, you could save approximately {formatCurrency(results.annualSavings)} 
                annually with a productivity impact of {results.productivityChange > 0 ? '+' : ''}{results.productivityChange.toFixed(2)}%. 
                The estimated ROI for your remote work strategy is {results.roi.toFixed(2)}%.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
