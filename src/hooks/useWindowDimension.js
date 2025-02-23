import { useEffect, useState } from "react";

export const useWindowDimension = () => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateDimensions);

    // Set the initial dimensions (in case the component mounts after the first render)
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return dimensions;
};
