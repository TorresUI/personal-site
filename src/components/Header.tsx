"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <Link
          href="/"
          className={`${styles.workLink} ${
            pathname === "/" ? styles.active : ""
          }`}
        >
          About <span className={styles.slash}></span>
        </Link>
        <div className={styles.navLinks}>
          <Link
            href="/projects"
            className={pathname === "/projects" ? styles.active : ""}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
