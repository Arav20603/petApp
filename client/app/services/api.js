import axios from 'axios';

const API_URL = 'http://10.0.2.2:8000/api';; // Change if using a remote server

// Function to get pet categories
export const getPets = async () => {
    try {
        const response = await axios.get(`${API_URL}/pets`);
        return response.data;
    } catch (error) {
        console.error("Error fetching pets", error);
        throw error;
    }
};

// Function to create a new pet category
export const createPet = async (name, desc) => {
    try {
        const response = await axios.post(`${API_URL}/pets`, { name, desc });
        return response.data;
    } catch (error) {
        console.error("Error creating pet", error);
        throw error;
    }
};
