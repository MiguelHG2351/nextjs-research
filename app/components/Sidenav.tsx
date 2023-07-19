'use client'

import Link from "next/link";
import HireForemostIcon from "./icons/HireForemostIcon";
import { useSession } from "next-auth/react";

const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/sales",
    label: "Sales",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/reports",
    label: "Reports",
  },
]

export default function Sidenav() {
  const session = useSession();
  console.log(session)
  
  return (
    <section className="border-r border-r-gray-100 bg-gray-50 px-4">
      <div className="flex justify-center">
        <div className="flex items-center py-4 text-[color:#23BF1F]">
          <HireForemostIcon className="w-auto h-[32px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col font-bold text-gray-800">
          <Link
            className="my-1 py-1 px-2 pr-0 text-[length:14px] whitespace-nowrap text-ellipsis overflow-hidden "
            href="/dashboard">
            Dashboard
          </Link>
          <Link
            className="my-1 py-1 px-2 pr-0 text-[length:14px] whitespace-nowrap text-ellipsis overflow-hidden "
            href="/team">
            Team
          </Link>
          <Link
            className="my-1 py-1 px-2 pr-0 text-[length:14px] whitespace-nowrap text-ellipsis overflow-hidden rounded-md bg-gray-100"
            href="/talentPool"
            aria-current="page">
            Talent Pool
          </Link>
          <Link
            className="my-1 py-1 px-2 pr-0 text-[length:14px] whitespace-nowrap text-ellipsis overflow-hidden "
            href="/projects">
            Projects
          </Link>
          <Link
            className="my-1 py-1 px-2 pr-0 text-[length:14px] whitespace-nowrap text-ellipsis overflow-hidden "
            href="/jobs">
            Jobs
          </Link>
          <Link
            className="my-1 py-1 px-2 pr-0 text-[length:14px] whitespace-nowrap text-ellipsis overflow-hidden "
            href="/reports">
            User
          </Link>
          <a
            href="https://github.com/MiguelHG2351/nextjs-research"
            className="my-1 flex gap-1 py-1 px-2 pr-16 text-[length:14px]">
            GitHub{" "}
            <svg width={24} height={24} fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.25 15.25v-8.5h-8.5M17 7 6.75 17.25"
              />
            </svg>
          </a>
          <form
            method="post"
            action="/logout"
            encType="application/x-www-form-urlencoded"
            className="my-1 py-1 px-2 pr-16 text-[length:14px]">
            <button type="submit" className="flex gap-1 font-bold">
              Logout{" "}
              <svg width={24} height={24} fill="none">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m15.75 8.75 3.5 3.25-3.5 3.25M19 12h-8.25M15.25 4.75h-8.5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h8.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
