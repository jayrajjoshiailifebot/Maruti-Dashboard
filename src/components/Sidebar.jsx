import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Target,
  Palette,
  TestTube2,
  Mic,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { cn } from '../lib/utils';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'segments', label: 'Segments', icon: Users },
  { id: 'actions', label: 'Next-Best Actions', icon: Target },
  { id: 'creative', label: 'Creative Studio', icon: Palette },
  { id: 'testing', label: 'A/B Testing', icon: TestTube2 },
  { id: 'voice', label: 'Voice AI', icon: Mic },
  { id: 'leads', label: 'Lead Scoring', icon: TrendingUp },
  { id: 'analytics', label: 'ROI Analytics', icon: BarChart3 },
];

export const Sidebar = ({ currentTab, setCurrentTab }) => {
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-16 bottom-0 w-64 glass-strong border-r border-border overflow-y-auto scrollbar-thin"
    >
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setCurrentTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "hover:bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="ml-auto w-2 h-2 rounded-full bg-primary-foreground"
                />
              )}
            </motion.button>
          );
        })}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;