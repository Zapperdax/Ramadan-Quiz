"use client";

import { SessionProvider } from "next-auth/react"; // Import SessionProvider

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
