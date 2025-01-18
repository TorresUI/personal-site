import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/projects" className={styles.link}>
          Projects
        </Link>
        <Link href="/blog" className={styles.link}>
          Blog
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
