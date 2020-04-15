import * as React from "react";
import { useContext } from "react";
import { ResponsiveContext } from "../../src/ResponsiveContainer";

export const DisplayCurrentBreakPoint = () => {
  const currentBreakPoint = useContext(ResponsiveContext);
  return <div>current breakpoint in context: {currentBreakPoint}</div>;
};
