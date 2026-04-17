"use client";

import { useMemo, useState } from "react";
import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import { BookOpen, CalendarDays, Download, FileText, ChevronLeft, ChevronRight } from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const PAPERS = [
  {
    id: 1,
    title: "Diamond NV-based Quantum Sensing for High-Resolution Biomedical Imaging",
    authors: "Donghun Lee, Wonsik Choi, et al.",
    journal: "Advanced Quantum Technologies",
    publishedAt: "2026.03",
    volume: "Vol. 12, No. 3",
    doi: "10.0000/example-doi-001",
    thumbnail: "/news/papers/thumb-paper-01.jpg",
    pdf: "/news/papers/files/paper-01.pdf",
    abstract:
      "다이아몬드 NV 센터 기반 양자센서를 활용해 고해상도 바이오 이미징 성능을 검증한 연구로, 나노 · 마이크로 MRI 응용 가능성을 제시합니다.",
  },
  {
    id: 2,
    title: "Compact Magnetocardiography Sensor Platform Enabled by Quantum Sensing",
    authors: "Jehyeong Kim, Jeonghyeon Sim, et al.",
    journal: "Sensors and Actuators A",
    publishedAt: "2026.02",
    volume: "Vol. 341",
    doi: "10.0000/example-doi-002",
    thumbnail: "/news/papers/thumb-paper-02.jpg",
    pdf: "/news/papers/files/paper-02.pdf",
    abstract:
      "소형 심자도 센서 플랫폼의 설계와 구현 가능성을 다룬 논문으로, 외부 패치형 및 내시경형 센서 개발 방향과 연계됩니다.",
  },
  {
    id: 3,
    title: "Machine Learning-based Signal Recovery for Quantum Magnetometry",
    authors: "Jehyeong Kim, Myeong Nojun, et al.",
    journal: "IEEE Access",
    publishedAt: "2025.12",
    volume: "Vol. 13",
    doi: "10.0000/example-doi-003",
    thumbnail: "/news/papers/thumb-paper-03.jpg",
    pdf: "/news/papers/files/paper-03.pdf",
    abstract:
      "양자 자기장 측정 신호의 파형 예측 및 복원 성능을 향상시키기 위해 Machine Learning 기반 분석 기법을 적용한 연구입니다.",
  },
  {
    id: 4,
    title: "Wide-field Magnetic Imaging with Diamond NV Centers",
    authors: "Donghun Lee, Graduate Team Members",
    journal: "Physical Review Applied",
    publishedAt: "2025.10",
    volume: "Vol. 24, No. 4",
    doi: "10.0000/example-doi-004",
    thumbnail: "/news/papers/thumb-paper-04.jpg",
    pdf: "/news/papers/files/paper-04.pdf",
    abstract:
      "넓은 시야에서 자기장 분포를 측정하는 wide-field 이미징 장치의 구조와 측정 성능을 다룬 논문입니다.",
  },
  {
    id: 5,
    title: "Nano / Micro MRI Platform Design for Quantum-enabled Analysis",
    authors: "Donghun Lee, Wonsik Choi, et al.",
    journal: "Journal of Applied Physics",
    publishedAt: "2025.08",
    volume: "Vol. 118, No. 8",
    doi: "10.0000/example-doi-005",
    thumbnail: "/news/papers/thumb-paper-05.jpg",
    pdf: "/news/papers/files/paper-05.pdf",
    abstract:
      "나노 · 마이크로 MRI 플랫폼의 설계 구조와 응용 방향을 정리한 연구로, 바이오 시료 분석과 정밀 이미징 확장을 다룹니다.",
  },
  {
    id: 6,
    title: "Patch-type Quantum Sensor for Non-contact Cardiac Measurement",
    authors: "Jeonghyeon Sim, KRISS Team",
    journal: "Biomedical Engineering Letters",
    publishedAt: "2025.06",
    volume: "Vol. 15, No. 2",
    doi: "10.0000/example-doi-006",
    thumbnail: "/news/papers/thumb-paper-06.jpg",
    pdf: "/news/papers/files/paper-06.pdf",
    abstract:
      "비침습·비접촉 심장 자기장 측정을 위한 패치형 양자센서 구현 가능성을 제시한 논문입니다.",
  },
  {
    id: 7,
    title: "Integrated Fiber-based Sensor Architecture for Miniaturized MCG",
    authors: "Jehyeong Kim, Myeong Nojun, et al.",
    journal: "Optics Express",
    publishedAt: "2025.04",
    volume: "Vol. 33, No. 4",
    doi: "10.0000/example-doi-007",
    thumbnail: "/news/papers/thumb-paper-07.jpg",
    pdf: "/news/papers/files/paper-07.pdf",
    abstract:
      "소형 심자도 센서 구현을 위한 광섬유 집적형 센서 구조를 제안하고, 향후 내시경형 장치 적용 가능성을 검토한 연구입니다.",
  },
];

const ITEMS_PER_PAGE = 5;

export default function NewsPapersPage() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(PAPERS.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return PAPERS.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  return (
    <SiteFrame>
      <DetailPageShell groupKey="news" pageKey="news_papers">
        <div className="space-y-16 md:space-y-24" style={{ fontFamily: FONT_FAMILY }}>
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
              PAPERS
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.12]">
              논문 및 출판 성과를 소개합니다
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              본 페이지는 컨소시엄의 주요 논문과 출판 성과를 카드 형식으로 정리한 페이지입니다.
              <br />
            
            </p>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="rounded-[28px] bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-6 ring-1 ring-zinc-200">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-700 p-3 text-white">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      OVERVIEW
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                      논문 목록
                    </h2>
                  </div>
                </div>

                
              </div>

              <div className="mt-8 space-y-6">
                {currentItems.map((paper) => (
                  <article
  key={paper.id}
  className="mt-4 rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8"
>
  <div className="flex items-start gap-5">
    <div
      
      style={{ width: "120px" }}
    >
      <img
        src={paper.thumbnail}
        alt={`${paper.title} 썸네일`}
        className="block h-auto w-full object-cover"
      />
    </div>

    <div className="min-w-0 flex-1">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
        PAPER
      </p>

      <h3
        className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950"
        style={{ wordBreak: "keep-all" }}
      >
        {paper.title}
      </h3>

      <p
        className="mt-4 text-[15px] leading-8 text-zinc-700"
        style={{ wordBreak: "keep-all" }}
      >
        {paper.abstract}
      </p>

      <div className="mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-zinc-950">출판일</p>
          <p className="mt-1 text-[15px] leading-7 text-zinc-700">
            {paper.publishedAt}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-950">학술지</p>
          <p className="mt-1 text-[15px] leading-7 text-zinc-700">
            {paper.journal}
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="mt-4 text-sm font-semibold text-zinc-950">저자</p>
          <p className="mt-1 text-[15px] leading-7 text-zinc-700">
            {paper.authors}
          </p>
        </div>

        <div>
          <p className="mt-4 text-sm font-semibold text-zinc-950">권호 정보</p>
          <p className="mt-1 text-[15px] leading-7 text-zinc-700">
            {paper.volume}
          </p>
        </div>

        <div>
          <p className="mt-4 text-sm font-semibold text-zinc-950">DOI</p>
          <p className="mt-1 break-all text-[15px] leading-7 text-zinc-700">
            {paper.doi}
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <a
          href={paper.pdf}
          download
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
        >
          <Download className="h-4 w-4" />
          PDF 다운로드
        </a>
      </div>
    </div>
  </div>
</article>
                ))}
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
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
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