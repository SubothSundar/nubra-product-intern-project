import { ArrowLeft, Info } from "lucide-react";
import { Button } from "./ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const mockEquityData = [
  { date: "2021", value: 0 },
  { date: "2022", value: 5000 },
  { date: "2023", value: 12000 },
  { date: "2024", value: 18500 }
];

const mockTrades = [
  { type: "BUY", date: "25 Sep", profit: 850, isProfit: true },
  { type: "SELL", date: "24 Sep", profit: -400, isProfit: false },
  { type: "BUY", date: "23 Sep", profit: 1200, isProfit: true }
];

export function BacktestResultsScreen() {
  return (
    <div className="bg-[#121217] min-h-screen text-white">
      {/* Top Section */}
      <div className="px-6 py-6">
        <div className="flex items-center space-x-4 mb-8">
          <button className="flex items-center space-x-2 text-[#4A6AFF] hover:underline">
            <ArrowLeft className="h-4 w-4" />
            <span>Modify Strategy</span>
          </button>
          <h1 className="text-2xl font-medium text-white">
            Backtest Results for 'My First Algo'
          </h1>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total P&L */}
          <div className="bg-[#1E1E2C] border border-border/20 rounded-lg p-6 text-center">
            <p className="text-muted-foreground mb-2">Total P&L</p>
            <p className="text-3xl font-bold text-[#28A745]">₹18,500</p>
          </div>

          {/* Win Rate */}
          <div className="bg-[#1E1E2C] border border-border/20 rounded-lg p-6 text-center">
            <p className="text-muted-foreground mb-2">Win Rate (%)</p>
            <p className="text-3xl font-bold text-white">62%</p>
          </div>

          {/* Max Drawdown */}
          <div className="bg-[#1E1E2C] border border-border/20 rounded-lg p-6 text-center">
            <p className="text-muted-foreground mb-2">Max Drawdown</p>
            <p className="text-3xl font-bold text-[#DC3545]">-₹3,100</p>
          </div>
        </div>

        {/* Equity Curve Chart */}
        <div className="bg-[#1E1E2C] border border-border/20 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-white">
              Equity Curve (Last 3 months)
            </h3>
            <Info className="h-4 w-4 text-muted-foreground" />
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockEquityData}>
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  domain={['dataMin', 'dataMax']}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="url(#gradient)" 
                  strokeWidth={3}
                  dot={false}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00C6FF" />
                    <stop offset="100%" stopColor="#0072FF" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Simulated Trades */}
        <div className="bg-[#1E1E2C] border border-border/20 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-white">
              Simulated Trades (122 trades)
            </h3>
            <button className="text-[#4A6AFF] hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {mockTrades.map((trade, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="text-muted-foreground">•</span>
                <span className="text-white">{trade.type}</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-white">{trade.date}</span>
                <span className="text-muted-foreground">|</span>
                <span className={trade.isProfit ? "text-[#28A745]" : "text-[#DC3545]"}>
                  {trade.profit > 0 ? "+" : ""}₹{Math.abs(trade.profit)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-center space-x-4">
          <Button className="bg-gradient-to-r from-[#4A6AFF] to-[#7E5BFF] hover:from-[#3A5AEF] hover:to-[#6E4BEF] text-white px-8 py-2">
            Deploy for Paper Trading
          </Button>
          <Button variant="outline" className="border-border/30 text-muted-foreground hover:text-white px-8 py-2">
            Deploy Live
          </Button>
        </div>
      </div>
    </div>
  );
}