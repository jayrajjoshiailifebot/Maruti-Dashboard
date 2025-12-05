import React from 'react';
import { motion } from 'framer-motion';
import { Activity, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Badge } from './ui/badge';

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{
        background: 'linear-gradient(to right, hsl(215 10% 48% / 0.95), hsl(220 20% 8% / 0.9))',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="flex items-center justify-between px-6 py-2">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/Marthi New Logo.png"
            alt="Maruti Suzuki Mobility Challenge Logo"
            className="h-20 w-auto object-contain max-w-[400px]"
          />
        </div>

        {/* Status Indicators */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-50"
              />
              <div className="relative w-2 h-2 bg-green-500 rounded-full" />
            </div>
            <span className="text-sm font-medium">Agent Online</span>
          </div>

          <div className="h-6 w-px bg-border" />

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="w-4 h-4" />
            <span>Last Sync: 2 min ago</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Activity className="w-4 h-4" />
            <span>Next Optimization: 15 min</span>
          </div>

          <Badge variant="outline" className="glass">
            <CheckCircle2 className="w-3 h-3 mr-1 text-green-500" />
            2,847 Actions Today
          </Badge>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;