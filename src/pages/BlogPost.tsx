import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '@/utils/posts';
import styles from './BlogPost.module.css';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1>{post.title}</h1>
        <div className={styles.meta}>
          <time>{post.date}</time>
          {post.tags && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>#{tag}</span>
              ))}
            </div>
          )}
        </div>
      </header>
      <div className={styles.content}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogPost;
