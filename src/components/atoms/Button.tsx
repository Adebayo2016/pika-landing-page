import { cls } from "@/utils/helpers";
import { FC } from "@/utils/types";
import React, { HTMLProps } from "react";

type Props = HTMLProps<HTMLButtonElement> & {
  variant?: "outlined" | "contained" | "link" | "card";
  type?: "submit" | "reset" | "button";
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
        "text-base sm:text-lg transition-all duration-300 hover:brightness-125 disabled:bg-gray-200 disabled:text-pika-black",
        variant === "outlined" &&
          "border border-pika-navlink text-pika-navlink",
        variant === "contained" && "bg-pika-primary text-white",
        variant === "card" && "text-black bg-white shadow-card-btn",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
