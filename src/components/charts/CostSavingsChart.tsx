
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { ProductivityData, CalculationResults } from "@/types/calculator";
import { formatCurrency } from "@/utils/formatters";

interface CostSavingsChartProps {
  data: ProductivityData;
  results: CalculationResults;
}

const CostSavingsChart = ({ data, results }: CostSavingsChartProps) => {
  const remoteEmployeeCount = Math.round(data.employeeCount * (data.remotePercent / 100));
  const officeEmployeeCount = data.employeeCount - remoteEmployeeCount;
  
  const officeCost = officeEmployeeCount * data.officePerEmployee;
  const techInvestment = remoteEmployeeCount * data.techInvestment;
  const savings = results.annualSavings;
  
  const chartData = [
    { name: 'Office Costs', value: officeCost, color: '#245e4f' },
    { name: 'Tech Investment', value: techInvestment, color: '#7ac9a7' },
    { name: 'Savings', value: savings, color: '#e9c46a' },
  ];
  
  const COLORS = chartData.map(item => item.color);
  
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [formatCurrency(value as number), 'Amount']} 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '0.25rem' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CostSavingsChart;
