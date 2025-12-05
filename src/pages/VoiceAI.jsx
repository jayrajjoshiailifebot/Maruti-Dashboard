import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Progress } from '../components/ui/progress';
import { 
  Phone, 
  Mic, 
  PhoneCall, 
  Clock, 
  CheckCircle2, 
  TrendingDown,
  MapPin,
  Calendar,
  Star
} from 'lucide-react';
import { toast } from 'sonner';

const transcript = [
  { speaker: 'AI', text: 'नमस्ते राजेश जी, मैं Maruti Suzuki AI Assistant हूं. आपने Grand Vitara में रुचि दिखाई थी?', time: '10:23' },
  { speaker: 'Customer', text: 'हां जी, मैं hybrid variant के बारे में जानना चाहता हूं.', time: '10:24' },
  { speaker: 'AI', text: 'बिल्कुल! Grand Vitara Strong Hybrid 40 km/l तक का mileage देता है. क्या आप test drive book करना चाहेंगे?', time: '10:24' },
  { speaker: 'Customer', text: 'हां, इस weekend के लिए book कर दें.', time: '10:25' },
  { speaker: 'AI', text: 'बहुत अच्छा! मैं Saturday, सुबह 11 बजे के लिए slot book कर देता हूं. आपका nearest showroom JP Nagar में है.', time: '10:25' }
];

export const VoiceAI = () => {
  const [callDuration, setCallDuration] = useState(0);
  const [isCallActive, setIsCallActive] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let interval;
    if (isCallActive && callDuration < 180) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCallActive, callDuration]);

  useEffect(() => {
    let interval;
    if (currentLine < transcript.length) {
      interval = setInterval(() => {
        setCurrentLine(prev => prev + 1);
      }, 2500);
    } else if (currentLine >= transcript.length && isCallActive) {
      setTimeout(() => {
        setIsCallActive(false);
        setShowSuccess(true);
        toast.success('Test Drive Booked Successfully!', {
          description: 'Saturday, 11:00 AM at JP Nagar Showroom'
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentLine, isCallActive]);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-bold font-display mb-2">Voice AI Assistant</h2>
        <p className="text-muted-foreground">Dealer workload drops 40% - AI handles customer conversations 24/7</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Calls</p>
                <p className="text-3xl font-bold font-display mt-1">156</p>
              </div>
              <PhoneCall className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Call Duration</p>
                <p className="text-3xl font-bold font-display mt-1">2:34</p>
              </div>
              <Clock className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Bookings Today</p>
                <p className="text-3xl font-bold font-display mt-1">89</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Dealer Workload</p>
                <p className="text-3xl font-bold font-display mt-1 text-green-500">-40%</p>
              </div>
              <TrendingDown className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Live Call Simulation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Call Interface */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="glass border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Live Call Simulation</CardTitle>
                <Badge 
                  className={isCallActive 
                    ? "bg-green-500/20 text-green-400 border-green-500/30" 
                    : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                  }
                >
                  {isCallActive ? (
                    <>
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                      In Progress
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Completed
                    </>
                  )}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Caller Info */}
              <div className="flex items-center gap-4 p-4 glass-strong rounded-xl">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl font-bold">
                    RS
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-display">Rajesh Singh</h3>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge variant="outline" className="glass">
                      <MapPin className="w-3 h-3 mr-1" />
                      Bangalore
                    </Badge>
                    <Badge variant="outline" className="glass">
                      Lead Score: 87/100
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Call Duration</p>
                  <p className="text-3xl font-bold font-display mt-1">{formatDuration(callDuration)}</p>
                </div>
              </div>

              {/* Waveform Animation */}
              {isCallActive && (
                <div className="flex items-center justify-center gap-1 h-20 glass-strong rounded-xl">
                  {[...Array(40)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-primary rounded-full"
                      animate={{
                        height: ['10%', `${Math.random() * 80 + 20}%`, '10%']
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.05
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Conversation Transcript */}
              <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-thin">
                {transcript.slice(0, currentLine + 1).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      line.speaker === 'AI' ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`max-w-[80%] ${
                      line.speaker === 'AI' 
                        ? 'bg-primary/20 border border-primary/30' 
                        : 'bg-accent/20 border border-accent/30'
                    } p-4 rounded-xl`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold">{line.speaker}</span>
                        <span className="text-xs text-muted-foreground">{line.time}</span>
                      </div>
                      <p className="text-sm leading-relaxed">{line.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-strong p-6 rounded-xl border-2 border-green-500/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500/20 p-3 rounded-full">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold font-display text-green-400">Test Drive Booked Successfully!</h4>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Saturday, 11:00 AM</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>JP Nagar Showroom</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Call Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Lead Score */}
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle className="text-lg">Lead Quality Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="transform -rotate-90" width="128" height="128">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="hsl(var(--muted))"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 56 * (1 - 0.87) }}
                    transition={{ duration: 1, delay: 0.5 }}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(215, 100%, 50%)" />
                      <stop offset="100%" stopColor="hsl(16, 100%, 60%)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold font-display">87</span>
                  <span className="text-xs text-muted-foreground">/ 100</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Intent Level</span>
                  <span className="font-semibold text-green-500">High</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Budget Match</span>
                  <span className="font-semibold">89%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Timeline</span>
                  <span className="font-semibold">0-30 days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle className="text-lg">AI Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                <p className="text-muted-foreground">Customer shows strong interest in hybrid technology</p>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                <p className="text-muted-foreground">Prefers Hindi for communication</p>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                <p className="text-muted-foreground">Ready for test drive booking</p>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                <p className="font-medium text-accent">Recommend: Follow up with financing options</p>
              </div>
            </CardContent>
          </Card>

          {/* Performance Stats */}
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle className="text-lg">Today's Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Conversion Rate</span>
                  <span className="font-semibold">57%</span>
                </div>
                <Progress value={57} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Satisfaction Score</span>
                  <span className="font-semibold flex items-center gap-1">
                    4.8 <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  </span>
                </div>
                <Progress value={96} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default VoiceAI;