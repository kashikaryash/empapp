import React, { useState, useEffect } from 'react';
import { getAllEmployees } from '../services/api';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getAllEmployees();
                // Since the user request shows Employee Controller returning List<Employee>
                setEmployees(data);
            } catch (err) {
                setError('Failed to load employee records. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <span className="loader"></span>
            </div>
        );
    }

    if (error) {
        return <div className="error-msg">{error}</div>;
    }

    return (
        <div className="employee-grid">
            {employees.length > 0 ? (
                employees.map((employee) => (
                    <EmployeeCard key={employee.id} employee={employee} />
                ))
            ) : (
                <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '4rem' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>No employee records found.</p>
                </div>
            )}
        </div>
    );
};

export default EmployeeList;
