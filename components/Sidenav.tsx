export default function Sidenav() {
  return (
    <section className="border-r border-r-gray-100 bg-gray-50 px-4">
      <div className="flex justify-center">
        <div className="flex items-center py-4 text-[color:#23BF1F]">
          <svg
            className="relative top-[1px] h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <path
              fill="#23BF1F"
              fillRule="evenodd"
              d="M12 3a9 9 0 000 18h4.5c1.398 0 2.097 0 2.648-.228a3 3 0 001.624-1.624C21 18.597 21 17.898 21 16.5V12a9 9 0 00-9-9zm-4 8a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm3 4a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <div className="w-1" />
          <div className="font-display text-d-p-sm">Fakebooks</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col font-bold text-gray-800">
          <a
            className="my-1 py-1 px-2 pr-16 text-[length:14px] "
            href="/dashboard">
            Dashboard
          </a>
          <a
            className="my-1 py-1 px-2 pr-16 text-[length:14px] "
            href="/accounts">
            Accounts
          </a>
          <a
            className="my-1 py-1 px-2 pr-16 text-[length:14px] rounded-md bg-gray-100"
            href="/sales"
            aria-current="page">
            Sales
          </a>
          <a
            className="my-1 py-1 px-2 pr-16 text-[length:14px] "
            href="/expenses">
            Expenses
          </a>
          <a
            className="my-1 py-1 px-2 pr-16 text-[length:14px] "
            href="/reports">
            Reports
          </a>
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
