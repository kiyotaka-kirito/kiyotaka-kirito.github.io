import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiTool } from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';
import { skillGroups } from '../../data/skills';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Skills.module.css';

const iconMap = { FaApple, FiServer, FiCode, FiTool };

/**
 * Skills — categorized skill groups with progress bars.
 */
export default function Skills() {
  const [ref, isVisible] = useScrollReveal(0.1);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          className={styles.header}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.p className="section-label" variants={fadeUp}>Expertise</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Skills & <span className={styles.accent}>Technologies</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Tools and technologies I work with to build great iOS experiences.
          </motion.p>
          <div className="glow-line" />
        </motion.div>

        {/* Skill groups */}
        <motion.div
          className={styles.groupGrid}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div key={group.group} className={styles.group} variants={fadeUp}>
                {/* Group header */}
                <div className={styles.groupHeader}>
                  {Icon && (
                    <span className={styles.groupIcon}>
                      <Icon size={16} />
                    </span>
                  )}
                  <h3 className={styles.groupTitle}>{group.group}</h3>
                </div>

                {/* Skills list */}
                <div className={styles.skillsList}>
                  {group.skills.map((skill) => (
                    <div key={skill.name} className={styles.skillRow}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillPct}>{skill.proficiency}%</span>
                      </div>
                      <div className={styles.barTrack}>
                        <motion.div
                          className={styles.barFill}
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.proficiency}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
