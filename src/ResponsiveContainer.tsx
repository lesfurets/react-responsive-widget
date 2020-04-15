import * as React from "react";
import { FC, useState, useEffect, createContext, useRef } from "react";

const XS = "app-xs";
const SM = "app-sm";
const MD = "app-md";
const LG = "app-lg";
const XL = "app-xl";

const getFormat = (
  element: HTMLDivElement,
  sm: number,
  md: number,
  lg: number,
  xl: number
) => {
  const elementWidth = element.offsetWidth;
  if (elementWidth >= xl) {
    return XL;
  }
  if (elementWidth >= lg) {
    return LG;
  }
  if (elementWidth >= md) {
    return MD;
  }
  if (elementWidth >= sm) {
    return SM;
  }
  return XS;
};

export interface ResponsiveContainerProps {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
}

export const ResponsiveContext = createContext(XS);

export const ResponsiveContainer: FC<ResponsiveContainerProps> = ({
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  children,
}) => {
  const [format, setFormat] = useState(XS);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkSize = () => {
    if (containerRef.current) {
      const newFormat = getFormat(containerRef.current, sm, md, lg, xl);
      if (newFormat !== format) {
        setFormat(newFormat);
      }
    }
  };

  useEffect(() => {
    checkSize();
    if ((window as any).attachEvent) {
      // IE
      (window as any).attachEvent("onresize", checkSize);
      return () => (window as any).detachEvent("onresize", checkSize);
    } else if (window.addEventListener) {
      // Common
      window.addEventListener("resize", checkSize, true);
      return () => window.removeEventListener("resize", checkSize, true);
    }
  }, []);

  return (
    <div className="app-container" ref={containerRef}>
      <div className={format}>
        <ResponsiveContext.Provider value={format}>
          {children}
        </ResponsiveContext.Provider>
      </div>
    </div>
  );
};
