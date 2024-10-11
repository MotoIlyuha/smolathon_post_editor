import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

import 'cal-sans'

import '@fontsource/inter/100.css'
import '@fontsource/inter/200.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://demos.tiptap.dev'),
  title: 'Tiptap block editor template',
  description:
    'Tiptap is a suite of open source content editing and real-time collaboration tools for developers building apps like Notion or Google Docs.',
  robots: 'noindex, nofollow',
  icons: [{url: '/favicon.svg'}],
  twitter: {
    card: 'summary_large_image',
    site: '@tiptap_editor',
    creator: '@tiptap_editor',
  },
  openGraph: {
    title: 'Tiptap block editor template',
    description:
      'Tiptap is a suite of open source content editing and real-time collaboration tools for developers building apps like Notion or Google Docs.',
  },
}


export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
    {children}
    </body>
    </html>
  );
}

