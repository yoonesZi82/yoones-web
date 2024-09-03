import React from "react";
import { Button, Card, Tag } from "antd";
import Meta from "antd/lib/card/Meta";
import Link from "next/link";
import GlobalCartProps from "../types/LatestPropsCart";

const GlobalCart: React.FC<GlobalCartProps> = ({
  id,
  src,
  title,
  date,
  tag,
  type,
  link,
  description,
}) => {
  console.log(id);

  return (
    <>
      {type === "projects" ? (
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src={src}
              style={{ height: "200px", objectFit: "cover" }}
            />
          }
        >
          <Meta
            title={title}
            description={
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center mt-4 w-full">
                  <Tag color="#111111">{tag}</Tag>
                  <div>{new Date(date).toLocaleDateString("en-GB")}</div>
                </div>
                <div className="w-full">
                  <Link href={link ? `http://${link}` : "/"}>
                    <Button className="w-full"> View site </Button>
                  </Link>
                </div>
              </div>
            }
          />
        </Card>
      ) : type === "blogs" ? (
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="blog"
              src={src}
              style={{ height: "200px", objectFit: "cover" }}
              onError={(e) =>
                (e.currentTarget.src = "/images/fallback-image.png")
              }
            />
          }
        >
          <Meta
            title={title}
            description={
              <div>
                <div className="flex flex-col gap-8">
                  <div className="flex justify-between items-center mt-4 w-full">
                    <Tag color="#111111">{tag}</Tag>
                    <div>{new Date(date).toLocaleDateString("en-US")}</div>
                  </div>
                  <div
                    className="line-clamp-3 w-full"
                    dangerouslySetInnerHTML={{
                      __html: description ? description : "Blog is not content",
                    }}
                  ></div>
                  <div className="w-full">
                    <Link href={id ? `/blogs/${id}` : "/"}>
                      <Button className="w-full">View blogs</Button>
                    </Link>
                  </div>
                </div>
              </div>
            }
          />
        </Card>
      ) : null}
    </>
  );
};

export default GlobalCart;
