"use client";

import { SessionProvider } from "next-auth/react";

export default function SessionProviderCustom({ children, sesssion }) {
  return <SessionProvider session={sesssion}> {children} </SessionProvider>;
}
