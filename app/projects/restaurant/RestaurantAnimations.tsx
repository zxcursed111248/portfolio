import type { ReactNode } from "react";

type AnimationProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeUp({
  children,
  className = "",
}: AnimationProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function FadeUpScroll({
  children,
  className = "",
}: AnimationProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}