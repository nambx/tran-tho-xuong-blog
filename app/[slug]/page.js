import { getPost } from '../../lib/notion';

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <article className="single-post">
        <div className="post-image-wrapper">
            <img src={post.image} alt={post.title} />
        </div>
        
        <div className="post-header-box">
            <div className="post-category">{post.category}</div>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-date">{post.date}</div>
        </div>

        <div 
          className="single-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
    </article>
  );
}
