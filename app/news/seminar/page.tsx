"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { seminarItems } from "./data";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const ITEMS_PER_PAGE = 10;

export default function NewsSeminarPage() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(seminarItems.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return seminarItems.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

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
              SEMINAR & WORKSHOP
            </p>

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              세미나 및 특강 목록 소개
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              컨소시엄의 세미나, 특강, 워크숍 일정을 전해드립니다.
              <br />
              제목을 클릭하면 행사 소개와 세부 내용을 확인할 수 있습니다.
            </p>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="rounded-[28px] bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-6 ring-1 ring-zinc-200">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  NOTICE BOARD
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                  행사 목록
                </h2>
                <p
                  className="mt-4 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                  style={{ wordBreak: "keep-all" }}
                >
                   자세한 내용은 제목을 눌러 상세 페이지에서 확인할
                  수 있습니다.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <table className="w-full table-fixed border-collapse">
                  <colgroup>
                    <col className="w-[90px]" />
                    <col className="w-[120px]" />
                    <col />
                    <col className="w-[180px]" />
                  </colgroup>

                  <thead>
                    <tr className="bg-zinc-50">
                      <th className="border-b border-r border-zinc-200 px-5 py-4 text-center align-middle text-sm font-semibold text-zinc-600">
                        번호
                      </th>
                      <th className="border-b border-r border-zinc-200 px-5 py-4 text-center align-middle text-sm font-semibold text-zinc-600">
                        구분
                      </th>
                      <th className="border-b border-r border-zinc-200 px-5 py-4 text-center align-middle text-sm font-semibold text-zinc-600">
                        제목
                      </th>
                      <th className="border-b border-zinc-200 px-5 py-4 text-center align-middle text-sm font-semibold text-zinc-600">
                        일시
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentItems.map((item, index) => {
                      const rowNumber =
                        seminarItems.length - ((page - 1) * ITEMS_PER_PAGE + index);

                      return (
                        <tr key={item.id} className="hover:bg-zinc-50">
                          <td className="border-b border-r border-zinc-200 px-5 py-5 text-center align-middle text-[15px] font-semibold text-zinc-700">
                            {rowNumber}
                          </td>

                          <td className="border-b border-r border-zinc-200 px-5 py-5 text-center align-middle text-[15px] font-medium text-zinc-700">
                            {item.category}
                          </td>

                          <td className="border-b border-r border-zinc-200 px-5 py-5 text-center align-middle">
                            <Link
                              href={`/news/seminar/${item.slug}`}
                              className="block text-center text-[16px] font-semibold leading-7 text-zinc-950 hover:text-blue-700"
                              style={{ wordBreak: "keep-all" }}
                            >
                              {item.title}
                            </Link>
                          </td>

                          <td className="border-b border-zinc-200 px-5 py-5 text-center align-middle text-[15px] font-medium text-zinc-700">
                            {item.date}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    이전
                  </button>

                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    const active = pageNumber === page;

                    return (
                      <button
                        key={pageNumber}
                        type="button"
                        onClick={() => setPage(pageNumber)}
                        className={`h-11 min-w-[44px] rounded-full px-4 text-sm font-semibold transition ${
                          active
                            ? "bg-blue-700 text-white"
                            : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() =>
                      setPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={page === totalPages}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    다음
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}