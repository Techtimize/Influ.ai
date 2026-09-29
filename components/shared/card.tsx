import type { ReactNode } from "react";

type Props = {
  as?: "section" | "aside" | "div";
  className?: string;
  children: ReactNode;
};

export default function Card({ as: Tag = "section", className = "", children }: Props) {
  return (
    <Tag className={`rounded-3xl border border-[#E6E8F5] bg-white/90 backdrop-blur ${className}`}>
      {children}
    </Tag>
  );
}