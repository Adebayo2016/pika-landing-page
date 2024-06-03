"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import SubmitButton from "@/components/molecules/SubmitButton";
import { useModalContext } from "@/context/modal";
import { addToWaitlist } from "@/utils/helpers";
import { FC } from "@/utils/types";
import React, { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

const WaitlistForm: FC = () => {
  const { close } = useModalContext();
  const formRef = useRef<HTMLFormElement>(null);
  const [response, action] = useFormState(addToWaitlist, undefined);

  useEffect(() => {
    if (response && response.success) {
      formRef.current?.reset();
      toast.success("Successfully added to the waitlist.");
      close();
    } else {
      toast.error(response?.err?.message);
    }
  }, [formRef, response]);

  return (
    <form
      action={action}
      ref={formRef}
      className="flex h-full w-full flex-col justify-between overflow-auto"
    >
      <main className="flex flex-col gap-2 p-6">
        <Input
          name="name"
          label="Name"
          required
          className="placeholder:text-sm placeholder:font-normal placeholder:text-gray-300"
        />
        <Input
          name="email"
          type="email"
          label="Email"
          required
          className="placeholder:text-sm placeholder:font-normal placeholder:text-gray-300"
        />
        <Input
          name="state"
          label="State"
          required
          className="placeholder:text-sm placeholder:font-normal placeholder:text-gray-300"
        />
        <Input
          name="city"
          label="City"
          required
          className="placeholder:text-sm placeholder:font-normal placeholder:text-gray-300"
        />
        <Input
          name="business_name"
          label="Business name"
          className="placeholder:text-sm placeholder:font-normal placeholder:text-gray-300"
        />
      </main>
      <footer className="sticky bottom-0 flex w-full items-center justify-end gap-2 bg-gray-50 p-6">
        <Button
          onClick={close}
          type="button"
          variant="outlined"
          className="py-2 px-4 rounded-sm text-gray-700 hover:bg-gray-200 border-gray-200 !text-base sm:!text-base"
        >
          Cancel
        </Button>
        <SubmitButton className="py-2 px-4 rounded-sm !text-base sm:!text-base">
          Create
        </SubmitButton>
      </footer>
    </form>
  );
};

export default WaitlistForm;
