import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "min-w-0 w-full rounded-xl bg-grey border px-3 py-1 outline-none text-black shadow-make-cartoonish disabled:cursor-not-allowed disabled:opacity-50 title-small placeholder:text-deep-deep-grey",
  {
    variants: {
      inputSize: {
        default: "h-10",
        sm: "max-w-[46px] h-[48px]",
        md: "max-w-[143px] h-10",
        lg: "max-w-[211px] h-10",
        xl: "max-w-[313px] h-10",
      },
    },
    defaultVariants: {
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      labelClassName,
      containerClassName,
      inputSize,
      inputClassName,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? React.useId();

    return (
      <div className={cn("flex flex-col gap-1", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn("label-large", labelClassName)}
          >
            {label}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          className={cn(inputVariants({ inputSize }), inputClassName)}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
