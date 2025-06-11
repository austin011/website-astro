// ---
// import type { HTMLAttributes } from 'astro/types';

// export interface Props extends HTMLAttributes<'button'> {
//     variant?: 'default' | 'glass' | 'secondary'
// };

// const { variant, ...props } = Astro.props;

// const className = variant === 'default' ? '' : variant;
// ---

// <button {...props} class={className}>
//     <slot />
// </button>

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  variant?: "default" | "glass" | "secondary";
} & HTMLMotionProps<"button">;

export default function Button({ children, variant, ...props }: ButtonProps) {
  const className = variant === "default" ? "" : variant;

  return (
    <motion.button
      className={`${className} ${props.className}`}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
