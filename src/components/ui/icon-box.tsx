import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconBoxVariant = cva("rounded-full flex items-center justify-center", {
  variants: {
    size: {
      sm: "w-[24px] h-[24px]",
      md: "w-[72px] h-[72px]",
      lg: "w-[144px] h-[144px]",
    },
    bgcolor: {
      purple: "bg-purple text-black",
      pink: "bg-pink text-black",
      "light-pink": "bg-light-pink text-black",
      "vivid-pink": "bg-vivid-pink text-black",
      "light-blue": "bg-light-blue text-black",
      yellow: "bg-yellow text-black",
      white: "bg-white text-black",
      grey: "bg-grey text-black",
      "deep-grey": "bg-deep-grey text-black",
      "deep-deep-grey": "bg-deep-deep-grey text-black",
      black: "bg-black text-white",
      red: "bg-red text-white",
      green: "bg-green text-black",
    },
    cartoonish: {
      true: "border shadow-make-cartoonish",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    bgcolor: "white",
    cartoonish: true,
  },
});

export interface IconBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconBoxVariant> {
  children: React.ReactNode;
  cartoonish?: boolean;
}

const IconBox = React.forwardRef<HTMLDivElement, IconBoxProps>(
  (
    { className, size, bgcolor, cartoonish = true, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(iconBoxVariant({ size, bgcolor, cartoonish }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

IconBox.displayName = "IconBox";

export { IconBox };
