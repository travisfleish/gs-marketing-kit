"use client";
import { useState } from "react";
import { GlobalContext } from "@genius-sports/gs-brand-kit";

type ShellContextState = {
  history: unknown[];
  options: unknown;
};

export default function Providers({
  children,
  options,
}: {
  children: React.ReactNode;
  options: unknown;
}) {
  const [context, setContext] = useState<ShellContextState>({ history: [], options });

  return (
    <GlobalContext.Provider value={[context, setContext]}>
      {children}
    </GlobalContext.Provider>
  );
}
