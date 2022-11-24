import React, { useState } from "react";
import SectionItem from "./components/SectionItem";
import Wrapper from "./components/Wrapper";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-center text-2xl font-bold text-white selection:bg-green-900">
      <Wrapper />
    </div>
  );
}

export default App;
