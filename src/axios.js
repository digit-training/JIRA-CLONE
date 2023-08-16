import axios from "axios";

const instance = axios.create({
  baseURL: "/egov-workflow-v2", // Base URL of the API
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json, text/plain, */*",
  },
});

export default instance;
