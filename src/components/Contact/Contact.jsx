import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck, FiSend } from 'react-icons/fi';
import { personal } from '../../data/personal';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Contact.module.css';

const iconMap = { FiGithub, FiLinkedin, FiMail };

/**
 * Contact — email copy-to-clipboard, social links, and contact form.
 */
export default function Contact() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Copy email to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Using mailto as a simple fallback — replace with a real backend/service as needed
    const { name, email, message } = formState;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          className={styles.header}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.p className="section-label" variants={fadeUp}>Get In Touch</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Let's <span className={styles.accent}>work together</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </motion.p>
          <div className="glow-line" />
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Left: Info */}
          <motion.div className={styles.info} variants={fadeUp}>
            {/* Email */}
            <div className={styles.emailCard}>
              <div className={styles.emailIconWrap}>
                <FiMail size={20} />
              </div>
              <div className={styles.emailContent}>
                <span className={styles.emailLabel}>Email</span>
                <span className={styles.emailValue}>{personal.email}</span>
              </div>
              <button
                className={styles.copyBtn}
                onClick={handleCopy}
                aria-label="Copy email"
                title="Copy email to clipboard"
              >
                {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
              </button>
            </div>

            {/* Social links */}
            <div className={styles.socialsSection}>
              <p className={styles.socialLabel}>Find me on</p>
              <div className={styles.socials}>
                {personal.social.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      {Icon && <Icon size={20} />}
                      <span>{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability chip */}
            <div className={styles.availability}>
              <span className={styles.availDot} />
              Available for freelance &amp; collaborations
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            variants={fadeUp}
          >
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="John Appleseed"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Tell me about your project..."
                rows={5}
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <FiSend size={16} />
              {submitted ? 'Sent! Check your email app' : 'Send Message'}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
