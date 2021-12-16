import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }: { children: ReactNode }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-root') as HTMLElement,
  );
}

export default Modal;