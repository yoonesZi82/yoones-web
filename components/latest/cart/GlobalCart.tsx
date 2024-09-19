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
  return (
    <>
      {type === "projects" ? (
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="project"
              src={src}
              onError={(err) => {
                err.currentTarget.src = "/images/fallback-image.png";
              }}
              style={{ height: "200px", objectFit: "cover" }}
            />
          }
        >
          <Meta
            title={title}
            description={
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center mt-4 w-full">
                  <Tag color="#111111">
                    <p className="pb-1 font-medium text-xl">{tag}</p>
                  </Tag>
                  <div className="font-medium text-neutral-600 text-xl">
                    {new Date(date).toLocaleDateString("en-US")}
                  </div>
                </div>
                <div className="w-full">
                  <Link target="_blank" href={link ? `http://${link}` : "/"}>
                    <Button className="bg-meloWhite hover:bg-normalBlack pt-1 w-full font-medium text-2xl text-normalBlack hover:text-meloWhite transition-colors duration-500">
                      {" "}
                      View site{" "}
                    </Button>
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
                    <Tag color="#111111">
                      <p className="pb-1 font-medium text-xl">{tag}</p>
                    </Tag>
                    <div className="font-medium text-neutral-600 text-xl">
                      {new Date(date).toLocaleDateString("en-US")}
                    </div>
                  </div>
                  <div className="w-full">
                    <p
                      className="line-clamp-3 font-medium text-neutral-600"
                      dangerouslySetInnerHTML={{
                        __html: description
                          ? description
                          : "Blog is not content",
                      }}
                    ></p>
                  </div>
                  <div className="w-full">
                    <Link href={id ? `/blogs/${id}` : "/"}>
                      <Button className="bg-meloWhite hover:bg-normalBlack pt-1 w-full font-medium text-2xl text-normalBlack hover:text-meloWhite transition-colors duration-500">
                        View blogs
                      </Button>
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
