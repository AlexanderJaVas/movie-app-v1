import axios from "axios";

export default axios.create({
  // baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
  // headers: {"ngrok-skip-browser-warning": "true"}

  baseURL: 'https://127.0.0.1',
  headers: {"127.0.0.1-skip-browser-warning": "true"}
});