"use client"

import { useOverlay } from "@/hooks/useOverlay"
import Image from "next/image"
import close from "@/assets/images/close.svg"
import { usePathname, useRouter } from "next/navigation"

export const Container = ({ children }: { children: React.ReactNode }) => {
  const overlayType = useOverlay()

  const pathname = usePathname()
  const { push } = useRouter()

  return (
    <main>
      {overlayType ? (
        <div className="fixed w-[100vw] h-[100vh] overflow-hidden overflow-y-auto bg-overlay-background z-20 transition-all duration-1000 ease-in-out animate-fade-in-overlay">
          <div className="w-full h-full">Overlay Content</div>
          <div
            className="fixed top-[8rem] lg:top-[12rem] p-[1rem] right-[5%] cursor-pointer"
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
