import React, { useEffect, useState } from "react";

const useFetch = (apiUrl) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return { apiData };
};

export default useFetch;
