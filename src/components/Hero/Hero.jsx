import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../../data/personal';
import styles from './Hero.module.css';

const iconMap = { FiGithub, FiLinkedin, FiMail };

// --- Typewriter hook ---
function useTypewriter(words, speed = 80, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(current.slice(0, deleting ? text.length - 1 : text.length + 1)),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

/**
 * Hero — full-viewport landing section with animated name,
 * typewriter role, gradient mesh background, and social links.
 */
export default function Hero() {
  const typedRole = useTypewriter(personal.roles);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Animated background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.grid} aria-hidden="true" />

      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p className={styles.greeting} variants={itemVariants}>
          <span className={styles.greetingLine} />
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1 className={styles.name} variants={itemVariants}>
          {personal.name}
        </motion.h1>

        {/* Typewriter role */}
        <motion.div className={styles.roleWrap} variants={itemVariants}>
          <span className={styles.role}>{typedRole}</span>
          <span className={styles.cursor} aria-hidden="true">|</span>
        </motion.div>

        {/* Short bio */}
        <motion.p className={styles.bio} variants={itemVariants}>
          {personal.bio}
        </motion.p>

        {/* CTA buttons */}
        <motion.div className={styles.ctas} variants={itemVariants}>
          <Link to="projects" smooth duration={700} offset={-70}>
            <button className={styles.primaryBtn}>
              View My Work
              <FiArrowDown size={16} />
            </button>
          </Link>
          <Link to="contact" smooth duration={700} offset={-70}>
            <button className={styles.secondaryBtn}>Get in Touch</button>
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div className={styles.socials} variants={itemVariants}>
          {personal.social.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={s.name}
              >
                {Icon && <Icon size={20} />}
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </motion.div>
    </section>
  );
}
