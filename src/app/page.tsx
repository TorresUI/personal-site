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
              right: "35%",
              fontSize: "3rem",
              opacity: "0.8",
            }}
          >
            ✦
          </div>
          <div
            className={styles.sparkle}
            style={{
              bottom: "40%",
              left: "30%",
              fontSize: "3rem",
              opacity: "0.8",
            }}
          >
            ✦
          </div>

          <h1 className="hero-title">
            Hi. I'm Brandon.
            <br />A Developer.
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
          <Timeline />
        </section>

        <div className={styles.aboutSection}>
          <h2 className={styles.aboutTitle}>
            Let's collaborate if you're committed to sustainability, education,
            equality, or carbon neutrality.
          </h2>

          <p className={styles.aboutText}>
            I believe we should leave this Earth as good as or better than we
            found it for future generations; my goal is to contribute to those
            ideals in whatever way I can. If you feel the same, I'd love to
            talk.
          </p>
        </div>
      </section>
    </>
  );
}
