import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    console.log("getting all posts");
    return NextResponse.json(posts);
  
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch posts");
  }
};
