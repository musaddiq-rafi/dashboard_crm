"use client";
import { SWRConfig } from "swr";

export default function SWRProvider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then(res => res.json()),
        shouldRetryOnError: false,
        revalidateOnFocus: true,
      }}
    >
      {children}
    </SWRConfig>
  );
}