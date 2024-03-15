import pocketbase from '@/api/pocketbase';

interface RecordData {
  start_date: string;
  end_date: string;
}

export const updateRecord = async (
  collectionName: string,
  recordId: string,
  data: RecordData
) => {
  try {
    return await pocketbase.collection(collectionName).update(recordId, data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
