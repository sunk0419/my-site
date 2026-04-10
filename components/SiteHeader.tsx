"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuGroups, pageInfoMap } from "@/lib/site-data";

export default function SiteHeader() {
  const pathname = usePathname();

  const currentPage =
    Object.values(pageInfoMap).find((page) => page.route === pathname) ||
    pageInfoMap.home;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white backdrop-blur">
      <div className="flex items-center justify-between px-6 py-5">
        <div>
          <p className="text-lg font-bold tracking-tight">
            양자플래그십 양자자기공명센서 컨소시엄
          </p>
          <p className="mt-1 text-sm text-blue-100/80">
            Diamond Quantum Sensing and Imaging
          </p>
        </div>

        <div className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 md:block">
          {currentPage.title}
        </div>
      </div>

      <nav className="flex items-center justify-end gap-2 border-t border-white/10 px-6 py-3 text-sm font-medium">
        <Link
          href="/"
          className={`rounded-full px-4 py-2 transition ${
            pathname === "/"
              ? "bg-white text-blue-950 shadow-sm"
              : "text-blue-50 hover:bg-white/10 hover:text-white"
          }`}
        >
          HOME
        </Link>

        {menuGroups.map((menu) => {
          const isActive =
            pathname === menu.route || pathname.startsWith(`${menu.route}/`);

          return (
            <div key={menu.key} className="group relative">
              <Link
                href={menu.route}
                className={`rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-white text-blue-950 shadow-sm"
                    : "text-blue-50 hover:bg-white/10 hover:text-white"
                }`}
              >
                {menu.label}
              </Link>

              <div className="invisible absolute right-0 top-full z-20 mt-3 w-64 rounded-2xl border border-blue-100 bg-white p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="space-y-1">
                  {menu.items.map((item) => (
                    <Link
                      key={item.key}
                      href={item.route}
                      className="block w-full rounded-xl px-3 py-2 text-left text-sm text-zinc-700 transition hover:bg-blue-50 hover:pl-4 hover:text-blue-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </header>
  );
}