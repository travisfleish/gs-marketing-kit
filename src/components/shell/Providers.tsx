"use client";
import { useState } from "react";
import { GlobalContext } from "~/utils/context";

export default function Providers({
  children,
  options,
}: {
  children: React.ReactNode;
  options: any;
}) {
  const [context, setContext] = useState({ history: [], options });
  return (
    <GlobalContext.Provider value={[context, setContext]}>
      {children}
    </GlobalContext.Provider>
  );
}
