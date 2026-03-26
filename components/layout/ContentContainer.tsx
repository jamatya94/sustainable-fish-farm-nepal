import { ElementType, ReactNode } from "react";

type ContentContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  width?: "layout" | "wide" | "content" | "reading";
  padding?: "default" | "edge";
};

const widthClasses = {
  layout: "max-w-layout",
  wide: "max-w-wide",
  content: "max-w-content",
  reading: "max-w-reading",
} as const;

export function ContentContainer({
  children,
  className = "",
  as: Tag = "div",
  width = "layout",
  padding = "default",
}: ContentContainerProps) {
  const paddingClass =
    padding === "edge"
      ? "px-gutter-mobile md:px-gutter-tablet lg:px-6 xl:px-8 2xl:px-10"
      : "px-gutter-mobile md:px-gutter-tablet lg:px-gutter";

  return (
    <Tag
      className={`mx-auto w-full ${widthClasses[width]} ${paddingClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
