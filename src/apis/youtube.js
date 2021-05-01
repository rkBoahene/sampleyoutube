import axios from "axios";
const KEY = "AIzaSyBZ6e5tYZsTelrMn3f0I3SY_oxgBy41tW0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY,
  },
});
