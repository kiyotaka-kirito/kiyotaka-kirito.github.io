import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './Projects.module.css';

/**
 * ProjectCard — individual project card with hover effects.
 */
export default function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.08, ease: 'easeOut' },
    },
  };

  const categoryColors = {
    ios: 'var(--accent)',
    web: 'var(--blue)',
    'open-source': '#64c8a0',
  };

  const accentColor = categoryColors[project.category] || 'var(--accent)';

  return (
    <motion.article
      className={styles.card}
      variants={cardVariants}
      style={{ '--card-accent': accentColor }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {/* Top accent line */}
      <div className={styles.cardAccentLine} />

      {/* Card header */}
      <div className={styles.cardHeader}>
        <span className={styles.categoryBadge}>{project.category}</span>
        {project.featured && <span className={styles.featuredBadge}>Featured</span>}

        <div className={styles.cardLinks}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
          )}
          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="App Store / Live"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className={styles.cardTitle}>{project.title}</h3>

      {/* Description */}
      <p className={styles.cardDesc}>{project.description}</p>

      {/* Tech stack tags */}
      <div className={styles.techList}>
        {project.tech.map((t) => (
          <span key={t} className={styles.techTag}>{t}</span>
        ))}
      </div>
    </motion.article>
  );
}
