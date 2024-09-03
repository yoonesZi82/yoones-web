import React from "react";
import { Input, Alert } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";
import { PiArticleNyTimesFill } from "react-icons/pi";

function TitleInput({ control, error }: InputPropsType) {
  return (
    <div>
      <Controller
        name="tag"
        control={control}
        render={({ field }) => (
          <Input
            size="large"
            addonBefore={<PiArticleNyTimesFill size={20} color="#faf4f0" />}
            placeholder="Tag *"
            {...field}
          />
        )}
      />
      {error && (
        <Alert
          message={error}
          type="warning"
          showIcon
          className="mt-2 h-[32px] text-[12px]"
        />
      )}
    </div>
  );
}

export default TitleInput;
