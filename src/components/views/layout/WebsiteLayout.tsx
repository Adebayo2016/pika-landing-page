import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { FC } from "@/utils/types";
import React from "react";

const WebsiteLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
