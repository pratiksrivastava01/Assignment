import axios from "axios";

export const fetchData = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
