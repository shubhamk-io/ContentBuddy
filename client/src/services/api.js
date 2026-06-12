import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 12000
});

export const joinWaitlist = async (payload) => {
  const { data } = await api.post("/api/waitlist", payload);
  return data;
};

export default api;
