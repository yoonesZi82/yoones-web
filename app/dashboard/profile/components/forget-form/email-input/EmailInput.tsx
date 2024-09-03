import React from "react";
import { Input, Alert } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";
import { PiMailboxBold } from "react-icons/pi";

function EmailInput({ control, error }: InputPropsType) {
  return (
    <div>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            size="large"
            addonBefore={<PiMailboxBold size={20} color="#faf4f0" />}
            placeholder="Email *"
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

export default EmailInput;
