import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

export default function IntroGreetingPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="intro" pageKey="intro_greeting">
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
              DIRECTOR&apos;S MESSAGE
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.12]">
              총괄책임자 소개 및 인사말
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              다이아몬드 NV 센터 기반 양자센서 컨소시엄은 양자센서의 원천기술을
              의료·바이오 응용으로 확장하는 융합 연구를 추진하고 있습니다. 이 페이지는
              컨소시엄을 이끄는 총괄책임자의 연구 방향과 비전, 그리고 앞으로의 협력
              메시지를 소개합니다.
            
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
                <span
                  className="inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold text-white"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  Diamond NV Center
                </span>
                <span
                  className="inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold text-white"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  Quantum Sensing
                </span>
                <span
                  className="inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold text-white"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  Biomedical Imaging
                </span>
                <span
                  className="inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold text-white"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  Nano / Micro MRI
                </span>
                <span
                  className="inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold text-white"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  Compact MCG
                </span>
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <div className="mb-7">
                <div className="mb-5 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400" />

                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-2xl bg-blue-700 px-3 text-sm font-bold text-white shadow-sm">
                    01
                  </span>
                  <span className="text-base font-bold uppercase tracking-[0.18em] text-blue-700 md:text-lg">
                    DIRECTOR PROFILE
                  </span>
                </div>
              </div>
                
                <div className="h-2 w-28 rounded-full bg-[#4CC9F0]" />
                <div className="h-2 w-28 rounded-full bg-[#4CC9F0]" />
                
              <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
  <div className="flex items-start justify-between gap-6">
    <div className="min-w-0 flex-1">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
        GENERAL DIRECTOR
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.4rem] md:leading-[1.2]">
        이동헌
      </h2>

      <p className="mt-3 text-lg font-medium text-zinc-700">
        고려대학교 물리학과
      </p>
    </div>

    <div className="shrink-0">
      <div className="overflow-hidden rounded-[10px] border border-zinc-300 bg-zinc-100 shadow-[0_8px_18px_rgba(15,23,42,0.12)]">
        <img
          src="/intro/greeting/figure1.png"
          alt="총괄책임자 사진"
          className="block h-auto w-[92px] object-cover md:w-[108px] lg:w-[120px]"
        />
      </div>
    </div>
  </div>

  <div className="mt-8">
    <p
      className="max-w-5xl text-[16px] font-semibold leading-8 text-blue-700 md:text-[17px]"
      style={{ wordBreak: "keep-all" }}
    >
      다이아몬드 NV 센터 기반 양자센싱 및 이미징 실험 연구를 중심으로,
      원천 물리와 의료·바이오 응용을 연결하는 융합 연구를 수행하고 있습니다.
    </p>

    <p
      className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
      style={{ wordBreak: "keep-all" }}
    >
      본 컨소시엄에서는 고해상도 나노·마이크로 MRI와 소형 양자 심자도 기술을
      함께 고도화하며, 양자센서 플랫폼의 실질적 확장 가능성을 만들어가고 있습니다.
      기초 연구의 성과가 실제 의료·산업 현장의 응용으로 이어질 수 있도록,
      연구 방향과 협력 체계를 함께 설계하고 있습니다.
    </p>
  </div>

   <div className="h-2 w-28 rounded-full bg-[#4CC9F0]" />
  <div className="h-2 w-28 rounded-full bg-[#4CC9F0]" />

  <div className="mt-12 border-t border-zinc-200 pt-8">
  <div className="grid gap-x-14 md:grid-cols-2">
    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
      <p className="pt-1 text-[15px] font-bold text-zinc-950">직위</p>
      <p className="text-[15px] leading-8 text-zinc-700">총괄책임자</p>
    </div>

    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
      <p className="pt-1 text-[15px] font-bold text-zinc-950">소속</p>
      <p className="text-[15px] leading-8 text-zinc-700">고려대학교 물리학과</p>
    </div>

    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
      <p className="pt-1 text-[15px] font-bold text-zinc-950">연구분야</p>
      <p
        className="text-[15px] leading-8 text-zinc-700"
        style={{ wordBreak: "keep-all" }}
      >
        다이아몬드 NV 센터 기반 양자센싱 및 이미징 실험 연구
      </p>
    </div>

    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
      <p className="pt-1 text-[15px] font-bold text-zinc-950">역할</p>
      <p
        className="text-[15px] leading-8 text-zinc-700"
        style={{ wordBreak: "keep-all" }}
      >
        컨소시엄 총괄 운영, 연구 비전 수립, 산학연 협력 체계 구축,
        미래 의료 응용 전략 기획
      </p>
    </div>

    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
      <p className="pt-1 text-[15px] font-bold text-zinc-950">연구 키워드</p>
      <p
        className="text-[15px] leading-8 text-zinc-700"
        style={{ wordBreak: "keep-all" }}
      >
        Quantum Sensing, Diamond NV Center, Biomedical Imaging,
        Nano / Micro MRI, Compact MCG
      </p>
    </div>

    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-x-5 py-3">
      <p className="pt-1 text-[15px] font-bold text-zinc-950">응용 방향</p>
      <p
        className="text-[15px] leading-8 text-zinc-700"
        style={{ wordBreak: "keep-all" }}
      >
        고해상도 바이오 이미징, 정밀 진단 센서, 차세대 양자 의료 응용
      </p>
    </div>
  </div>
</div>
</div>

              <div className="mt-8 rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  주요 활동
                </h3>

                <div className="mt-5 space-y-3 text-[15px] leading-8 text-zinc-700">
                  <p>· 고려대 주관 양자대학원 부원장 (2024~)</p>
                  <p>· 한·미·스위스 양자국제공동연구 연구책임자 (2022~)</p>
                  <p>· 한국양자정보학회 3대 회장 (2026–2027)</p>
                  <p>· 양자과학기술 분야 과기부 장관상 수상 (2023)</p>
                  <p>· 서울시 서울퀀텀캠퍼스 기획위원 (2024)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-gradient-to-br from-blue-50 via-cyan-50 to-white px-7 py-8 md:px-10 md:py-10">
              <div className="mb-7">
                <div className="mb-5 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400" />

                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-2xl bg-blue-700 px-3 text-sm font-bold text-white shadow-sm">
                    02
                  </span>
                  <span className="text-base font-bold uppercase tracking-[0.18em] text-blue-700 md:text-lg">
                    GREETING
                  </span>
                </div>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem] md:leading-[1.2]">
                인사말
              </h2>

              <div className="mt-8 space-y-6 text-[16px] leading-8 text-zinc-700">
                <p style={{ wordBreak: "keep-all" }}>
                  안녕하십니까. 다이아몬드 NV 센터 기반 양자센서 컨소시엄 홈페이지를
                  찾아주신 여러분께 진심으로 감사드립니다.
                </p>

                <p style={{ wordBreak: "keep-all" }}>
                  양자센서 기술은 높은 민감도와 정밀도를 바탕으로 기존 측정 기술이
                  도달하기 어려웠던 영역을 새롭게 열어가고 있습니다. 특히 다이아몬드 NV
                  센터 기반 양자센서는 상온 환경에서도 안정적으로 동작하며, 분자와 세포
                  수준의 고해상도 분석부터 생체 신호 기반 정밀 진단까지 폭넓은 가능성을
                  보여주고 있습니다.
                </p>

                <p style={{ wordBreak: "keep-all" }}>
                  본 컨소시엄은 이러한 가능성에 주목하여 나노·마이크로 MRI와 소형 양자
                  심자도 기술을 함께 발전시키고자 합니다. 이는 단순한 개별 기술 개발을
                  넘어, 원천기술에서 시스템 구현, 바이오·의료 응용, 산업화 기반 조성까지
                  연결하는 통합적 도전입니다.
                </p>

                <p style={{ wordBreak: "keep-all" }}>
                  앞으로도 본 컨소시엄은 양자센서 플랫폼의 실질적 확장과 협력 생태계
                  구축을 통해 미래 의료와 산업의 변화를 이끄는 연구를 지속해 나가겠습니다.
                  여러분의 많은 관심과 성원을 부탁드립니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}