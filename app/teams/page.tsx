import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import {
  Users,
  UserRound,
  Building2,
  Microscope,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

export default function TeamsPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="teams" pageKey="teams">
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
              RESEARCH TEAMS
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.12]">
              컨소시엄 연구팀을 소개합니다
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              본 페이지는 컨소시엄을 구성하는 교수진, 연구실별 연구팀, 그리고
              세부1·세부2 연구 흐름을 전체적으로 소개하는 페이지입니다.
              <br />
              각 연구팀의 역할과 연구 방향을 한눈에 살펴보고, 세부 탭에서 보다
              자세한 내용을 확인할 수 있도록 구성했습니다.
            </p>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="rounded-[28px] bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-6 ring-1 ring-zinc-200">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-700 p-3 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      OVERVIEW
                    </p>
                    <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
                      연구팀 전체 개요
                    </h1>
                  </div>
                </div>

                <p
                  className="mt-4 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                  style={{ wordBreak: "keep-all" }}
                >
                  컨소시엄 연구팀은 양자센서 핵심 기술을 중심으로 세부1과 세부2가
                  서로 다른 연구 목표를 수행하면서도, 공통 기반 기술과 인력 협업
                  구조를 공유하는 방식으로 운영됩니다. 세부1은 다이아몬드 NV 센터
                  기반의 나노 · 마이크로 MRI와 이미징 플랫폼 구축에 집중하고,
                  세부2는 소형 심자도 센서 개발과 신호복원 기술을 중심으로 연구를
                  전개합니다.
                </p>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Microscope className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">
                    세부1 연구팀
                  </h3>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    다이아몬드 NV 센터 기반의 나노 · 마이크로 MRI 핵심 기술과
                    이미징 시스템 구축을 중심으로 연구를 수행합니다.
                  </p>
                </div>

                <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">
                    세부2 연구팀
                  </h3>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    양자센싱 기반 심자도 측정을 목표로 외부 패치형 및 내시경형
                    소형 센서와 신호복원 기술을 함께 개발합니다.
                  </p>
                </div>

                <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">
                    연구실 기반 협력 구조
                  </h3>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    고려대학교, KRISS, UNIST, 조선대학교, 육군사관학교 등 참여
                    기관이 연구실 단위로 연결되어 공동 연구를 수행합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-blue-700 p-3 text-white">
                      <UserRound className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                        PROFESSORS
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                        교수진 구성
                      </h2>
                    </div>
                  </div>

                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    교수진 구성 탭에서는 참여 교수진의 소속, 전문분야, 참여 세부과제를
                    중심으로 연구진을 소개합니다. <br/>각 연구자의 상세 역할과 핵심 장비는
                    세부 연구팀 페이지에서 이어서 확인할 수 있습니다.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-8">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      이동헌 교수
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      최원식 교수
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      정근홍 교수
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      심정현 박사
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      김제형 교수
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      명노준 교수
                    </span>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/teams/professors"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      교수진 구성 보기
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-blue-700 p-3 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                        MEMBERS
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                        연구팀 구성
                      </h2>
                    </div>
                  </div>

                  

                  <div className="mt-4 grid gap-x-6 gap-y-4 md:grid-cols-3">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      고려대학교 이동헌 연구팀
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      고려대학교 최원식 연구팀
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      육군사관학교 정근홍 연구팀
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      KRISS 심정현 연구팀
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      UNIST 김제형 연구팀
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-center font-semibold text-zinc-700">
                      조선대학교 명노준 연구팀
                    </span>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/teams/members"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      연구팀 구성 보기
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-700 p-3 text-white">
                  <Microscope className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    SUB-TEAMS
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    세부 연구팀 개요
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    SUB-TEAM 1
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    세부1 연구팀
                  </h3>

                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    세부1 연구팀은 다이아몬드 NV 센터 기반의 나노 · 마이크로 MRI
                    핵심 기술 개발과 이미징 시스템 구축을 중심으로 연구를 수행합니다.
                    대표 교수진과 핵심 장비를 함께 제시하여 연구 방향과 장비 구축
                    현황을 한 흐름으로 이해할 수 있도록 구성되어 있습니다.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Diamond NV Center
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Nano / Micro MRI
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Imaging Platform
                    </span>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/teams/sub1"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      세부1 연구팀 보기
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    SUB-TEAM 2
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    세부2 연구팀
                  </h3>

                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    세부2 연구팀은 심자도 측정이 가능한 양자센싱 핵심 기술을 개발하고,
                    높은 민감도와 시간분해능을 동시에 확보하는 것을 목표로 합니다.
                    외부 패치형 센서와 내시경형 센서를 함께 개발하고, Machine Learning
                    기반 신호복원까지 연결해 차세대 양자 심자도 센싱 기술로 확장합니다.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Compact MCG
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Patch Sensor
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Signal Recovery
                    </span>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/teams/sub2"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      세부2 연구팀 보기
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-700 p-3 text-white">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    LAB NETWORK
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    참여 연구실 네트워크
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    LAB 01
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    고려대학교 이동헌 연구팀
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    Quantum Sensing & Imaging Lab
                  </p>
                  <p
                    className="mt-5 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    다이아몬드 NV 센터 기반 양자센싱과 나노 · 마이크로 MRI 기술을
                    중심으로 세부1의 핵심 플랫폼 연구를 수행합니다.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      박사후연구원 1명
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      대학원생 13명 (+4명 예정)
                    </span>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    LAB 02
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    고려대학교 최원식 연구팀
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    고려대학교
                  </p>
                  <p
                    className="mt-5 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    양자센싱 및 이미징 응용 분야에서 협력 연구를 수행하며 세부1의
                    공동연구를 지원하는 연구실입니다.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      연구교수 2명
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      대학원생 3명
                    </span>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    LAB 03
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    육군사관학교 정근홍 연구팀
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    육군사관학교
                  </p>
                  <p
                    className="mt-5 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    양자센서 응용 기술과 장치 개발 방향을 함께 모색하며 세부1 공동
                    연구에 참여하는 연구실입니다.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      박사후연구원 1명 예정
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      석사/학사후연구원 2명
                    </span>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    LAB 04
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    KRISS 심정현 연구팀
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    한국표준과학연구원
                  </p>
                  <p
                    className="mt-5 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    세부2의 핵심 연구 주체로서 소형 심자도 센서 개발과 양자센싱
                    기반 심장 자기장 계측 기술을 중심으로 연구를 수행합니다.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      책임·선임급 연구원 4명
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      대학원생 1명
                    </span>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    LAB 05
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    UNIST 김제형 연구팀
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    UNIST 물리학과
                  </p>
                  <p
                    className="mt-5 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    양자센서 기반 신호 처리와 소형 심자도 기술의 고도화에 기여하며
                    세부2 공동연구를 수행하는 연구실입니다.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      박사후연구원 1명
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      대학원생 3명
                    </span>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    LAB 06
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    조선대학교 명노준 연구팀
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    조선대학교 물리교육학과
                  </p>
                  <p
                    className="mt-5 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    소형 심자도 기술의 연구 협력과 응용 확장 방향을 함께 추진하며
                    세부2 공동연구에 참여하는 연구실입니다.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      박사후연구원 1명 예정
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      대학원생 1명
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}