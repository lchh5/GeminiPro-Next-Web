import { Analytics } from "@vercel/analytics/react";
import { Home } from "./components/home";
import { Footer } from "./components/footer";
import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Home />
      {serverConfig?.isVercel && <Analytics />}
      <Footer />
    </div>
  );
}
