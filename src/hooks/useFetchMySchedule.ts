import pocketbase from '@/api/pocketbase';
import { MyScheduleItem } from '@/types/MySchedule';

interface UserSchedule extends MyScheduleItem {
  //$ 여기에 반환될 데이터의 구조에 따른 타입을 정의해야 합니다.
  [key: string]: any;
  string: any;
}

async function useFetchMySchedule(
  userId: string
): Promise<MyScheduleItem | undefined> {
  try {
    const response = await pocketbase.collection('mySchedule').getFullList({
      filter: `(username?~'${userId}')`,
      expand: 'users',
      sort: '-updated',
    });
    //$ 실제 반환되는 데이터 구조에 맞게 UserSchedule 타입 정의 필요
    return response[0] as UserSchedule;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export default useFetchMySchedule;
