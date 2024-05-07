import { useState } from "react";
import { fetchData } from "../utils/fetchData";

export const useDataFetching = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler = () => {
    setIsLoading(true);
    fetchData()
      .then((userData) => {
        setData(userData);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { data, error, isLoading, fetchData: fetchDataHandler };
};