import React from 'react';
import { Hexagon, CheckCircle, Shield } from 'lucide-react';

const BlockchainWallet = () => {
  return (
    <div className="screen-container">
      <header style={{ marginBottom: '2rem', textAlign: 'center', paddingTop: '1rem' }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}>
          <Shield size={36} color="#fff" />
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--text-main)' }}>Polygon Wallet</h1>
        <div style={{ display: 'inline-flex', alignItems: 'center', background: '#f1f5f9', padding: '4px 12px', borderRadius: '16px', marginTop: '0.5rem' }}>
           <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'monospace' }}>0x7F...3B92</span>
        </div>
      </header>

      <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>Verified Credentials</h3>
      
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '4px solid #d97706' }}>
        <div style={{ background: '#fef3c7', padding: '0.85rem', borderRadius: '12px' }}>
          <Hexagon size={28} color="#d97706" />
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)' }}>Basic Bookkeeping</h4>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>Issued by Eklavya Protocol</p>
        </div>
        <CheckCircle size={24} color="var(--secondary)" />
      </div>

      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '4px solid #4f46e5' }}>
        <div style={{ background: '#e0e7ff', padding: '0.85rem', borderRadius: '12px' }}>
          <Hexagon size={28} color="#4f46e5" />
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)' }}>Equipment Maintenance</h4>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>Issued by SkillBridge Validator</p>
        </div>
        <CheckCircle size={24} color="var(--secondary)" />
      </div>

      <div className="card" style={{ background: 'linear-gradient(to right, #1e293b, #0f172a)', color: '#fff', border: 'none', marginTop: '2rem' }}>
        <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>🚀 Mentor Credits: 120</h4>
        <p style={{ fontSize: '0.85rem', opacity: 0.9, marginBottom: '1.25rem' }}>You've guided 3 peers this week! Social Loop is active.</p>
        <button style={{ width: '100%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.75rem', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>Redeem for Jio Data Pack</button>
      </div>

    </div>
  );
};
export default BlockchainWallet;
