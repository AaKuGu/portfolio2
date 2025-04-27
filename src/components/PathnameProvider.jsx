"use client";

import { usePathname } from "next/navigation";

const PathnameProvider = ({ children }) => {
  const pathname = usePathname();
  return children({ pathname });
};

export default PathnameProvider;
