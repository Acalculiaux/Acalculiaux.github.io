import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '@/utils/posts';
import styles from './BlogList.module.css';

const BlogList: React.FC = () => {
  const posts = getAllPosts();

  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.slug} className={styles.item}>
            <Link to={`/blog/${post.slug}`} className={styles.title}>
              {post.title}
            </Link>
            <span className={styles.date}>{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
