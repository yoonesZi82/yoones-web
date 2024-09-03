import React from "react";
import { Input, Alert } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";
import { PiLinkBold } from "react-icons/pi";

function LinkInput({ control, error, defaultValue }: InputPropsType) {
  return (
    <div>
      <Controller
        name="link"
        control={control}
        defaultValue={defaultValue ? defaultValue : ""}
        render={({ field }) => (
          <Input
            size="large"
            addonBefore={"http://"}
            placeholder="Link *"
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

export default LinkInput;
