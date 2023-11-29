"use client"

import Image from "next/image"
import data from "./data.json"
import phone from "@/assets/images/phone.webp"
import card from "@/assets/images/card.webp"
import { Button } from "@/components/button"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

import React from "react"

export const Hero: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
      <div className="flex justify-center flex-col-reverse items-center h-full w-full">
        <div className="flex flex-col justify-center mt-auto w-full items-center">
          <h1 className="max-w-[30rem] mx-auto mb-[7rem] text-center h-auto transition-opacity duration-[600] ease-in-out opacity-100 animate-fade-in">
            {data.title}
          </h1>
          <Button
            onClick={() => router.push(`${pathname}#waitlist`)}
            className="animate-fade-in-long w-full sm:max-w-[35rem]"
          >
            Join the Waitlist
          </Button>
          <Button
            onClick={() => router.push(`${pathname}#waitlist-status`)}
            variant="secondary"
            className="animate-fade-in-long"
          >
            Waitlist Status
          </Button>
        </div>
        <div className="mt-auto animate-fade-in">
          <div className="max-h-[37vh] h-[62rem] w-[30rem] transition-all duration-200 ease-in-out animate-unblur">
            <div className="relative w-full h-full">
              <Image
                src={phone}
                alt="Phone Image"
                priority
                className="animate-phone-diagonal-move text-transparent absolute left-[20%] w-auto h-full z-10"
              />
              <Image
                src={card}
                alt="Phone Image"
                priority
                className="text-transparent absolute left-[50%] top-[50%] translate-x-[-100%] translate-y-[-40%] max-h-[50%] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
