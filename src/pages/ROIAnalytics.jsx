import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { 
  TrendingUp, 
  TrendingDown, 
  IndianRupee, 
  Target,
  Zap,
  Calculator,
  ArrowRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';

const beforeAfterData = [
  { metric: 'CPL', before: 350, after: 234 },
  { metric: 'Conversion', before: 8, after: 12 },
  { metric: 'Test Drives', before: 100, after: 124 },
  { metric: 'Marketing Ops Cost', before: 100, after: 70 }
];

const roiTrendData = [
  { month: 'Jan', roi: 45, conversions: 680 },
  { month: 'Feb', roi: 52, conversions: 740 },
  { month: 'Mar', roi: 61, conversions: 820 },
  { month: 'Apr', roi: 73, conversions: 910 },
  { month: 'May', roi: 85, conversions: 1050 },
  { month: 'Jun', roi: 89, conversions: 1180 }
];

export const ROIAnalytics = () => {
  const [budget, setBudget] = useState(1000000);
  const [currentCPL, setCurrentCPL] = useState(350);
  const [currentConversion, setCurrentConversion] = useState(8);
  
  const calculateROI = () => {
    const newCPL = 234;
    const newConversion = 12;
    const currentLeads = budget / currentCPL;
    const newLeads = budget / newCPL;
    const currentRevenue = currentLeads * (currentConversion / 100) * 500000; // Avg car price
    const newRevenue = newLeads * (newConversion / 100) * 500000;
    const savings = budget - (budget * 0.7);
    const additionalRevenue = newRevenue - currentRevenue;
    const roiImprovement = ((additionalRevenue + savings) / budget) * 100;
    
    return {
      currentLeads: Math.round(currentLeads),
      newLeads: Math.round(newLeads),
      currentRevenue: Math.round(currentRevenue),
      newRevenue: Math.round(newRevenue),
      savings: Math.round(savings),
      additionalRevenue: Math.round(additionalRevenue),
      roiImprovement: Math.round(roiImprovement)
    };
  };

  const results = calculateROI();

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-bold font-display mb-2">ROI & Impact Analytics</h2>
        <p className="text-muted-foreground">Measure the autonomous impact on your marketing performance</p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">ROI Improvement</p>
                <p className="text-4xl font-bold font-display mt-1 text-green-500">+89%</p>
              </div>
              <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Cost Per Lead</p>
                <p className="text-4xl font-bold font-display mt-1">₹234</p>
                <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
                  <TrendingDown className="w-3 h-3" />
                  33% decrease
                </p>
              </div>
              <IndianRupee className="w-12 h-12 text-primary opacity-20" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <p className="text-4xl font-bold font-display mt-1">12%</p>
                <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  50% increase
                </p>
              </div>
              <Target className="w-12 h-12 text-accent opacity-20" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Ops Cost Reduction</p>
                <p className="text-4xl font-bold font-display mt-1 text-green-500">-30%</p>
              </div>
              <Zap className="w-12 h-12 text-blue-500 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Before/After Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass border-border">
          <CardHeader>
            <CardTitle>Before vs After LifeBOT Implementation</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={beforeAfterData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 20%)" />
                <XAxis 
                  dataKey="metric" 
                  stroke="hsl(220, 10%, 60%)" 
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="hsl(220, 10%, 60%)" 
                  style={{ fontSize: '12px' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(220, 18%, 10%)',
                    border: '1px solid hsl(220, 15%, 20%)',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="before" fill="hsl(220, 15%, 40%)" radius={[8, 8, 0, 0]} name="Before" />
                <Bar dataKey="after" fill="hsl(215, 100%, 50%)" radius={[8, 8, 0, 0]} name="After" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* ROI Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass border-border">
          <CardHeader>
            <CardTitle>6-Month ROI Growth Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={roiTrendData}>
                <defs>
                  <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(215, 100%, 50%)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(215, 100%, 50%)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="convGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(16, 100%, 60%)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(16, 100%, 60%)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 20%)" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(220, 10%, 60%)" 
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="hsl(220, 10%, 60%)" 
                  style={{ fontSize: '12px' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(220, 18%, 10%)',
                    border: '1px solid hsl(220, 15%, 20%)',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="roi" 
                  stroke="hsl(215, 100%, 50%)" 
                  strokeWidth={2}
                  fill="url(#roiGradient)"
                  name="ROI %"
                />
                <Area 
                  type="monotone" 
                  dataKey="conversions" 
                  stroke="hsl(16, 100%, 60%)" 
                  strokeWidth={2}
                  fill="url(#convGradient)"
                  name="Conversions"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* ROI Calculator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass-strong border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-accent" />
              ROI Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="budget" className="text-sm text-muted-foreground">Monthly Budget (₹)</Label>
                  <Input
                    id="budget"
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="mt-2 glass border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="cpl" className="text-sm text-muted-foreground">Current CPL (₹)</Label>
                  <Input
                    id="cpl"
                    type="number"
                    value={currentCPL}
                    onChange={(e) => setCurrentCPL(Number(e.target.value))}
                    className="mt-2 glass border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="conversion" className="text-sm text-muted-foreground">Current Conversion Rate (%)</Label>
                  <Input
                    id="conversion"
                    type="number"
                    value={currentConversion}
                    onChange={(e) => setCurrentConversion(Number(e.target.value))}
                    className="mt-2 glass border-border"
                  />
                </div>
              </div>

              {/* Results Section */}
              <div className="glass p-6 rounded-xl space-y-6">
                <h4 className="text-lg font-bold font-display mb-4">Projected Impact with LifeBOT</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Current Leads</span>
                    <span className="text-xl font-bold font-display">{results.currentLeads.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">With LifeBOT</span>
                    <span className="text-xl font-bold font-display text-primary">{results.newLeads.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Marketing Savings</span>
                    <span className="text-xl font-bold font-display text-green-500">₹{(results.savings / 100000).toFixed(1)}L</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Additional Revenue</span>
                    <span className="text-xl font-bold font-display text-green-500">₹{(results.additionalRevenue / 10000000).toFixed(2)}Cr</span>
                  </div>
                  
                  <div className="bg-gradient-primary p-4 rounded-lg mt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-primary-foreground font-medium">Total ROI Improvement</span>
                      <span className="text-3xl font-bold font-display text-primary-foreground">+{results.roiImprovement}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ROIAnalytics;