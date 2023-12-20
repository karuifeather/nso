import type { Metadata } from 'next'
import '@/global.scss'

export const metadata: Metadata = {
  title: 'NSO | Home',
  description: `Nepali Student Organization at JSU aims to provide necessary
                information and/or resources to current and future students
                from Nepal.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
