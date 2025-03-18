import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hote Teknoloji 3D Render",
  description:
    "Makina ressamlığı, endüstriyel 3D render ve profesyonel web tasarım hizmetleri sunuyoruz. Makinelerinizi dijital ortamda gerçeğe en yakın şekilde modelleyip, markanıza özel modern web siteleri hazırlıyoruz. Hızlı, kaliteli ve yaratıcı çözümlerle yanınızdayız.",
  keywords: [
    "Makine tasarım",
    "Makina render",
    "3D cam machine",
    "Web sitesi hizmeti",
    "Ürün render",
    "Tasarım dizayn",
    "Makine sahneleme",
    "Profesyonel render",
    "Makina katalog",
    "Makinalar",
  ],
  openGraph: {
    type: "website",
    siteName: "Hote Teknoloji 3D Render",
    locale: "en_US",
    url: "https://hoteteknoloji.com",
    title: "Hote Teknoloji 3D Render",
    description:
      "Makina ressamlığı, endüstriyel 3D render ve profesyonel web tasarım hizmetleri sunuyoruz. Makinelerinizi dijital ortamda gerçeğe en yakın şekilde modelleyip, markanıza özel modern web siteleri hazırlıyoruz. Hızlı, kaliteli ve yaratıcı çözümlerle yanınızdayız.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn UI Landing Page Preview",
      },
    ],
  },
  authors: [
    {
      name: "Hote Teknoloji",
      url: "https://hoteteknoloji.com",
    },
  ],
  creator: "Akash Moradiya",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
