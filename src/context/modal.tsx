import { FC } from "@/utils/types";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  open: () => {},
  close: () => {}
});

export const useModalContext = () => {
  const { open, isOpen, close } = useContext(ModalContext);
  return {
    isOpen,
    open,
    close
  };
};

export const ModalContextProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
