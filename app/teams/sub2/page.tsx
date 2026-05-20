import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
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
                      울산과학기술원 / Quantum Photonic Integrated  Device (QUPID) Lab. 

                    </p>

                    <p className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]">
                      연락처: 052-217-2212 / jehyungkim@unist.ac.kr / qupid.unist.ac.kr

                    </p>

                  </div>

                  <div className="ml-auto flex-none">
                    <div className="overflow-hidden rounded-[10px] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.10)]">
                      <Image
                        src="/teams/sub2/prof-kim.jpg"
                        alt="김제형 교수 사진"
                        width={260}
                        height={320}
                        sizes="130px"
                        quality={95}
                        className="block h-auto w-[130px] object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p
                    className="max-w-5xl text-[16px] font-semibold leading-8 text-blue-700 md:text-[17px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    체내 삽입이 가능한 내시경 형태의 양자집적 스핀/광소자 개발을 통해 의료진단용 양자 센서를 구현하고자 합니다. 
                  </p>

                  <p
                    className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    세부2에서 다이아몬드 양자 소재와 광섬유 플랫폼을 결합한 초소형 프루브타입의 양자센서를 개발하고 있습니다. 
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
                       울산과학기술원 물리학과 
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
                        광심유 집적형 다이아몬드 양자센서 개발
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
                        세부2 참여 / 실용 양자 센싱 플랫폼 개발  
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
                        Solid-state quantum emitters, Hybrid integration, Fiber-based quantum sensor
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
                        의료진단용, 산업현장용 양자 센서 개발 
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
                      고자기장 무진동 극저온 시스템
                    </h3>

                  

                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      초전도 자석을 활용한 고자기장 인가가 가능하고, 외부 액체 냉매를 사용하지 않고 컴프레서를 활용하여 열교환 방식으로 장기 연속 구동이 가능합니다. 내부에 정밀 scan stage 와 현미경 시스템이 결합되어 있어 고분해능의 이미징과 양자광학 실험 수행이 가능합니다.  

                    </p>
                  </div>

                  
                </div>

                <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                  <img
                    src="/teams/sub2/kim_eq1.png?v=2"
                    alt="0.7 K 폐사이클 저온 냉각장치 사진"
                    width={743}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full object-contain"
                  />
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
                        세부2 연구팀의 고자기장 무진동 극저온 장비(Attodry2100)은 9T 의 고자기장과 1.6 K 정도의 극저온 환경을 제공하여, 다양한 고체 시료의 스핀 특성 분석과 광특성 분석을 가능케 하는 장비입니다. 해당 장비를 활용하여 고체 점결함 소재 및 소자에 대한 특성 분석 및 제어 연구에 활용할 예정입니다.

                      </p>
                    </div>

                    <div className="mt-5 rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        활용 분야
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          단일 고체 양자구조(점결함, 양자점, 이차원 물질) 들에 대한 다차원 분광 실험 및 양자 스핀/광학 실험 수행

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
                        핵심 구성 - 고자기장, 극저온 챔버, 정밀 나노 포지셔닝 insert with 고배율 극저온 대물렌즈, home-made 공초점 현미경 이미징 시스템 


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
                      파장 가변 레이저 시스템 및 단광자 검출 시스템
                    </h3>

                  

                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      파장 가변형 연속발진 레이저 (Toptica)와 함께 파장가변형 피코초 펄스레이저 (Mira900) 는 고체 양자 구조의 상태를 광학적으로 제어할 수 있는 중요한 툴입니다. 
                      고체 양자구조의 에너지가 일정하지 않은 특성에 대응하기 위해 여기 레이저의 파장 또한 제어를 통해 양자구조에 최적회 된 여기광을 사용할 수 있도록 합니다. 또한, 초전도 나노선 기반의 단광자 검출기는 30 Hz 이하의 낮은 dark count, 20 ps 정도의 빠른 response time, 90% 이상의 높은 단광자 측정효율을 갖습니다. 
                    </p>
                  </div>

                  
                </div>

                <div className="mt-4">
                  <div className="mx-auto w-full overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub2/kim_eq7.png"
                      alt="파장 가변 레이저 시스템 및 단광자 검출 시스템 사진"
                      width="1428"
                      height="474"
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
                        세부2 연구팀은 다양한 고체 양자 구조 광제어 및 측정을 위한 레이저 광원과 단광자 검출기를 보유하고 있습니다. 해당 시스템은 고체 양자 구조를 여기시키고, 초기화하며, 광제어하는 역할을 합니다. 또한 고감도 단광자 검출기를 통해 광신호를 높은 감도로 측정하여 높은 수준의 양자광 및 양자센싱 실험을 가능케 합니다. 

                      </p>
                    </div>

                    <div className="mt-5 rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        활용 분야
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          단일 고체 양자구조(점결함, 양자점, 이차원 물질) 들에 대한 광제어 및 광측정 실험 수행

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
                        핵심 구성 - 레이저 헤드, 컨틀로러, 오실레이터, 0.7 K 폐사이클 저온 냉각장치, 4 ch 초전도 단광지 칩


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
                      상온 공초점 ODMR 분석 시스템

                    </h3>

                  

                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      20 nm 정도의 위치 분해능을 가진 정밀 스테이지와 고분해능 광학시스템, 단광자 검출 및 마이크로파 인가 시스템을 결합하여 고체 점결함에 대한 고분해능의 형광 이미징과 스핀특성 분석 실험 수행이 가능합니다.  

                    </p>
                  </div>

                  
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-1">
                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub2/kim_eq5.png"
                      alt="고체 양자구조 광제어 및 광측정 실험 장비 사진"
                      width="642"
                      height="448"
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
                        세부2 연구팀의 상온 공초점 ODMR 측정 시스템은 정밀 스캔 스테이지와 공초점 현미경 시스템 그리고 광자 상관관계 측정 시스템이 결합되어, 다양한 고체 양자구조에 대한 정밀 형광 이미지 측정을 가능케 하고, 마이크로파 인가를 통해 스핀 상태에 따른 형광 세기의 변화를 관찰하는 장비입니다. 
                        해당 장비를 활용하여 상온 동작이 가능한 고체 점결함 소재 및 소자에 대한 특성 분석 및 제어 연구에 활용할 예정입니다.
                      </p>
                    </div>

                    <div className="mt-5 rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        활용 분야
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          상온동작 고체 양자구조들에 대한 고분해능 형광 이미징 측정 및 Optically Detected Magnetic Resonance (ODMR) 특성 분석

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
                        핵심 구성 - 정밀 나노포지셔닝 stage, high NA 기반 고분해능 공초점 현미경, 단광자 검출기, 시그널 발생기 및 증폭기

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
                      조선대학교 / Quantum Transport & Mesoscopic Physics Lab

                    </p>
                    
                    <p className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]">
                      연락처: 062-230-7376 / nmyoung@chosun.ac.kr

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
                    컨소시엄 유일의 이론 연구진으로서 세부2 연구팀은 물론 컨소시엄의 연구를 이론적으로 지원하고 있습니다.

                  </p>

                  <p
                    className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    다이아몬드 NV 센터의 양자상태 이론 계산 및 기계학습/심층학습을 통한 데이터 분석과 물리 모델링을 통해 세부2 연구팀의 양자센싱 최적화 연구에 기여하고 있습니다.

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
                        조선대학교 물리교육과
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
                       고체 기반 큐비트 플랫폼(점결함, 양자점  등) 양자상태 이론 연구 및 물리모형 기반 기계학습/심층학습

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
                       NV 센터 양자센싱 최적화, ML/DL 데이터 프로세싱, 양자 간섭계

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
                        Quantum Interferometer, Quantum Sensing, Low-Dimensional Electronic Systems, Machine/Deep Learning, Ab-Initio Calculations

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
                        물리정보 신경망(Physics-Informed NN)을 통한 양자이미징/신호 복원 및 최적화, 양자센싱 시뮬레이터 및 분석 도구 개발

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
                     병렬 클러스터 서버
                    </h3>

                  
                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      5개 노드 총 480개의 cpu를 활용한 병렬 컴퓨팅을 통해 제1원리 전자구조 계산 및 대규모 수치연산이 효율적으로 실행될 수 있도록 합니다. 이후 컴퓨팅 노드의 증설 및 gpu 추가를 통해 기계학습/심층학습을 위한 머신의 역할도 수행할 예정입니다.

                    </p>
                  </div>

                 
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-1">
                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub2/myeong_eq1.png"
                      alt="실험장비사진"
                      className="block h-auto w-full object-cover"
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
                       세부2 연구팀의 병렬 클러스터 서버는 마스터 노드 1대, 컴퓨팅 노드 5대로 구성되어 있는 병렬 컴퓨팅용 클러스터 서버입니다. 이 장비를 활용하여 다이아몬드 NV 센터의 양자상태 준위의 제1원리 계산 및 대규모 양자 이미징의 기계학습/심층학습 모델개발 등을 연구할 예정입니다.

                      </p>
                    </div>

                    <div className="mt-5 rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        활용 분야
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          제1원리 고체 전자구조 계산
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          대용량 데이터 프로세싱
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                        기계학습/심층학습 모델링
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
                        운용 방식 - 서버 관리자가 사용자 계정관리를 통해 컨소시엄 내의 연구자들에게 서버 접근권한을 부여, 계정 사용자는 bash script를 통해 코딩된 프로그램을 병렬화해 컴퓨팅 노드 cpu 또는 gpu에 전송해 계산 실행, 계산 데이터는 서버 저장장치에 저장되고 필요시 ftp 등을 통해 외부로 전송
                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        핵심 구성 - 마스터 노드 1대, 컴퓨팅 노드 5대

                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        주요 활용 - 양자 센싱 측정을 통한 이미지 또는 데이터의 수집 및 수치연산 실행, 추후 필요시 NAS 서버를 구축해 컨소시엄 내 자유로운 데이터 연동/공유 시스템 구축 예정
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
                     워크스테이션 서버
                    </h3>

                  
                    <p
                      className="mt-4 mb-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >128 코어 cpu를 활용한 멀티 프로세싱 또는 자체 병렬 컴퓨팅을 통해 복잡한 양자상태 다이나믹스 수치연산이 효율적으로 실행될 수 있도록 합니다.

                    </p>
                  </div>

                 
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-1">
                  <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-100">
                    <img
                      src="/teams/sub2/myeong_eq2.png"
                      alt="실험장비사진"
                      className="block h-auto w-full object-cover"
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
                       세부2 연구팀의 워크스테이션 서버는 128 코어 cpu가 장착된 고성능 워크스테이션 컴퓨터입니다. 이 장비를 활용하여 NV 센터의 양자상태 다이나믹스 수치 연산 및 시뮬레이션을 연구할 예정입니다.


                      </p>
                    </div>

                    <div className="mt-5 rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                      <h4 className="text-lg font-semibold tracking-tight text-zinc-950">
                        활용 분야
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          대규모 수치연산
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                          python 프로그래밍
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
                        운용 방식 - 
	                        서버 관리자가 사용자 계정관리를 통해 컨소시엄 내의 연구자들에게 서버 접근권한을 부여, 계정 사용자는 bash script를 통해 코딩된 프로그램을 cpu에 전송해 계산 실행, 계산 데이터는 서버 저장장치에 저장되고 필요시 ftp 등을 통해 외부로 전송

                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        핵심 구성 - 128 코어 cpu

                      </li>
                      <li
                        className="rounded-2xl bg-white px-4 py-4 text-[14px] leading-7 text-zinc-700 ring-1 ring-white shadow-sm md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        주요 활용 - 소규모 또는 중규모 데이터 프로세싱 연산, 병렬 컴퓨팅 또는 ML/DL 연산을 위한 테스트 코드 작성 및 성능 평가
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