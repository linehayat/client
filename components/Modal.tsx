import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }: { children: ReactNode }) {
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById('modal-root') as HTMLElement,
  );
}

export default Modal;