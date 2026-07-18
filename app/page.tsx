import HomePage from '@/components/HomePage';
import { getAllPosts } from '@/features/blog/lib/mdx';

export default function Page() {
  const posts = getAllPosts();
  return <HomePage posts={posts} />;
}
