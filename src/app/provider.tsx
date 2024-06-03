"use client";

import { ModalContextProvider } from "@/context/modal";
import { FC } from "@/utils/types";
import { NextUIProvider } from "@nextui-org/system";
import React from "react";

const Provider: FC = ({ children }) => {
  return (
    <NextUIProvider>
      <ModalContextProvider>{children}</ModalContextProvider>
    </NextUIProvider>
  );
};

export default Provider;
