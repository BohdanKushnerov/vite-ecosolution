import { ExecutionContext } from "styled-components";
import { FastOmit } from "styled-components/dist/types";

type ThemeProps = ExecutionContext &
  FastOmit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    never
  >;

// const media = {
//   mobile: "(min-width: 360px)",
//   beforeTablet: "(max-width: 767px)",
//   tablet: "${selectTablet}",
//   beforeDesktop: "(max-width: 1279px)",
//   desktop: "${selectDesktop}",
// };

export const selectMobile = (props: ThemeProps) => props.theme.media.mobile;
export const selectBeforeTablet = (props: ThemeProps) =>
  props.theme.beforeTablet;
export const selectTablet = (props: ThemeProps) => props.theme.media.tablet;
export const selectBeforeDesktop = (props: ThemeProps) =>
  props.theme.media.beforeDesktop;
export const selectDesktop = (props: ThemeProps) => props.theme.media.desktop;
