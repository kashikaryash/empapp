import React from 'react';

const EmployeeCard = ({ employee }) => {
    return (
        <div className="glass-card">
            <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff' }}>{employee.name}</h2>
                <span style={{
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    background: 'rgba(102, 126, 234, 0.2)',
                    color: '#818cf8',
                    fontSize: '0.875rem',
                    fontWeight: 600
                }}>
                    {employee.role || 'Admin'}
                </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.9rem' }}>📧 {employee.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.9rem' }}>📱 {employee.mobile}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.9rem' }}>📍 {employee.city}, {employee.dist}</span>
                </div>
                <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.4' }}>
                    {employee.address}
                </p>
            </div>

            <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
                    ID: {employee.id} | DOB: {new Date(employee.dob).toLocaleDateString()}
                </span>
            </div>
        </div>
    );
};

export default EmployeeCard;
