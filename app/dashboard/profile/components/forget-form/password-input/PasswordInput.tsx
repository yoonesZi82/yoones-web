import React from "react";
import { Input, Alert } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";
import { PiLockKeyBold } from "react-icons/pi";

function PasswordInput({ control, error }: InputPropsType) {
  return (
    <div>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            size="large"
            addonBefore={<PiLockKeyBold size={20} color="#faf4f0" />}
            placeholder="Password *"
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

export default PasswordInput;
