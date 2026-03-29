import axios from "axios";

const API_URL = "http://localhost:8082/tasks";

// Get all tasks
export const getTasks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Add new task
export const addTask = async (task) => {
  const newTask = {
    title: task.title,
    description: task.description || "",
    status: task.status || "Pending",
    dueDate: task.dueDate || null,
  };

  const res = await axios.post(API_URL, newTask);
  return res.data;
};

// Delete task
export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// Update task
export const updateTask = async (id, task) => {
  const updatedTask = {
    title: task.title,
    description: task.description,
    status: task.status,
    dueDate: task.dueDate,
  };

  const res = await axios.put(`${API_URL}/${id}`, updatedTask);
  return res.data;
};
