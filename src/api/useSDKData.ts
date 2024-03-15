import { useState } from 'react';

import pocketbase from '@/api/pocketbase';

// SDK 처리 함수를 포함하는 사용자 정의 훅 작성
function useSDKData(collection: string): {
  data: any;
  status: string;
  SDK: () => Promise<void>;
} {
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState('pending');

  async function SDK() {
    try {
      setStatus('loading');
      const records = (await pocketbase
        .collection(collection)
        .getFullList()) as any[];
      setData(records);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return {
    data,
    status,
    SDK,
  };
}

export default useSDKData;
