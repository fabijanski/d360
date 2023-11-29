"use client"

import { useOverlay } from "@/hooks/useOverlay"
import Image from "next/image"
import close from "@/assets/images/close.svg"
import { usePathname, useRouter } from "next/navigation"
import { TextAnimated } from "./textAnimated"

export const Container = ({ children }: { children: React.ReactNode }) => {
  const overlayType = useOverlay()

  const pathname = usePathname()
  const { push } = useRouter()

  return (
    <main>
      {overlayType ? (
        <div className="fixed w-screen h-screen overflow-hidden overflow-y-auto bg-overlay-background z-20 transition-all duration-1000 ease-in-out animate-fade-in-overlay">
          <div className="hidden w-full h-full xl:block">
            <TextAnimated />
          </div>
          <div className="flex items-center justify-center w-full h-full xl:hidden">
            <p className="text-primary text-[4rem] text-center">
              the animation is hidden on small screens
            </p>
          </div>
          <div
            className="fixed top-[8rem] md:top-[12rem] p-[1rem] right-[5%] cursor-pointer"
            onClick={() => push(pathname)}
          >
            <Image
              src={close}
              alt="close icon"
              className="h-[2rem] w-auto"
              priority
            />
          </div>
        </div>
      ) : null}
      {children}
    </main>
  )
}
