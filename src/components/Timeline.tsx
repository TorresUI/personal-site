"use client";

import styles from "./Timeline.module.css";
import { useState } from "react";

type TimelineItem = {
  date: string;
  title: string;
  company?: string;
  description: string;
  details: {
    role: string;
    technologies: string[];
    achievements: string[];
    impact: string;
  };
};

const timelineData: TimelineItem[] = [
  {
    date: "2023 - Present",
    title: "Software Engineer",
    company: "Your Current Company",
    description: "Working on full-stack development using modern technologies.",
    details: {
      role: "Full Stack Developer",
      technologies: ["React", "Node.js", "TypeScript", "AWS"],
      achievements: [
        "Led development of key features",
        "Improved performance by 40%",
        "Mentored junior developers",
      ],
      impact:
        "Drove significant improvements in application performance and user experience while mentoring team members.",
    },
  },
  // Add more items with details...
];

export default function Timeline() {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleItemClick = (item: TimelineItem) => {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
    // Wait for drawer close animation before removing content
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div
              className={styles.timelinePoint}
              onClick={() => handleItemClick(item)}
            />
            <div className={styles.timelineContent}>
              <div className={styles.timelineDate}>{item.date}</div>
              <h3>{item.title}</h3>
              {item.company && <h4>{item.company}</h4>}
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`${styles.drawer} ${isDrawerOpen ? styles.drawerOpen : ""}`}
      >
        {selectedItem && (
          <div className={styles.drawerContent}>
            <button className={styles.closeButton} onClick={handleClose}>
              ×
            </button>
            <h2>{selectedItem.title}</h2>
            {selectedItem.company && <h3>{selectedItem.company}</h3>}
            <div className={styles.detailsSection}>
              <h4>Role</h4>
              <p>{selectedItem.details.role}</p>

              <h4>Technologies</h4>
              <div className={styles.tags}>
                {selectedItem.details.technologies.map((tech, index) => (
                  <span key={index} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>

              <h4>Key Achievements</h4>
              <ul>
                {selectedItem.details.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>

              <h4>Impact</h4>
              <p>{selectedItem.details.impact}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
