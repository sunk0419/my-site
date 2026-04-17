import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

export default function TeamsProfessorsPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="teams" pageKey="teams_professors">
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
              PROFESSORS
            </p>

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              참여 교수진을 소개합니다
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              컨소시엄에 참여하는 교수진의 소속, 전문분야, 참여 세부과제를 소개합니다. 
              <br /> 
              각 연구자의 상세 역할과 장비 구성은 세부 연구팀 페이지에서 확인할 수 있습니다.
            </p>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="grid gap-6 md:grid-cols-2">

                
          {/* 이동헌교수님 */}
                <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex items-start gap-5">
                    <div
                      className="overflow-hidden rounded-[12px] border border-zinc-300 bg-zinc-100 shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
                      style={{ width: "120px" }}
                    >
                      <img
                        src="/teams/sub1/prof-Lee.jpg"
                        alt="이동헌 교수 사진"
                        className="block h-auto w-full"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                        PROFESSOR
                      </p>

                      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                        이동헌 교수
                      </h2>

                      <p className="mt-3 text-lg font-medium text-zinc-700">
                        세부1 연구책임자
                      </p>

                      <p className="mt-2 text-[15px] leading-7 text-zinc-500">
                        고려대학교 물리학과
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      다이아몬드 NV 센터 기반 양자센싱 및 나노 · 마이크로 MRI 연구를
                      중심으로 세부1 연구를 이끌고 있습니다.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Quantum Sensing & Imaging
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Diamond NV Center
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Nano / Micro MRI
                    </span>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/teams/sub1#prof-lee"
                      className="inline-flex items-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      자세히 보기
                    </Link>
                  </div>
                </div>



          {/* 최원식교수님 */}
                <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex items-start gap-5">
                    <div
                      className="overflow-hidden rounded-[12px] border border-zinc-300 bg-zinc-100 shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
                      style={{ width: "120px" }}
                    >
                      <img
                        src="/teams/sub1/prof-choi.jpg"
                        alt="최원식 교수 사진"
                        className="block h-auto w-full"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                        PROFESSOR
                      </p>

                      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                        최원식 교수
                      </h2>

                      <p className="mt-3 text-lg font-medium text-zinc-700">
                        세부1 공동연구자
                      </p>

                      <p className="mt-2 text-[15px] leading-7 text-zinc-500">
                        고려대학교 물리학과
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      (컨소시엄에서의 역할 한줄 소개)
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword1
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword2
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword3
                    </span>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/teams/sub1#prof-choi"
                      className="inline-flex items-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      자세히 보기
                    </Link>
                  </div>
                </div>


{/* 정근홍 교수님 */}

                <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex items-start gap-5">
                    <div
                      className="overflow-hidden rounded-[12px] border border-zinc-300 bg-zinc-100 shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
                      style={{ width: "120px" }}
                    >
                      <img
                        src="/teams/sub1/prof-jung.jpg"
                        alt="정근홍 교수 사진"
                        className="block h-auto w-full"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                        PROFESSOR
                      </p>

                      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                        정근홍 교수
                      </h2>

                      <p className="mt-3 text-lg font-medium text-zinc-700">
                        세부1 공동연구자
                      </p>

                      <p className="mt-2 text-[15px] leading-7 text-zinc-500">
                        육군사관학교
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      (컨소시엄에서의 역할 한줄 소개)
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword1
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword2
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword3
                    </span>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/teams/sub1#prof-jung"
                      className="inline-flex items-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      자세히 보기
                    </Link>
                  </div>
                </div>




                <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex items-start gap-5">
                    <div
                      className="overflow-hidden rounded-[12px] border border-zinc-300 bg-zinc-100 shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
                      style={{ width: "120px" }}
                    >
                      <img
                        src="/teams/sub2/prof-Sim.png"
                        alt="심정현 교수 사진"
                        className="block h-auto w-full"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                        PROFESSOR
                      </p>

                      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                        심정현 교수
                      </h2>

                      <p className="mt-3 text-lg font-medium text-zinc-700">
                        세부2 연구책임자
                      </p>

                      <p className="mt-2 text-[15px] leading-7 text-zinc-500">
                        한국표준과학연구원
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      (컨소시엄에서의 역할 한줄 소개)
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Quantum Sensing
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Compact MCG
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Sensor Platform
                    </span>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/teams/sub2#prof-sim"
                      className="inline-flex items-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      자세히 보기
                    </Link>
                  </div>
                </div>

                <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex items-start gap-5">
                    <div
                      className="overflow-hidden rounded-[12px] border border-zinc-300 bg-zinc-100 shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
                      style={{ width: "120px" }}
                    >
                      <img
                        src="/teams/sub2/prof-Kim.jpg"
                        alt="김제형 교수 사진"
                        className="block h-auto w-full"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                        PROFESSOR
                      </p>

                      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                        김제형 교수
                      </h2>

                      <p className="mt-3 text-lg font-medium text-zinc-700">
                        세부2 공동연구자
                      </p>

                      <p className="mt-2 text-[15px] leading-7 text-zinc-500">
                        UNIST 물리학과
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      (컨소시엄에서의 역할 한줄 소개)
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword1
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword2
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword3
                    </span>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/teams/sub2#prof-kim"
                      className="inline-flex items-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      자세히 보기
                    </Link>
                  </div>
                </div>

                <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex items-start gap-5">
                    <div
                      className="overflow-hidden rounded-[12px] border border-zinc-300 bg-zinc-100 shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
                      style={{ width: "120px" }}
                    >
                      <img
                        src="/teams/sub2/prof-myeong.jpg"
                        alt="명노준 교수 사진"
                        className="block h-auto w-full"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                        PROFESSOR
                      </p>

                      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                        명노준 교수
                      </h2>

                      <p className="mt-3 text-lg font-medium text-zinc-700">
                        세부2 공동연구자
                      </p>

                      <p className="mt-2 text-[15px] leading-7 text-zinc-500">
                        조선대학교 물리교육학과
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      (컨소시엄에서의 역할 한줄 소개)
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword1
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword2
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                      keyword3
                    </span>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/teams/sub2#prof-myeong"
                      className="inline-flex items-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      자세히 보기
                    </Link>
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