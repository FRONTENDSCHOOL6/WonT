import useFetchData, {
  FetchDataProps,
  FetchDataResult,
} from '@/hooks/useFetchData';

function useRecommendsList(): FetchDataResult {
  const endpointObject: FetchDataProps = {
    endpoint: `${import.meta.env.VITE_PB_API}/collections/recommends/records`,
  };

  return useFetchData(endpointObject);
}

export default useRecommendsList;
