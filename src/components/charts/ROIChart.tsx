
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ProductivityData, CalculationResults } from "@/types/calculator";
import { formatCurrency } from "@/utils/formatters";

interface ROIChartProps {
  data: ProductivityData;
  results: CalculationResults;
}

const ROIChart = ({ data, results }: ROIChartProps) => {
  // Generate percentage points for analysis
  const percentages = [0, 25, 50, 75, 100];
  
  const chartData = percentages.map(percent => {
    // Calculate remote employees based on percentage
    const remoteEmployees = Math.round(data.employeeCount * (percent / 100));
    const officeEmployees = data.employeeCount - remoteEmployees;
    
    // Calculate costs
    const officeCost = officeEmployees * data.officePerEmployee;
    const techCost = remoteEmployees * data.techInvestment;
    const totalCost = officeCost + techCost;
    
    // Calculate productivity impact
    const baseProductivity = data.employeeCount * data.inOfficeProductivity;
    const actualProductivity = (officeEmployees * data.inOfficeProductivity) + 
                               (remoteEmployees * data.remoteProductivity);
    const productivityChange = ((actualProductivity - baseProductivity) / baseProductivity) * 100;
    
    // Calculate savings from traditional office model
    const traditionalOfficeCost = data.employeeCount * data.officePerEmployee;
    const savings = traditionalOfficeCost - totalCost;
    
    // ROI calculation
    const investment = remoteEmployees * data.techInvestment;
    const roi = investment > 0 ? (savings / investment) * 100 : 0;
    
    return {
      name: `${percent}%`,
      roi: roi,
      savings: savings,
      productivity: productivityChange
    };
  });

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" label={{ value: 'Remote Work Percentage', position: 'bottom', offset: 0 }} />
          <YAxis 
            yAxisId="left" 
            label={{ value: 'ROI (%)', angle: -90, position: 'insideLeft' }}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right"
            label={{ value: 'Amount (₹)', angle: 90, position: 'insideRight' }}
          />
          <Tooltip 
            formatter={(value, name) => {
              if (name === 'ROI') return [`${value.toFixed(2)}%`, name];
              if (name === 'Productivity Change') return [`${value.toFixed(2)}%`, name];
              return [formatCurrency(value as number), name];
            }}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '0.25rem' }}
          />
          <Legend />
          <Bar yAxisId="right" dataKey="savings" name="Cost Savings" fill="#7ac9a7" />
          <Line yAxisId="left" type="monotone" dataKey="roi" name="ROI" stroke="#245e4f" strokeWidth={2} />
          <Line yAxisId="left" type="monotone" dataKey="productivity" name="Productivity Change" stroke="#e9c46a" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ROIChart;
