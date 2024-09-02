import { Card, Rate, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import GlobalCartProps from "../types/LatestSkillCartTypes";

const SkillCart: React.FC<GlobalCartProps> = ({ id, tag, src, rate }) => {
  return (
    <>
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
          title={<Tag color="#111111">{tag}</Tag>}
          description={
            <div className="flex justify-start items-center mt-10 w-full">
              <Rate disabled defaultValue={rate} allowHalf />
            </div>
          }
        />
      </Card>
    </>
  );
};

export default SkillCart;
