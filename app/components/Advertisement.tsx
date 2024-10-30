"use client";

import { useEffect, useRef } from "react";

export function Advertisement() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 确保容器已经存在
    if (!adContainerRef.current) return;

    // 清除容器中的现有内容
    while (adContainerRef.current.firstChild) {
      adContainerRef.current.removeChild(adContainerRef.current.firstChild);
    }

    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.text = `
            window.atOptions = {
                'key' : 'cdf5b542d49fbfccca4aad4e0dcf2b42',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
            };
        `;

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src =
      "//www.highperformanceformat.com/cdf5b542d49fbfccca4aad4e0dcf2b42/invoke.js";

    // 将脚本直接添加到广告容器中
    adContainerRef.current.appendChild(script1);
    adContainerRef.current.appendChild(script2);

    return () => {
      if (adContainerRef.current) {
        while (adContainerRef.current.firstChild) {
          adContainerRef.current.removeChild(adContainerRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <div
      ref={adContainerRef}
      className="w-full min-h-[90px] flex justify-center items-center overflow-hidden"
      style={{
        minWidth: "728px",
        margin: "0 auto",
      }}
    />
  );
}
