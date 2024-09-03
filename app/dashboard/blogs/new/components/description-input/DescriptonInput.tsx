import React from "react";
import { Input, Alert } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";

function DescriptionInput({ control, error, defaultValue }: InputPropsType) {
  return (
    <div>
      <Controller
        name="description"
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Input size="large" placeholder="Description *" {...field} />
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

export default DescriptionInput;
