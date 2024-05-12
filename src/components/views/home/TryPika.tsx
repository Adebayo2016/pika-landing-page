import { HomeSections } from "@/utils/enums";
import { FC } from "@/utils/types";
import React from "react";

const TryPika: FC = () => {
  return (
    <section
      className="container mx-auto px-4 text-center pb-10"
      id={HomeSections.TRY_PIKA}
    >
      <h4 className="text-xl sm:text-4xl text-center font-medium mb-2 sm:mb-4">
        Are You Ready To Try Pika?
      </h4>
      <span className="max-w-[230px] sm:max-w-[430px] block mx-auto text-xs sm:text-xl">
        Jump on the Pika waitlist today and be the first to know when we launch!
      </span>
      <form className="mt-12 rounded-[10px] border border-pika-black w-fit mx-auto overflow-hidden flex ">
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          className="py-3 px-4 text-pika-black placeholder:text-pika-black outline-none min-w-[250px] text-sm"
        />
        <button className="bg-pika-black text-white py-3 px-8">Submit</button>
      </form>
    </section>
  );
};

export default TryPika;
