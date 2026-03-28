import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const filters = ['all', 'ios', 'web', 'open-source'];

/**
 * Projects — filterable project grid.
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, isVisible] = useScrollReveal(0.1);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const headerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          className={styles.header}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={headerVariants}
        >
          <motion.p className="section-label" variants={fadeUp}>Portfolio</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Things I've <span className={styles.accent}>built</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            A selection of projects I've crafted — from production iOS apps to open-source tools.
          </motion.p>
          <div className="glow-line" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
