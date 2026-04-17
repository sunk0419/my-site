import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import type { LucideIcon } from "lucide-react";
import {
  Users,
  Microscope,
  FlaskConical,
  Package,
  Wrench,
} from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

type FeatureCardItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const overviewCards: FeatureCardItem[] = [
  {
    icon: Microscope,
    title: "연구 방향",
    description:
      "고감도 양자센싱과 나노 · 마이크로 MRI 이미징 기술을 통합하여 실험실 기반 핵심 플랫폼을 구축합니다.",
  },
  {
    icon: Wrench,
    title: "핵심 역량",
    description:
      "광학계, 마이크로파 제어, 자기장 측정, 신호 해석을 아우르는 통합 실험 역량을 기반으로 연구를 수행합니다.",
  },
  {
    icon: Package,
    title: "응용 확장",
    description:
      "바이오 분석, 재료 특성 평가, 고분해능 자기장 이미징 등으로 확장 가능한 기반 기술을 확보합니다.",
  },
];

const flowCards: FeatureCardItem[] = [
  {
    icon: FlaskConical,
    title: "양자센싱 원리 검증",
    description:
      "NV 센터 기반 자기공명 측정 원리와 신호 검출 성능을 실험적으로 검증합니다.",
  },
  {
    icon: Microscope,
    title: "이미징 시스템 구축",
    description:
      "광학계와 제어계를 통합하여 나노 · 마이크로 MRI 이미징 시스템을 단계적으로 고도화합니다.",
  },
  {
    icon: Package,
    title: "응용 플랫폼 확장",
    description:
      "바이오 및 정밀 측정 응용으로 이어질 수 있도록 패키지형 연구 플랫폼으로 확장합니다.",
  },
];

function FeatureCard({ icon: Icon, title, description }: FeatureCardItem) {
  return (
    <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
      <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
        {title}
      </h3>
      <p
        className="mt-4 text-[15px] leading-8 text-zinc-700"
        style={{ wordBreak: "keep-all" }}
      >
        {description}
      </p>
    </div>
  );
}

export default function TeamsSub1Page() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="teams" pageKey="teams_sub1">
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
              SUB-TEAM 1
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.12]">
              세부1 연구팀과 핵심 장비를 함께 소개합니다
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              세부1 연구팀의 연구 방향과 참여 교수진, 핵심 장비 및 연구 흐름을 한눈에 살펴볼 수 있는 페이지입니다.
            </p>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[30px] bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-7 ring-1 ring-zinc-200">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-blue-700 p-3 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                        OVERVIEW
                      </p>
                      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                        세부1 연구팀 소개
                      </h2>
                    </div>
                  </div>

                  <div className="mt-4 mb-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                      style={{ wordBreak: "keep-all" }}
                    >
                      세부1 연구팀은 다이아몬드 NV 센터 기반의 나노 · 마이크로 MRI
                      핵심 기술 개발과 이미징 시스템 구축을 중심으로 연구를 수행합니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                      style={{ wordBreak: "keep-all" }}
                    >
                      연구책임자와 대표 장비를 함께 소개하여 연구 방향, 장비 구축
                      현황, 그리고 응용 가능성을 한 화면에서 이해할 수 있도록
                      구성했습니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                      style={{ wordBreak: "keep-all" }}
                    >
                      향후 바이오 시료 분석, 정밀 자기장 맵핑, 고해상도 이미징
                      플랫폼 확장으로 이어지는 연구 흐름을 보여주는 데 초점을
                      두었습니다.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {overviewCards.map((item) => (
                    <FeatureCard key={item.title} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 이동헌교수님 */}


<section
  id="prof-lee"
  className="scroll-mt-32 rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg"
>
</section>
          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="mt-4 rounded-[33px] bg-white px-4 py-4 md:px-10 md:py-10">
              <div className="mt-4 rounded-[28px] border border-zinc-200 bg-white px-4 py-8 md:px-10 md:py-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                      PROFESSOR
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.4rem] md:leading-[1.2]">
                      이동헌 교수
                    </h2>

                    <p className="mt-4 text-lg font-medium text-zinc-700">
                      세부1 연구책임자
                    </p>

                    <p className="mt-4 text-[15px] leading-7 text-zinc-500">
                      고려대학교 물리학과 / Quantum Sensing & Imaging Lab
                    </p>

                    <p className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]">
                      연락처 - donghun@korea.ac.kr
                    </p>
                  </div>

                  <div className="ml-auto flex-none">
                    <div
                      className="overflow-hidden rounded-[10px] border border-zinc-300 bg-zinc-100 shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
                      style={{ width: "130px" }}
                    >
                      <img
                        src="/teams/sub1/prof-Lee.jpg"
                        alt="이동헌 교수 사진"
                        className="block h-auto w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p
                    className="max-w-5xl text-[16px] font-semibold leading-8 text-blue-700 md:text-[17px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    다이아몬드 NV 센터 기반 자기공명 측정과 양자 이미징 플랫폼 구축을
                    중심으로 세부1 연구팀을 이끌고 있습니다.
                  </p>

                  <p
                    className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    세부1 연구팀에서는 NV 센터 기반 자기장 측정과 고해상도 이미징
                    플랫폼을 실험적으로 구현하고, 연구 장비 구축과 응용 방향 설정을
                    함께 주도하고 있습니다.
                  </p>
                </div>

                <div className="mt-8 h-2 w-28 rounded-full bg-[#4CC9F0]" />

                <div className="mt-12 border-t border-zinc-200 pt-8">
                  <div className="grid gap-x-14 md:grid-cols-2">
                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        직위
                      </p>
                      <p className="text-[15px] leading-8 text-zinc-700">
                        세부1 연구책임자
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        소속
                      </p>
                      <p className="text-[15px] leading-8 text-zinc-700">
                        고려대학교 물리학과
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        연구분야
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        다이아몬드 NV 센터 기반 양자센싱 및 이미징 실험 연구
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        역할
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        세부1 연구 총괄, 장비 구축 방향 설정, 실험 플랫폼 운영
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        연구 키워드
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        Quantum Sensing, Diamond NV Center, Nano / Micro MRI,
                        Wide-field Imaging
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        응용 방향
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        정밀 자기장 측정, 시료 기반 이미징, 양자센서 플랫폼 검증
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                <div className="flex flex-col gap-4 border-b border-zinc-200 pb-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      EQUIPMENT
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                      Wide-field NV Magnetic Imaging System
                    </h3>

                    <p className="mt-3 text-sm font-semibold text-blue-700">
                      핵심 이미징 장비
                    </p>

                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      세부1 연구팀의 대표 이미징 장비로, 시료 표면의 자기장 분포를
                      넓은 시야에서 정밀하게 측정할 수 있는 시스템입니다.
                    </p>
                  </div>

                  <div className="mb-4 rounded-2xl bg-blue-50 px-8 py-4 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    세부1 핵심 장비
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub1/figure1.png"
                      alt="세부1 연구팀 NV 이미징 시스템 전경"
                      className="block h-auto w-full object-cover"
                    />
                  </div>

                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub1/figure2.png"
                      alt="세부1 연구팀 NV 이미징 광학 모듈"
                      className="block h-auto w-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <div className="rounded-[26px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        장비 설명
                      </h4>

                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        광학 현미경, 레이저 여기, 마이크로파 구동부, 자기장 제어 모듈,
                        형광 검출 카메라를 통합한 장비입니다. 장비 구조와 운용 목적을
                        교수님의 연구 방향과 함께 보여주면 세부1 연구팀 페이지에서
                        연구-장비 연결성이 더 명확해집니다.
                      </p>
                    </div>

                    <div className="mt-5 rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        활용 분야
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          나노 · 마이크로 자기장 측정
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          시료 기반 이미징 실험
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          양자센서 플랫폼 검증
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[26px] bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                    <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                      주요 구성 및 스펙
                    </h4>

                    <ul className="mt-4 space-y-4">
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        측정 방식 · Wide-field magnetic imaging
                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        핵심 구성 · Laser / Microwave / Objective / Camera
                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        주요 활용 · 자기장 맵핑, 시료 특성 분석, 양자센서 검증
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

{/* 최원식 교수님 */}

<section
  id="prof-choi"
  className="scroll-mt-32 rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg"
>
</section>

          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="mt-4 rounded-[33px] bg-white px-4 py-4 md:px-10 md:py-10">
              <div className="mt-4 rounded-[28px] border border-zinc-200 bg-white px-4 py-8 md:px-10 md:py-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                      PROFESSOR
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.4rem] md:leading-[1.2]">
                      최원식 교수
                    </h2>

                    <p className="mt-4 text-lg font-medium text-zinc-700">
                      세부1 공동연구자
                    </p>

                    <p className="mt-4 text-[15px] leading-7 text-zinc-500">
                      고려대학교 물리학과 /  (연구실 이름)
                    </p>

                    <p className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]">
                      연락처 - (이메일 주소)
                    </p>

                  </div>

                  <div className="ml-auto flex-none">
                    <div
                      className="overflow-hidden rounded-[10px] border border-zinc-300 bg-zinc-100 shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
                      style={{ width: "130px" }}
                    >
                      <img
                        src="/teams/sub1/prof-Choi.jpg"
                        alt="최원식 교수 사진"
                        className="block h-auto w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p
                    className="max-w-5xl text-[16px] font-semibold leading-8 text-blue-700 md:text-[17px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    (교수님의 한마디)
                  </p>

                  <p
                    className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    (컨소시엄에서의 역할)
                  </p>
                </div>

                <div className="mt-8 h-2 w-28 rounded-full bg-[#4CC9F0]" />

                <div className="mt-12 border-t border-zinc-200 pt-8">
                  <div className="grid gap-x-14 md:grid-cols-2">
                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        직위
                      </p>
                      <p className="text-[15px] leading-8 text-zinc-700">
                        세부1 공동연구자
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        소속
                      </p>
                      <p className="text-[15px] leading-8 text-zinc-700">
                        고려대학교 물리학과
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        연구분야
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        -
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        역할
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        -
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        연구 키워드
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        -
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        응용 방향
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        -
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                <div className="flex flex-col gap-4 border-b border-zinc-200 pb-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      EQUIPMENT
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                      CLASS Set-up
                    </h3>

                    <p className="mt-3 text-sm font-semibold text-blue-700">
                      (장비의 역할)
                    </p>

                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      (장비에 대한 한줄 설명)
                    </p>
                  </div>

                  <div className="mb-4 rounded-2xl bg-blue-50 px-8 py-4 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    세부1 핵심 장비
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub1/-.png"
                      alt="실험 장비 사진"
                      className="block h-auto w-full object-cover"
                    />
                  </div>

                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub1/-.png"
                      alt="실험 장비 사진"
                      className="block h-auto w-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <div className="rounded-[26px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        장비 설명
                      </h4>

                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        (장비에 대한 상세 설명; 구성 요소, 운용 방식, 간단 원리 등)
                      </p>
                    </div>

                    <div className="mt-5 rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        활용 분야
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          -
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          -
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                         -
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[26px] bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                    <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                      주요 구성 및 스펙
                    </h4>

                    <ul className="mt-4 space-y-4">
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        측정 방식 · -
                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        핵심 구성 · -
                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        주요 활용 · -
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>


{/* 정근홍 교수님 */}

<section
  id="prof-jung"
  className="scroll-mt-32 rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg"
>
</section>

          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="mt-4 rounded-[33px] bg-white px-4 py-4 md:px-10 md:py-10">
              <div className="mt-4 rounded-[28px] border border-zinc-200 bg-white px-4 py-8 md:px-10 md:py-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                      PROFESSOR
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.4rem] md:leading-[1.2]">
                      정근홍 교수
                    </h2>

                    <p className="mt-4 text-lg font-medium text-zinc-700">
                      세부1 공동연구자
                    </p>

                    <p className="mt-4 text-[15px] leading-7 text-zinc-500">
                      육군사관학교 /  (연구실 이름)
                    </p>

                    <p className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]">
                      연락처 - (이메일 주소)
                    </p>

                  </div>

                  <div className="ml-auto flex-none">
                    <div
                      className="overflow-hidden rounded-[10px] border border-zinc-300 bg-zinc-100 shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
                      style={{ width: "130px" }}
                    >
                      <img
                        src="/teams/sub1/prof-Jung.jpg"
                        alt="정근홍 교수 사진"
                        className="block h-auto w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p
                    className="max-w-5xl text-[16px] font-semibold leading-8 text-blue-700 md:text-[17px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    (교수님의 한마디)
                  </p>

                  <p
                    className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    (컨소시엄에서의 역할)
                  </p>
                </div>

                <div className="mt-8 h-2 w-28 rounded-full bg-[#4CC9F0]" />

                <div className="mt-12 border-t border-zinc-200 pt-8">
                  <div className="grid gap-x-14 md:grid-cols-2">
                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        직위
                      </p>
                      <p className="text-[15px] leading-8 text-zinc-700">
                        세부1 공동연구자
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        소속
                      </p>
                      <p className="text-[15px] leading-8 text-zinc-700">
                        육군사관학교
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        연구분야
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        -
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        역할
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        -
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        연구 키워드
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        -
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        응용 방향
                      </p>
                      <p
                        className="text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        -
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                <div className="flex flex-col gap-4 border-b border-zinc-200 pb-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      EQUIPMENT
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                      -
                    </h3>

                    <p className="mt-3 text-sm font-semibold text-blue-700">
                      (장비의 역할)
                    </p>

                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      (장비에 대한 한줄 설명)
                    </p>
                  </div>

                  <div className="mb-4 rounded-2xl bg-blue-50 px-8 py-4 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    세부1 핵심 장비
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub1/-.png"
                      alt="실험장비사진"
                      className="block h-auto w-full object-cover"
                    />
                  </div>

                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub1/-.png"
                      alt="실험장비사진"
                      className="block h-auto w-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <div className="rounded-[26px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        장비 설명
                      </h4>

                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        (장비에 대한 상세 설명; 구성 요소, 운용 방식, 간단 원리 등)
                      </p>
                    </div>

                    <div className="mt-5 rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        활용 분야
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          -
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          -
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                         -
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[26px] bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                    <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                      주요 구성 및 스펙
                    </h4>

                    <ul className="mt-4 space-y-4">
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        측정 방식 · -
                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        핵심 구성 · -
                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        주요 활용 · -
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-gradient-to-br from-blue-50 via-cyan-50 to-white px-4 py-8 md:px-10 md:py-10">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                세부1 연구 흐름
              </h2>

              <p
                className="mt-4 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                세부1 연구팀은 양자센싱 원리 검증에서 시작해 이미징 시스템 구축,
                그리고 바이오 · 정밀 측정 응용으로 이어지는 흐름으로 연구를 전개합니다.
              </p>

              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {flowCards.map((item) => (
                  <FeatureCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}