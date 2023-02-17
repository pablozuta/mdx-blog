import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";
import Image from "next/dist/client/image";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      
      <Articles posts={posts} />
      
     
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 19)
    .map((post) => post.meta);

  return { props: { posts } };
}
