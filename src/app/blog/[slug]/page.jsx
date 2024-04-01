import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

 const getData = async (slug) => {
   const res = await fetch(`http://localhost:3000/api/blog/${slug}`,); // {method: "DELETE" }
   if (!res.ok) {
     throw new Error("Something went wrong");
   }
   return res.json();
 };
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // Fetch data without an API
 // const post = await getPost(slug);
  // Fetch data with an API
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.title}>{post?.title}</div>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
           
            <span className={styles.detailValue}> {post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
