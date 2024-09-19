import React from "react";
import { Input, Alert } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";

function PasswordInput({ control, error }: InputPropsType) {
  return (
    <div>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input.Password size="large" placeholder="Password *" {...field} />
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

export default PasswordInput;
