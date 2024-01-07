export interface ISecondaryButtonProps {
  type: "button" | "submit";
  textContent: string;
  followTo?: () => void;
}