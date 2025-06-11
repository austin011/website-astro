import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useInView } from "motion/react";

export type AnimatedProps = {
  children: ReactNode;
  tag: "h1" | "h2" | "h3" | "p" | "div";
  delay?: number;
  duration?: number;
} & HTMLAttributes<HTMLDivElement>;

export default function Animated({
  children,
  tag,
  delay,
  duration = 2,
  ...props
}: AnimatedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const Tag = tag;

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!ref.current) return;

      ref.current.style.visibility = "visible";

      const { words } = splitText(ref.current);

      animate(
        words,
        {
          opacity: [0, 1],
          y: [10, 0],
          x: [0, 3],
        },
        {
          type: "spring",
          duration: duration,
          bounce: 0,
          delay: stagger(0.05, {
            startDelay: delay ? delay : 0,
          }),
        }
      );
    });
  }, [inView]);

  return (
    <Tag
      style={{
        visibility: "hidden",
      }}
      ref={ref}
      {...props}
    >
      {children}
    </Tag>
  );
}
