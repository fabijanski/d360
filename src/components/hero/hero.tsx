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
      <div className="flex justify-center flex-col-reverse items-center lg:flex-row lg:justify-between h-full w-full lg:max-w-[120rem] lg:mx-auto 2xl:w-full 2xl:max-w-[132.4rem] 3xl:max-w-[165rem]">
        <div className="flex flex-col justify-center mt-auto w-full items-center lg:m-0 lg:items-start transition-opacity duration-[600ms] ease-in-out opacity-100">
          <h1 className="max-w-[30rem] mx-auto mb-[7rem] text-center h-auto animate-fade-in text-[3.6rem] leading-[1.2] font-bold sm:mb-[3.25rem] sm:max-w-[60rem] md:text-[8rem] md:mb-[5.25rem] lg:text-start lg:mx-0 xl:text-[10rem] z-10">
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
            className="animate-fade-in-long lg:hidden"
          >
            Waitlist Status
          </Button>
        </div>
        <div className="mt-auto lg:mt-0">
          <div className="max-h-[37vh] h-[62rem] w-[30rem] lg:w-[40rem] lg:max-h-[60vh] transition-opacity duration-[600ms] ease-in-out opacity-100 animate-fade-in">
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
