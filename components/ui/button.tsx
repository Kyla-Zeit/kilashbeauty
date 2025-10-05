// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // base
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        // Default filled button
        default:
          // remove the old hover:bg-primary/90 and force pink
          "bg-primary text-primary-foreground shadow hover:bg-[var(--kb-pink)]",

        // If you want destructive to keep red hover, change this line back to `hover:bg-destructive/90`
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-[var(--kb-pink)]",

        // Outline should go pink on hover and flip text to white
        outline:
          "border border-input bg-background hover:bg-[var(--kb-pink)] hover:text-white",

        // Secondary also goes pink
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[var(--kb-pink)]",

        // Ghost goes pink with white text
        ghost:
          "hover:bg-[var(--kb-pink)] hover:text-white",

        // Link (text only) turns pink on hover
        link:
          "text-primary underline-offset-4 hover:text-[var(--kb-pink)] hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }