import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin } from 'react-icons/fi';
import { personal } from '../../data/personal';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Container from '../ui/Container';
import styles from './About.module.css';

/**
 * About — two-column layout: avatar/stats + bio text.
 * Animated stat counters reveal on scroll.
 */
export default function About() {
  const [ref, isVisible] = useScrollReveal(0.1);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className={styles.about}>
      <Container>
        {/* Section header */}
        <motion.div
          ref={ref}
          className={styles.header}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.p className="section-label" variants={fadeUp}>About Me</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Crafting iOS experiences<br />
            <span className={styles.accent}>with precision</span>
          </motion.h2>
          <div className="glow-line" />
        </motion.div>

        {/* Content grid */}
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Left: Avatar + Stats */}
          <motion.div className={styles.left} variants={fadeUp}>
            <div className={styles.avatarWrap}>
              {/* Avatar placeholder with initials */}
              <div className={styles.avatar}>
                <span className={styles.avatarInitials}>{personal.initials}</span>
                <div className={styles.avatarGlow} />
              </div>
              {/* Location badge */}
              <div className={styles.locationBadge}>
                <FiMapPin size={14} />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              {personal.stats.map((stat, i) => (
                <div key={i} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio text */}
          <motion.div className={styles.right} variants={fadeUp}>
            <p className={styles.bioText}>{personal.bioLong}</p>

            {/* Certifications grid */}
            <div className={styles.certsTitle}>Certifications & Education</div>
            <div className={styles.certs}>
              {[
                { label: 'UIKit Certified', sub: 'iOS Development' },
                { label: 'SwiftUI Certified', sub: 'iOS Development' },
                { label: 'PADC Certificate', sub: 'Myanmar Mobile Developer' },
                { label: 'B.Sc. Geology', sub: 'University of Yangon' },
                { label: 'Diploma in IT', sub: 'Information Technology' },
              ].map((cert) => (
                <div key={cert.label} className={styles.cert}>
                  <span className={styles.certDot} />
                  <div>
                    <div className={styles.certLabel}>{cert.label}</div>
                    <div className={styles.certSub}>{cert.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CV download */}
            <a
              href={personal.cvPath}
              download
              className={styles.downloadBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
