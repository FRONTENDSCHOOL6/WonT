import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pocketbase from '@/api/pocketbase';
import { getPocketHostImageURL } from '@/utils/index.js';

export default function MainTravels() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await pocketbase.collection('travels').getFullList();
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <ul className="grid grid-cols-1 gap-5 px-[1.688rem] pb-[1.25rem] pt-[0.625rem] md:grid md:grid-cols-2 md:gap-10">
        {data?.map((item) => (
          <Link to={`/travels/${item.id}`} key={item.id}>
            <li
              key={item.id}
              className="overflow-hidden rounded-md transition hover:scale-110 hover:rounded-lg"
            >
              <img src={getPocketHostImageURL(item).split(',')[0]} alt="" />
              <div className="pb-[1.25rem] pt-[0.625rem]">
                <p className="text-base font-semibold">{item.title}</p>
                <p className="text-sm font-light text-gray-500">{item.text}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
