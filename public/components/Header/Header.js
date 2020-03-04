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
      stars.push(<div className={styles.starIcon} />);
    }
    if (!Number.isInteger(starRating)) {
      stars.push(<div className={styles.halfStarIcon} />);
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
            <div className={styles.markIcon} />
            {location.areaName}
          </div>
          <div>
            <div className={styles.phoneIcon} />
            {phoneNumber}
          </div>
          <div>
            <div className={styles.likeIcon} />
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
