"use client";

import { useMemo, useState } from "react";
import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import {
  BriefcaseBusiness,
  FileText,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const RECRUIT_POSTS = [
  {
    id: 1,
    category: "박사후연구원",
    title: "[예시] 세부1 연구팀 박사후연구원 채용",
    target: "박사후연구원",
    period: "2026.03.01 - 2026.03.31",
    status: "접수예정",
    attachment: "첨부 예정",
  },
  {
    id: 2,
    category: "대학원생",
    title: "[예시] 세부1 연구팀 대학원생 모집",
    target: "석사/박사과정",
    period: "상시 모집",
    status: "상시모집",
    attachment: "-",
  },
  {
    id: 3,
    category: "연구원",
    title: "[예시] 세부2 연구팀 연구원 채용",
    target: "연구원",
    period: "2026.04.01 - 2026.04.20",
    status: "준비중",
    attachment: "첨부 예정",
  },
  {
    id: 4,
    category: "박사후연구원",
    title: "[예시] 세부2 연구팀 박사후연구원 채용",
    target: "박사후연구원",
    period: "2026.04.10 - 2026.05.10",
    status: "접수예정",
    attachment: "-",
  },
  {
    id: 5,
    category: "인턴",
    title: "[예시] 학부연구생 및 인턴 모집",
    target: "학부연구생 / 인턴",
    period: "2026.05.01 - 2026.05.20",
    status: "준비중",
    attachment: "-",
  },
  {
    id: 6,
    category: "행정 안내",
    title: "[예시] 2026년 연구실 채용 일정 안내",
    target: "공통",
    period: "2026.02.15",
    status: "공지",
    attachment: "첨부 예정",
  },
];

const ITEMS_PER_PAGE = 5;

function getStatusClass(status: string) {
  switch (status) {
    case "공지":
      return "bg-blue-700 text-white";
    case "상시모집":
      return "bg-emerald-100 text-emerald-700";
    case "접수예정":
      return "bg-sky-100 text-sky-700";
    case "준비중":
      return "bg-zinc-100 text-zinc-700";
    default:
      return "bg-zinc-100 text-zinc-700";
  }
}

export default function NewsRecruitmentPage() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(RECRUIT_POSTS.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return RECRUIT_POSTS.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  return (
    <SiteFrame>
      <DetailPageShell groupKey="news" pageKey="news_hiring">
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
              RECRUITMENT
            </p>

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              본 페이지는 연구실별 채용 공고와 모집 안내를 정리한 페이지입니다.
              <br />
              공고 제목, 모집 대상, 접수 기간, 진행 상태를 한눈에 확인할 수 있도록
              목록형 구조로 구성했습니다.
            </p>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="rounded-[28px] bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-6 ring-1 ring-zinc-200">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-700 p-3 text-white">
                    <BriefcaseBusiness className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      OVERVIEW
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                      채용 공고 안내
                    </h2>
                  </div>
                </div>

                <p
                  className="mt-5 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                  style={{ wordBreak: "keep-all" }}
                >
                  채용 공고 탭은 공지사항형 목록 구조를 기반으로, 연구실별 모집
                  정보를 간결하게 확인할 수 있도록 설계했습니다. 실제 공고가 등록되면
                  제목, 모집 대상, 기간, 첨부파일 여부 등을 업데이트하여 사용할 수
                  있습니다.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <div className="hidden bg-zinc-50 px-6 py-4 md:grid md:grid-cols-[1fr_3.2fr_1.4fr_1.6fr_1fr_1fr] md:gap-4">
                  <p className="text-sm font-semibold text-zinc-500">구분</p>
                  <p className="text-sm font-semibold text-zinc-500">제목</p>
                  <p className="text-sm font-semibold text-zinc-500">모집대상</p>
                  <p className="text-sm font-semibold text-zinc-500">접수기간</p>
                  <p className="text-sm font-semibold text-zinc-500">상태</p>
                  <p className="text-sm font-semibold text-zinc-500">첨부</p>
                </div>

                <div className="divide-y divide-zinc-200">
                  {currentItems.map((post) => (
                    <div key={post.id} className="px-6 py-5">
                      <div className="grid gap-4 md:grid-cols-[1fr_3.2fr_1.4fr_1.6fr_1fr_1fr] md:items-center">
                        <div>
                          <p className="text-xs font-semibold text-zinc-400 md:hidden">
                            구분
                          </p>
                          <p className="text-[15px] font-medium text-zinc-700">
                            {post.category}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-zinc-400 md:hidden">
                            제목
                          </p>
                          <p
                            className="text-[15px] font-semibold leading-7 text-zinc-950"
                            style={{ wordBreak: "keep-all" }}
                          >
                            {post.title}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-zinc-400 md:hidden">
                            모집대상
                          </p>
                          <p className="text-[15px] leading-7 text-zinc-700">
                            {post.target}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-zinc-400 md:hidden">
                            접수기간
                          </p>
                          <p className="text-[15px] leading-7 text-zinc-700">
                            {post.period}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-zinc-400 md:hidden">
                            상태
                          </p>
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                              post.status
                            )}`}
                          >
                            {post.status}
                          </span>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-zinc-400 md:hidden">
                            첨부
                          </p>
                          <p className="text-[15px] leading-7 text-zinc-700">
                            {post.attachment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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

          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
                    지원 서류
                  </h3>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    이력서, 자기소개서, 연구실적 목록 등 기본 제출 서류를 공고별로
                    안내할 수 있습니다. 추후 필요에 따라 별도 양식을 첨부파일로
                    연결하면 됩니다.
                  </p>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
                    전형 절차
                  </h3>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    서류 검토, 면담, 인터뷰 등의 전형 절차를 공고별로 정리할 수
                    있습니다. 현재는 레이아웃만 구성한 상태이며, 실제 일정에 맞춰
                    쉽게 수정할 수 있습니다.
                  </p>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
                    문의 안내
                  </h3>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    채용 관련 문의 메일 주소와 담당 연구실 정보를 공고 하단 또는
                    본 섹션에 함께 표기할 수 있습니다. 예: recruitment@example.ac.kr
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}