import styles from "./page.module.css";
import Image from "next/image";
import SocialBar from "@/components/SocialBar";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className={styles.heroSection}>
          <div
            className={styles.sparkle}
            style={{
              top: "20%",
              right: "25%",
              fontSize: "5rem",
              opacity: "0.8",
              color: "white",
            }}
          >
            ✦
          </div>
          <div
            className={styles.sparkle}
            style={{
              bottom: "20%",
              left: "25%",
              fontSize: "5rem",
              opacity: "0.8",
              color: "white",
            }}
          >
            ✦
          </div>

          <h1 className="hero-title">
            Hey! I'm Brandon.
            <br />A Software Engineer.
          </h1>

          <p className="subtitle">
            I'm passionate about crafting experiences that are engaging,
            accessible, and user-centric.
          </p>
        </div>
      </section>

      <section className="content-section">
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
                  solutions. With expertise in modern web technologies, I focus
                  on developing clean, efficient, and scalable applications.
                </p>
                <p>
                  When I'm not coding, you can find me [your interests/hobbies].
                  I'm always excited to take on new challenges and collaborate
                  on interesting projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.timelineSection}>
          <div className={styles.timelineTitleWrapper}>
            <div
              className={styles.sparkle}
              style={{
                top: "-70%",
                right: "15%",
                fontSize: "5rem",
                opacity: "0.8",
                color: "white",
              }}
            >
              ✦
            </div>
            <div
              className={styles.sparkle}
              style={{
                bottom: "-70%",
                left: "10%",
                fontSize: "5rem",
                opacity: "0.8",
                color: "white",
              }}
            >
              ✦
            </div>
            <h2 className={styles.timelineTitle}>My Story</h2>
          </div>
          <Timeline />
        </section>
      </section>
    </>
  );
}
