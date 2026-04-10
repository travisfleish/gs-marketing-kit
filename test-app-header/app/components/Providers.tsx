"use client";
import { useState } from "react";
import { GlobalContext } from "@genius-sports/gs-brand-kit";

export default function Providers({
  children,
  options,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
}) {
  const [context, setContext] = useState({ history: [], options });

  return (
    <GlobalContext.Provider value={[context, setContext]}>
      {children}
    </GlobalContext.Provider>
  );
}
