import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">Acalculiaux</Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/photography">Photography</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} YiZhao Huang. Built with React & Vite.</p>
      </footer>
    </div>
  );
};

export default Layout;
