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
      {type === "پروژه ها" ? (
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
                  <div>{date}</div>
                </div>
                <div className="w-full">
                  <Link href={link ? link : "/"}>
                    <Button className="w-full">مشاهده سایت</Button>
                  </Link>
                </div>
              </div>
            }
          />
        </Card>
      ) : type === "وبلاگ ها" ? (
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
                  <div>{date}</div>
                </div>
                <div className="w-full">
                  <p className="line-clamp-3">{description}</p>
                </div>
                <div className="w-full">
                  <Link href="/">
                    <Button className="w-full">مشاهده وبلاگ</Button>
                  </Link>
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
