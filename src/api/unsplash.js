import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZKmp6TBZohDg5wPZvxgaQso_c34xuVdgS54f8CvnnQo",
  },
});
