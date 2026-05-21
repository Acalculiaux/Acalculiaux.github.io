import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '@/utils/posts';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Hello, I'm Acalculiaux.</h1>
        <p className={styles.subtitle}>
          Software engineer, photography enthusiast, and lifelong learner. 
          Sharing my thoughts on technology, life, and everything in between.
        </p>
        <div className={styles.cta}>
          <Link to="/blog" className={styles.primaryButton}>Read Blog</Link>
          <Link to="/about" className={styles.secondaryButton}>About Me</Link>
        </div>
      </section>

      <section className={styles.recentPosts}>
        <div className={styles.sectionHeader}>
          <h2>Recent Posts</h2>
          <Link to="/blog" className={styles.viewAll}>View All →</Link>
        </div>
        <div className={styles.grid}>
          {recentPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className={styles.postCard}>
              <span className={styles.postDate}>{post.date}</span>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <div className={styles.postTags}>
                {post.tags?.map(tag => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.featured}>
        <h2>Photography</h2>
        <p>Capturing moments through my lens. Explore my collection of landscapes and urban life.</p>
        <Link to="/photography" className={styles.textLink}>Explore Gallery →</Link>
      </section>
    </div>
  );
};

export default Home;
