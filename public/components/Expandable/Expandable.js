import React, { useState } from 'react';
import styles from './Expandable.css';

const Expandable = ({ children, collapsedText, expandedText }) => {
  const [collapsed, setCollapsed] = useState(true);
  const handleClick = () => {
    setCollapsed(!collapsed);
  };
  const panelStyle = collapsed ? styles.collapsed : null;
  return (
    <>
      <div className={panelStyle}>
        {children}
      </div>
      <div className={styles.expandText} onClick={handleClick}>
        {collapsed ? collapsedText : expandedText}
        {collapsed ? <div className={styles.downIcon} />
          : <div className={styles.upIcon} />}
      </div>
    </>
  );
};

export default Expandable;
