import { ReactNode } from "react";

export type ModalProps = {
  visible: boolean;
  handleClose: () => void;
  children: ReactNode;
};
