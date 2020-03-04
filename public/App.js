import React, { useState } from 'react';
import styles from './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import { useHotelsApi, useHotelDataApi } from './requests';

const App = () => {
  const [hotel] = useState('venetian'); // Will be able to select hotel in the future
  const hotels = useHotelsApi();
  const hotelData = useHotelDataApi(hotel);

  const { media = [] } = hotelData;
  const productImage = media.find((element) => element.type === 'productImage');
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftIcon} />
        SEE ALL LAS VEGAS HOTELS
      </div>
      <div className={styles.sidebar}>
        { productImage && <img className={styles.photo} src={productImage.href} /> }
        <Sidebar hotels={hotels} />
      </div>
      <div className={styles.main}>
        <Main data={hotelData} />
      </div>
    </>
  );
};

export default App;
