
import { ProductivityData, CalculationResults } from "@/types/calculator";

/**
 * Calculate productivity and financial impact of remote work
 */
export const calculateResults = (data: ProductivityData): CalculationResults => {
  // Calculate number of remote vs. office employees
  const remoteEmployeeCount = Math.round(data.employeeCount * (data.remotePercent / 100));
  const officeEmployeeCount = data.employeeCount - remoteEmployeeCount;
  
  // Calculate costs
  const traditionalOfficeCost = data.employeeCount * data.officePerEmployee;
  const actualOfficeCost = officeEmployeeCount * data.officePerEmployee;
  const techInvestment = remoteEmployeeCount * data.techInvestment;
  const totalActualCost = actualOfficeCost + techInvestment;
  
  // Calculate savings
  const annualSavings = traditionalOfficeCost - totalActualCost;
  
  // Calculate productivity impact
  const baseProductivity = data.employeeCount * data.inOfficeProductivity;
  const actualProductivity = (officeEmployeeCount * data.inOfficeProductivity) + 
                             (remoteEmployeeCount * data.remoteProductivity);
  const productivityChange = ((actualProductivity - baseProductivity) / baseProductivity) * 100;
  
  // Calculate ROI
  const roi = techInvestment > 0 ? (annualSavings / techInvestment) * 100 : 0;
  
  return {
    annualSavings,
    productivityChange,
    roi,
    remoteEmployeeCount,
    officeEmployeeCount,
    traditionalOfficeCost,
    actualOfficeCost,
    techInvestment,
    totalActualCost,
    baseProductivity,
    actualProductivity
  };
};
