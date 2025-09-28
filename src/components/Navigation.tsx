import { User } from "lucide-react";

interface NavigationProps {
  activeTab?: string;
}

export function Navigation({ activeTab = "Portfolio" }: NavigationProps) {
  return (
    <div className="bg-[#121217] border-b border-border/20 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="text-white font-bold text-xl">Nubra</div>
          
          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-6">
            {["Watchlist", "Options", "Chart Analyzer", "Portfolio"].map((item) => (
              <button
                key={item}
                className={`px-3 py-2 rounded-md transition-colors ${
                  item === activeTab
                    ? "bg-gradient-to-r from-[#4A6AFF] to-[#7E5BFF] text-white"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* User Avatar */}
        <div className="bg-muted rounded-full p-2">
          <User className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}