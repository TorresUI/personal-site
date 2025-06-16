"use client";

import styles from "./SocialBar.module.css";

const socialLinks = [
  {
    href: "https://linkedin.com/in/yourusername",
    img: "/linkedin.svg",
    alt: "LinkedIn Logo",
  },
  {
    href: "https://github.com/yourusername",
    img: "/github.svg",
    alt: "GitHub Logo",
  },
  {
    href: "https://twitter.com/yourusername",
    img: "/twitter.svg",
    alt: "Twitter Logo",
  },
  {
    href: "mailto:your.email@example.com",
    img: "/email.svg",
    alt: "Email",
  },
];

export default function SocialBar() {
  return (
    <div className={styles.socialBar}>
      {socialLinks.map(({ href, img, alt }) => (
        <a
          key={href}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={styles.socialLink}
        >
          <img src={img} alt={alt} width={36} height={36} />
        </a>
      ))}
    </div>
  );
}