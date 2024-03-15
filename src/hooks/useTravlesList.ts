import useFetchData, {
  FetchDataProps,
  FetchDataResult,
} from '@/hooks/useFetchData';

function useTravelsList(): FetchDataResult {
  const endpointObject: FetchDataProps = {
    endpoint: `${import.meta.env.VITE_PB_API}/collections/travels/records`,
  };

  return useFetchData(endpointObject);
}

export default useTravelsList;
