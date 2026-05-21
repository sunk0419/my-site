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

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              세부1 연구팀과 핵심 장비를 함께 소개합니다
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              세부1 연구팀의 연구 방향과 참여 교수진, 핵심 장비 및 연구 흐름을 소개합니다.
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
                        src="/teams/sub1/prof-lee.jpg"
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
                        src="/teams/sub1/prof-choi.jpg"
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
                      서강대학교 / AI-Quantum Fusion Chemistry Lab

                    </p>

                    <p className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]">
                      연락처: 02-705-8443 / doas1mind@sogang.ac.kr

                    </p>

                  </div>

                  <div className="ml-auto flex-none">
                    <div
                      className="overflow-hidden rounded-[10px] border border-zinc-300 bg-zinc-100 shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
                      style={{ width: "130px" }}
                    >
                      <img
                        src="/teams/sub1/prof-jung.jpg"
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
                    위탁연구를 담당하면서 다이아몬드기반 양자 플레그십 공동연구에 기여하고있습니다.

                  </p>

                  <p
                    className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    파라수소 기반 초분극 신호 증폭 연구를 통해 다이아몬드 양자센싱에의 적용을 고려하고 있습니다
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
                        서강대학교 화학과

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
                        파라수소 기반 초분극 신호 증폭 연구

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
                        위탁연구

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
                        Parahydrogen, Hyperpolarization, NMR Quantum Sensing

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
                        실시간 물질 감지, 극미량 물질 측정

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
                      50% Parahydrogen Generator
                    </h3>

                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                     장비는 수소와 단열이 잘 되는 액체 질소 탱크, 촉매인 Fe(III) Oxide와 이 촉매를 충진한 구리관으로 구성되어 있습니다.

                    </p>
                  </div>

                
                </div>

                <div className="mt-4">
                  <div className="mx-auto w-full overflow-hidden rounded-[26px] border border-zinc-200 bg-black">
                    <img
                      src="/teams/sub1/jung_eq1.png"
                      alt="정근홍 교수님 장비1"
                      width={1827}
                      height={860}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full object-contain"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <div className="rounded-[26px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        장비 역할 설명
                      </h4>

                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        세부1 연구팀의 50% Parahydrogen은 액체 질소를 이용하여 온도를 78K 까지 낮추어, 상온, 고압으로 저장되어 있는 Orthohydrogen을 촉매인 Fe(III) Oxide와 반응하여 Parahydrogen으로 변환하며, 손쉽고 Portable 하게 사용할 수 있습니다. 이 장비를 활용하여 Parahydrogen을 이용한 초분극 증폭 등을 연구할 예정입니다.


                      </p>
                    </div>

                    <div className="mt-5 rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        활용 분야

                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          초분극 (Hyperpolarization) 연구 (PHIP, SABRE 등), 핵자기공명 (Nuclear Magnetic Resonance) 분광법 감도 향상
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          휴대용(Portable) 스핀 이성질체 변환 시스템 구축
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
                        운용 방식 - : 액체 질소 탱크에 액체 질소를 충전하고 수소 탱크에서 수소를 공급하여 원하는 유량과 압력으로 측정 샘플에 공급하여 초분극 증폭을 발생시킵니다
                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        간단 원리 - 상온에서 25% 불과한 파라수소의 비율은, 온도를 낮출 수록 열역학적으로 파라수소가 더 안정한 상태가 되어 변환되게 됩니다. 단순 온도를 낮출 경우 파라수소로 변환 되는 데 시간이 오래 걸리므로, 관 내부에 Fe(III) 촉매를 채워 넣어 빠르게 변환될 수 있게 합니다.

                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        주요 활용 - 측정 샘플에 50% 파라수소를 설정된 유량과 압력으로 지속 공급하여, NMR 장비의 신호를 증폭시키는 파라수소 생성원으로 활용
                      </li>
                    </ul>
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
                      Automated Microfluidic Hyperpolarization System 
                    </h3>

                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      본 장비는 미세유체 제어 파트(솔레노이드 밸브, 미세유체 채널), 샘플을 이송하는 로봇팔, 샘플을 이송하는 연동펌프와 스펙트럼 측정을 위한 벤치탑 NMR 기기로 구성되어 있습니다.

                    </p>
                  </div>

                
                </div>

                <div className="mt-4">
                  <div className="mx-auto w-full max-w-[1000px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub1/jung_eq2.png"
                      alt="정근홍 교수님 장비2"
                      width={1211}
                      height={777}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full object-contain"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <div className="rounded-[26px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        장비 역할 설명
                      </h4>

                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        세부1 연구팀의 자동화 미세유체 초분극 측정 시스템은 앞서 생성된 고농도 파라수소 가스와 측정 샘플을 미세유체 채널 내에서 정밀하게 혼합, 버블링하여 초분극(Hyperpolarization) 현상을 유도하고, 이를 NMR 기기로 자동 이송하여 스펙트럼을 측정하는 장비입니다. 이 장비를 활용하여 사용자 숙련도와 무관하게 높은 재현성을 갖는 초분극 증폭 기법(PHIP, SABRE 등)을 연구할 예정입니다.

                      </p>
                    </div>

                    <div className="mt-5 rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        활용 분야
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                         초분극 (Hyperpolarization) 기반 고감고 NMR 측정 자동화
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          미세유체 채널을 이용한 정밀 화학 반응 및 실시간 모니터링
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                         고재현성 데이터 확보 플랫폼 구축
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[26px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        운용 방식 및 간단 원리
                      </h4>

                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        파라수소 발생기에서 공급된 가스를 미세유체 채널 내부로 주입하여 샘플과 정밀하게 버블링 및 믹싱을 진행합니다. 이 과정을 통해 샘플의 NMR 신호가 증폭되어 초분극 상태가 유도됩니다. 이후 자동 제어를 통해 밸브와 펌프 및 로봇팔 동작이 연동되어 초분극 완료된 샘플을 NMR 기기로 전송합니다. 파라수소 주입부터 혼합, 이송, 측정에 이르는 전 과정을 자동화하여 인적 오차를 배제하고 실험의 안정성을 극대화 하였습니다.

                      </p>
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
                        측정 방식 - Flow 방식의 수소 가스 연속 공급 및 극저온 냉각 촉매 반응 (상온 Orthohydrogen에서 극저온 50% Parahydrogen로 실시간 변환)

                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        핵심 구성 - 초저온 용기 (액체 질소 보관용 듀어병), 상자성 스핀 변환 촉매 (Fe(III) Oxide) 및 충진용 구리 튜빙, 수소 가스 유량 및 압력 제어 시스템
                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        주요 활용 - 측정 샘플에 50% 파라수소를 설정된 유량과 압력으로 지속 공급하여, NMR 장비의 신호를 증폭시키는 파라수소 생성원으로 활용
                      </li>
                    </ul>
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
                      다채널 초정밀 자동 배합 및 이송 시스템
                    </h3>

                    <p className="mt-3 text-sm font-semibold text-blue-700">
                      자율 주행 실험실(Self-Driving Lab) 구현을 위한 핵심 자동화 모듈
                    </p>

                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      본 시스템은 사용자가 설정한 다변수 레시피(DoE)에 따라 최대 4종의 화학 물질을 정밀하게 자동 배합하고, 이를 NMR 등 분석 장비로 즉각 이송 및 세척하는 장비입니다.  
기존 수작업으로 진행되던 반복적인 화학 물질 배합 및 이송 과정을 100% 자동화한 커스텀 자체 개발 장비입니다
                    </p>
                  </div>

                
                </div>

                <div className="mt-4">
                  <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub1/jung_eq3.png"
                      alt="정근홍 교수님 장비3"
                      width={1994}
                      height={829}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full object-contain"
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
                        구성: 정밀 3축 CNC 스테이지, 4채널 마이크로 정량 토출 펌프(Pico), 이송용 흡입 펌프, 커스텀 5구 트레이 및 통합 제어 SW(Python).
                        <br />
                        원리: UI 패널을 통해 바이알별 목표 투입량(mg)을 설정하면, 장비가 지정된 좌표로 이동하여 정량 토출 후, 자동 이송 노즐을 통해 NMR 장비로 샘플을 다이렉트 주입합니다.
                        <br />
                        특징: 이송 완료 후 지정된 위치에서 호스 내부를 자동 순환 세척하여 교차 오염없이 무인 연속 루프 가동이 가능합니다.

                      </p>
                    </div>

                    <div className="mt-5 rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        활용 분야
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          베이지안 최적화(BO) 알고리즘 연동을 통한 파라수소 유도 양극화 효율 극대화 탐색

                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          극소량 물질 및 최적 반응을 위한 DoE자동화

                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                         Closed-Loop 실험실 구축을 위한 장비

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
                        측정 방식 - Python 기반 Serial 통신을 이용한 3축 G-code 절대 좌표 제어 및 마이크로 펌프 멀티플렉싱 제어.

                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        핵심 구성 - 개조형 3018 CNC 프레임, 4채널 액체 펌프 모듈, 독립 이송/세척 펌프 모듈, Python 기반 마스터 컨트롤 UI.
                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        주요 활용 - 점도/특성이 다른 다양한 용매의 다변수 자동 혼합, 데드 볼륨 최소화 정밀 이송, 오염 없는 분석 장비 주입.
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