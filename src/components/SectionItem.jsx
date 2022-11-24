import { forwardRef, useImperativeHandle, useRef } from "react";
import logo from "../logo.svg";

const SectionItem = () => {
  return (
    <div className="_hidden grid min-h-screen place-items-center content-center">
      <header>
        <img
          src={logo}
          className="animate-speed h-60 motion-safe:animate-spin"
          alt="logo"
        />
        <style>
          {
            "\
            .animate-speed{\
              animation-duration:20s;\
            }\
          "
          }
        </style>
      </header>
      <h1>SectionItem</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, itaque.
      </p>
    </div>
  );
};

export default SectionItem;
