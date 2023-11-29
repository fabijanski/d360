import { PropsWithChildren } from "react"

type VariantType = "primary" | "secondary"

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>
  className?: string
  variant?: VariantType
}

export const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const variantClassName = {
    primary: "bg-white text-primary",
    secondary: "bg-transparent text-white",
  }[variant]

  return (
    <button
      className={`px-[3.5rem] py-[1.4rem] rounded-[1.4rem] ${variantClassName} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
