"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Overview",
    href: "/sales",
  },
  {
    name: "Subscriptions",
    href: "/sales/subscriptions",
  },
  {
    name: "Invoices",
    href: "/sales/invoices",
  },
  {
    name: "Customers",
    href: "/sales/customers/cl3cashv30441f0ftbnspk6el",
  },
  {
    name: "Deposits",
    href: "/sales/deposits",
  },
];

export default function layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="p-4">
      <div>
        <h1>Sales</h1>
        <div className="h-6"></div>
        <div className="flex gap-4 border-b border-gray-100 pb-4 text-[length:14px] font-medium text-gray-400">
          {routes.map((route) => (
            <Link
              className={pathname === route.href ? "text-gray-900" : ""}
              href={route.href}
              key={route.href}
              aria-current="page">
              {route.name}
            </Link>
          ))}
        </div>
        <div className="h-4"></div>
      </div>
      {children}
    </div>
  );
}
