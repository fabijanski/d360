"use client"

import { useOverlay } from "@/hooks/useOverlay"

export const Container = ({ children }: { children: React.ReactNode }) => {
  const overlayType = useOverlay()

  return (
    <main>
      {overlayType ? (
        <div className="fixed w-[100vw] h-[100vh] overflow-hidden overflow-y-auto bg-overlay-background z-20 transition-all duration-1000 ease-in-out animate-fade-in-overlay">
          {/* TODO: add animation here */}
          Overlay Content
        </div>
      ) : null}
      {children}
    </main>
  )
}
