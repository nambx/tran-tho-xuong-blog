import Link from 'next/link';
import { getPosts } from '../lib/notion';

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post) => (
        <article className="post" key={post.id}>
            <div className="post-image-wrapper">
                <img src={post.image} alt={post.title} />
            </div>
            <div className="post-header-box">
                <div className="post-category">{post.category}</div>
                <h2 className="post-title"><Link href={`/${post.slug}`}>{post.title}</Link></h2>
                <div className="post-date">{post.date}</div>
            </div>
            <div className="post-excerpt">
                <p>{post.excerpt}</p>
            </div>
            <div className="read-more-wrapper">
                <Link href={`/${post.slug}`} className="read-more">CONTINUE READING</Link>
            </div>
        </article>
      ))}
    </>
  );
}
