import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>일하기 좋은 날씨군요 ^^</h1>
      <Link className={styles.button} href="signin">
        일하러 가기
      </Link>
    </main>
  );
}
