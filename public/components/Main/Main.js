import React, { useState } from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';
import Expandable from '../Expandable/Expandable';
import Header from '../Header/Header';
import styles from './Main.css';

const Main = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const {
    description,
    details,
    media = [],
    name,
    phoneNumber,
    location,
    price,
    starRating,
  } = data;
  const productMap = media.find((element) => element.type === 'productMap');
  const handleSelect = (tabIndex) => setSelectedTab(tabIndex);
  return (
    Object.keys(data).length !== 0 && (
      <>
        <Header
          name={name}
          phoneNumber={phoneNumber}
          location={location}
          price={price}
          starRating={starRating}
          onSelect={handleSelect}
        />
        <Tabs className={styles.tabs} selectedIndex={selectedTab} onSelect={handleSelect}>
          <TabList className={styles.tabList}>
            <Tab selectedClassName={styles.tabSelected} className={styles.tab}>DESCRIPTION</Tab>
            <Tab selectedClassName={styles.tabSelected} className={styles.tab}>DETAILS</Tab>
            <Tab selectedClassName={styles.tabSelected} className={styles.tab}>LOCATION</Tab>
          </TabList>

          <TabPanel className={styles.tabPanel}>
            <Expandable collapsedText='SHOW FULL DESCRIPTION' expandedText='HIDE FULL DESCRIPTION'>
              {
                description.split('\r\n').map((substring) => (
                  <>
                    {substring}
                    <br />
                  </>
                ))
              }
            </Expandable>
          </TabPanel>
          <TabPanel className={styles.tabPanel}>
            <Expandable collapsedText='VIEW MORE DETAILS' expandedText='VIEW FEWER DETAILS'>
              { details.map((detail) => (
                <>
                  <span className={styles.detailsTitle}>{`${detail.label}:`}</span>
                  <div className={styles.detailsText}>{detail.value}</div>
                </>
              ))}
            </Expandable>
          </TabPanel>
          <TabPanel className={styles.tabPanel}>
            { productMap && <img className={styles.map} src={productMap.href} /> }
          </TabPanel>
        </Tabs>
      </>
    ));
};

export default Main;
