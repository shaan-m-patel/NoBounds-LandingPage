import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "alt" | "accent";
};

const variantStyles = {
  default: "bg-warm-100",
  alt: "bg-warm-50",
  accent: "bg-warm-200",
};

export function Section({
  id,
  children,
  className = "",
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${variantStyles[variant]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
