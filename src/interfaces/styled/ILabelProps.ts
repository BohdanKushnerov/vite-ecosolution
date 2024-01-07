import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface ILabelProps {
  htmlFor: string;
  $isError: FieldError | undefined;
  children: ReactNode;
}
