import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "D360 Bank – A bank with you in mind",
  description:
    "Discover why D360 Bank is your ideal banking partner with tailored services that revolve around you. Join our Waitlist for early access.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
