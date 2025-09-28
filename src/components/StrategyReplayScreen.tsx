import { ArrowLeft, Info, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function StrategyReplayScreen() {
  return (
    <div className="bg-[#121217] min-h-screen text-white">
      {/* Top Section */}
      <div className="px-6 py-6">
        <div className="flex items-center space-x-4 mb-8">
          <button className="flex items-center space-x-2 text-[#4A6AFF] hover:underline">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
          <h1 className="text-2xl font-medium text-white">
            Create Algorithm from Your Winning Trade
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Original Trade */}
          <div className="bg-[#1E1E2C] border border-border/20 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <h2 className="text-lg font-medium text-white">Your Original Trade</h2>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-muted-foreground">Asset: <span className="text-white">NIFTY 30 SEP 25 24650 CE</span></p>
                <p className="text-muted-foreground">Entry Price: <span className="text-white">113.25</span></p>
                <p className="text-muted-foreground">Exit Price: <span className="text-white">153.25</span></p>
                <p className="text-muted-foreground">Profit: <span className="text-[#28A745]">+₹4,200</span></p>
                <p className="text-muted-foreground">Holding Duration: <span className="text-white">45 minutes</span></p>
              </div>

              <div className="pt-4 border-t border-border/20">
                <h3 className="text-white font-medium mb-3">Indicators at Entry:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• RSI(14) was 28.5</li>
                  <li>• Price &gt; SMA(20)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Panel - Generated Algorithm */}
          <div className="bg-[#1E1E2C] border border-border/20 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <h2 className="text-lg font-medium text-white">Generated Algorithm (Editable)</h2>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="space-y-6">
              {/* Entry Conditions */}
              <div>
                <h3 className="text-white font-medium mb-4">WHEN (Entry Conditions)</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    <Select defaultValue="rsi">
                      <SelectTrigger className="bg-[#121217] border-border/30">
                        <SelectValue placeholder="Indicator" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rsi">RSI (14)</SelectItem>
                        <SelectItem value="sma">SMA (20)</SelectItem>
                        <SelectItem value="ema">EMA (20)</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select defaultValue="below">
                      <SelectTrigger className="bg-[#121217] border-border/30">
                        <SelectValue placeholder="Logic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below">Crosses Below</SelectItem>
                        <SelectItem value="above">Crosses Above</SelectItem>
                        <SelectItem value="equals">Equals</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Input
                      defaultValue="30"
                      className="bg-[#121217] border-border/30"
                    />
                  </div>
                  
                  <button className="flex items-center space-x-1 text-[#4A6AFF] hover:underline">
                    <Plus className="h-4 w-4" />
                    <span>Add Condition</span>
                  </button>
                </div>
              </div>

              {/* Exit Conditions */}
              <div>
                <h3 className="text-white font-medium mb-4">THEN (Exit Conditions)</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-muted-foreground">Target Profit:</span>
                    <Input
                      defaultValue="40"
                      className="w-20 bg-[#121217] border-border/30"
                    />
                    <span className="text-muted-foreground">points</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-muted-foreground">Stop Loss:</span>
                    <Input
                      defaultValue="20"
                      className="w-20 bg-[#121217] border-border/30"
                    />
                    <span className="text-muted-foreground">points</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <Button className="bg-gradient-to-r from-[#4A6AFF] to-[#7E5BFF] hover:from-[#3A5AEF] hover:to-[#6E4BEF] text-white px-8 py-2">
            Run Backtest
          </Button>
          <Button variant="outline" className="border-border/30 text-muted-foreground hover:text-white px-8 py-2">
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
}