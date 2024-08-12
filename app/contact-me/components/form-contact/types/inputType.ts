import { Control } from "react-hook-form";
type InputPropsType = {
  control: Control<
    {
      name: string;
      text: string;
      email: string;
      phone: string;
      checkbox: boolean;
    },
    any
  >;
  error: string | undefined;
};
export default InputPropsType;
