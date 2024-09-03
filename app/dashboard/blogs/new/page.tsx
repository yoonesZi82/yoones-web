import React from "react";
import BlogForm from "./components/blog-form/BlogForm";

function page({ params }: { params: string }) {
  return <BlogForm params={params} />;
}

export default page;
