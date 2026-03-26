import { ReactNode } from "react";

type ReadingColumnProps = {
  children: ReactNode;
  className?: string;
};

export function ReadingColumn({ children, className = "" }: ReadingColumnProps) {
  return <div className={`max-w-reading ${className}`.trim()}>{children}</div>;
}
