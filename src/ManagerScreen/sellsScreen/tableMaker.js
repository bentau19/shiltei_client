import styles from './sellStyle.module.css';
import { SellLine } from './sellLine';
import { useState } from 'react';

export const TableMaker=(sells,setItems,setOrder)=>{
    const [chosenID,setChosenId]=useState(-1)
    return <div className={styles.gridContainer}>
      <div className={styles.sellTableTitle}>
        <h3>Orders</h3>
      </div>
      <div className={styles.sellPageContainer} >
        <table className={`sellTableFill`}>
          <thead>
            <tr>
            <th className={`${styles.sellTh} ${styles.textLeft}`}>Status</th>
              <th className={`${styles.sellTh} ${styles.textLeft}`}>Products</th>
              <th className={`${styles.sellTh} ${styles.textLeft}`}>Trade Number</th>
              <th className={`${styles.sellTh} ${styles.textLeft}`}>Price</th>
              <th className={`${styles.sellTh} ${styles.textLeft}`}>Name</th>
              <th className={`${styles.sellTh} ${styles.textLeft}`}>Ship</th>
              <th className={`${styles.sellTh} ${styles.textLeft}`}>Date</th>
            </tr>
          </thead>
          <tbody className={styles.tableHover}>
            {sells.map((product, i) => (
              <SellLine setFItems={setItems} setOrder={setOrder} key={i} i={i} order={product} chosen={chosenID===i} setChosenId={setChosenId} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  }