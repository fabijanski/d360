"use client"
import Link from "next/link"
import Image from "next/image"
import LogoWhite from "@/assets/images/logo-white.svg"
import LogoColor from "@/assets/images/logo-color.svg"
import Hamburger from "@/assets/images/hamburger.svg"
import { Button } from "./button"
import { usePathname, useRouter } from "next/navigation"
import { WAITLIST_JOIN_PATH_ID, WAITLIST_STATUS_PATH_ID } from "@/constants"
import { useOverlay } from "@/hooks/useOverlay"

export const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const overlayType = useOverlay()

  const extraClassNameHeader = !!overlayType ? " text-secondary" : ""

  return (
    <header
      className={`fixed w-full max-w-[100vw] top-0 left-0 right-0 py-[1.2rem] md:py-[1.6rem] px-0 transition-all ease-in-out backdrop-blur-[2rem] z-30 ${extraClassNameHeader}`}
    >
      <div className="mx-[1.5rem] md:mx-auto md:w-[calc(100%-8rem)] md:max-w-[120rem] 2xl:max-w-[132.4rem] 3xl:w-[165rem] 3xl:max-w-[165rem] flex justify-between items-center animate-fade-in-short">
        <Link href="/">
          <Image
            src={!!overlayType ? LogoColor : LogoWhite}
            alt="d360 Logo"
            className="h-[5.6rem] md:h-[9rem] w-auto"
            priority
          />
        </Link>
        {!overlayType ? (
          <div className="py-[0.5rem] lg:hidden cursor-pointer">
            <Image
              src={Hamburger}
              alt="Hamburger Menu"
              className="h-[2rem] w-[2rem] cursor-pointer"
            />
          </div>
        ) : null}

        <nav className="hidden w-full transition-all duration-200 ease-in-out lg:flex">
          <ul className="flex items-center w-full list-none">
            <li className="ml-[6rem]">
              <Link href="/about-us">About Us</Link>
            </li>
            {!overlayType ? (
              <>
                <li className="ml-auto">
                  <Link href={WAITLIST_STATUS_PATH_ID}>Waitlist Status</Link>
                </li>
                <li className="ml-[6rem]">
                  <Button
                    onClick={() =>
                      router.push(`${pathname}${WAITLIST_JOIN_PATH_ID}`)
                    }
                  >
                    Join the Waitlist
                  </Button>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  )
}
