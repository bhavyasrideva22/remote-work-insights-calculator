
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { ProductivityData, CalculationResults } from "@/types/calculator";

interface ProductivityChartProps {
  data: ProductivityData;
  results: CalculationResults;
}

const ProductivityChart = ({ data, results }: ProductivityChartProps) => {
  // Calculate effective productivity based on remote percentage
  const effectiveProductivity = (data.inOfficeProductivity * (100 - data.remotePercent) + 
                               data.remoteProductivity * data.remotePercent) / 100;

  const chartData = [
    {
      name: 'In-Office (100%)',
      productivity: data.inOfficeProductivity,
      fill: '#7ac9a7',
    },
    {
      name: `Current Mix (${data.remotePercent}% Remote)`,
      productivity: effectiveProductivity,
      fill: '#245e4f',
    },
    {
      name: 'Remote (100%)',
      productivity: data.remoteProductivity,
      fill: '#e9c46a',
    },
  ];

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end" 
            height={60}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            domain={[0, 100]} 
            label={{ value: 'Productivity (%)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Productivity']}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '0.25rem' }}
          />
          <Legend wrapperStyle={{ paddingTop: 10 }} />
          <Bar dataKey="productivity" name="Productivity Score">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductivityChart;
