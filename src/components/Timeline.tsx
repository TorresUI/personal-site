"use client";

import styles from "./Timeline.module.css";
import { useState } from "react";

type TimelineItem = {
  date: string;
  title: string;
  company?: string;
  description: string;
  details?: {
    role: string;
    technologies: string[];
    achievements: string[];
    impact: string;
  };
};

const timelineData: TimelineItem[] = [
  {
    date: "Feb 2024 - Present",
    title: "Software Engineer",
    company: "BlackRock",
    description:
      "Full-stack engineer in a rotational program, working across different tech stacks and teams.",
    details: {
      role: "Software Engineer",
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "Recoil",
        "Java",
        "Spring Boot",
        "Angular",
      ],
      achievements: [
        "Contributed to both frontend and backend teams as part of the rotational program",
        "Worked on a Java Spring Boot and Angular stack for backend development",
        "Currently working with React, TypeScript, Redux, and Recoil for frontend development",
      ],
      impact:
        "Gaining broad exposure to different technologies and architectures while delivering value across multiple teams.",
    },
  },
  {
    date: "May 2022 - Aug 2022",
    title: "Software Engineering Intern",
    company: "BlackRock",
    description:
      "Developed and tested frontend applications while learning industry best practices.",
    details: {
      role: "Frontend Developer Intern",
      technologies: ["React", "Recoil", "Cypress", "JavaScript", "TypeScript"],
      achievements: [
        "Implemented end-to-end and component testing using Cypress",
        "Developed features using React and Recoil",
        "Gained experience with agile methodologies and SDLC",
        "Collaborated with team members in an enterprise environment",
      ],
      impact:
        "First industry exposure to modern web development practices and enterprise-scale applications.",
    },
  },
  {
    date: "2020 - 2023",
    title: "Computer Science, B.S.",
    company: "University of Massachusetts Amherst",
    description:
      "Comprehensive computer science education with focus on various computing disciplines.",
    details: {
      role: "Student",
      technologies: [
        "AI/ML",
        "NLP",
        "Web Development",
        "Networking",
        "Security",
        "Search Engines",
      ],
      achievements: [
        "Participated in computing-focused clubs and activities",
        "Studied diverse topics including AI, NLP, and Search Engines",
        "Gained strong foundation in Web Development and Network Security",
        "Developed practical skills through hands-on projects",
      ],
      impact:
        "Built a strong theoretical and practical foundation in computer science across multiple domains.",
    },
  },
];

export default function Timeline() {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [hasClicked, setHasClicked] = useState(false);

  const handleClick = (item: TimelineItem) => {
    setSelectedItem(selectedItem === item ? null : item);
    setHasClicked(true);
  };

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              selectedItem === item ? styles.active : ""
            } ${index === 0 && !hasClicked ? styles.showHint : ""}`}
            onClick={() => handleClick(item)}
          >
            <div className={styles.timelinePoint} />
            <div className={styles.timelineContent}>
              <div className={styles.timelineDate}>{item.date}</div>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              {item.company && (
                <h4 className={styles.timelineCompany}>{item.company}</h4>
              )}
              <p className={styles.timelineDescription}>{item.description}</p>

              {selectedItem === item && item.details && (
                <div className={styles.timelineDetails}>
                  <div className={styles.detailsSection}>
                    <h4>Technologies</h4>
                    <div className={styles.tags}>
                      {item.details.technologies.map((tech, i) => (
                        <span key={i} className={styles.tag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.detailsSection}>
                    <h4>Key Achievements</h4>
                    <ul>
                      {item.details.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailsSection}>
                    <h4>Impact</h4>
                    <p>{item.details.impact}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
