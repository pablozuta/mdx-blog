import Link from "next/link";
import type { PostMeta } from "@/src/api";
import styles from "@/styles/Articles.module.css";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <h2 className={styles.title}>
         
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          
          <p>{post.excerpt}</p>
          <p className="fecha-post">{post.date}</p>
          <p className={styles.tags}>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
        
        </li>
       
      ))}
      
    </ul>
  );
}
