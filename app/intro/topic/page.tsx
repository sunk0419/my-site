import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const KEYWORDS = [
  "Nano MRI",
  "Quantum MCG",
  "Single-Spin Sensitivity",
  
  "Biomedical Imaging",
  "High-Resolution Diagnosis",
];

const NANO_LIMITS = [
  "기존 NMR·MRI는 낮은 민감도로 인해 많은 수의 핵스핀이 필요하고, 강한 자기장과 큰 시료 조건에 크게 의존합니다.",
  "공간분해능도 수백 μm에서 mm 수준에 머무는 경우가 많아, 세포·단백질 수준의 미세 분석에는 한계가 있습니다.",
  "강한 자장 시스템과 저온·고가 장비 환경이 요구되어 활용 범위와 접근성이 제한됩니다.",
];

const NANO_POSSIBILITIES = [
  "나노 NMR·MRI는 단일 혹은 극소수 스핀 수준의 높은 민감도를 바탕으로 더 작은 시료 분석이 가능합니다.",
  "약한 자기장과 상온 환경에서도 동작 가능성이 높아 장비 소형화와 활용성 확대에 유리합니다.",
  "세포, 단백질, 대사체 등 바이오 시료의 정밀 분석과 고해상도 이미징으로 이어질 수 있습니다.",
];

const MCG_LIMITS = [
  "기존 심전도(ECG)는 전극 접촉과 피부 상태의 영향을 받기 쉬워 노이즈와 측정 제약이 발생합니다.",
  "기존 SQUID 기반 심자도는 극저온 환경과 대형 장비가 필요해 운용 부담이 큽니다.",
  "국소적 전류 활동이나 미세 병변을 더 정밀하게 보기에는 장비 접근성과 활용 환경의 제약이 존재합니다.",
];

const MCG_POSSIBILITIES = [
  "소형 양자 심자도는 비접촉 방식의 자기장 측정을 기반으로 새로운 심질환 진단 가능성을 엽니다.",
  "상온 동작과 소형 시스템 구성이 가능해 검사 환경을 더 유연하게 만들 수 있습니다.",
  "심전도로 놓치기 쉬운 국소적·간헐적 이상 신호를 정밀하게 포착하는 방향으로 확장될 수 있습니다.",
];

const NANO_APPLICATIONS = [
  "소량 시료 기반의 바이오 분석 장비",
  "대사체·단백질 구조 및 기능 분석",
  "단백질-분자 결합 연구와 신약 개발",
  "뉴런 활동, 분자 회전, 생리 온도 측정 등 고분해능 이미징",
  "반도체·배터리 전류 분포 분석 등 산업 응용",
];

const MCG_APPLICATIONS = [
  "자기장 기반의 새로운 심질환 진단 장비",
  "심전도로 포착하기 어려운 이상 신호 조기 탐지",
  "부정맥·심부전 등 조기 진단 가능성 확대",
  "소아·고위험군 대상의 더 유연한 검사 환경",
  "뇌파·근전도·신경전도 및 소형 자기장 센서 응용 확장",
];

const UTILIZATION_POINTS = [
  "기업 연계와 제작 참여를 통해 산업화 마중물 역할을 수행",
  "바이오·의료 분야의 새로운 측정·진단 시장 개척",
  "양자자기장센싱 기술의 반도체·배터리·환경계측·안보 분야 확장",
  "제품 전시와 홍보를 통해 연구개발 성과의 외연 확대",
  "국내 양자센서 커뮤니티와 연계한 생태계 성장 기반 마련",
];

const IMPACT_POINTS = [
  "양자센서 분야의 국제 경쟁력 확보",
  "바이오·의료 분야의 신시장 개척",
  "정밀 진단 기술을 통한 건강한 국민 삶 기여",
  "국내 양자생태계의 저변 확대와 연구 확산 기여",
];

function SectionHeader({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="mb-7">
      <div className="mb-5 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400" />
      <div className="flex items-center gap-4">
        <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-2xl bg-blue-700 px-3 text-sm font-bold text-white shadow-sm">
          {number}
        </span>
        <span className="text-base font-bold uppercase tracking-[0.18em] text-blue-700 md:text-lg">
          {label}
        </span>
      </div>
    </div>
  );
}

function BulletList({
  items,
  markerColor = "blue",
}: {
  items: string[];
  markerColor?: "blue" | "red" | "slate";
}) {
  const markerClass =
    markerColor === "red"
      ? "bg-red-100 text-red-700"
      : markerColor === "slate"
      ? "bg-slate-100 text-slate-700"
      : "bg-blue-100 text-blue-700";

  return (
    <ul className="space-y-3 md:space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-[7px] inline-flex h-6 min-w-6 items-center justify-center rounded-full text-[13px] font-bold leading-none ${markerClass}`}
          >
            ✓
          </span>

          <p
            className="text-[15px] leading-8 text-zinc-700 md:text-[16px]"
            style={{ wordBreak: "keep-all" }}
          >
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function IntroTopicPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="intro" pageKey="intro_topic">
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
              RESEARCH TOPICS
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[100%]">
              나노 MRI와 소형 양자 심자도로 여는
              차세대 양자센서 응용
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              본 컨소시엄은 다이아몬드 NV 센터 기반 양자센싱 기술을 바탕으로,
              기존 NMR·MRI 및 심자도 기술이 가진 민감도·공간분해능·장비 운용의
              한계를 넘어서는 새로운 연구 주제를 추진하고 있습니다.<br />  핵심 방향은
              고해상도 바이오 분석이 가능한 나노 MRI와, 비접촉·소형화 진단으로
              확장 가능한 양자 심자도 기술의 동시 발전입니다.
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
              <SectionHeader number="01" label="WHY THIS RESEARCH" />

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem] md:leading-[1.2]">
                왜 나노 MRI와 소형 양자 심자도인가?
              </h2>

              <p
                className="mt-4 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                이 연구는 기존 측정 기술의 한계를 단순히 보완하는 수준이 아니라
                더 작은 시료, 더 정밀한 공간 정보, 더 유연한 운용 환경을 가능하게 하는
                차세대 센서 플랫폼을 지향합니다.
              </p>

              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-2xl bg-blue-700 px-3 text-sm font-bold text-white shadow-sm">
                      A
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                        NANO MRI
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
                        고해상도 바이오 분석의 확장
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5">
                    <div className="rounded-[28px] bg-gradient-to-br from-slate-100 via-slate-200/90 to-slate-200 px-6 py-6 ring-1 ring-slate-300/80 shadow-[0_12px_30px_rgba(15,23,42,0.06)] md:px-7 md:py-7">
                        <div className="flex items-center gap-3">
                        <div className="h-8 w-1.5 rounded-full bg-slate-500" />
                        <p className="text-[17px] font-bold tracking-tight text-slate-700 md:text-[18px]">
                            기존 한계
                        </p>
                        </div>

                        <div className="mt-5">
                        <BulletList items={NANO_LIMITS} markerColor="slate" />
                        </div>
                    </div>

                    <div className="rounded-[28px] bg-gradient-to-br from-slate-100 via-slate-200/90 to-slate-200 px-6 py-6 ring-1 ring-blue-200 shadow-[0_14px_32px_rgba(59,130,246,0.10)] md:px-7 md:py-7">
                        <div className="flex items-center gap-3">
                        <div className="h-8 w-1.5 rounded-full bg-blue-600" />
                        <p className="text-[17px] font-bold tracking-tight text-blue-700 md:text-[18px]">
                            새로운 가능성
                        </p>
                        </div>

                        <div className="mt-5">
                        <BulletList items={NANO_POSSIBILITIES} markerColor="blue" />
                        </div>
                    </div>
                    </div>
                </div>

                <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-2xl bg-blue-700 px-3 text-sm font-bold text-white shadow-sm">
                      B
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                        QUANTUM MCG
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
                        비접촉 심자도 진단의 진화
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5">
                    <div className="rounded-[28px] bg-gradient-to-br from-slate-100 via-slate-200/90 to-slate-200 px-6 py-6 ring-1 ring-slate-300/80 shadow-[0_12px_30px_rgba(15,23,42,0.06)] md:px-7 md:py-7">
                        <div className="flex items-center gap-3">
                        <div className="h-8 w-1.5 rounded-full bg-slate-500" />
                        <p className="text-[17px] font-bold tracking-tight text-slate-700 md:text-[18px]">
                            기존 한계
                        </p>
                        </div>

                        <div className="mt-5">
                        <BulletList items={NANO_LIMITS} markerColor="slate" />
                        </div>
                    </div>

                    <div className="rounded-[28px] bg-gradient-to-br from-slate-100 via-slate-200/90 to-slate-200 px-6 py-6 ring-1 ring-blue-200 shadow-[0_14px_32px_rgba(59,130,246,0.10)] md:px-7 md:py-7">
                        <div className="flex items-center gap-3">
                        <div className="h-8 w-1.5 rounded-full bg-blue-600" />
                        <p className="text-[17px] font-bold tracking-tight text-blue-700 md:text-[18px]">
                            새로운 가능성
                        </p>
                        </div>

                        <div className="mt-5">
                        <BulletList items={NANO_POSSIBILITIES} markerColor="blue" />
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <SectionHeader number="02" label="APPLICATION PATHWAYS" />

              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem] md:leading-[1.2]">
                두 축 기술의 핵심 활용 방향
              </h2>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[28px] border border-blue-100 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                  <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                    세부 1 · 나노 MRI 기술
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                    단분자 수준의 바이오 분석과
                    
                    고분해능 이미징
                  </h3>

                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    고감도·고해상도 측정을 통해 소량 바이오 시료 분석, 질병 진단용
                    구조·기능 분석, 신약 개발 연구, 그리고 의료·산업 기반의
                    정밀 이미징 확장으로 연결될 수 있습니다.
                  </p>

                  <div className="mt-4">
                    <BulletList items={NANO_APPLICATIONS} />
                  </div>
                </div>

                <div className="rounded-[28px] border border-blue-100 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                  <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                    세부 2 · 소형 양자 심자도 기술
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                    새로운 심질환 진단 플랫폼과
                    
                    소형 자기장 센서 응용
                  </h3>

                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    심장 자기장 측정 기술의 소형화와 비접촉화를 통해 더 정밀한
                    심질환 진단 가능성을 확보하고, 향후 다양한 생체 신호 및 산업용
                    자기장 센서 분야로의 확장을 기대할 수 있습니다.
                  </p>

                  <div className="mt-4">
                    <BulletList items={MCG_APPLICATIONS} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <SectionHeader number="03" label="UTILIZATION & IMPACT" />

              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem] md:leading-[1.2]">
                활용방안 및 기대효과
              </h2>

              <div className="mt-8 space-y-6">
                <div className="rounded-[28px] border-l-[6px] border-red-700 border-t border-r border-b border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-4xl">
                      <div className="inline-flex rounded-full bg-blue-50 px-5 py-2.5 text-[17px] font-bold tracking-tight text-blue-700 ring-1 ring-blue-100">
                        활용방안
                        </div>
                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        본 연구는 원천기술에 머무르지 않고 바이오·의료·산업 현장으로
                        이어지는 응용 경로를 함께 설계합니다. 장비 개발과 성과 확산,
                        산업 연계, 커뮤니티 형성을 통해 지속 가능한 기술 생태계 구축을
                        목표로 합니다.
                      </p>
                    </div>

                    <div className="shrink-0 rounded-2xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
                      From Lab to Application
                    </div>
                  </div>

                  <div className="mt-4">
                    <BulletList items={UTILIZATION_POINTS} />
                  </div>
                </div>

                <div className="mt-4 rounded-[28px] border-l-[6px] border-blue-700 border-t border-r border-b border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-4xl">
                      <div className="inline-flex rounded-full bg-blue-50 px-5 py-2.5 text-[17px] font-bold tracking-tight text-blue-700 ring-1 ring-blue-100">
                        파급효과
                        </div>  
                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        양자센서 기술의 정밀도와 실용성을 동시에 확보함으로써,
                        학술적 성과뿐 아니라 국가 경쟁력, 신시장 창출, 건강한 사회에
                        기여하는 확장 효과를 기대할 수 있습니다.
                      </p>
                    </div>

                    <div className="shrink-0 rounded-2xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
                      Scientific & Social Impact
                    </div>
                  </div>

                  <div className="mt-4">
                    <BulletList items={IMPACT_POINTS} />
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