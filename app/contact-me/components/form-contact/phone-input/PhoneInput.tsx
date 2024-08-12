import React from "react";
import { Input, Alert } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";

function PhoneInput({ control, error }: InputPropsType) {
  return (
    <div>
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <Input size="large" placeholder="Phone Number *" {...field} />
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

export default PhoneInput;
