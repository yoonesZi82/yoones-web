"use client";
import { useEffect, useState } from "react";
import { PiArrowFatLineUpFill } from "react-icons/pi";
import { Button } from "antd";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <Button
      className={
        isVisible
          ? " buttonVisible bg-normalBlack rounded-[50%] border-none outline-none"
          : "buttonInvisible"
      }
      style={{
        display: pathname.includes("/dashboard")
          ? "none"
          : pathname.includes("/login")
          ? "none"
          : "flex",
      }}
      onClick={scrollToTop}
      icon={<PiArrowFatLineUpFill size={20}  className="scroll-icon" color="#fff"/>}
    ></Button>
  );
};

export default ScrollToTop;
