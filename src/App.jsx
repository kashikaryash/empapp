import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('https://industrious-friendship-production.up.railway.app/');
        setIsConnected(response.ok);
      } catch {
        setIsConnected(false);
      }
    };
    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Nexus Workforce</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Intelligent employee record management system with real-time data integration.
        </p>
      </header>

      <main>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600 }}>Employee Directory</h2>
          <div style={{
            padding: '0.5rem 1rem',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--glass-border)',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}>
            Status: <span style={{ color: isConnected ? '#10b981' : '#ef4444', fontWeight: 600 }}>
              {isConnected ? 'Connected' : 'Offline'}
            </span>
          </div>
        </div>

        <EmployeeList />
      </main>

      <footer style={{ marginTop: '5rem', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Nexus Workforce Systems. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
