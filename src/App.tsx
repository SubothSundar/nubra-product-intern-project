import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { TradeHistoryScreen } from "./components/TradeHistoryScreen";
import { StrategyReplayScreen } from "./components/StrategyReplayScreen";
import { BacktestResultsScreen } from "./components/BacktestResultsScreen";
import { Button } from "./components/ui/button";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<"trade-history" | "strategy-replay" | "backtest-results">("trade-history");

  const renderScreen = () => {
    switch (activeScreen) {
      case "trade-history":
        return <TradeHistoryScreen />;
      case "strategy-replay":
        return <StrategyReplayScreen />;
      case "backtest-results":
        return <BacktestResultsScreen />;
      default:
        return <TradeHistoryScreen />;
    }
  };

  return (
    <div className="dark min-h-screen bg-[#121217]">
      <Navigation />
      
      {/* Screen Navigation */}
      <div className="bg-[#121217] border-b border-border/20 px-6 py-4">
        <div className="flex space-x-4">
          <Button 
            variant={activeScreen === "trade-history" ? "default" : "ghost"}
            onClick={() => setActiveScreen("trade-history")}
            className={activeScreen === "trade-history" 
              ? "bg-gradient-to-r from-[#4A6AFF] to-[#7E5BFF] text-white" 
              : "text-muted-foreground hover:text-white"
            }
          >
            Trade History
          </Button>
          <Button 
            variant={activeScreen === "strategy-replay" ? "default" : "ghost"}
            onClick={() => setActiveScreen("strategy-replay")}
            className={activeScreen === "strategy-replay" 
              ? "bg-gradient-to-r from-[#4A6AFF] to-[#7E5BFF] text-white" 
              : "text-muted-foreground hover:text-white"
            }
          >
            Strategy Replay
          </Button>
          <Button 
            variant={activeScreen === "backtest-results" ? "default" : "ghost"}
            onClick={() => setActiveScreen("backtest-results")}
            className={activeScreen === "backtest-results" 
              ? "bg-gradient-to-r from-[#4A6AFF] to-[#7E5BFF] text-white" 
              : "text-muted-foreground hover:text-white"
            }
          >
            Backtest Results
          </Button>
        </div>
      </div>

      {/* Render Active Screen */}
      {renderScreen()}
    </div>
  );
}