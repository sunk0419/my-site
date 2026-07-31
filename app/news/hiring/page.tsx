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
  ArrowLeft,
  Download,
  Image as ImageIcon,
} from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

type RecruitAttachment = {
  label: string;
  fileName: string;
  href: string;
};

type RecruitPost = {
  id: number;
  category: string;
  title: string;
  target: string;
  period: string;
  status: string;
  summary: string;
  detail: string[];
  posterUrl?: string;
  attachments: RecruitAttachment[];
  contactEmail: string;
};

const RECRUIT_POSTS: RecruitPost[] = [
  {
    id: 1,
    category: "박사후연구원",
    title: "[예시] 세부1 연구팀 박사후연구원 채용",
    target: "박사후연구원",
    period: "2026.08.01 - 2026.09.30",
    status: "모집중",
    summary:
      "세부1 연구팀에서 박사후연구원을 모집합니다. 연구 주제, 지원 자격, 제출 서류는 상세 페이지에서 확인하실 수 있습니다.",
    detail: [
      "첨부파일 참고",
     
    ],
    // public 폴더 기준 경로입니다. 예: /public/recruitment/postdoc-poster.jpg
    posterUrl: "/recruitment/postdoc-poster.jpg",
    attachments: [
      {
        label: "박사후 연구원 채용 공고문",
        fileName: "postdoc.hiring.docx",
        href: "/news/hiring/postdoc.hiring.docx",
      },
     
    ],
    contactEmail: "donghun@korea.ac.kr",
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

function RecruitmentDetail({
  post,
  onBack,
}: {
  post: RecruitPost;
  onBack: () => void;
}) {
  return (
    <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
      <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
        >
          <ArrowLeft className="h-4 w-4" />
          목록으로 돌아가기
        </button>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="rounded-[28px] bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-6 ring-1 ring-zinc-200">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                {post.category}
              </p>
              <h2
                className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem] md:leading-tight"
                style={{ wordBreak: "keep-all" }}
              >
                {post.title}
              </h2>
              <p
                className="mt-5 text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                {post.summary}
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              <div className="grid gap-4 bg-zinc-50 px-6 py-5 md:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold text-zinc-400">모집대상</p>
                  <p className="mt-2 text-[15px] font-semibold text-zinc-900">
                    {post.target}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400">접수기간</p>
                  <p className="mt-2 text-[15px] font-semibold text-zinc-900">
                    {post.period}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400">상태</p>
                  <span
                    className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                      post.status
                    )}`}
                  >
                    {post.status}
                  </span>
                </div>
              </div>

              <div className="px-6 py-7">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                  상세 안내
                </h3>
                <ul className="mt-5 space-y-3">
                  {post.detail.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            

            <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
              <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                <Download className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
                첨부파일 다운로드
              </h3>

              <div className="mt-5 space-y-3">
                {post.attachments.length > 0 ? (
                  post.attachments.map((file) => (
                    <a
                      key={file.href}
                      href={file.href}
                      download
                      className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-zinc-950">
                          {file.label}
                        </span>
                        <span className="mt-1 block text-xs text-zinc-500">
                          {file.fileName}
                        </span>
                      </span>
                      <Download className="h-4 w-4 shrink-0 text-blue-700" />
                    </a>
                  ))
                ) : (
                  <p className="rounded-2xl bg-zinc-50 px-4 py-4 text-sm text-zinc-500">
                    등록된 첨부파일이 없습니다.
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
              <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
                문의 안내
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-zinc-700">
                채용 관련 문의: {post.contactEmail}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function NewsRecruitmentPage() {
  const [page, setPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<RecruitPost | null>(null);

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
              채용공고 세부 내용을 소개합니다.
            </h1>

            
          </section>

          {selectedPost ? (
            <RecruitmentDetail
              post={selectedPost}
              onBack={() => setSelectedPost(null)}
            />
          ) : (
            <>
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
                          박사후연구원 채용 공고 안내
                        </h2>
                      </div>
                    </div>

                    <p
                      className="mt-5 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                      style={{ wordBreak: "keep-all" }}
                    >
                      공고
                      제목을 클릭하면 상세 페이지에서 공고 포스터와 지원 서류 양식을
                      다운로드할 수 있습니다.
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
                              <button
                                type="button"
                                onClick={() => setSelectedPost(post)}
                                className="text-left text-[15px] font-semibold leading-7 text-zinc-950 underline-offset-4 transition hover:text-blue-700 hover:underline"
                                style={{ wordBreak: "keep-all" }}
                              >
                                {post.title}
                              </button>
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
                                {post.attachments.length > 0
                                  ? `${post.attachments.length}개`
                                  : "-"}
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

              
            </>
          )}
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}
