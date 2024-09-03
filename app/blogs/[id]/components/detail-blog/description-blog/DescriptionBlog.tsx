import { Alert, Button } from "antd";
import React, { useEffect, useRef, useState } from "react";

interface DescriptionBlogPropType {
  description: string;
}
const DescriptionBlog: React.FC<DescriptionBlogPropType> = ({
  description,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-16 w-full text-left description-box">
      <div className="bg-[rgba(1,1,1,0.8)] p-6 rounded-xl w-full h-fit">
        <p
          className={
            description
              ? "font-medium text-3xl text-meloWhite"
              : "text-3xl font-medium text-red-500 text-center"
          }
          dangerouslySetInnerHTML={{
            __html: description
              ? description
              : "The blog does not contain any text",
          }}
        ></p>
      </div>
    </div>
  );
};

export default DescriptionBlog;
