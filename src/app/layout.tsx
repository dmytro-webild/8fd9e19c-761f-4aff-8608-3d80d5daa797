import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'Dar Blue Pearl | Boutique Hotel in Chefchaouen',
  description: 'Experience authentic Moroccan hospitality at Dar Blue Pearl in the heart of Chefchaouen. Luxury stays with rooftop views and mountain scenery.',
  openGraph: {
    "title": "Dar Blue Pearl | Boutique Hotel in Chefchaouen",
    "description": "Experience authentic Moroccan hospitality at Dar Blue Pearl in the heart of Chefchaouen.",
    "siteName": "Dar Blue Pearl",
    "type": "website"
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
