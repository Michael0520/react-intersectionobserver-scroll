import React, { useState } from "react";
import SectionItem from "./components/SectionItem";
import Wrapper from "./components/Wrapper";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-center text-2xl font-bold text-white selection:bg-green-900">
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
      <main>
        <Wrapper />
      </main>
    </div>
  );
}

export default App;
