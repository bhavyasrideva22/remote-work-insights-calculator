
export interface ProductivityData {
  employeeCount: number;
  avgSalary: number;
  remotePercent: number;
  officePerEmployee: number;
  techInvestment: number;
  inOfficeProductivity: number;
  remoteProductivity: number;
}

export interface CalculationResults {
  annualSavings: number;
  productivityChange: number;
  roi: number;
  remoteEmployeeCount: number;
  officeEmployeeCount: number;
  traditionalOfficeCost: number;
  actualOfficeCost: number;
  techInvestment: number;
  totalActualCost: number;
  baseProductivity: number;
  actualProductivity: number;
}
