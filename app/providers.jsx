"use client";

import { SessionProvider } from "next-auth/react";
import { GlobalStateProvider } from "@/context/GlobalStates";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <GlobalStateProvider>{children}</GlobalStateProvider>
    </SessionProvider>
  );
}
