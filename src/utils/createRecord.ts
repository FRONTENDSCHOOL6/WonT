import pocketbase from '@/api/pocketbase';

interface RecordData {
  title?: string;
  username?: string;
  start_date?: string;
  end_date?: string;
}

export const createRecord = async (
  collectionName: string,
  data: RecordData
) => {
  try {
    return await pocketbase.collection(collectionName).create(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
