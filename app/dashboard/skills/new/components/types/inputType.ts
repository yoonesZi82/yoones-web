import { Control } from "react-hook-form";
type InputPropsType = {
  control: Control<{
    image: string;
    tag: string;
    rate: number;
  }>;
  defaultValue?: string | number;
  error: string | undefined;
  disable?: boolean;
};
export default InputPropsType;
