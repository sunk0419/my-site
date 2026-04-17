import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import { ArrowLeft } from "lucide-react";
import { seminarItems } from "../data";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

export default async function SeminarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = seminarItems.find((seminar) => seminar.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <SiteFrame>
      <DetailPageShell groupKey="news" pageKey="news_seminar">
        <div
          className="space-y-16 md:space-y-24"
          style={{ fontFamily: FONT_FAMILY }}
        >
          <section
            className="w-full rounded-[36px] px-6 py-10 md:px-14 md:py-14"
            style={{
              backgroundColor: "#13245B",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 24px 70px rgba(15,23,42,0.18)",
            }}
          >
            <div className="h-1.5 w-28 rounded-full bg-[#4CC9F0]" />

            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-100 md:text-base">
              {item.category}
            </p>

            <h1
              className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.12]"
              style={{ wordBreak: "keep-all" }}
            >
              {item.title}
            </h1>

            <p className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg">
              {item.date}
            </p>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
             <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              {item.image && (
                <div className="mb-8 overflow-hidden rounded-[20px] border border-zinc-200 bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="block h-auto w-full"
                  />
                </div>
              )}

              <p
                className="text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                {item.content}
              </p>

              <div className="mt-8">
                <Link
                  href="/news/seminar"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  <ArrowLeft className="h-4 w-4" />
                  목록으로 돌아가기
                </Link>
              </div>
            </div>
            </div>
          </section>
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}