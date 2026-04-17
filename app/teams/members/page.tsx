import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import { Users, Building2, Mail, FlaskConical } from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

export default function TeamsMembersPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="teams" pageKey="teams_members">
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
              RESEARCH MEMBERS
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.12]">
              연구실별 연구팀 구성을 소개합니다
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
               컨소시엄에 참여하는 각 연구실의 연구진과 학생 구성원을 연구실별로 정리한
              페이지입니다. 
              <br />
              주요 참여 인력과 연구 주제를 함께 살펴보며 연구팀의 구성과
              특징을 한눈에 확인할 수 있습니다.
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
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                      연구팀 구성 안내
                    </h2>
                  </div>
                </div>

                <p
                  className="mt-4 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                  style={{ wordBreak: "keep-all" }}
                >
                  본 섹션은 참여 연구실별 인력 구성을 중심으로 연구팀을 소개합니다. 
                  각 구성원의 이름, 직급, 이메일, 연구주제를 텍스트형 카드로 정리하여 연구실별
                  인력 구조와 연구 방향을 쉽고 빠르게 확인할 수 있도록 구성했습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 고려대학교 이동헌 연구팀 */}
          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    LAB 01
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    고려대학교 이동헌 연구팀
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    PI · 이동헌 교수 / Quantum Sensing & Imaging Lab
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    박사후연구원 1명
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    박사후연구원 2명 예정
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    대학원생 13명 (+4명 예정)
                  </span>
                </div>
              </div>

              <p
                className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                고려대학교 이동헌 연구팀은 다이아몬드 NV 센터 기반 양자센싱과
                나노 · 마이크로 MRI 기술을 중심으로 세부1 연구를 수행하고 있습니다.
                
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Postdoctoral Researcher
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    박사후연구원 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    postdoc01@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Diamond NV 센터 기반 자기장 측정 및 신호 증폭 기술 연구
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student01@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Quantum sensing based on diamond NV centers
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 02
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student02@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Nano / Micro MRI imaging platform development
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 03
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student03@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Wide-field imaging and magnetic field mapping
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 04
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student04@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Spin-based sensing and frequency discrimination
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 05
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student05@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Biological sample imaging and platform validation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 고려대학교 최원식 연구팀 */}
          <section className="rounded-[34px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    LAB 02
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    고려대학교 최원식 연구팀
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    PI · 최원식 교수 / 고려대학교
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    연구교수 2명
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    박사후연구원 1명
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    대학원생 3명
                  </span>
                </div>
              </div>

              <p
                className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                고려대학교 최원식 연구팀은 세부 과제 연계 연구를 수행하며, 양자센싱
                및 이미징 응용 분야에서 협력 연구를 추진하는 연구실입니다.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Research Professor
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    연구교수 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    researcher01@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Quantum optics and sensing system integration
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Research Professor
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    연구교수 02
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    researcher02@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Imaging analysis and experimental control
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Postdoctoral Researcher
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    박사후연구원 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    postdoc01@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Solid-state quantum imaging and signal analysis
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student01@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Quantum imaging of solid-state materials
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 02
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student02@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Optical control and materials sensing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 육군사관학교 정근홍 연구팀 */}
          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    LAB 03
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    육군사관학교 정근홍 연구팀
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    PI · 정근홍 교수 / 육군사관학교
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    박사후연구원 1명 예정
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    석사/학사후연구원 2명
                  </span>
                </div>
              </div>

              <p
                className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                육군사관학교 정근홍 연구팀은 컨소시엄 협력 연구를 통해 양자센서
                응용 기술과 장치 개발 방향을 함께 모색하는 연구팀입니다.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Researcher
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    연구원 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    researcher01@kma.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Quantum sensing system operation and test support
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Researcher
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    연구원 02
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    researcher02@kma.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Applied sensing and device verification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* KRISS 심정현 연구팀 */}
          <section className="rounded-[34px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    LAB 04
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    KRISS 심정현 연구팀
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    PI · 심정현 박사 / KRISS
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    책임·선임급 연구원 4명
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    박사후연구원 1명
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    대학원생 1명
                  </span>
                </div>
              </div>

              <p
                className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                KRISS 심정현 연구팀은 세부2의 핵심 연구 주체로서 소형 심자도 센서
                개발과 양자센싱 기반 심장 자기장 계측 기술을 중심으로 연구를 수행합니다.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Senior Researcher
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    책임연구원 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    researcher01@kriss.re.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Compact MCG sensor platform design
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Senior Researcher
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    선임연구원 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    researcher02@kriss.re.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Magnetic sensing and noise control
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Senior Researcher
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    선임연구원 02
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    researcher03@kriss.re.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Sensor integration and measurement system control
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Postdoctoral Researcher
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    박사후연구원 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    postdoc01@kriss.re.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Fiber-based sensing and compact sensor implementation
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student01@kriss.re.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Quantum sensor signal acquisition and analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UNIST 김제형 연구팀 */}
          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    LAB 05
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    UNIST 김제형 연구팀
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    PI · 김제형 교수 / UNIST
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    박사후연구원 1명
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    대학원생 3명
                  </span>
                </div>
              </div>

              <p
                className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                UNIST 김제형 연구팀은 세부2 공동연구자로 참여하며 양자센서 기반
                신호 처리와 소형 심자도 기술의 고도화에 기여하는 연구실입니다.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Postdoctoral Researcher
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    박사후연구원 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    postdoc01@unist.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Machine learning for signal recovery
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student01@unist.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Signal processing for quantum magnetometry
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 02
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student02@unist.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      AI-based waveform prediction and recovery
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 03
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student03@unist.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Data-driven analysis of MCG signals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 조선대학교 명노준 연구팀 */}
          <section className="rounded-[34px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    LAB 06
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    조선대학교 명노준 연구팀
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    PI · 명노준 교수 / 조선대학교 물리교육학과
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    박사후연구원 1명 예정
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    대학원생 1명
                  </span>
                </div>
              </div>

              <p
                className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                조선대학교 명노준 연구팀은 세부2 공동연구자로 참여하며 소형 심자도
                기술의 연구 협력과 응용 확장 방향을 함께 추진하는 연구실입니다.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    학생 01
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    student01@chosun.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Compact sensor applications and validation
                    </p>
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