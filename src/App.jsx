import React, { useState } from 'react';
import { Briefcase, MessageCircle, Wallet, Mic, Search } from 'lucide-react';
import './index.css';

import VoiceOnboarding from './components/VoiceOnboarding';
import AgenticNegotiator from './components/AgenticNegotiator';
import BlockchainWallet from './components/BlockchainWallet';

function HomeDashboard() {
  return (
    <div className="screen-container">
      <header style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Namaste, Eklavya</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2 New Opportunities Found</p>
      </header>
      
      <div className="card" style={{ background: 'linear-gradient(135deg, var(--primary), #3b82f6)', color: '#fff', border: 'none' }}>
        <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Update Profile via Voice</h2>
        <p style={{ fontSize: '0.85rem', opacity: 0.9, marginBottom: '1rem' }}>Speak your recent local projects in Hindi to earn new Polygon skill badges.</p>
        <button style={{ background: '#fff', color: 'var(--primary)', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Mic size={16} /> Tap to Speak
        </button>
      </div>

      <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '1rem' }}>Recommended for you</h3>
      
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h4 style={{ fontWeight: 600 }}>Data Entry & Logistics</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>UrbanKisaan • Remote</p>
          </div>
          <span style={{ background: '#ecfdf5', color: 'var(--secondary)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>98% Match</span>
        </div>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '8px' }}>
          <button className="btn-primary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.9rem' }}>Agent Auto-Apply</button>
        </div>
      </div>
      
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h4 style={{ fontWeight: 600 }}>Supply Chain Assistant</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>AgroStar • Remote</p>
          </div>
          <span style={{ background: '#ecfdf5', color: 'var(--secondary)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>92% Match</span>
        </div>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '8px' }}>
          <button className="btn-primary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.9rem' }}>Agent Auto-Apply</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      {activeTab === 'home' && <HomeDashboard />}
      {activeTab === 'onboard' && <VoiceOnboarding />}
      {activeTab === 'agent' && <AgenticNegotiator />}
      {activeTab === 'wallet' && <BlockchainWallet />}

      <nav className="nav-bar">
        <div className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          <Search size={22} />
          <span>Matches</span>
        </div>
        <div className={`nav-item ${activeTab === 'onboard' ? 'active' : ''}`} onClick={() => setActiveTab('onboard')}>
          <Mic size={22} />
          <span>Voice Match</span>
        </div>
        <div className={`nav-item ${activeTab === 'agent' ? 'active' : ''}`} onClick={() => setActiveTab('agent')}>
          <MessageCircle size={22} />
          <span>Agent Chat</span>
        </div>
        <div className={`nav-item ${activeTab === 'wallet' ? 'active' : ''}`} onClick={() => setActiveTab('wallet')}>
          <Wallet size={22} />
          <span>Credential</span>
        </div>
      </nav>
    </>
  );
}

export default App;
