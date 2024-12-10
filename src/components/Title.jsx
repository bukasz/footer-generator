import React from 'react';
import styles from './../styles/components/_title.module.scss';

export default function Title() {
    return (
      <div>
        <h2 className={styles.title}>Hello, CyberSailor!</h2>
        <h4 className={styles.subtitle}>Generate your footer:</h4>
      </div>
    )
  }