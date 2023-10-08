import { useState, useEffect } from "react";

export const useFetch = (
  url: string | null,
  method: string = 'get',
  requestData: null | RequestData = null,
) => {
    const [data, setData] = useState<unknown>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if(!url) return;
    (async () => {
        setData(null);
        setIsLoading(true);
        setError(null);
      fetch(`${url}${new URLSearchParams(requestData?.params)}`, {
        method,
        body: JSON.stringify(requestData?.body),
        headers: requestData?.headers,
      })
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          setIsLoading(false);
        })
        .catch((error) => setError(error));
    })();
  }, [url,method,requestData]);

  return [data, error, isLoading];
};
