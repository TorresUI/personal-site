import Link from "next/link";
import styles from "./page.module.css";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "first-post",
    title: "Getting Started with Web Development",
    date: "March 20, 2024",
    excerpt:
      "My journey into web development and the lessons I learned along the way...",
  },
  // Add more posts here
];

export default function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.blogList}>
        {blogPosts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className={styles.cardLink}
          >
            <article className={styles.card}>
              <div className={styles.cardContent}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.date}>{post.date}</p>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
