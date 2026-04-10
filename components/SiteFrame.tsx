import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function SiteFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 px-4 py-6 text-zinc-900">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/60 bg-white/95 shadow-2xl shadow-slate-900/10 backdrop-blur">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}