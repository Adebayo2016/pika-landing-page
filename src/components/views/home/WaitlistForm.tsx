"use client";
import SubmitButton from "@/components/molecules/SubmitButton";
import { addToWaitlist } from "@/utils/helpers";
import { FC } from "@/utils/types";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import Modal from 'react-modal';
const WaitlistForm: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [responseMsg, setResponseMsg] = useState("");
  const [response, action] = useFormState(addToWaitlist, undefined);
  const [isOpen, setIsOpen] = useState(false); // Add a state to control the modal

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (response && response.success) {
      formRef.current?.reset();
      setResponseMsg("Successfully added to the waitlist.");
      closeModal(); // Close the modal on success
    } else {
      setResponseMsg(response?.err?.message);
    }

    setTimeout(() => setResponseMsg(""), 2000);
    return () => setResponseMsg("");
  }, [formRef, response]);

  return (
    <>
      <button onClick={openModal} className="bg-pika-black text-white text-center py-2 w-28">
        Join Waitlist
      </button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={{content: {width: '80%', height: '80%', margin: 'auto'}}}>
        <form
          action={action}
          ref={formRef}
          className="rounded-[10px] border border-pika-black w-fit mx-auto overflow-hidden flex flex-col"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="py-3 px-3 text-pika-black placeholder:text-pika-black outline-none min-w-[250px] text-sm"
          />
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            className="py-3 px-3 text-pika-black placeholder:text-pika-black outline-none min-w-[250px] text-sm"
          />
          <input
            type="text"
            name="state"
            placeholder="Enter your state"
            className="py-3 px-3 text-pika-black placeholder:text-pika-black outline-none min-w-[250px] text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="py-3 px-3 text-pika-black placeholder:text-pika-black outline-none min-w-[250px] text-sm"
          />
          <SubmitButton className="bg-pika-black text-white text-center py-2 w-28">
            Submit
          </SubmitButton>
        </form>
        <span className="text-center mt-2 block w-full absolute bottom-2">
          {responseMsg}
        </span>
      </Modal>
    </>
  );
};

export default WaitlistForm;
