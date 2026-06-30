import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-warm-300/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
