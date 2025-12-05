import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { TrendingUp, TrendingDown, TestTube2, Zap, IndianRupee, Users } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const testData = {
  name: 'Brezza Campaign - Offer vs Feature Messaging',
  status: 'running',
  variants: [
    {
      id: 'A',
      name: 'Offer-Focused',
      description: '₹25,000 cashback + Free accessories',
      engagement: 42,
      cpl: 298,
      conversions: 234,
      confidence: 45,
      color: '#ef4444'
    },
    {
      id: 'B',
      name: 'Feature-Focused',
      description: 'Premium SUV features + Safety tech',
      engagement: 67,
      cpl: 234,
      conversions: 389,
      confidence: 89,
      color: '#22c55e'
    }
  ],
  traffic: [
    { name: 'Variant A', value: 45 },
    { name: 'Variant B', value: 55 }
  ],
  performance: [
    { metric: 'Engagement', A: 42, B: 67 },
    { metric: 'CTR', A: 3.2, B: 5.8 },
    { metric: 'Conversions', A: 234, B: 389 }
  ]
};

const COLORS = ['#ef4444', '#22c55e'];

export const ABTesting = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-bold font-display mb-2">A/B Testing Agent</h2>
        <p className="text-muted-foreground">LifeBOT runs experiments autonomously and reallocates budget in real-time</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Tests</p>
                <p className="text-3xl font-bold font-display mt-1">3</p>
              </div>
              <TestTube2 className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Improvement</p>
                <p className="text-3xl font-bold font-display mt-1 text-green-500">+34%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tests Completed</p>
                <p className="text-3xl font-bold font-display mt-1">47</p>
              </div>
              <Zap className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Budget Optimized</p>
                <p className="text-3xl font-bold font-display mt-1">₹1.2M</p>
              </div>
              <IndianRupee className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{testData.name}</CardTitle>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                Running
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Variants Comparison */}
              <div className="space-y-6">
                {testData.variants.map((variant, index) => (
                  <motion.div
                    key={variant.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className={`glass-strong p-6 rounded-xl border-2 ${
                      variant.id === 'B' ? 'border-green-500/50' : 'border-border'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold font-display">Variant {variant.id}</h3>
                          {variant.id === 'B' && (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                              Winner
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm font-medium">{variant.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{variant.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Engagement Rate</span>
                          <span className="text-lg font-bold">{variant.engagement}%</span>
                        </div>
                        <Progress value={variant.engagement} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                        <div>
                          <p className="text-xs text-muted-foreground">Cost Per Lead</p>
                          <p className="text-2xl font-bold font-display mt-1">₹{variant.cpl}</p>
                          {variant.id === 'B' && (
                            <div className="flex items-center gap-1 mt-1">
                              <TrendingDown className="w-3 h-3 text-green-500" />
                              <span className="text-xs text-green-500">21% lower</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Conversions</p>
                          <p className="text-2xl font-bold font-display mt-1">{variant.conversions}</p>
                          {variant.id === 'B' && (
                            <div className="flex items-center gap-1 mt-1">
                              <TrendingUp className="w-3 h-3 text-green-500" />
                              <span className="text-xs text-green-500">66% higher</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Confidence Level</span>
                          <span className="text-sm font-bold">{variant.confidence}%</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Charts */}
              <div className="space-y-6">
                {/* Traffic Distribution */}
                <div className="glass-strong p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4">Live Budget Allocation</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={testData.traffic}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {testData.traffic.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(220, 18%, 10%)',
                          border: '1px solid hsl(220, 15%, 20%)',
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Budget automatically shifting to Variant B
                  </p>
                </div>

                {/* Performance Comparison */}
                <div className="glass-strong p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={testData.performance}>
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
                      <Bar dataKey="A" fill="#ef4444" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="B" fill="#22c55e" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-6 border-t border-border flex gap-4">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Zap className="w-4 h-4 mr-2" />
                Declare Winner & Scale
              </Button>
              <Button variant="outline" className="glass">
                Extend Test Duration
              </Button>
              <Button variant="ghost" className="ml-auto">
                View Detailed Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ABTesting;