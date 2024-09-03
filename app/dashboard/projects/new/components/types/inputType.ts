import { Control } from "react-hook-form";
type InputPropsType = {
  control: Control<{
    title: string;
    image: string;
    tag: string;
    link: string;
  }>;
  defaultValue?: string;
  error: string | undefined;
};
export default InputPropsType;
