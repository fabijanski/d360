import Image from "next/image"
import data from "./data.json"
import aboutHero from "@/assets/images/about-hero.webp"

export default function AboutUs() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-overlay-background">
      <Image
        src={aboutHero}
        alt="About Hero Image"
        className="object-cover object-center"
        fill
        priority
      />
      <div className="z-10 max-w-[30rem] sm:max-w-[60rem] lg:max-w-[80%] text-center m-auto">
        <h1 className="text-[3.6rem] leading-[1.6] font-bold md:text-[8rem] xl:text-[10rem] animate-fade-in">
          {data.title}
        </h1>
        <p className="font-medium md:text-[3.6rem] animate-fade-in-long lg:max-w-[70%] mx-auto">
          {data.subtitle}
        </p>
      </div>
    </section>
  )
}
