import { useEffect, useState } from 'react';
import sortedUniqBy from 'lodash.sorteduniqby';

export const useHotelsApi = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const fetchHotels = async () => {
      const resp = await fetch('/api/hotels/index');
      const json = await resp.json();
      json.list.sort((a, b) => (a.name > b.name ? 1 : -1));
      const sortedUniqueList = sortedUniqBy(json.list, 'code');
      setHotels(sortedUniqueList);
    };
    fetchHotels();
  }, []);
  return hotels;
};

export const useHotelDataApi = (hotel) => {
  const [hotelData, setHotelData] = useState({});
  useEffect(() => {
    const fetchHotelData = async () => {
      const resp = await fetch(`/api/hotels/${hotel}`);
      const json = await resp.json();
      setHotelData(json);
    };
    fetchHotelData();
  }, [hotel]);
  return hotelData;
};
