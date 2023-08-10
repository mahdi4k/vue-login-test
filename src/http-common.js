import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://panel.gazlaleh.ir`,
  headers: {
    "content-type": "application/json",
  },
})
