import data from "./data.json"

export default function AboutUs() {
  return (
    <section className="max-w-[1650px] m-auto">
      <h1>{data.title}</h1>
      <h2>{data.subtitle}</h2>
    </section>
  )
}
