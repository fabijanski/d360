import { PropsWithChildren, ReactNode } from "react"

type Props = {
  type?: "primary" | "secondary"
}

export const Button = ({
  type = "primary",
  children,
}: PropsWithChildren<Props>) => (
  <button className="bg-white text-primary px-[3.5rem] py-[1.4rem] rounded-[1.4rem]">
    {children}
  </button>
)
