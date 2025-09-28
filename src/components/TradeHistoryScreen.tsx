import { ArrowLeft, Filter, MoreHorizontal, Info } from "lucide-react";
import { Button } from "./ui/button";

const mockTrades = [
  {
    id: 1,
    name: "NIFTY 30 SEP 25 24650 CE",
    closeDate: "28 Sep 25",
    profit: 4200,
    profitPercent: 18.2,
    type: "profit"
  },
  {
    id: 2,
    name: "BANKNIFTY 27 SEP 25 52000 PE",
    closeDate: "27 Sep 25",
    profit: -1800,
    profitPercent: -12.5,
    type: "loss"
  },
  {
    id: 3,
    name: "NIFTY 25 SEP 25 24500 CE",
    closeDate: "25 Sep 25",
    profit: 2850,
    profitPercent: 15.7,
    type: "profit"
  }
];

export function TradeHistoryScreen() {
  return (
    <div className="bg-[#121217] min-h-screen text-white">
      {/* Top Section */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-8">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
            <span>|</span>
            <span>Your Portfolio</span>
            <span>&gt;</span>
            <span className="text-white">Trade History</span>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-muted/20 rounded-md">
              <Filter className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-muted/20 rounded-md">
              <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-2xl font-medium text-white mb-6">
          Completed Trades (Last 30 days)
        </h2>

        {/* Trade Cards */}
        <div className="space-y-4">
          {mockTrades.map((trade) => (
            <div
              key={trade.id}
              className="bg-[#1E1E2C] border border-border/20 rounded-lg p-6"
            >
              <div className="flex items-center justify-between">
                {/* Left Side - Trade Info */}
                <div className="space-y-2">
                  <h3 className="text-white font-medium">{trade.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    Closed: {trade.closeDate}
                  </p>
                  <p className={`text-sm ${
                    trade.type === "profit" ? "text-[#28A745]" : "text-[#DC3545]"
                  }`}>
                    {trade.type === "profit" ? "Profit" : "Loss"}: {trade.profit > 0 ? "+" : ""}₹{Math.abs(trade.profit).toLocaleString()} ({trade.profit > 0 ? "+" : ""}{trade.profitPercent}%)
                  </p>
                  <button className="text-[#4A6AFF] text-sm hover:underline">
                    View Details
                  </button>
                </div>

                {/* Right Side - Automate Button (only for profitable trades) */}
                {trade.type === "profit" && (
                  <Button className="bg-gradient-to-r from-[#4A6AFF] to-[#7E5BFF] hover:from-[#3A5AEF] hover:to-[#6E4BEF] text-white px-6 py-2">
                    Automate this Strategy
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}