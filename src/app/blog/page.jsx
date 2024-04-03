import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// Fetch data  with an APi
const getData = async () => { 
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");

  }
const data = await res.json();
console.log()
  return data;

};

export const metadata = {
  title: "Blog Page",
  description: "Blog Description",
};
const BlogPage = async () => {
  // Fetch data with an API
  const posts = await getData();
  // Fetch data without an API
  // const posts = await getPosts();
  // console.log(posts);
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
