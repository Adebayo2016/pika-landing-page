"use client";
import SubmitButton from "@/components/molecules/SubmitButton";
import { addToWaitlist } from "@/utils/helpers";
import { FC } from "@/utils/types";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

const WaitlistForm: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [responseMsg, setResponseMsg] = useState("");
  const [response, action] = useFormState(addToWaitlist, undefined);

  useEffect(() => {
    if (response && response.success) {
      formRef.current?.reset();
      setResponseMsg("Successfully added to the waitlist.");
    } else {
      setResponseMsg(response.err.message);
    }

    setTimeout(() => setResponseMsg(""), 2000);
    return () => setResponseMsg("");
  }, [formRef, response]);

  return (
    <>
      <form
        action={action}
        ref={formRef}
        className="rounded-[10px] border border-pika-black w-fit mx-auto overflow-hidden flex"
      >
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
    </>
  );
};

export default WaitlistForm;
