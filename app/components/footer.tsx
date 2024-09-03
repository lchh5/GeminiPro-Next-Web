import React from "react";

interface FooterLink {
  href: string;
  label: string;
}

const footerLinks: FooterLink[] = [
  // { href: '/blog', label: 'Blog' },
  // { href: '/privacy-policy', label: '隐私策略' },
  // { href: '/terms-of-service', label: '服务条款' },
  { href: "https://aifaceswap.ai", label: "AIFaceSwap.ai" },
  { href: "https://fluximagegenerator.co", label: "Flux Image Generator" },
];

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} chatgg.co. All rights reserved.
        </p>
        <div className="flex">
          {footerLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:underline"
              style={{
                marginRight: index < footerLinks.length - 1 ? "16px" : "0",
              }} // Add space between links
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
