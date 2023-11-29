import Image from "next/image"
import data from "./data.json"
import phone from "@/assets/images/phone.webp"
import card from "@/assets/images/card.webp"

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen h-screen flex-col p-[8.4rem] pt-[6.3rem] px-[2rem] pb-[4.3rem] xs:py-[4.2rem] xs:px-[3rem] sm:px-[2rem] md:pt-[10rem] md:px-[3rem] lg:p-[8.4rem] bg-primary overflow-hidden">
        <div className="flex justify-center flex-col-reverse items-center h-full w-full">
          <div className="flex justify-center mt-auto">
            <h1>{data.title}</h1>
          </div>
          <div className="mt-auto">
            <div className="max-h-[37vh] h-[62rem] w-[30rem] transition-all duration-200 ease-in-out animate-unblur-keyframe">
              <div className="relative w-full h-full">
                <Image
                  src={phone}
                  alt="Phone Image"
                  priority
                  className="animate-phone-diagonal-move-keyframe text-transparent absolute left-[20%] w-auto h-full z-10"
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
      </section>
      <section className="flex min-h-screen flex-col justify-center items-center p-[8.4rem] bg-white"></section>
    </>
  )
}
