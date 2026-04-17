import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const KEYWORDS = [
  "Consortium Structure",
  "Governance",
  "Research Teams",
  "Participating Institutions" 
];

const ORG_POINTS = [
  "총괄책임자를 중심으로 세부 연구팀과 참여기관이 유기적으로 연결된 협력 구조",
  "연구 방향 수립, 과제 운영, 공동 장비 및 응용 전략이 함께 설계되는 체계",
  "원천기술 연구와 바이오·의료 응용을 연결하는 융합형 조직 운영",
];

export default function IntroOrgPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="intro" pageKey="intro_org">
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
              ORGANIZATION OVERVIEW
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.12]">
              컨소시엄 조직도
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              다이아몬드 NV 센터 기반 양자센서 컨소시엄은 총괄책임자를 중심으로
              연구 주제별 세부 연구팀과 참여기관이 협력하는 구조로 운영됩니다.
              이 페이지에서는 컨소시엄의 전체 조직 체계와 역할 연결 구조를
              한눈에 확인할 수 있도록 정리하였습니다.
            </p>

            <div
              className="mt-8 w-full rounded-[26px] p-6 md:mt-16 md:p-7"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div className="flex items-center gap-4">
                <p className="shrink-0 text-sm font-bold uppercase tracking-[0.18em] text-blue-100 md:text-base">
                  KEYWORDS
                </p>
                <div className="h-px flex-1 bg-white/12" />
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {KEYWORDS.map((keyword) => (
                  <span
                    key={keyword}
                    className="inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold text-white"
                    style={{
                      background: "rgba(255,255,255,0.10)",
                      border: "1px solid rgba(255,255,255,0.16)",
                    }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <div className="mb-7">
                <div className="mb-5 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400" />

                <div className="flex items-center gap-4">
                  
                  
                </div>
              </div>

              <div className="rounded-[28px] border border-zinc-200 bg-white px-5 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                      CONSORTIUM STRUCTURE
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.4rem] md:leading-[1.2]">
                      전체 조직 체계
                    </h2>

                    <p
                      className="mt-4 max-w-4xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                      style={{ wordBreak: "keep-all" }}
                    >
                      
                    </p>
                  </div>

                  
                </div>

                <div className="mt-8 overflow-hidden rounded-[24px] border border-zinc-200 bg-gradient-to-br from-slate-50 to-blue-50 p-3 md:p-5">
                  <div className="overflow-auto rounded-[20px] bg-white p-3 shadow-[inset_0_0_0_1px_rgba(228,228,231,0.9)] md:p-5">
                    <img
                      src="/intro/org/org.png"
                      alt="컨소시엄 조직도"
                      className="mx-auto block h-auto w-full max-w-[1200px] object-contain"
                    />
                  </div>
                </div>

                
              </div>

              <div className="mt-8 rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  조직 구성 안내
                </h3>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {ORG_POINTS.map((point, index) => (
                    <div
                      key={point}
                      className="rounded-[24px] border border-zinc-200 bg-gradient-to-br from-white to-slate-50 px-5 py-5"
                    >
                      <div className="inline-flex h-10 min-w-10 items-center justify-center rounded-2xl bg-blue-700 px-3 text-sm font-bold text-white shadow-sm">
                        0{index + 1}
                      </div>

                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}