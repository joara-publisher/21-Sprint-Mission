import { useEffect, useState } from "react";

function useResponsivePageSize() {
  const [pageSize, setPageSize] = useState(() => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (width >= 1200) return 10;
    if (width >= 768) return 6;
    return 4;
  });

  const [bestPageSize, setBestPageSize] = useState(() => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (width >= 1200) return 4;
    if (width >= 768) return 2;
    return 1;
  });

  const [currentScreen, setCurrentScreen] = useState<
    "pc" | "tablet" | "mobile"
  >(() => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (width >= 1200) return "pc";
    if (width >= 768) return "tablet";
    return "mobile";
  });

  const handleResize = () => {
    const width = window.innerWidth;

    if (width >= 1200) {
      setPageSize(10);
      setBestPageSize(4);
      setCurrentScreen("pc");
    } else if (width >= 768) {
      setPageSize(6);
      setBestPageSize(2);
      setCurrentScreen("tablet");
    } else {
      setPageSize(4);
      setBestPageSize(1);
      setCurrentScreen("mobile");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { pageSize, bestPageSize, currentScreen };
}

export default useResponsivePageSize;
