import axios from "axios";

const API_URL = "http://localhost:4000/api/tasks";

// get
export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

// post
export const createTask = async (taskData) => {
  try {
    const response = await axios.post(API_URL, taskData);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

// update
export const updateTask = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating task ${id}:`, error);
    throw error;
  }
};

// delete
export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting task ${id}:`, error);
    throw error;
  }
};

// patch
export const toggleTask = async (id) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}/toggle`);
    return response.data;
  } catch (error) {
    console.error(`Error toggling task ${id}:`, error);
    throw error;
  }
};
