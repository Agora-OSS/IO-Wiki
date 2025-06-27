import { cn } from "@/core/utils";
import { buttonVariants } from "@/ui/button/button.config";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <>
      <Comp
        data-slot="button"
        className={cn(
          buttonVariants({ variant, size, className }),
          "cursor-pointer",
        )}
        {...props}
      />
    </>
  );
}

export { Button, buttonVariants };
