import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Car,
  IndianRupee,
  TrendingUp,
  TrendingDown,
  Activity,
  CheckCircle2,
  Sparkles,
  Brain
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const kpiData = [
  {
    title: 'Test Drive Bookings',
    value: '+24%',
    trend: 'up',
    icon: Car,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    title: 'Cost Per Lead',
    value: '₹234',
    trend: 'down',
    icon: IndianRupee,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    subtext: '33% decrease'
  },
  {
    title: 'Campaign Performance',
    value: '72%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    title: 'Actions Completed',
    value: '2,847',
    trend: 'neutral',
    icon: CheckCircle2,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    subtext: 'Today'
  }
];

const chartData = [
  { name: 'Mon', value: 65 },
  { name: 'Tue', value: 72 },
  { name: 'Wed', value: 68 },
  { name: 'Thu', value: 78 },
  { name: 'Fri', value: 85 },
  { name: 'Sat', value: 82 },
  { name: 'Sun', value: 90 }
];

const agentActivities = [
  "Analyzing 15,420 customers across all touchpoints...",
  "Identified 4 high-intent micro-segments based on behavior patterns...",
  "Generated 12 creative variants optimized for regional preferences...",
  "Running 3 autonomous A/B tests across digital channels...",
  "Optimizing budget allocation based on real-time performance...",
  "Deploying 2,847 personalized activations via email, SMS, and push...",
  "Predicting next-best actions for 1,240 warm leads...",
  "Voice AI handling 156 concurrent customer conversations...",
  "Routing 89 hot leads to top-performing dealers...",
  "Updating predictive models with latest conversion data..."
];

export const Dashboard = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let interval;
    if (isTyping) {
      const fullText = agentActivities[currentActivity];
      let currentIndex = 0;
      
      interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentActivity((prev) => (prev + 1) % agentActivities.length);
            setIsTyping(true);
          }, 2000);
        }
      }, 50);
    }
    
    return () => clearInterval(interval);
  }, [currentActivity, isTyping]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-bold font-display mb-2">Marketing Intelligence Dashboard</h2>
        <p className="text-muted-foreground">The autonomous marketing brain above Adobe AEM + CDP</p>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass border-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{kpi.title}</p>
                      <p className="text-3xl font-bold font-display">{kpi.value}</p>
                      {kpi.subtext && (
                        <p className="text-xs text-muted-foreground">{kpi.subtext}</p>
                      )}
                    </div>
                    <div className={`${kpi.bgColor} p-3 rounded-lg`}>
                      <Icon className={`w-6 h-6 ${kpi.color}`} />
                    </div>
                  </div>
                  {kpi.trend !== 'neutral' && (
                    <div className="flex items-center gap-1 mt-4">
                      {kpi.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-green-500" />
                      )}
                      <span className="text-sm text-green-500">
                        {kpi.trend === 'up' ? 'Increased' : 'Decreased'}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Agent Intelligence Feed and Performance Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agent Intelligence Feed */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass border-border h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="relative">
                  <Brain className="w-5 h-5 text-primary" />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-primary rounded-full blur-md opacity-50"
                  />
                </div>
                Agent Intelligence Feed
                <Badge variant="outline" className="ml-auto">
                  <Activity className="w-3 h-3 mr-1" />
                  Live
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agentActivities.slice(0, 5).map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: index === currentActivity % 5 ? 1 : 0.3, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg glass"
                  >
                    <div className={`mt-1 w-2 h-2 rounded-full ${
                      index === currentActivity % 5 ? 'bg-primary animate-pulse' : 'bg-muted'
                    }`} />
                    <p className="text-sm leading-relaxed">
                      {index === currentActivity % 5 ? displayedText : activity}
                      {index === currentActivity % 5 && isTyping && (
                        <span className="inline-block w-1 h-4 ml-1 bg-primary animate-pulse" />
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Processing Speed</span>
                  <span className="font-semibold">2,847 actions/hour</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass border-border h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Campaign Performance Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(215, 100%, 50%)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(215, 100%, 50%)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 20%)" />
                  <XAxis 
                    dataKey="name" 
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
                      borderRadius: '8px',
                      color: 'hsl(220, 10%, 95%)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(215, 100%, 50%)" 
                    strokeWidth={2}
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;