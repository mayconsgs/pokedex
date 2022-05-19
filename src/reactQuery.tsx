import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

type ReactQueryType = { children: React.ReactNode };

export const ReactQuery: React.FC<ReactQueryType> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
