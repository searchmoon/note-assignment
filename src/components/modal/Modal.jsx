import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ isOpen, onClose, children }) => {
  if (isOpen === false) return null;

  return (
    <ModalWrap>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          <RiCloseLine />
        </button>
        {children}
      </div>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
    width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    background: #303030;
    padding: 30px;
    border-radius: 5px;
    position: relative;
    .close-button {
      position: absolute;
      top: 0;
      right: 0;
      color: #fff;
    }
  }
`;

export default Modal;
