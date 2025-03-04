import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.social}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <span className={styles.divider}>•</span>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          <span className={styles.divider}>•</span>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Twitter
          </a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Brandon Torres
        </p>
      </div>
    </footer>
  );
}
