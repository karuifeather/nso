import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NSO | Events',
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
      <>{children}</>
  )
}
