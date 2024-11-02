import React from "react";
import { Advertisement } from "./Advertisement";

interface FooterLink {
  href: string;
  label: string;
}

const footerLinks: FooterLink[] = [
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/tos", label: "Terms Of Service" },
  { href: "https://aifaceswap.ai", label: "AIFaceSwap.ai" },
  { href: "https://fluximagegenerator.co", label: "Flux Image Generator" },
  { href: "https://www.dcmburner.com", label: "Dcm Burner" },
  { href: "https://ctread.com", label: "CT Read" },
  { href: "https://worldguessr.co/", label: "WorldGuessr Game" },
];

export function Footer() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex-grow">{/* 这里是页面的主要内容 */}</div>

      <div className="w-full">
        <div className="w-full overflow-x-auto bg-white dark:bg-black">
          <div className="max-w-[728px] mx-auto py-4">
            <Advertisement />
          </div>
        </div>

        <footer className="relative bg-gray-800 text-white py-6 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
              <span className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} chatgg.co. All rights
                reserved.
              </span>
              <span className="hidden md:inline text-gray-500">|</span>
              {footerLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white hover:underline transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                  {index < footerLinks.length - 1 && (
                    <span className="hidden md:inline text-gray-500">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
