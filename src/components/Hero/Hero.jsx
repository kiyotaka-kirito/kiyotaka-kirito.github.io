import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { personal } from '../../data/personal';
import styles from './Hero.module.css';

// --- Typewriter hook ---
function useTypewriter(words, speed = 60, pause = 2000) {
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
 * Hero - Premium 2-column layout.
 * Left: Text info, CTAs. Right: Glassmorphic Swift code snippet.
 */
export default function Hero() {
  const typedRole = useTypewriter(personal.roles);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Background elements */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.innerContainer}>
        {/* LEFT COLUMN: Text Content */}
        <motion.div
          className={styles.leftColumn}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.greeting} variants={itemVariants}>
            <span className={styles.greetingLine} />
            Hello, I'm
          </motion.p>

          <motion.h1 className={styles.name} variants={itemVariants}>
            {personal.name}
          </motion.h1>

          <motion.div className={styles.roleWrap} variants={itemVariants}>
            <span className={styles.role}>{typedRole}</span>
            <span className={styles.cursor} aria-hidden="true">|</span>
          </motion.div>

          {/* Short introduction (2-3 lines max) */}
          <motion.p className={styles.bio} variants={itemVariants}>
            {personal.bio}
          </motion.p>

          <motion.div className={styles.ctas} variants={itemVariants}>
            <Link to="projects" smooth duration={700} offset={-70}>
              <button className={styles.primaryBtn}>
                View Projects
                <FiArrowRight size={18} />
              </button>
            </Link>
            <Link to="contact" smooth duration={700} offset={-70}>
              <button className={styles.secondaryBtn}>
                <FiMail size={16} />
                Contact Me
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Code Snippet Visual */}
        <motion.div
          className={styles.rightColumn}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            className={styles.codeCardWrapper}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          >
            {/* The outer glow around the card */}
            <div className={styles.cardGlow} />

            <div className={styles.codeCard}>
              {/* Window controls (macOS traffic lights) */}
              <div className={styles.windowHeader}>
                <div className={styles.dotGroup}>
                  <div className={`${styles.dot} ${styles.dotRed}`} />
                  <div className={`${styles.dot} ${styles.dotYellow}`} />
                  <div className={`${styles.dot} ${styles.dotGreen}`} />
                </div>
                <div className={styles.fileName}>Developer.swift</div>
              </div>

              {/* Code Editor Body */}
              <div className={styles.codeBody}>
                <div className={styles.lineNumbers}>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <pre className={styles.codeContent}>
                  <code>
                    <span className={styles.cKeyword}>import</span> <span className={styles.cType}>SwiftUI</span>
                    {'\n\n'}
                    <span className={styles.cKeyword}>struct</span> <span className={styles.cType}>Developer</span> {'{'}
                    {'\n    '}
                    <span className={styles.cKeyword}>let</span> <span className={styles.cProp}>name</span>: <span className={styles.cType}>String</span> = <span className={styles.cString}>"Paing Htet"</span>
                    {'\n    '}
                    <span className={styles.cKeyword}>let</span> <span className={styles.cProp}>role</span>: <span className={styles.cType}>String</span> = <span className={styles.cString}>"iOS Developer"</span>
                    {'\n    '}
                    <span className={styles.cKeyword}>let</span> <span className={styles.cProp}>skills</span>: [<span className={styles.cType}>String</span>] = [<span className={styles.cString}>"Swift"</span>, <span className={styles.cString}>"SwiftUI"</span>, <span className={styles.cString}>"UIKit"</span>]
                    {'\n    '}
                    <span className={styles.cKeyword}>let</span> <span className={styles.cProp}>passion</span>: <span className={styles.cType}>String</span> = <span className={styles.cString}>"Crafting premium apps"</span>
                    {'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
