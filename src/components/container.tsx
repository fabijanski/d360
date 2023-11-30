"use client"

import { useOverlay } from "@/hooks/useOverlay"
import Image from "next/image"
import close from "@/assets/images/close.svg"
import { useRouter } from "next/navigation"
import { TextAnimated } from "./textAnimated"

export const Container = ({ children }: { children: React.ReactNode }) => {
  const overlayType = useOverlay()

  const { replace } = useRouter()

  return (
    <main>
      {overlayType ? (
        <div className="fixed z-20 w-screen h-screen overflow-hidden overflow-y-auto transition-all duration-1000 ease-in-out bg-overlay-background animate-fade-in-overlay">
          <div className="w-full h-full">
            <TextAnimated />
          </div>
          <div
            className="fixed top-[8rem] md:top-[12rem] p-[1rem] right-[5%] cursor-pointer"
            onClick={() => replace("")}
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
