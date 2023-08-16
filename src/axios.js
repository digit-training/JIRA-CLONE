import axios from "axios";

const instance = axios.create({
  baseURL: "https://thingproxy.freeboard.io/fetch/https://qa.digit.org/egov-workflow-v2", // Base URL of the API
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json, text/plain, */*",
  },
});

export default instance;
