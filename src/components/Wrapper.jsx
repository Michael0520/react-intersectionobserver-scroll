import { useEffect, useRef } from "react";
import SectionItem from "./SectionItem";

const Wrapper = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("_show");
          //   entry.target.classList.remove("_hidden");
        } else {
          entry.target.classList.remove("_show");
          //   entry.target.classList.add("_hidden");
        }
      });
    });

    const hideElements = document.querySelectorAll("._hidden");
    console.log(hideElements);
    hideElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div>
      <SectionItem />
      <SectionItem />
      <SectionItem />
      <SectionItem />
      <SectionItem />
    </div>
  );
};

export default Wrapper;
