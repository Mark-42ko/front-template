'use client'

import MainComp from "@comp/main/main";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainComp />
    </main>
  );
}

