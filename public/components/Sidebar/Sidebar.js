import React from 'react';
import styles from './Sidebar.css';

const Sidebar = ({ hotels }) => {
  const renderTableData = () => hotels.map((element) => {
    const { name, price } = element;
    return (
      <tr>
        <td className={styles.name}>{name}</td>
        <td>{`$${price.toFixed(2)}`}</td>
      </tr>
    );
  });
  return (
    <table className={styles.table}>
      <tbody>
        {renderTableData()}
      </tbody>
    </table>
  );
};

export default Sidebar;
