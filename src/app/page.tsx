import styles from "./page.module.css";
import Image from "next/image";
import SocialBar from "@/components/SocialBar";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Landing Section */}
      <section className={styles.landing}>
        <div className={styles.welcome}>
          <h1 className={styles.welcomeTitle}>Hey, I'm Brandon Torres</h1>
          <p className={styles.welcomeSubtitle}>
            A software engineer passionate about creating exceptional user
            experiences.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <SocialBar />
        <div className={styles.heroContent}>
          <div className={styles.imageWrapper}>
            <Image
              src="/profile.jpg"
              alt="Brandon Torres"
              width={300}
              height={300}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.bio}>
              <p>
                Hello! I'm a software engineer passionate about creating
                exceptional user experiences and building innovative web
                solutions. With expertise in modern web technologies, I focus on
                developing clean, efficient, and scalable applications.
              </p>
              <p>
                When I'm not coding, you can find me [your interests/hobbies].
                I'm always excited to take on new challenges and collaborate on
                interesting projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <Timeline />
      </section>
    </div>
  );
}
