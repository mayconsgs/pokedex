import ReactDOM from "react-dom";
import { FiX } from "react-icons/fi";
import * as S from "./Modal.styles";
import { ModalProps } from "./Modal.types";

export const Modal: React.FC<ModalProps> = ({
  visible,
  handleClose,
  children,
}) => {
  if (!visible) return null;

  return ReactDOM.createPortal(
    <S.Overlay open>
      <S.ModalContent>
        <S.CloseButton onClick={handleClose}>
          <FiX />
        </S.CloseButton>
        {children}
      </S.ModalContent>
    </S.Overlay>,
    document.body
  );
};
