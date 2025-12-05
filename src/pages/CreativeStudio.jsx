import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Download, Eye, Sparkles, TrendingUp, Share2, Clock } from 'lucide-react';
import { toast } from 'sonner';

const creatives = [
  {
    id: 1,
    language: 'English',
    headline: 'Experience Hybrid Power',
    body: 'Grand Vitara - India\'s favorite SUV now with intelligent hybrid technology. Book your test drive today!',
    cta: 'Book Test Drive',
    predictedCTR: 8.4,
    segment: 'Urban EV-Curious',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    language: 'Hindi',
    headline: 'हाइब्रिड पावर का अनुभव करें',
    body: 'ग्रैंड विटारा - भारत की पसंदीदा SUV अब इंटेलिजेंट हाइब्रिड टेक्नोलॉजी के साथ. आज ही टेस्ट ड्राइव बुक करें!',
    cta: 'टेस्ट ड्राइव बुक करें',
    predictedCTR: 9.2,
    segment: 'Hindi Belt Users',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    language: 'Tamil',
    headline: 'ஹைப்ரிட் சக்தியை அனுபவிக்கவும்',
    body: 'கிராண்ட் விடாரா - இந்தியாவின் பிடிக்க SUV இன்று சூட்டு சக்தி தகவல் சார்ந்த ஹைப்ரிடுடன்!',
    cta: 'சாலனை பரிசோதனை',
    predictedCTR: 7.8,
    segment: 'Tamil Nadu Market',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop'
  }
];

export const CreativeStudio = () => {
  const [selectedCreative, setSelectedCreative] = useState(creatives[0]);

  const handleExport = (creative) => {
    toast.success('Exporting to Adobe AEM', {
      description: `${creative.language} creative will be published`
    });
  };

  const handlePreview = (creative) => {
    toast.info('Preview Mode', {
      description: 'Opening creative preview...'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-bold font-display mb-2">Creative Studio</h2>
        <p className="text-muted-foreground">AI-generated creatives in 30 seconds. Creative turnaround time: 3 days → 30 seconds</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Variants Generated</p>
                <p className="text-3xl font-bold font-display mt-1">127</p>
              </div>
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg CTR</p>
                <p className="text-3xl font-bold font-display mt-1">8.5%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Time Saved</p>
                <p className="text-3xl font-bold font-display mt-1">89%</p>
              </div>
              <Clock className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Languages</p>
                <p className="text-3xl font-bold font-display mt-1">12</p>
              </div>
              <div className="text-2xl">🌐</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Creative Carousel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {creatives.map((creative, index) => (
          <motion.div
            key={creative.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className={`glass border-border cursor-pointer transition-all duration-300 hover:shadow-elegant ${
                selectedCreative.id === creative.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedCreative(creative)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="glass">{creative.language}</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    {creative.predictedCTR}% CTR
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Image Preview */}
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={creative.image} 
                    alt="Car"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold font-display mb-1">{creative.headline}</h3>
                  </div>
                </div>

                {/* Body Text */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {creative.body}
                </p>

                {/* CTA Button Preview */}
                <Button className="w-full bg-gradient-accent hover:opacity-90 transition-opacity">
                  {creative.cta}
                </Button>

                {/* Segment Info */}
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1">Target Segment</p>
                  <p className="text-sm font-medium">{creative.segment}</p>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePreview(creative);
                    }}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExport(creative);
                    }}
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Generation Tool */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Generate New Creative
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Car Model</label>
                <select className="w-full glass p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Grand Vitara</option>
                  <option>Brezza</option>
                  <option>Swift</option>
                  <option>Baleno</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Language</label>
                <select className="w-full glass p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Target Segment</label>
                <select className="w-full glass p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Urban EV-Curious</option>
                  <option>First-Time Buyers</option>
                  <option>Alto Loyalists</option>
                </select>
              </div>
            </div>
            <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90 transition-opacity">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Creative (30 seconds)
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CreativeStudio;