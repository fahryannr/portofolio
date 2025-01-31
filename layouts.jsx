import "./globals.css"
import { Orbitron, Roboto } from "next/font/google"
import type React from "react"

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-roboto" })

export const metadata = {
  title: "Fahryan Rizky Pratama - Portfolio",
  description: "Web Developer and Designer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${roboto.variable}`}>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

