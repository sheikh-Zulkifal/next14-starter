import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// const getData = async () => {
//   const res = await fetch("http://jsonplaceholder.typicode.com/posts" , {next: {revalidate: 3600}});
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

export const metadata = {
  title: "Blog Page",
  description: "Blog Description",
};
const BlogPage = async () => {
  const posts = await getPosts();
  console.log(posts)
  return (
    <div className={styles.container}>
      {posts &&
      posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
