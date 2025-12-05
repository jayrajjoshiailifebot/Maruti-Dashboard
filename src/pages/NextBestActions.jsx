import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Mail, MessageSquare, Phone, Clock, Target, Send, Calendar } from 'lucide-react';
import { toast } from 'sonner';

const customers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    car: 'Brezza VXI',
    probability: 87,
    channel: 'WhatsApp',
    message: 'Hi Rajesh! Your favorite Brezza VXI is now available with ₹25,000 cashback. Book a test drive?',
    sendTime: '2:30 PM Today',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    car: 'Swift ZXI+',
    probability: 72,
    channel: 'Email',
    message: 'Exclusive offer: Swift ZXI+ with free accessories worth ₹15,000. Limited period only!',
    sendTime: '4:00 PM Today',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    name: 'Amit Patel',
    car: 'Grand Vitara Alpha',
    probability: 65,
    channel: 'SMS',
    message: 'Grand Vitara Alpha - Experience hybrid technology. Test drive slots available this weekend.',
    sendTime: '10:00 AM Tomorrow',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    car: 'Baleno Delta',
    probability: 91,
    channel: 'Phone',
    message: 'Personal call recommended - High intent buyer, ready for immediate purchase',
    sendTime: 'Now',
    color: 'from-orange-500 to-red-600'
  }
];

const getChannelIcon = (channel) => {
  switch (channel) {
    case 'WhatsApp':
    case 'SMS':
      return MessageSquare;
    case 'Email':
      return Mail;
    case 'Phone':
      return Phone;
    default:
      return MessageSquare;
  }
};

export const NextBestActions = () => {
  const handleSendNow = (customer) => {
    toast.success(`Action initiated for ${customer.name}`, {
      description: `${customer.channel} message queued for delivery`
    });
  };

  const handleSchedule = (customer) => {
    toast.success(`Action scheduled for ${customer.name}`, {
      description: `Will be sent at ${customer.sendTime}`
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-bold font-display mb-2">Next-Best Action Engine</h2>
        <p className="text-muted-foreground">LifeBOT predicts the right channel, right message, right moment</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Ready to Send</p>
                <p className="text-3xl font-bold font-display mt-1">2,847</p>
              </div>
              <Send className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Response Rate</p>
                <p className="text-3xl font-bold font-display mt-1">43%</p>
              </div>
              <Target className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Scheduled</p>
                <p className="text-3xl font-bold font-display mt-1">1,240</p>
              </div>
              <Clock className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">High Priority</p>
                <p className="text-3xl font-bold font-display mt-1">340</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Cards */}
      <div className="space-y-6">
        {customers.map((customer, index) => {
          const ChannelIcon = getChannelIcon(customer.channel);
          
          return (
            <motion.div
              key={customer.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Customer Info */}
                    <div className="flex items-center gap-4 lg:w-1/4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg font-bold">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{customer.name}</h3>
                        <p className="text-sm text-muted-foreground">{customer.car}</p>
                        <Badge variant="outline" className="mt-1">
                          <ChannelIcon className="w-3 h-3 mr-1" />
                          {customer.channel}
                        </Badge>
                      </div>
                    </div>

                    {/* Conversion Probability */}
                    <div className="lg:w-1/5">
                      <p className="text-sm text-muted-foreground mb-2">Conversion Probability</p>
                      <div className="relative w-24 h-24 mx-auto">
                        <svg className="transform -rotate-90" width="96" height="96">
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="hsl(var(--muted))"
                            strokeWidth="8"
                            fill="none"
                          />
                          <motion.circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke={`url(#gradient-${customer.id})`}
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                            animate={{ 
                              strokeDashoffset: 2 * Math.PI * 40 * (1 - customer.probability / 100) 
                            }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient id={`gradient-${customer.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="hsl(215, 100%, 50%)" />
                              <stop offset="100%" stopColor="hsl(16, 100%, 60%)" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold font-display">{customer.probability}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Message Preview */}
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-2">Suggested Message</p>
                      <div className="glass p-4 rounded-lg">
                        <p className="text-sm leading-relaxed">{customer.message}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Best time: {customer.sendTime}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 lg:w-1/6">
                      <Button 
                        className="bg-gradient-primary hover:opacity-90 transition-opacity"
                        onClick={() => handleSendNow(customer)}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="glass"
                        onClick={() => handleSchedule(customer)}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                      <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                        Customize
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default NextBestActions;