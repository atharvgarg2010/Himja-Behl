import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const fontDisplay = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontQuote = Playfair_Display({
  variable: "--font-quote",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Himja Behl — Premium Wedding Wardrobe Stylist",
  description: "Himja Behl is a premium wedding styling brand focused on curating clothing and complete wardrobe direction for brides, grooms, and families.",
  keywords: ["Wedding Stylist", "Indian Bridal Wear", "Trousseau Curation", "Himja Behl", "Wedding Wardrobe", "Bridal Styling", "Groom Styling", "Luxury Indian Weddings", "Delhi", "Mumbai"],
  metadataBase: new URL("https://himjabehl.com"), // Placeholder production URL
  openGraph: {
    title: "Himja Behl — Premium Wedding Wardrobe Stylist",
    description: "Curated, intentional wedding wardrobes. Not just clothes for an occasion, but a visual language for your celebration.",
    url: "https://himjabehl.com",
    siteName: "Himja Behl",
    images: [
      {
        url: "/hero-illustration.jpg",
        width: 1200,
        height: 630,
        alt: "Himja Behl Wedding Styling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himja Behl — Premium Wedding Wardrobe Stylist",
    description: "Curated, intentional wedding wardrobes. Not just clothes for an occasion, but a visual language for your celebration.",
    images: ["/hero-illustration.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontQuote.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
