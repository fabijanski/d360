import { PropsWithChildren } from "react"

type Props = {
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const Button = ({
  children,
  onClick,
  ...rest
}: PropsWithChildren<Props>) => (
  <button
    className="bg-white text-primary px-[3.5rem] py-[1.4rem] rounded-[1.4rem]"
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
)
