import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Modals, Overlay } from './Modal.stayled';

const Modal = ({children, toggleModal}: any) => {

  const modalRoot: any = document.querySelector('#modal-root')


  useEffect(()=>{
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [toggleModal]);


  const backdropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

    return createPortal(
      <Overlay onClick={backdropClick}>
        <Modals>
          {children}
        </Modals>
      </Overlay>, modalRoot);
};

export default Modal;