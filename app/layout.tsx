/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getServerSideConfig } from "./config/server";
import Script from "next/script";
import { Footer } from "./components/footer";

const serverConfig = getServerSideConfig();

export const metadata: Metadata = {
  title: "Google Gemini Pro Chat Bot",
  description:
    "Use Google Gemini Pro As ChatGPT. Includes text and image input, interacting with Google Gemini through multimodal prompting.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "NextChat",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
        <script
          defer
          data-domain="chatgg.co"
          src="https://sdxl.me/js/script.js"
        ></script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5839223319872967"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-PVNQF22E1L`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          
          gtag('config', 'G-PVNQF22E1L');
          page_path: window.location.pathname;
        `,
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
