
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { SymptomChecker } from './components/SymptomChecker';
import { ImageAnalysis } from './components/ImageAnalysis';
import { Wellness } from './components/Wellness';
import { ChatAssistant } from './components/ChatAssistant';
import { EmergencySOS } from './components/EmergencySOS';
import { ViewState, UserProfile } from './types';
import { HeartPulse, ArrowRight } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  
  // Login Form State
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    gender: 'Male',
    goal: 'General Health'
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name) {
      setUser(formData);
      setCurrentView(ViewState.DASHBOARD);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg">
               <HeartPulse size={32} strokeWidth={2.5} />
            </div>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">MediMind AI</h1>
            <p className="text-slate-500">Your Intelligent Personal Healthcare Companion</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Age</label>
                <input 
                  required
                  type="number" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="25"
                  value={formData.age}
                  onChange={e => setFormData({...formData, age: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Weight (kg)</label>
                <input 
                  required
                  type="number" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="70"
                  value={formData.weight}
                  onChange={e => setFormData({...formData, weight: e.target.value})}
                />
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg hover:shadow-xl transform active:scale-95 duration-200"
            >
              Get Started <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <Layout 
      currentView={currentView} 
      onNavigate={setCurrentView} 
      user={user}
      onLogout={() => setUser(null)}
    >
      {currentView === ViewState.DASHBOARD && (
        <Dashboard user={user} onNavigate={setCurrentView} />
      )}
      {currentView === ViewState.SYMPTOM_CHECKER && <SymptomChecker user={user} />}
      {currentView === ViewState.DISEASE_DETECTION && (
        <ImageAnalysis 
          type="disease" 
          title="Disease Detection" 
          description="Upload a clear photo of skin conditions or other visible symptoms for AI analysis." 
        />
      )}
      {currentView === ViewState.MEDICINE_SCANNER && (
        <ImageAnalysis 
          type="medicine" 
          title="Medicine Scanner" 
          description="Take a photo of a pill, bottle, or prescription label to identify and get usage instructions." 
        />
      )}
      {currentView === ViewState.WELLNESS_PLAN && <Wellness user={user} />}
      {currentView === ViewState.CHAT_ASSISTANT && <ChatAssistant />}
      {currentView === ViewState.EMERGENCY_SOS && <EmergencySOS />}
    </Layout>
  );
}
