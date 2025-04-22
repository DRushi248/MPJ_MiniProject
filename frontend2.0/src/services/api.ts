import axios from 'axios';

const API_BASE_URL = 'http://localhost:8083/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authService = {
    login: async (credentials: { username: string; password: string }) => {
        const response = await api.post('/users/login', credentials);
        return response.data;
    },

    register: async (userData: {
        username: string;
        email: string;
        password: string;
        phone: string;
        address: string;
    }) => {
        const response = await api.post('/users/register', userData);
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('token');
    },
};

export const userService = {
    getProfile: async () => {
        const response = await api.get('/users/profile');
        return response.data;
    },

    updateProfile: async (profileData: {
        username?: string;
        email?: string;
        phone?: string;
        address?: string;
    }) => {
        const response = await api.put('/users/profile', profileData);
        return response.data;
    },
};

export const fileService = {
    uploadFile: async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await api.post('/files/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },

    getFiles: async () => {
        const response = await api.get('/files');
        return response.data;
    },

    deleteFile: async (fileId: string) => {
        const response = await api.delete(`/files/${fileId}`);
        return response.data;
    },

    downloadFile: async (fileId: string) => {
        const response = await api.get(`/files/${fileId}/download`, {
            responseType: 'blob',
        });
        return response.data;
    },
};

export const dashboardService = {
    getStats: async () => {
        const response = await api.get('/dashboard/stats');
        return response.data;
    },

    getRecentActivity: async () => {
        const response = await api.get('/dashboard/activity');
        return response.data;
    },
};

export default api; 