import matter from 'gray-matter';

export interface PostMetadata {
  title: string;
  date: string;
  tags?: string[];
  slug: string;
}

export interface Post extends PostMetadata {
  content: string;
}

// Vite feature to import all markdown files in a directory
const postFiles = import.meta.glob('@/content/posts/*.md', { query: '?raw', eager: true, import: 'default' });

export const getAllPosts = (): PostMetadata[] => {
  return Object.keys(postFiles).map((path) => {
    const content = postFiles[path] as string;
    const { data } = matter(content);
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    return {
      ...(data as Omit<PostMetadata, 'slug'>),
      slug,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): Post | null => {
  const path = Object.keys(postFiles).find((p) => p.endsWith(`${slug}.md`));
  if (!path) return null;

  const rawContent = postFiles[path] as string;
  const { data, content } = matter(rawContent);

  return {
    ...(data as Omit<PostMetadata, 'slug'>),
    slug,
    content,
  };
};
