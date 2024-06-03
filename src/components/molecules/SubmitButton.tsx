import { FC } from "@/utils/types";
import { useFormStatus } from "react-dom";
import React, { HTMLProps, ReactNode } from "react";
import Button from "../atoms/Button";

type Props = Omit<HTMLProps<HTMLButtonElement>, "type" | "size" | "color"> & {
  icon?: ReactNode;
  padding?: string;
};

const SubmitButton: FC<Props> = ({ disabled, children, ...props }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={disabled || pending}
      variant="contained"
      type="submit"
      {...props}
    >
      {pending ? "loading..." : children}
    </Button>
  );
};

export default SubmitButton;
