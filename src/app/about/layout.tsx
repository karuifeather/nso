import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NSO | About",
  description: `This is NSO's about page.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
