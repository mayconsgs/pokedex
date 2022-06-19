import { rgba } from "polished";
import styled, { keyframes } from "styled-components";

const showAnimation = keyframes`
    from {
        opacity: 0;
        backdrop-filter: blur(0px);
    }

    to {
        opacity: 1;
        backdrop-filter: blur(10px);
    }
`;

export const Overlay = styled.dialog`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;

  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => rgba(theme.colors.dark, 0.5)};

  animation: ${showAnimation} 0.3s linear forwards;
`;

export const CloseButton = styled.button`
  background: none;
  margin-bottom: 1rem;
  font-size: 32px;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;
