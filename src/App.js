import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Segments from './pages/Segments';
import NextBestActions from './pages/NextBestActions';
import CreativeStudio from './pages/CreativeStudio';
import ABTesting from './pages/ABTesting';
import VoiceAI from './pages/VoiceAI';
import LeadScoring from './pages/LeadScoring';
import ROIAnalytics from './pages/ROIAnalytics';
import { Toaster } from './components/ui/sonner';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'segments':
        return <Segments />;
      case 'actions':
        return <NextBestActions />;
      case 'creative':
        return <CreativeStudio />;
      case 'testing':
        return <ABTesting />;
      case 'voice':
        return <VoiceAI />;
      case 'leads':
        return <LeadScoring />;
      case 'analytics':
        return <ROIAnalytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground dark">
        <Header />
        <div className="flex">
          <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <main className="flex-1 ml-64 mt-16 p-8 min-h-screen">
            {renderContent()}
          </main>
        </div>
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}

export default App;