import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // change to EC2 IP if needed
});

export default API;
