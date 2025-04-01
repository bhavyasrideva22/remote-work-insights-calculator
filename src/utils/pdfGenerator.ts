
import { ProductivityData, CalculationResults } from "@/types/calculator";
import { formatCurrency } from "./formatters";

// This is a mock implementation since we can't use actual PDF generation libraries
// In a real app, you would use a library like jsPDF or pdfmake
export const generatePDF = async (
  data: ProductivityData, 
  results: CalculationResults
): Promise<void> => {
  console.log("Generating PDF with data:", data, results);
  
  // In a real implementation, we would generate a PDF here
  // For now, we'll simulate a PDF download by creating a text file
  
  // Create the content
  let content = "";
  content += "REMOTE WORK INSIGHTS CALCULATOR - RESULTS\n";
  content += "=========================================\n\n";
  content += "INPUT PARAMETERS:\n";
  content += `Number of Employees: ${data.employeeCount}\n`;
  content += `Average Annual Salary: ${formatCurrency(data.avgSalary)}\n`;
  content += `Remote Work Percentage: ${data.remotePercent}%\n`;
  content += `Annual Office Cost Per Employee: ${formatCurrency(data.officePerEmployee)}\n`;
  content += `Technology Investment Per Remote Employee: ${formatCurrency(data.techInvestment)}\n`;
  content += `In-Office Productivity: ${data.inOfficeProductivity}%\n`;
  content += `Remote Productivity: ${data.remoteProductivity}%\n\n`;
  
  content += "RESULTS:\n";
  content += `Annual Cost Savings: ${formatCurrency(results.annualSavings)}\n`;
  content += `Productivity Change: ${results.productivityChange > 0 ? '+' : ''}${results.productivityChange.toFixed(2)}%\n`;
  content += `Return on Investment (ROI): ${results.roi.toFixed(2)}%\n\n`;
  
  content += "SUMMARY:\n";
  content += `With ${data.remotePercent}% remote work, you could save approximately `;
  content += `${formatCurrency(results.annualSavings)} annually with a productivity impact of `;
  content += `${results.productivityChange > 0 ? '+' : ''}${results.productivityChange.toFixed(2)}%. `;
  content += `The estimated ROI for your remote work strategy is ${results.roi.toFixed(2)}%.\n\n`;
  
  content += "© " + new Date().getFullYear() + " Remote Work Insights. All rights reserved.\n";
  
  // Create a blob and download it
  const blob = new Blob([content], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'remote-work-insights-results.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  // In a real implementation, return the promise from PDF generation
  return Promise.resolve();
};
