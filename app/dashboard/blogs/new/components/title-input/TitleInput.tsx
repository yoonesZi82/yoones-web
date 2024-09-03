import React from "react";
import { Input, Alert } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";
import { PiArticleNyTimesFill } from "react-icons/pi";

function TitleInput({ control, error, defaultValue }: InputPropsType) {
  return (
    <div>
      <Controller
        name="title"
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Input
            size="large"
            addonBefore={<PiArticleNyTimesFill size={20} color="#faf4f0" />}
            placeholder="Title *"
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