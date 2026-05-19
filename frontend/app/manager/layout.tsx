import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Managers | Anaya Digital Marketing Agency",
  robots: { index: false, follow: false },
};

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
