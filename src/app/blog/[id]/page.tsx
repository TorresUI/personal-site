import Link from "next/link";
import styles from "./page.module.css";

export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <div className={styles.container}>
      <Link href="/blog" className={styles.backButton}>
        ← Back to Blog
      </Link>
      <article className={styles.post}>
        <h1 className={styles.title}>Getting Started with Web Development</h1>
        <p className={styles.date}>March 20, 2024</p>
        <div className={styles.content}>
          <p>
            When I first started my journey into web development, I had no idea
            how vast and exciting this field would be...
          </p>
          {/* Add more paragraphs of content */}
        </div>
      </article>
    </div>
  );
}
