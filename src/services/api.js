import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api/employees';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllEmployees = async () => {
  try {
    const response = await api.get('/getAllEmployees');
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export default api;
