import React, { createElement, HTMLProps, ReactNode } from "react";
import { FC } from "@/utils/types";
import { cls } from "@/utils/helpers";

export type InputProps = HTMLProps<HTMLInputElement> & {
  name: string;
  label?: string;
  hasError?: boolean;
  helperText?: string;
  endComponent?: ReactNode;
  startComponent?: ReactNode;
  multiline?: boolean;
};
function getElement(
  element: keyof HTMLElementTagNameMap,
  className: string,
  props: any = {}
) {
  return createElement(element, { ...props, className });
}

const Input: FC<InputProps> = ({
  label,
  endComponent,
  startComponent,
  name,
  hasError,
  helperText,
  className,
  id,
  multiline,
  ...props
}) => {
  return (
    <div className={cls("input-group")}>
      <label htmlFor={id || name} className="body-sm text-pika-black">
        {label}
      </label>
      <div className="input-container my-1 flex items-center">
        {startComponent && (
          <span className="relative -mr-5 flex h-5 w-5 items-center justify-center pl-4">
            {startComponent}
          </span>
        )}
        {getElement(
          multiline ? "textarea" : "input",
          cls(
            "p-2 px-2 rounded-sm border transition-colors duration-200 outline-0 body-md w-full",
            !!endComponent && "pr-7",
            !!startComponent && "pl-8",
            hasError
              ? "border-error-500 text-error-500"
              : "border-gray-200 hover:border-gray-300 focus:border-primary text-gray-700",
            className
          ),
          { ...props, id: id || name, name }
        )}
        {endComponent && (
          <span className="-ml-7 flex h-5 w-5 items-center ">
            {endComponent}
          </span>
        )}
      </div>
      {helperText && (
        <span
          className={cls(
            "body-xs",
            hasError ? "text-error-500" : "text-primary-lighter"
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
