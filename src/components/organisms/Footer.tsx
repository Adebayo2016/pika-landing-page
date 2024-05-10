import { FC } from "@/utils/types";
import React from "react";
import Logo from "../atoms/Logo";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="text-pika-black">
      <div className="bg-pika-footer">
        <div className="container mx-auto flex px-10 py-20 flex-wrap gap-[10%] gap-y-20">
          <Logo className="w-32" />
          <div className="flex items-start justify-between flex-1 flex-wrap gap-10">
            <nav>
              <ul>
                <li>
                  <Link href="#" className="whitespace-nowrap">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="whitespace-nowrap">
                    Track and monitor your delivery in real time
                  </Link>
                </li>
                <li>
                  <Link href="#" className="whitespace-nowrap">
                    How Pika works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="whitespace-nowrap">
                    Upfront delivery cost
                  </Link>
                </li>
                <li>
                  <Link href="#" className="whitespace-nowrap">
                    Exciting features just for you
                  </Link>
                </li>
                <li>
                  <Link href="#" className="whitespace-nowrap">
                    Earn as a Pika rider
                  </Link>
                </li>
                <li>
                  <Link href="#" className="whitespace-nowrap">
                    Connect directly with online stores
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-2 sm:gap-5">
              <h5 className="text-xl font-medium">Support</h5>
              <nav>
                <ul>
                  <li>
                    <Link href="#" className="whitespace-nowrap">
                      Helpxcenter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="whitespace-nowrap">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-2 sm:gap-5">
              <h5 className="text-xl font-medium">Contact</h5>
              <nav>
                <ul>
                  <li>
                    <Link href="#" className="whitespace-nowrap">
                      info@abc.com
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="whitespace-nowrap">
                      +91 988778889
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-2 sm:gap-5">
              <h5 className="text-xl font-medium">Follow Pika</h5>
              <nav>
                <ul>
                  <li>
                    <Link href="#" className="whitespace-nowrap">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="whitespace-nowrap">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="whitespace-nowrap">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="whitespace-nowrap">
                      Youtube
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center text-sm font-normal py-3 flex-wrap">
        <span>2023 De-Aelum LLC All Right Reserved</span>
        <nav className="flex items-center justify-end gap-5">
          <Link href="#" className="whitespace-nowrap">
            Policy
          </Link>
          <Link href="#" className="whitespace-nowrap">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
