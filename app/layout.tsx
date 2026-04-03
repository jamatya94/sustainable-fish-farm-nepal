import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sustainable Fish Farming Initiative",
    template: "%s | Sustainable Fish Farming Initiative",
  },
  description:
    "A women-led social enterprise advancing food security, nutrition, and rural livelihoods across South Asia through sustainable aquaculture and community-rooted innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
