import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Users, Target, Send, Eye, Settings, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

const segments = [
  {
    id: 1,
    name: 'Urban EV-Curious Tech Professionals',
    count: 2450,
    probability: 68,
    color: 'from-blue-500 to-cyan-500',
    icon: '⚡',
    insights: [
      'High engagement with sustainability content',
      'Premium income bracket',
      'Active on digital platforms'
    ]
  },
  {
    id: 2,
    name: 'Price-Sensitive First-Time Car Buyers',
    count: 3120,
    probability: 45,
    color: 'from-green-500 to-emerald-500',
    icon: '🎯',
    insights: [
      'Frequent loan calculator usage',
      'High website session time',
      'Comparing entry-level models'
    ]
  },
  {
    id: 3,
    name: 'Alto Loyalists (Repeat Intent)',
    count: 1890,
    probability: 81,
    color: 'from-purple-500 to-pink-500',
    icon: '❤️',
    insights: [
      'Previous Alto owners',
      'High brand loyalty score',
      'Looking for upgrades'
    ]
  },
  {
    id: 4,
    name: 'S-Cross Defectors (Win-back Required)',
    count: 856,
    probability: 32,
    color: 'from-orange-500 to-red-500',
    icon: '🔄',
    insights: [
      'Considering competitor SUVs',
      'Service satisfaction issues',
      'Require targeted offers'
    ]
  }
];

export const Segments = () => {
  const [flipped, setFlipped] = useState(null);

  const handleSendCampaign = (segmentName) => {
    toast.success(`Campaign initiated for ${segmentName}`, {
      description: 'LifeBOT is generating personalized content...'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-bold font-display mb-2">Micro-Segments Discovery</h2>
        <p className="text-muted-foreground">LifeBOT discovers micro-segments without any manual setup</p>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Segments</p>
                <p className="text-3xl font-bold font-display mt-1">{segments.length}</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-3xl font-bold font-display mt-1">
                  {segments.reduce((acc, seg) => acc + seg.count, 0).toLocaleString()}
                </p>
              </div>
              <div className="bg-accent/10 p-3 rounded-lg">
                <Users className="w-6 h-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Conversion</p>
                <p className="text-3xl font-bold font-display mt-1">
                  {Math.round(segments.reduce((acc, seg) => acc + seg.probability, 0) / segments.length)}%
                </p>
              </div>
              <div className="bg-green-500/10 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Segment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {segments.map((segment, index) => (
          <motion.div
            key={segment.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="h-[400px]"
          >
            <AnimatePresence mode="wait">
              {flipped !== segment.id ? (
                <motion.div
                  key="front"
                  initial={{ rotateY: 0 }}
                  exit={{ rotateY: 90 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card 
                    className="glass border-border h-full cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => setFlipped(segment.id)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`text-4xl bg-gradient-to-br ${segment.color} p-3 rounded-xl`}>
                            {segment.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{segment.name}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                              {segment.count.toLocaleString()} users
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Conversion Probability */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Conversion Probability</span>
                          <span className="text-2xl font-bold font-display">{segment.probability}%</span>
                        </div>
                        <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${segment.probability}%` }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                            className={`h-full bg-gradient-to-r ${segment.color} rounded-full`}
                          />
                        </div>
                      </div>

                      {/* Key Insights */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3">Key Insights</h4>
                        <div className="space-y-2">
                          {segment.insights.map((insight, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                              <p className="text-sm text-muted-foreground flex-1">{insight}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hover Hint */}
                      <div className="text-center pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground">Click to see actions →</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  initial={{ rotateY: -90 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card 
                    className="glass-strong border-border h-full cursor-pointer"
                    onClick={() => setFlipped(null)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">Available Actions</CardTitle>
                      <p className="text-sm text-muted-foreground">{segment.name}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button 
                        className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSendCampaign(segment.name);
                        }}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Campaign
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full glass"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview Content
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full glass"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Customize
                      </Button>

                      <div className="pt-4 border-t border-border space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Expected ROI</span>
                          <span className="font-semibold text-green-500">+145%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Est. Conversions</span>
                          <span className="font-semibold">{Math.round(segment.count * segment.probability / 100)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Campaign Cost</span>
                          <span className="font-semibold">₹{(segment.count * 3.5).toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="text-center pt-4">
                        <p className="text-xs text-muted-foreground">Click to flip back →</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Segments;