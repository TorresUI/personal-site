import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.imageWrapper}>
          <Image
            src="/profile.jpg" // Add your image to the public folder
            alt="Brandon Torres"
            width={300}
            height={300}
            className={styles.profileImage}
            priority
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Brandon Torres</h1>
          <p className={styles.subtitle}>Software Engineer | TorresUI</p>
          <div className={styles.bio}>
            <p>
              Hello! I'm a software engineer passionate about creating
              exceptional user experiences and building innovative web
              solutions. With expertise in modern web technologies, I focus on
              developing clean, efficient, and scalable applications.
            </p>
            <p>
              When I'm not coding, you can find me [your interests/hobbies]. I'm
              always excited to take on new challenges and collaborate on
              interesting projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
