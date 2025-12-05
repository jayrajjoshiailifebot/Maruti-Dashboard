import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { 
  TrendingUp, 
  Users, 
  MapPin, 
  Star, 
  Award,
  Target,
  Zap
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';
import { toast } from 'sonner';

const distributionData = [
  { name: 'Hot Leads', value: 340, color: '#ef4444' },
  { name: 'Warm Leads', value: 1240, color: '#f97316' },
  { name: 'Cold Leads', value: 2890, color: '#3b82f6' }
];

const dealers = [
  {
    id: 1,
    name: 'Prestige Motors',
    location: 'Bangalore - JP Nagar',
    rating: 4.8,
    performance: 92,
    leadsAssigned: 45,
    conversions: 34,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 2,
    name: 'Silver Oak Automobiles',
    location: 'Bangalore - Koramangala',
    rating: 4.6,
    performance: 87,
    leadsAssigned: 38,
    conversions: 28,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    name: 'Metro Wheels',
    location: 'Bangalore - Whitefield',
    rating: 4.5,
    performance: 83,
    leadsAssigned: 42,
    conversions: 30,
    color: 'from-purple-500 to-pink-600'
  }
];

const performanceData = [
  { dealer: 'Prestige', conversions: 34, revenue: 89 },
  { dealer: 'Silver Oak', conversions: 28, revenue: 72 },
  { dealer: 'Metro', conversions: 30, revenue: 78 }
];

export const LeadScoring = () => {
  const handleAssignLead = (dealerName) => {
    toast.success(`Lead assigned to ${dealerName}`, {
      description: 'AI has routed the lead based on performance metrics'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-bold font-display mb-2">Lead Scoring & Dealer Assignment</h2>
        <p className="text-muted-foreground">Hot leads automatically routed to best performing dealers</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Hot Leads</p>
                <p className="text-3xl font-bold font-display mt-1 text-red-500">340</p>
              </div>
              <Zap className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Warm Leads</p>
                <p className="text-3xl font-bold font-display mt-1 text-orange-500">1,240</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Cold Leads</p>
                <p className="text-3xl font-bold font-display mt-1 text-blue-500">2,890</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Dealers</p>
                <p className="text-3xl font-bold font-display mt-1">23</p>
              </div>
              <MapPin className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lead Distribution and Dealer Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lead Distribution */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass border-border h-full">
            <CardHeader>
              <CardTitle>Lead Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
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
              <div className="mt-6 space-y-3">
                {distributionData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="font-bold font-display">{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Dealer Performance Comparison */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass border-border h-full">
            <CardHeader>
              <CardTitle>Top Dealer Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 20%)" />
                  <XAxis 
                    dataKey="dealer" 
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
                  <Bar dataKey="conversions" fill="hsl(215, 100%, 50%)" radius={[8, 8, 0, 0]} name="Conversions" />
                  <Bar dataKey="revenue" fill="hsl(16, 100%, 60%)" radius={[8, 8, 0, 0]} name="Revenue (L)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Dealer Cards */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold font-display">Dealer Performance Matrix</h3>
          <Badge variant="outline" className="glass">
            <Target className="w-3 h-3 mr-1" />
            Auto-routing Active
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dealers.map((dealer, index) => (
            <motion.div
              key={dealer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <Card className="glass border-border hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{dealer.name}</CardTitle>
                      <div className="flex items-center gap-1 mt-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{dealer.location}</span>
                      </div>
                    </div>
                    {index === 0 && (
                      <Badge className="bg-accent/20 text-accent border-accent/30">
                        <Award className="w-3 h-3 mr-1" />
                        Top
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      <span className="text-2xl font-bold font-display">{dealer.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Customer Rating</span>
                  </div>

                  {/* Performance Score */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Performance Score</span>
                      <span className="text-lg font-bold font-display">{dealer.performance}%</span>
                    </div>
                    <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${dealer.performance}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className={`h-full bg-gradient-to-r ${dealer.color} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Leads Assigned</p>
                      <p className="text-2xl font-bold font-display mt-1">{dealer.leadsAssigned}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Conversions</p>
                      <p className="text-2xl font-bold font-display mt-1 text-green-500">{dealer.conversions}</p>
                    </div>
                  </div>

                  {/* Conversion Rate */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Conversion Rate</span>
                      <span className="text-lg font-bold text-green-500">
                        {Math.round((dealer.conversions / dealer.leadsAssigned) * 100)}%
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    onClick={() => handleAssignLead(dealer.name)}
                  >
                    Assign Hot Lead
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadScoring;