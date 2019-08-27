import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 19077159efad2ed2cce9e3781d29c4aa933ea536a7db4b709308421c5ab5eed5"
  }
});
