import { Hero } from "@/components/hero/hero"

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen h-screen flex-col p-[8.4rem] pt-[6.3rem] px-[2rem] pb-[4.3rem] xs:py-[4.2rem] xs:px-[3rem] sm:px-[2rem] md:pt-[10rem] md:px-[3rem] lg:p-[8.4rem] bg-primary overflow-hidden">
        <Hero />
      </section>
      <section className="flex min-h-screen flex-col justify-center items-center p-[8.4rem] bg-white"></section>
    </>
  )
}
