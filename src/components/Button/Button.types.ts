import { buttonTransform } from ".";

type ButtonVariants = keyof typeof buttonTransform;

export type ButtonProps = {
  color?: ButtonVariants;
};
