import Icon from "@/components/atoms/Icon";
import { useModalContext } from "@/context/modal";
import { FC } from "@/utils/types";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import React from "react";
import WaitlistForm from "./WaitlistForm";

const WaitlistModal: FC = () => {
  const { isOpen, close } = useModalContext();
  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      closeButton={
        <button>
          <Icon name="icon-close" size={20} />
        </button>
      }
      radius="sm"
      shadow="sm"
      classNames={{
        base: "text-monochrome-1800 dark:text-monochrome-100",
        closeButton:
          "rounded-sm hover:bg-transparent hover:text-pika-primary transition-colors duration-300 top-2 right-4",
        backdrop: "bg-[#00000040]",
        header: "border-b border-divider items-center",
        body: "p-0"
      }}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn"
            }
          }
        }
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader>Apply for the waitlist</ModalHeader>
            <ModalBody>
              <WaitlistForm />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default WaitlistModal;
