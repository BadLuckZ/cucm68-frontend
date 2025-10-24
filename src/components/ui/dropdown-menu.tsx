import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

type DropdownSize = "default" | "sm" | "md" | "lg";
type DropdownColor =
  | "purple"
  | "pink"
  | "light-pink"
  | "vivid-pink"
  | "light-blue"
  | "yellow"
  | "white"
  | "grey"
  | "black"
  | "red"
  | "green";

const DropdownMenuContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  size?: DropdownSize;
  color?: DropdownColor;
}>({
  open: false,
  setOpen: () => {},
});

interface DropdownMenuProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Root> {
  size?: DropdownSize;
  color?: DropdownColor;
}

function DropdownMenu({ children, size, color, ...props }: DropdownMenuProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen, size, color }}>
      <DropdownMenuPrimitive.Root
        data-slot="dropdown-menu"
        open={open}
        onOpenChange={setOpen}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Root>
    </DropdownMenuContext.Provider>
  );
}

const dropdownTriggerVariants = cva(
  "rounded-lg border bg-transparent bg-grey w-full px-3 py-1 outline-none text-black shadow-make-cartoonish " +
    "disabled:cursor-not-allowed min-w-0 disabled:opacity-50 title-small cursor-pointer " +
    "flex items-center justify-between gap-2",
  {
    variants: {
      dropdownSize: {
        default: "w-full h-10",
        sm: "w-[60px] h-12",
        md: "w-[80px] h-10",
        lg: "w-[320px] h-10",
      },
    },
    defaultVariants: {
      dropdownSize: "default",
    },
  }
);

interface DropdownMenuTriggerProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Trigger> {
  dropdownSize?: DropdownSize;
}

function DropdownMenuTrigger({
  className,
  children,
  dropdownSize,
  ...props
}: DropdownMenuTriggerProps) {
  const { open, size } = React.useContext(DropdownMenuContext);
  const finalSize = dropdownSize || size;

  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      className={cn(
        dropdownTriggerVariants({ dropdownSize: finalSize }),
        className
      )}
      {...props}
    >
      {children}
      {open ? (
        <ExpandLess className="h-4 w-4 shrink-0" />
      ) : (
        <ExpandMore className="h-4 w-4 shrink-0" />
      )}
    </DropdownMenuPrimitive.Trigger>
  );
}

const dropdownContentVariants = cva(
  "bg-white border shadow-make-cartoonish min-w-0 " +
    "data-[state=open]:animate-in data-[state=closed]:animate-out " +
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " +
    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 " +
    "data-[side=bottom]:slide-in-from-bottom-2 " +
    "data-[side=left]:slide-in-from-left-2 " +
    "data-[side=right]:slide-in-from-right-2 " +
    "data-[side=top]:slide-in-from-top-2 " +
    "z-50 overflow-x-hidden overflow-y-auto rounded-lg border p-2",
  {
    variants: {
      dropdownSize: {
        default: "w-full",
        sm: "w-[160px]",
        md: "w-[160px]",
        lg: "w-[320px]",
      },
    },
    defaultVariants: {
      dropdownSize: "default",
    },
  }
);

interface DropdownMenuContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Content> {
  dropdownSize?: DropdownSize;
}

function DropdownMenuContent({
  className,
  side = "bottom",
  align = "start",
  sideOffset = 4,
  dropdownSize,
  ...props
}: DropdownMenuContentProps) {
  const { size } = React.useContext(DropdownMenuContext);
  const finalSize = dropdownSize || size;

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          dropdownContentVariants({ dropdownSize: finalSize }),
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

const dropdownItemVariants = cva(
  "relative flex cursor-pointer min-w-0 w-full select-none data-[highlighted]:shadow-make-cartoonish items-center gap-2 rounded-full px-3 py-1 body-large outline-hidden transition-colors data-disabled:pointer-events-none",
  {
    variants: {
      color: {
        purple:
          "text-black data-[highlighted]:bg-purple data-[highlighted]:text-white",
        pink: "text-black data-[highlighted]:bg-pink data-[highlighted]:text-black",
        "light-pink":
          "text-black data-[highlighted]:bg-light-pink data-[highlighted]:text-black",
        "vivid-pink":
          "text-black data-[highlighted]:bg-vivid-pink data-[highlighted]:text-white",
        "light-blue":
          "text-black data-[highlighted]:bg-light-blue data-[highlighted]:text-black",
        yellow:
          "text-black data-[highlighted]:bg-yellow data-[highlighted]:text-black",
        white:
          "text-black data-[highlighted]:bg-grey data-[highlighted]:text-black",
        grey: "text-black data-[highlighted]:bg-deep-grey data-[highlighted]:text-black",
        black:
          "text-black data-[highlighted]:bg-black data-[highlighted]:text-white",
        red: "text-black data-[highlighted]:bg-red data-[highlighted]:text-white",
        green:
          "text-black data-[highlighted]:bg-green data-[highlighted]:text-white",
      },
      dropdownSize: {
        default: "h-14",
        sm: "h-14",
        md: "h-14",
        lg: "h-14",
      },
    },
    defaultVariants: {
      color: "purple",
      dropdownSize: "default",
    },
  }
);

type DropdownMenuItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Item
> &
  VariantProps<typeof dropdownItemVariants>;

function DropdownMenuItem({
  className,
  color,
  dropdownSize,
  ...props
}: DropdownMenuItemProps) {
  const context = React.useContext(DropdownMenuContext);
  const finalColor = color || context.color || "purple";
  const finalSize = dropdownSize || context.size;

  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      className={cn(
        dropdownItemVariants({ color: finalColor, dropdownSize: finalSize }),
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
};
