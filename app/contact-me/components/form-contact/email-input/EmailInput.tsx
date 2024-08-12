import React from "react";
import { Alert, Input } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";

function EmailInput({ control, error }: InputPropsType) {
  return (
    <div>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input size="large" placeholder="ایمیل*" {...field} />
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

export default EmailInput;