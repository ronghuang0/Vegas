import React from 'react';
import styles from './Header.css';

const Header = ({
  name,
  phoneNumber,
  location,
  price,
  starRating,
  onSelect,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= starRating; i += 1) {
      stars.push(<img className={styles.starIcon} src='' />);
    }
    if (!Number.isInteger(starRating)) {
      stars.push(<img className={styles.halfStarIcon} src='' />);
    }
    return stars;
  };
  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <div className={styles.title}>
          <div className={styles.name}>{name}</div>
          { renderStars() }
        </div>
        <div className={styles.info}>
          <div className={styles.location} onClick={() => onSelect(2)}>
            <img className={styles.markIcon} src='' />
            {location.areaName}
          </div>
          <div>
            <img className={styles.phoneIcon} src='' />
            {phoneNumber}
          </div>
          <div>
            <img className={styles.likeIcon} src='' />
            Best Price Guarantee
          </div>
        </div>
      </div>
      <div className={styles.rightHeader}>
        <div className={styles.price}>{`$${price}`}</div>
        <div className={styles.priceText}>HOTEL ROOMS FROM</div>
      </div>
    </div>
  );
};

export default Header;
