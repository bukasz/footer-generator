import React from "react";
import Title from "./Title";
import DropdownMenu from './DropdownMenu';
import styles from './../styles/components/_header.module.scss';


export default function Header() {
  return (
    <header className={styles.header}>
      <Title />
      <DropdownMenu />
    </header>
  )
}

