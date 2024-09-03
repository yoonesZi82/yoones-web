import { Control } from "react-hook-form";
type InputPropsType = {
  control: Control<
    {
      email: string;
      password: string;
    },
    any
  >;
  error: string | undefined;
};
export default InputPropsType;
