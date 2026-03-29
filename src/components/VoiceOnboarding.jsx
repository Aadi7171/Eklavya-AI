import React, { useState, useEffect } from 'react';
import { Mic, CheckCircle, Loader2 } from 'lucide-react';

const VoiceOnboarding = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [step, setStep] = useState('idle'); // idle -> recording -> analyzing -> success
  const [transcript, setTranscript] = useState('');
  
  const handleRecord = () => {
    setIsRecording(true);
    setStep('recording');
    setTimeout(() => {
      setIsRecording(false);
      setStep('analyzing');
      setTranscript('...मैंने अपने पिता के ट्रैक्टर की मरम्मत की और पंचायत का हिसाब एक्सेल पर रखा...');
      
      setTimeout(() => {
        setStep('success');
      }, 2500);
    }, 3000);
  };

  return (
    <>
    <style>{`
      @keyframes spin { 100% { transform: rotate(360deg); } }
      .spin { animation: spin 1s linear infinite; }
      @keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } }
      .pulse-ring { animation: pulse 2s infinite; }
    `}</style>
    <div className="screen-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>AI Skills Assessor</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem', padding: '0 1rem' }}>Speak in Hindi or English about your recent projects or daily work. We'll find corporate matches for you.</p>
      </div>

      {step === 'idle' && (
        <button 
          onClick={handleRecord}
          style={{ width: '120px', height: '120px', borderRadius: '60px', background: 'var(--primary)', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)', cursor: 'pointer', transition: 'transform 0.2s' }}
        >
          <Mic size={48} />
        </button>
      )}

      {step === 'recording' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="pulse-ring" style={{ width: '140px', height: '140px', borderRadius: '70px', border: '2px solid var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ecfdf5' }}>
             <Mic size={48} color="var(--secondary)" />
          </div>
          <p style={{ mt: '1.5rem', fontWeight: 'bold', color: 'var(--secondary)', marginTop: '1rem' }}>Listening on Edge...</p>
        </div>
      )}

      {step === 'analyzing' && (
        <div className="card" style={{ width: '100%', textAlign: 'center', padding: '2rem 1.5rem' }}>
          <Loader2 size={36} className="spin" style={{ color: 'var(--primary)', margin: '0 auto' }} />
          <h3 style={{ marginTop: '1rem', fontWeight: 600 }}>Analyzing via TensorFlow...</h3>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1rem', background: '#f1f5f9', padding: '0.75rem', borderRadius: '8px' }}>"{transcript}"</p>
        </div>
      )}

      {step === 'success' && (
        <div className="card" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <CheckCircle size={56} color="var(--secondary)" style={{ margin: '0 auto' }} />
            <h3 style={{ marginTop: '0.5rem', fontWeight: 600, color: 'var(--secondary)' }}>Profile Auto-Updated!</h3>
          </div>
          
          <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Eklavya Intelligence: Mapped Skills</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ background: '#e0e7ff', color: '#4338ca', padding: '6px 12px', borderRadius: '16px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid #c7d2fe' }}>Equipment Maintenance</span>
              <span style={{ background: '#e0e7ff', color: '#4338ca', padding: '6px 12px', borderRadius: '16px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid #c7d2fe' }}>Basic Bookkeeping</span>
              <span style={{ background: '#e0e7ff', color: '#4338ca', padding: '6px 12px', borderRadius: '16px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid #c7d2fe' }}>Excel Data Entry</span>
            </div>
          </div>
          <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => setStep('idle')}>Done</button>
        </div>
      )}
    </div>
    </>
  );
};

export default VoiceOnboarding;
