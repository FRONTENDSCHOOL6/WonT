import { useCallback, useMemo, useState } from 'react';

interface StorageReturn {
  storageData: any;
  update: (nextData: any) => void;
  remove: () => void;
}

function useStorage(key: string, defaultValue?: any): StorageReturn {
  const [storageData, setStorageData] = useState(() => {
    try {
      return getData(key);
    } catch (error) {
      return defaultValue;
    }
  });

  const update = useCallback(
    (nextData: any) => {
      setData(key, nextData);
      setStorageData(nextData);
    },
    [key]
  );

  const remove = useCallback(() => {
    deleteData(key);
    setStorageData(defaultValue);
  }, [key, defaultValue]);

  return useMemo(
    () => ({
      storageData,
      update,
      remove,
    }),
    [remove, storageData, update]
  );
}

const {
  localStorage: storage,
  JSON: { stringify: serialize, parse: deserialize },
} = globalThis as any;

const setData = (key: string, nextData: any) => {
  storage.setItem(key, serialize(nextData));
};

const getData = (key: string) => {
  const data = storage.getItem(key);
  return data ? deserialize(data) : null;
};

const deleteData = (key: string) => {
  storage.removeItem(key);
};

export default useStorage;
