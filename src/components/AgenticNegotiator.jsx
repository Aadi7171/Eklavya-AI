import React, { useState, useEffect } from 'react';
import { Send, CheckCheck, User, Sparkles } from 'lucide-react';

const AgenticNegotiator = () => {
  const [messages, setMessages] = useState([
    { sender: 'hr', text: 'Hi Rahul, UrbanKisaan is offering ₹20,000/mo for the Data Entry role.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let active = true;
    const sequence = async () => {
      setIsTyping(true);
      await new Promise(r => setTimeout(r, 1500));
      if (!active) return;
      setMessages(m => [...m, { sender: 'agent', text: 'Thanks for the offer. Given Rahul\'s verified Poly-badge in Excel and ability to start immediately, would UrbanKisaan consider ₹28,000/mo?' }]);
      setIsTyping(false);

      await new Promise(r => setTimeout(r, 3000));
      if (!active) return;
      setIsTyping(true);
      await new Promise(r => setTimeout(r, 1000));
      if (!active) return;
      setMessages(m => [...m, { sender: 'hr', text: 'We can stretch to ₹25,000/mo. Final offer.' }]);
      setIsTyping(false);

      await new Promise(r => setTimeout(r, 2000));
      if (!active) return;
      setIsTyping(true);
      await new Promise(r => setTimeout(r, 1500));
      if (!active) return;
      setMessages(m => [...m, { sender: 'agent', text: 'Accepted at ₹25,000/mo. I will sync his onboarding calendar and auto-sign the NDA.' }]);
      setIsTyping(false);
    };
    sequence();
    return () => { active = false; };
  }, []);

  return (
    <div className="screen-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', paddingBottom: '90px' }}>
      <header style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '22px', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <User size={24} color="var(--text-muted)" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 'bold' }}>HR - UrbanKisaan</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}><Sparkles size={12} /> Agent Auto-Negotiating</p>
        </div>
      </header>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.25rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ 
            alignSelf: msg.sender === 'agent' ? 'flex-end' : 'flex-start',
            background: msg.sender === 'agent' ? 'var(--primary)' : 'var(--surface)',
            color: msg.sender === 'agent' ? '#fff' : 'var(--text-main)',
            padding: '1rem',
            borderRadius: '16px',
            border: msg.sender === 'agent' ? 'none' : '1px solid var(--border)',
            maxWidth: '85%',
            position: 'relative',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
          }}>
            {msg.sender === 'agent' && <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#3b82f6', borderRadius: '50%', padding: '4px', border: '2px solid #fff', display: 'flex' }}><Sparkles size={12} color="#fff" /></span>}
            <p style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{msg.text}</p>
            <div style={{ textAlign: 'right', marginTop: '6px' }}>
              <CheckCheck size={16} color={msg.sender === 'agent' ? '#93c5fd' : 'var(--text-muted)'} />
            </div>
          </div>
        ))}
        {isTyping && (
           <div style={{ alignSelf: 'flex-start', color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic', background: 'var(--surface)', padding: '0.75rem 1rem', borderRadius: '16px', border: '1px solid var(--border)' }}>Agent is typing...</div>
        )}
      </div>

      <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', display: 'flex', alignItems: 'center', opacity: 0.6 }}>
        <input type="text" placeholder="Agent is handling this..." disabled style={{ border: 'none', background: 'transparent', flex: 1, padding: '0 0.75rem', outline: 'none', fontSize: '0.9rem' }} />
        <div style={{ background: 'var(--border)', padding: '0.5rem', borderRadius: '50%', display: 'flex' }}><Send size={18} color="var(--text-muted)"/></div>
      </div>
    </div>
  );
};

export default AgenticNegotiator;
