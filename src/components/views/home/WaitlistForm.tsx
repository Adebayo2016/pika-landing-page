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

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta',
  'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Federal Capital Territory', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
  'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun',
  'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

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
          helperText="We'll never share your email with anyone else."
          required
          className="placeholder:text-sm placeholder:font-normal placeholder:text-gray-300"
        />
        <div className="flex flex-col">
          <label htmlFor="state" className="mb-1 text-sm font-medium text-gray-700">
            State
          </label>
          <select
            name="state"
            id="state"
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">state of business operation</option>
            {NIGERIAN_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <Input
          name="phone" 
          label="phone number"
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
          Submit
        </SubmitButton>
      </footer>
    </form>
  );
};

export default WaitlistForm;