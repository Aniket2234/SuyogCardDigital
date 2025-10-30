import { Home, Info, Briefcase, Phone } from "lucide-react";
import { useState } from "react";

interface BottomNavProps {
  onNavigate: (section: string) => void;
  activeSection?: string;
}

export default function BottomNav({ onNavigate, activeSection = "home" }: BottomNavProps) {
  const [active, setActive] = useState(activeSection);

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: Info, label: "About Us" },
    { id: "services", icon: Briefcase, label: "Our Services" },
    { id: "enquire", icon: Phone, label: "Enquire" },
  ];

  const handleClick = (id: string) => {
    setActive(id);
    onNavigate(id);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#87CEEB] z-50 shadow-2xl border-t-4 border-white/20 rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-2">
        <div className="grid grid-cols-4 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`flex flex-col items-center py-2 px-1 transition-all ${
                  isActive 
                    ? "text-white scale-105" 
                    : "text-white/80 hover:text-white"
                }`}
                data-testid={`nav-${item.id}`}
              >
                <div className={`p-2 rounded-lg transition-all ${
                  isActive 
                    ? "bg-white/40 shadow-lg" 
                    : "bg-white/20"
                }`}>
                  <Icon className={`w-5 h-5`} />
                </div>
                <span className="text-[10px] sm:text-xs font-bold mt-1 leading-tight text-center">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
