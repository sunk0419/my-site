"use client";

import { useMemo, useState } from "react";
import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import {
  BookOpen,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const PAPERS = [
  {
    id: 1,
    title:
      "Efficient iridium N-heterocyclic carbene catalysts for signal amplification by reversible exchange in dimethyl sulfoxide",
    authors:
      "Juhee Baek, Sein Min, Jisu Kim, Min-Kun Kim, Keunhong Jeong",
    journal: "Journal of Magnetic Resonance",
    publishedAt: "2026.08",
    volume: "Article 108153 (In Press)",
    doi: "",
    thumbnail: "/news/papers/ID1.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S1090780726001424",
    abstract:
      "Dimethyl sulfoxide 환경에서 Signal Amplification by Reversible Exchange(SABRE)를 위한 이리듐 N-헤테로고리 카벤(NHC) 촉매의 성능을 분석하고, 효율적인 NMR 신호 증폭을 위한 촉매 설계 방향을 제시한 연구입니다.",
  },
  {
    id: 2,
    title:
      "Polynomial Software Compensation of Piezoelectric Hysteresis in NV-Based Scanning Magnetometry",
    authors:
      "Seokmin Lee, Yuhan Lee, Sungjin Jang, Sunwoo Kim, Seonho Lee, Seok-Kyun Son, Andreas J. Heinrich, Donghun Lee",
    journal: "Applied Sciences",
    publishedAt: "2026.08",
    volume: "Vol. 16, No. 15, 7831",
    doi: "10.3390/app16157831",
    thumbnail: "/news/papers/ID2.png",
    link: "https://www.mdpi.com/2076-3417/16/15/7831",
    abstract:
      "다이아몬드 NV 센터 기반 주사 자력계에서 압전 스캐너의 히스테리시스로 발생하는 영상 왜곡을 다항식 기반 소프트웨어 보상 기법으로 교정하여 정밀한 자기장 이미징 성능을 향상시킨 연구입니다.",
  },
  {
    id: 3,
    title:
      "Prediction of toxicity of chemicals using a novel quantum circuit with sign-alternated angle encoding",
    authors:
      "Seongmin Im, Juhee Baek, Keunhong Jeong",
    journal: "Digital Discovery",
    publishedAt: "2026.07",
    volume: "Vol. 5, Advance Article",
    doi: "10.1039/D6DD00092D",
    thumbnail: "/news/papers/ID3.png",
    link: "https://pubs.rsc.org/en/content/articlelanding/2026/dd/d6dd00092d",
    abstract:
      "화학물질의 독성을 예측하기 위해 sign-alternated angle encoding을 적용한 새로운 양자 회로를 제안하고, 양자 컴퓨팅을 활용한 화학 정보 분석 및 독성 예측의 가능성을 검토한 연구입니다.",
  },
  {
    id: 4,
    title:
      "Photothermal Effect of Mesoporous Polydopamine Encapsulated Nanodiamond Quantum Sensors",
    authors:
      "Qoniti Amalia, Hak-Sung Jung, Jeong Hyun Shim",
    journal: "IEEE Sensors Letters",
    publishedAt: "2026.07",
    volume: "Early Access",
    doi: "",
    thumbnail: "/news/papers/ID4.jpg",
    link: "https://ieeexplore.ieee.org/document/11603961",
    abstract:
      "메조다공성 폴리도파민으로 캡슐화한 나노다이아몬드 양자센서의 광열 효과를 분석하고, 광 조사에 따른 열적 특성이 나노다이아몬드 기반 양자 센싱에 미치는 영향을 다룬 연구입니다.",
  },
  {
    id: 5,
    title:
      "Harnessing magnetic vortex oscillations for local microwave sources in qubit control",
    authors:
      "Myeongwon Lee, Yuhan Lee, Taekhyeon Lee, Alec Jenkins, Min-Wook Han, Soogil Lee, Byong-Guk Park, Andreas Heinrich, Kab-Jin Kim, Ania C. Bleszynski Jayich, Donghun Lee",
    journal: "Physical Review Applied",
    publishedAt: "2026.04",
    volume: "Vol. 25, No. 4, 044092",
    doi: "10.1103/j6c4-fpxc",
    thumbnail: "/news/papers/ID5.png",
    link: "https://journals.aps.org/prapplied/abstract/10.1103/j6c4-fpxc",
    abstract:
      "다이아몬드 NV 센터 기반 단일 스핀 주사 자력계를 이용해 자기 보텍스와 안티보텍스의 동역학을 관찰하고, 보텍스 코어에 국소화된 GHz 대역 AC 자기장을 큐비트 제어용 국소 마이크로파 소스로 활용할 가능성을 제시한 연구입니다.",
  },
  {
    id: 6,
    title:
      "Machine learning-assisted advances in graphene and 2D materials",
    authors:
      "Sunuk Choe, Taegeun Song, Donghun Lee, Ara Go, Nojoon Myoung",
    journal: "Current Applied Physics",
    publishedAt: "2026.04",
    volume: "Vol. 87, pp. 116–124",
    doi: "10.1016/j.cap.2026.04.004",
    thumbnail: "/news/papers/ID6.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S1567173926000830",
    abstract:
      "그래핀과 2차원 소재 연구에서 머신러닝을 활용한 결함 및 나노구조 분석, 국소 물성 추론, 양자 수송 해석, 시뮬레이션 및 역설계 연구의 최신 성과와 향후 과제를 정리한 리뷰 논문입니다.",
  },
  {
    id: 7,
    title:
      "Dual deconvolution in multiphoton structured illumination microscopy for deep-tissue super-resolution imaging",
    authors:
      "Sumin Lim, Sungsam Kang, Jin Hee Hong, Young-Ho Jin, Kalpak Gupta, Moonseok Kim, Suhyun Kim, Wonshik Choi, Seokchan Yoon",
    journal: "Nature Communications",
    publishedAt: "2026.03",
    volume: "Vol. 17, Article 2123",
    doi: "10.1038/s41467-026-69798-y",
    thumbnail: "/news/papers/ID7.webp",
    link: "https://www.nature.com/articles/s41467-026-69798-y",
    abstract:
      "다중광자 구조조명 현미경에 이중 디컨볼루션 기반 계산 적응광학을 적용해 여기 및 방출 경로의 수차를 독립적으로 보정하고, 두꺼운 생체조직 내부에서 심부 초해상도 이미징을 구현한 연구입니다.",
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
        <div
          className="space-y-16 md:space-y-24"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {/* Hero */}
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

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              논문 및 출판 성과를 소개합니다
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              본 페이지는 컨소시엄의 주요 논문과 출판 성과를 소개합니다.
              <br />
              각 논문의 원문 페이지에서 자세한 내용을 확인하실 수 있습니다.
            </p>
          </section>

          {/* Papers Section */}
          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              {/* Section Header */}
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

              {/* Paper Cards */}
              <div className="mt-8 space-y-6">
                {currentItems.map((paper) => (
                  <article
                    key={paper.id}
                    className="mt-4 rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8"
                  >
                    <div className="flex flex-col items-start gap-5 md:flex-row">
                      {/* Thumbnail */}
                      <div
                        className="shrink-0"
                        style={{
                          width: "120px",
                        }}
                      >
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${paper.title} 논문 원문 페이지로 이동`}
                        >
                          <img
                            src={paper.thumbnail}
                            alt={`${paper.title} 썸네일`}
                            className="block h-auto w-full object-cover transition duration-200 hover:opacity-80"
                          />
                        </a>
                      </div>

                      {/* Paper Content */}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                          PAPER
                        </p>

                        {/* Clickable Title */}
                        <h3
                          className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950"
                          style={{ wordBreak: "keep-all" }}
                        >
                          <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-blue-700"
                          >
                            {paper.title}
                          </a>
                        </h3>

                        {/* Abstract */}
                        <p
                          className="mt-4 text-[15px] leading-8 text-zinc-700"
                          style={{ wordBreak: "keep-all" }}
                        >
                          {paper.abstract}
                        </p>

                        {/* Metadata */}
                        <div className="mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2">
                          {/* Published Date */}
                          <div>
                            <p className="text-sm font-semibold text-zinc-950">
                              출판일
                            </p>
                            <p className="mt-1 text-[15px] leading-7 text-zinc-700">
                              {paper.publishedAt}
                            </p>
                          </div>

                          {/* Journal */}
                          <div>
                            <p className="text-sm font-semibold text-zinc-950">
                              학술지
                            </p>
                            <p className="mt-1 text-[15px] leading-7 text-zinc-700">
                              {paper.journal}
                            </p>
                          </div>

                          {/* Authors */}
                          <div className="md:col-span-2">
                            <p className="mt-4 text-sm font-semibold text-zinc-950">
                              저자
                            </p>
                            <p className="mt-1 text-[15px] leading-7 text-zinc-700">
                              {paper.authors}
                            </p>
                          </div>

                          {/* Volume */}
                          <div>
                            <p className="mt-4 text-sm font-semibold text-zinc-950">
                              권호 정보
                            </p>
                            <p className="mt-1 text-[15px] leading-7 text-zinc-700">
                              {paper.volume}
                            </p>
                          </div>

                          {/* DOI */}
                          <div>
                            <p className="mt-4 text-sm font-semibold text-zinc-950">
                              DOI
                            </p>

                            {paper.doi ? (
                              <a
                                href={`https://doi.org/${paper.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 inline-flex items-center gap-1 break-all text-[15px] leading-7 text-blue-700 transition hover:text-blue-900 hover:underline"
                              >
                                {paper.doi}
                                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                              </a>
                            ) : (
                              <p className="mt-1 text-[15px] leading-7 text-zinc-400">
                                -
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Paper Link Button */}
                        <div className="mt-6 flex justify-end">
                          <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                          >
                            논문 바로가기
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
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