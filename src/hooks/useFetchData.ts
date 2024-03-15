import { useEffect, useState } from 'react';

export interface FetchDataProps {
  endpoint: string;
  options?: Record<string, any>; // 이것은 모든 옵션을 받을 수 있는 타입입니다. 필요에 따라 타입을 더 구체적으로 정의할 수 있습니다.
}

export interface FetchDataResult {
  data: any; // 데이터 타입을 구체화하는 것이 좋습니다.
  isLoading: boolean;
  error: Error | null;
}

const defaultOptions = {
  method: 'GET',
};

function useFetchData({
  endpoint,
  options = {},
}: FetchDataProps): FetchDataResult {
  const [data, setData] = useState<any>(null); // 데이터 타입을 구체화하는 것이 좋습니다.
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(endpoint, {
          ...defaultOptions,
          ...options,
          signal: controller.signal,
        });
        const responseData = await response.json();
        setData(responseData);
      } catch (error: any) {
        if (!(error instanceof DOMException)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return { data, isLoading, error };
}

export default useFetchData;
