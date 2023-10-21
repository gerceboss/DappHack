"use client";
import { MetamaskProvider } from "@/utils/useMetamask";
import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import { MoralisProvider } from "react-moralis";

const nunito = Nunito({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <MoralisProvider initializeOnMount={false}>
          <MetamaskProvider>{children}</MetamaskProvider>
        </MoralisProvider>
      </body>
    </html>
  );
}