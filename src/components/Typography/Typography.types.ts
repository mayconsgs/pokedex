import { ReactNode } from "react";
import { Colors, css as CssFunction } from "styled-components";

type Families = "title" | "text";

export type TextStyles =
  | "Title1"
  | "Title2"
  | "Title3"
  | "Title4"
  | "Title5"
  | "Title6"
  | "Paragraph";

export type TranformerType = Record<TextStyles, ReturnType<typeof CssFunction>>;

export type TypographyProps = {
  family?: Families;
  textStyle: TextStyles;
  color?: Colors;

  children?: ReactNode;
};
