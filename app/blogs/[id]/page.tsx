import React from "react";
import DetailBlog from "./components/detail-blog/DetailBlog";

function page({ params }: { params: { id: string } }) {
  return (
    <>
      <DetailBlog id={params.id} />
    </>
  );
}

export default page;
