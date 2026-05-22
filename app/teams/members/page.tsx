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

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              연구실별 연구팀 구성 소개
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
               컨소시엄에 참여하는 각 연구실의 연구진과 학생 구성원을 연구실별로 소개합니다.
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

          {/* 서강대 정근홍 연구팀 */}
          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    LAB 03
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    서강대학교 정근홍 연구팀
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    PI · 정근홍 교수 / AI-Quantum Fusion Chemistry Lab,
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    석사후 연구원 2명
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    대학원생 6명
                  </span>
                </div>
              </div>

              <p
                className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                서강대학교 정근홍 연구팀은 파라수소를 이용하여 초분극 증폭을 통한 NMR 및 양자 센싱 측정 기술을 중심으로 세부1의 실시간 생화학 물질 탐지 연구를 수행합니다. 
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Graduate Student
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Taewoo Lee 
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                   yckwoo@korea.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                     Hyperpolarization of NMR signal with parahydrogen
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Post-Master’s Researcher 
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Bongjin Kim
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    bania24@naver.com
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                     Automation of Experiment System
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
                    PI · 심정현 박사 / KRISS Quantum Magnetic Sensing Group
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    책임 연구원 4명
                  </span>
                 
                </div>
              </div>

              <p
                className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                앙상블 NV 센터를 이용한 자기장 측정 및 이미징 기술을 개발하고 이를 산업에 응용하는 연구를 수행합니다.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Principal Investigator
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Seung-Hwan Do
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    shdo@kriss.re.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Wide-field NV Microscopy (RT & LT)

                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Principal Investigator
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Seong-Joo Lee
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    sj.lee@kriss.re.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      AC magnetic field sensing
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                   Principal Investigator
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Nam-Woong Song
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    nwsong@kriss.re.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                     Photoluminescence & Confocal spectroscopy
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Principal Investigator
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Seong-min Hwang
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    smhwang@kriss.re.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Magnetic inverse problem for current reconstruction

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
                    울산과학기술원  김제형 연구팀
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                    PI · 김제형 교수 / Quantum Photonic Integrated Devices (QUPID) Lab
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    박사후연구원 3명
                  </span>
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    대학원생 8명
                  </span>
                </div>
              </div>

              <p
                className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                고체 양자 구조를 기반으로 높은 활용성의 광집적 양자 스핀/광소자 플랫폼 개발 연구를 수행합니다. 

              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Postdoctoral Researcher
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Dr. Jin Hee Lee 
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    jinheelee@unist.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                     Fiber-integrated quantum sensor
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Ph.D candidate 
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Sangwoo Lee 
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    aeternus96@unist.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Cavity-enhanced quantum devices
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
                    PI · 명노준 교수 / Quantum Transport & Mesoscopic Physics Lab
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                    박사후연구원 3명
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
                다이아몬드 NV 센터 양자상태 거동 이론 계산 및 물리모델 기반 기계학습/심층학습을 통한 양자센싱 최적화를 중심으로 세부1과 세부2의 실험-이론 융합 공동연구를 수행합니다.

              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                


                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Postdoctoral Researcher 
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Myung-Chul Jung 
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    mcjung24@chosun.ac.kr

                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Ab-Initio Calculation, Quantum Information Theory 
                    </p>
                  </div>
                </div>


                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Postdoctoral Researcher 
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Haleem Ud Din 
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    haleem@chosun.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Ab-Initio Calculation, Quantum Materials Science
                    </p>
                  </div>
                </div>


                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Postdoctoral Researcher 
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Sunuk Choe 
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    schoe89@chosun.ac.kr

                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                     Physics-Informed Neural Network Model 
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Master Student 
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    Jihyeon Jeon 
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-700">
                    jhjeon@chosun.ac.kr
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <p className="text-[15px] leading-8 text-zinc-700">
                      Electron Dynamics Theory in NV Center
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