import { cls } from "@/utils/helpers";
import { FC } from "@/utils/types";
import React, { HTMLProps } from "react";

type Props = HTMLProps<HTMLButtonElement> & {
  variant?: "outlined" | "contained" | "link";
  type?: "submit" | "reset" | "button" | undefined;
  color?: "primary" | "navlink";
};

const Button: FC<Props> = ({
  children,
  className,
  variant = "contained",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={cls(
        "text-lg font-semibold transition-all duration-300 hover:brightness-125",
        variant === "outlined" &&
          "border border-pika-navlink text-pika-navlink  ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
