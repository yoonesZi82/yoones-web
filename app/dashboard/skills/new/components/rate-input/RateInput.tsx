import React from "react";
import { Input, Alert, Rate } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";

function RateInput({ control, error, defaultValue, disable }: InputPropsType) {
  return (
    <div>
      <Controller
        name="rate"
        control={control}
        render={({ field }) => (
          <Rate
            allowHalf
            defaultValue={defaultValue ? +defaultValue : 0}
            disabled={disable}
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

export default RateInput;
