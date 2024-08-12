import React from "react";
import { Checkbox } from "antd";
import { Controller } from "react-hook-form";
import InputPropsType from "../types/inputType";

function CheckboxInput({ control, error }: InputPropsType) {
  return (
    <div>
      <Controller
        name="checkbox"
        control={control}
        render={({ field }) => (
          <Checkbox
            defaultChecked={false}
            {...field}
            className="text-meloWhite"
          >
            {" "}
            Save the name and mobile number for sending the next message{" "}
          </Checkbox>
        )}
      />
    </div>
  );
}

export default CheckboxInput;
