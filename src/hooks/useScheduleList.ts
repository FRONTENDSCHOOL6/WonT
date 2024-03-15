import useFetchData, {
  FetchDataProps,
  FetchDataResult,
} from '@/hooks/useFetchData';

function useScheduleList(): FetchDataResult {
  const endpointObject: FetchDataProps = {
    endpoint: `${import.meta.env.VITE_PB_API}/collections/mySchedule/records`,
  };

  return useFetchData(endpointObject);
}

export default useScheduleList;
