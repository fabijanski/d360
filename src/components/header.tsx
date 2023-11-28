import Link from "next/link"
import Image from "next/image"
import Logo from "@/assets/images/logo-white.svg"
import Hamburger from "@/assets/images/hamburger.svg"
import { Button } from "./button"

export const Header = () => {
  return (
    <header className="fixed w-full max-w-[100vw] top-0 left-0 right-0 py-[1.2rem] md:py-[1.6rem] px-0 transition-all ease-in-out backdrop-blur-[2rem]">
      <div className="mx-[1.5rem] md:mx-auto md:w-[calc(100%-8rem)] md:max-w-[120rem] 2xl:max-w-[132.4rem] 3xl:w-[165rem] 3xl:max-w-[165rem] flex justify-between items-center animate-fade-in">
        <Link href="/" className="">
          <Image
            src={Logo}
            alt="d360 Logo"
            className="h-[5.6rem] md:h-[9rem] w-auto"
          />
        </Link>

        <div className="py-[0.5rem] lg:hidden cursor-pointer">
          <Image
            src={Hamburger}
            alt="Hamburger Menu"
            className="h-[2rem] w-[2rem] cursor-pointer"
          />
        </div>

        <nav className="hidden w-full lg:flex transition-all duration-200 ease-in-out">
          <ul className="list-none w-full flex items-center">
            <li className="ml-[6rem]">
              <Link href="/about-us" className="">
                About Us
              </Link>
            </li>
            <li className="ml-auto">
              <Link href="#waitlist-status" className="">
                Waitlist Status
              </Link>
            </li>
            <li className="ml-[6rem]">
              <Button onClick={() => console.log("clicked!")}>
                Join the Waitlist
              </Button>
              {/* <Link href="#waitlist" className=""></Link> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
