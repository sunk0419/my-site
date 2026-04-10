import Link from "next/link";
import { menuGroups, pageInfoMap } from "@/lib/site-data";

export default function DetailPageShell({
  groupKey,
  pageKey,
  children,
}: {
  groupKey: string;
  pageKey: string;
  children: React.ReactNode;
}) {
  const group = menuGroups.find((menu) => menu.key === groupKey);
  const page = pageInfoMap[pageKey];

  if (!group || !page) {
    return null;
  }

  return (
    <main className="bg-zinc-50 px-6 py-8">
      <div className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 px-6 py-8 text-white shadow-sm">
        <p className="text-sm font-medium text-blue-100">세부 페이지</p>
        <h1 className="mt-2 text-3xl font-bold">{page.title}</h1>
        <p className="mt-3 text-sm text-blue-100/80">{page.subtitle}</p>
      </div>

      <section className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-blue-800">{group.label}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={group.route}
            className={`rounded-full px-4 py-2 text-sm transition ${
              pageKey === group.key
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 text-zinc-700 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {group.label}
          </Link>

          {group.items.map((item) => (
            <Link
              key={item.key}
              href={item.route}
              className={`rounded-full px-4 py-2 text-sm transition ${
                pageKey === item.key
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 text-zinc-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-6">{children}</div>
    </main>
  );
}