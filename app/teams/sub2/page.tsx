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
    title: "양자센싱 핵심 필요",
    description:
      "심자도 신호를 측정할 수 있는 높은 민감도와 다양한 파형을 구분할 수 있는 시간분해능 확보를 핵심 목표로 합니다.",
  },
  {
    icon: Wrench,
    title: "소형 센서 제작",
    description:
      "비침습·비접촉 외부 패치형 센서와 심장 근거리 측정이 가능한 내시경형 센서를 함께 개발합니다.",
  },
  {
    icon: Package,
    title: "응용 확장",
    description:
      "신호복원, 의료 진단 활용, 생체 환경 검증까지 연결하여 차세대 심자도 센싱 플랫폼으로 확장합니다.",
  },
];

const flowCards: FeatureCardItem[] = [
  {
    icon: Microscope,
    title: "민감도 · 시간분해능 향상",
    description:
      "양방분 NV 센터 기반 심자도 측정을 위해 고감도 펄스 센싱과 빠른 시간분해능 확보 기술을 고도화합니다.",
  },
  {
    icon: Package,
    title: "외부패치형 센서 제작",
    description:
      "비침습·비접촉 측정이 가능한 소형 외부 패치형 심자도 센서를 개발하여 상온 구동형 플랫폼으로 확장합니다.",
  },
  {
    icon: Wrench,
    title: "내시경형 소형 센서 개발",
    description:
      "광원·마이크로회로·센서 구조를 집적한 내시경형 소형 심자도 센서를 개발해 심장 근거리 측정을 구현합니다.",
  },
  {
    icon: FlaskConical,
    title: "신호 복원",
    description:
      "Machine Learning 기반 파형 예측과 신호 복원 기술을 적용해 민감도·분해능을 높이고 측정 시간 단축까지 연결합니다.",
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

export default function TeamsSub2Page() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="teams" pageKey="teams_sub2">
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
              SUB-TEAM 2
            </p>

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              세부2 연구팀과 핵심 장비를 함께 소개합니다
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              세부2 연구팀의 연구 방향과 참여 교수진, 핵심 장비 및 연구 흐름을 소개합니다.
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
                        세부2 연구팀 소개
                      </h2>
                    </div>
                  </div>

                  <div className="mt-4 mb-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                      style={{ wordBreak: "keep-all" }}
                    >
                      세부2 연구팀은 심자도 측정이 가능한 양자센싱 핵심 기술을 개발하고,
                      높은 민감도와 빠른 시간분해능을 동시에 확보하는 것을 목표로 합니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                      style={{ wordBreak: "keep-all" }}
                    >
                      이를 위해 비침습·비접촉 외부 패치형 심자도 센서와 심장 근거리 측정이
                      가능한 내시경형 센서를 함께 개발하여 소형화된 심자도 측정 플랫폼을
                      구축합니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                      style={{ wordBreak: "keep-all" }}
                    >
                      나아가 신호복원과 의료 진단 활용까지 연결해 기존 심자도 기술의 한계를
                      넘어서는 차세대 양자 심자도 센싱 기술과 응용 가능성을 확장하고자
                      합니다.
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

           {/* 심정현교수님 */}


           <section
  id="prof-sim"
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
                      심정현 교수
                    </h2>

                    <p className="mt-4 text-lg font-medium text-zinc-700">
                      세부2 연구책임자
                    </p>

                    <p className="mt-4 text-[15px] leading-7 text-zinc-500">
                      한국표준과학연구원 / (연구실 이름)
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
                        src="/teams/sub2/prof-sim.png"
                        alt="심정현 교수 사진"
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
                        세부2 연구책임자
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        소속
                      </p>
                      <p className="text-[15px] leading-8 text-zinc-700">
                        한국표준과학연구원 
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
                      (장비 이름)
                    </h3>

                    <p className="mt-3 text-sm font-semibold text-blue-700">
                      
                    </p>

                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      
                      (장비 역할 설명); 세부2 연구팀의 (장비 이름)은 (장비 설명). 이 장비를 활용하여 (활용 분야) 등을 연구할 예정입니다.
                    </p>
                  </div>

                  <div className="mb-4 rounded-2xl bg-blue-50 px-8 py-4 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    세부2 핵심 장비
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub2/-.png"
                      alt="장비사진"
                      className="block h-auto w-full object-cover"
                    />
                  </div>

                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub2/-.png"
                      alt="장비사진"
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

{/* 김제형 교수님 */}


<section
  id="prof-kim"
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
                      김제형 교수
                    </h2>

                    <p className="mt-4 text-lg font-medium text-zinc-700">
                      세부2 공동연구자
                    </p>

                    <p className="mt-4 text-[15px] leading-7 text-zinc-500">
                      UNIST 물리학과 /  (연구실 이름)
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
                        src="/teams/sub2/prof-kim.jpg"
                        alt="김제형 교수 사진"
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
                        세부2 공동연구자
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        소속
                      </p>
                      <p className="text-[15px] leading-8 text-zinc-700">
                        UNIST 물리학과
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
                      (장비이름)
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
                    세부2 핵심 장비
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub2/-.png"
                      alt="실험 장비 사진"
                      className="block h-auto w-full object-cover"
                    />
                  </div>

                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub2/-.png"
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


{/* 명노준 교수님 */}

<section
  id="prof-myeong"
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
                      명노준 교수
                    </h2>

                    <p className="mt-4 text-lg font-medium text-zinc-700">
                      세부2 공동연구자
                    </p>

                    <p className="mt-4 text-[15px] leading-7 text-zinc-500">
                      조선대학교 /  (연구실 이름)
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
                        src="/teams/sub2/prof-myeong.jpg"
                        alt="명노준 교수 사진"
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
                        세부2 공동연구자
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
                      <p className="pt-1 text-[15px] font-bold text-zinc-950">
                        소속
                      </p>
                      <p className="text-[15px] leading-8 text-zinc-700">
                        조선대학교 물리교육학과
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
                    세부2 핵심 장비
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
                세부2 연구 흐름
              </h2>

              <p
                className="mt-4 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                세부2 연구팀은 양자센싱 기반 심자도 측정의 핵심 성능을 높이는 데서
                출발해, 외부패치형 및 내시경형 소형 센서 제작, 그리고 Machine Learning
                기반 신호 복원 기술로 이어지는 흐름으로 연구를 전개합니다.
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