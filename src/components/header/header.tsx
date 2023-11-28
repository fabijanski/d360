import Link from "next/link"
import Image from "next/image"
import Logo from "@/assets/images/logo-white.svg"

export const Header = () => {
  return (
    <header className="fixed w-full max-w-[100vw] top-0 left-0 right-0 py-[1.2rem] px-0 backdrop-blur-[2rem] transition-all ease-in-out ">
      <Link href="/" className="">
        <Image src={Logo} alt="d360 Logo" />
      </Link>
    </header>
  )
}
