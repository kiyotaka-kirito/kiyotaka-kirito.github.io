import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personal } from '../../data/personal';
import styles from './Footer.module.css';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
];

const iconMap = { FiGithub, FiLinkedin, FiMail };

/**
 * Footer — minimal dark footer with navigation, social links, and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Logo + tagline */}
        <div className={styles.brand}>
          <span className={styles.logo}>{personal.initials}</span>
          <span className={styles.tagline}>{personal.title}</span>
        </div>

        {/* Nav links */}
        <nav className={styles.nav} aria-label="Footer navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={-70}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
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
                aria-label={s.name}
              >
                {Icon && <Icon size={18} />}
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {year} {personal.name}. Built with{' '}
          <FiHeart className={styles.heartIcon} size={12} aria-hidden="true" />{' '}
          using React & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
