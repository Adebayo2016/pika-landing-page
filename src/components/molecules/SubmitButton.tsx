import { FC } from "@/utils/types";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton: FC = ({ className, children }) => {
  const { pending } = useFormStatus();
  return (
    <button className={className} type="submit" disabled={pending}>
      {!pending ? children : "Loading..."}
    </button>
  );
};

export default SubmitButton;
