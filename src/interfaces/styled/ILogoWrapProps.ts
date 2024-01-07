import { ReactNode } from "react";

export interface ILogoWrapProps {
  href: string;
  target: string;
  $scrolled?: boolean | null;
  children: ReactNode;
}
