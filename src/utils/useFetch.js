import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Unable to Get Data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
