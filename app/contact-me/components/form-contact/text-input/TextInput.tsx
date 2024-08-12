import React from "react";
import { Input, Alert } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";
const { TextArea } = Input;

function TextInput({ control, error }: InputPropsType) {
  return (
    <div>
      <Controller
        name="text"
        control={control}
        render={({ field }) => (
          <TextArea
            autoSize={{ minRows: 3, maxRows: 4 }}
            placeholder="پیام*"
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

export default TextInput;
