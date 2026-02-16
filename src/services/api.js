import axios from 'axios';

const API_BASE_URL = 'https://industrious-friendship-production.up.railway.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllEmployees = async () => {
  try {
    const response = await api.get('/api/employees/getAllEmployees');
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export default api;
