import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiAward } from 'react-icons/fi';
import { timeline } from '../../data/experience';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Experience.module.css';

const typeIconMap = {
  work: FiBriefcase,
  education: FiBook,
  certificate: FiAward,
};

const typeColors = {
  work: 'var(--accent)',
  education: 'var(--blue)',
  certificate: '#64c8a0',
};

/**
 * Experience — vertical timeline with alternating cards.
 */
export default function Experience() {
  const [ref, isVisible] = useScrollReveal(0.05);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          className={styles.header}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.p className="section-label" variants={fadeUp}>Journey</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Experience & <span className={styles.accent}>Education</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            My path through technology, learning, and development.
          </motion.p>
          <div className="glow-line" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className={styles.timeline}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Center line */}
          <div className={styles.timelineLine} aria-hidden="true" />

          {timeline.map((entry, i) => {
            const Icon = typeIconMap[entry.type] || FiBriefcase;
            const color = typeColors[entry.type] || 'var(--accent)';
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={entry.id}
                className={`${styles.item} ${isLeft ? styles.itemLeft : styles.itemRight}`}
                variants={fadeUp}
              >
                {/* Timeline dot */}
                <div className={styles.dot} style={{ '--dot-color': color }}>
                  <Icon size={14} />
                </div>

                {/* Card */}
                <div className={styles.card} style={{ '--card-accent': color }}>
                  {/* Date badge */}
                  <span className={styles.dateBadge}>
                    {entry.startDate} — {entry.endDate}
                    {entry.current && (
                      <span className={styles.currentBadge}>Current</span>
                    )}
                  </span>

                  <h3 className={styles.role}>{entry.role}</h3>
                  <div className={styles.company}>
                    <span>{entry.company}</span>
                    <span className={styles.separator}>·</span>
                    <span className={styles.location}>{entry.location}</span>
                  </div>

                  <ul className={styles.descList}>
                    {entry.description.map((d, di) => (
                      <li key={di}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
