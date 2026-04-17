import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  HeartPulse,
  Microscope,
  Package,
  Sparkles,
  Stethoscope,
  Target,
  Waves,
} from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const KEYWORDS = [
  "Quantum Sensing",
  "Nano MRI",
  "Quantum MCG",
  "Bio Imaging",
  "Medical Application",
];

const OVERVIEW_CARDS = [
  {
    badge: "세부1",
    title: "나노 MRI 및 양자 이미징",
    description:
      "다이아몬드 NV 센터 기반 양자센싱, 양자이미징, 샘플 제어 기술을 통합하여 고감도 NMR·MRI 측정과 초고해상도 이미징 플랫폼을 구축합니다.",
    items: [
      "단분자 수준 민감도 지향",
      "나노·마이크로 공간분해능 확보",
      "초분극 및 microfluidics 기반 샘플 제어",
    ],
    icon: Microscope,
  },
  {
    badge: "세부2",
    title: "소형 양자 심자도 및 의료 응용",
    description:
      "양상블 NV 센터 기반 심자도 신호 측정, 소형 패치형·내시경형 센서 개발, 머신러닝 기반 신호 복원을 통해 의료 적용 가능한 소형 심자도 플랫폼을 개발합니다.",
    items: [
      "펄스 자기장 기반 심자도 측정",
      "외부패치형·내시경형 소형 센서",
      "Machine Learning 기반 신호 복원",
    ],
    icon: HeartPulse,
  },
];

const RESEARCH_STREAMS = [
  {
    title: "초고감도 양자센싱",
    desc: "NV 센터 기반 센싱 기술을 바탕으로 핵스핀 신호와 심자도 펄스 자기장을 정밀하게 측정하는 공통 기반 기술입니다.",
    items: [
      "민감도 향상",
      "주파수·시간 분해능 고도화",
      "상온 구동형 센싱 플랫폼",
    ],
    icon: Sparkles,
  },
  {
    title: "이미징·센서 장치화",
    desc: "세부1은 나노 MRI 이미징 장치로, 세부2는 패치형·내시경형 심자도 센서로 확장되며 장치화와 소형화가 함께 진행됩니다.",
    items: [
      "나노·마이크로 이미징",
      "패치형·내시경형 센서",
      "패키지화 및 시스템화",
    ],
    icon: Package,
  },
  {
    title: "바이오·의료 응용",
    desc: "이미징과 센싱 기술을 실제 바이오 샘플 및 의료 응용으로 연결하고, 신호 해석·복원 기술까지 포함한 활용 플랫폼으로 확장합니다.",
    items: [
      "바이오 샘플 분석",
      "생체·모사 샘플 실험",
      "AI 기반 신호 해석",
    ],
    icon: BrainCircuit,
  },
];

const LINKAGE_CARDS = [
  {
    label: "세부1 중심 축",
    title: "양자센싱 · 양자이미징 · 타겟제어",
    items: [
      "NMR 신호 측정과 화학적 분해능 향상",
      "나노·마이크로 MRI 이미징 확장",
      "초분극 및 샘플 제어를 통한 측정 고도화",
    ],
  },
  {
    label: "통합 방향",
    title: "센싱 → 장치화 → 응용",
    items: [
      "공통 기반은 NV 센터 기반 양자센싱",
      "세부1은 정밀 이미징, 세부2는 소형 심자도 장치로 확장",
      "최종적으로 바이오·의료 활용 플랫폼으로 연결",
    ],
  },
  {
    label: "세부2 중심 축",
    title: "심자도 센싱 · 소형 센서 · 신호 복원",
    items: [
      "고민감도·고시간분해능 심자도 측정",
      "외부패치형 및 내시경형 센서 구현",
      "머신러닝 기반 파형 복원 및 분석",
    ],
  },
];

const IMPACT_CARDS = [
  {
    title: "기초·원천 연구 측면",
    desc: "양자센싱, 초고분해능 이미징, 고시간분해능 자기장 측정 기술을 함께 확보함으로써 차세대 양자계측 플랫폼의 기반을 마련합니다.",
    icon: Target,
  },
  {
    title: "응용·확산 측면",
    desc: "세부1은 바이오 분석용 나노 MRI로, 세부2는 의료 활용 가능한 소형 심자도로 이어져 실제 산업·의료 응용 가능성을 넓힙니다.",
    icon: Stethoscope,
  },
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
      <div className="mb-5 h-2 w-full rounded-full bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400" />
      <div className="mt-4 flex items-center gap-4 pl-6">
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
  textClass = "text-zinc-700",
  iconClass = "text-blue-700",
}: {
  items: string[];
  textClass?: string;
  iconClass?: string;
}) {
  return (
    <ul className="mt-4 space-y-4">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-start gap-3">
          <CheckCircle2
            className={`mt-[3px] h-4 w-4 shrink-0 ${iconClass}`}
            strokeWidth={2.2}
          />
          <p
            className={`text-[15px] leading-7 md:text-[16px] ${textClass}`}
            style={{ wordBreak: "keep-all" }}
          >
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function TopicsOverviewPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="topics" pageKey="topics">
        <div
          className="space-y-16 pb-20 md:space-y-16"
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
              RESEARCH TOPICS
            </p>

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              양자센싱 기반 바이오 · 의료
              
              응용 연구주제 개관
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              본 연구는 다이아몬드 NV 센터 기반 양자센싱 기술을 축으로
              세부1의 나노 MRI·양자이미징 연구와 세부2의 소형 양자 심자도
              연구를 연계하여 바이오 분석과 의료 진단으로 확장 가능한 핵심
              플랫폼을 구축하는 것을 목표로 합니다.
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
            <div className="mt-4 rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <SectionHeader number="01" label="RESEARCH OVERVIEW" />

              <div className="mt-4 rounded-[30px] bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-4 ring-1 ring-zinc-200">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-blue-700 p-3 text-white">
                    <Target className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      OVERVIEW
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                      연구주제 전체 개관
                    </h2>
                    <p
                      className="mt-4 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                      style={{ wordBreak: "keep-all" }}
                    >
                      세부1은 초고해상도 나노 MRI 및 양자이미징 기술을,
                      세부2는 소형 양자 심자도 및 의료 응용 기술을 담당합니다.
                      두 세부과제는 공통적으로 NV 센터 기반 양자센싱을 바탕으로
                      하며 최종적으로는 바이오·의료 현장에서 활용 가능한
                      장치와 응용 플랫폼으로 연결됩니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {OVERVIEW_CARDS.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
                            {card.badge}
                          </div>
                          <h3
                            className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950"
                            style={{ wordBreak: "keep-all" }}
                          >
                            {card.title}
                          </h3>
                        </div>

                        <div className="mt-4 rounded-2xl bg-blue-50 p-3 text-blue-700 ring-1 ring-blue-100">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {card.description}
                      </p>

                      <BulletList items={card.items} />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="mt-4 rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <SectionHeader number="02" label="CORE STREAMS" />

              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    MAIN AXES
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    연구를 구성하는 핵심 축
                  </h2>
                </div>

                <div className="rounded-2xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                  Quantum Sensing-Based Convergence
                </div>
              </div>

              <div className="mt-4 grid gap-5 lg:grid-cols-3">
                {RESEARCH_STREAMS.map((stream) => {
                  const Icon = stream.icon;

                  return (
                    <div
                      key={stream.title}
                      className="mt-4 rounded-[28px] bg-gradient-to-br from-white via-slate-50/95 to-blue-50/35 px-6 py-6 ring-1 ring-slate-200/80 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                    >
                      <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700 ring-1 ring-blue-100">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                        {stream.title}
                      </h3>

                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {stream.desc}
                      </p>

                      <BulletList items={stream.items} />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-gradient-to-br from-blue-50 via-cyan-50 to-white px-7 py-8 md:px-10 md:py-10">
              <SectionHeader number="03" label="DETAIL LINKAGE" />

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                세부1 · 세부2의 연계 구조
              </h2>

              <p
                className="mt-4 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                세부1과 세부2는 각각 다른 응용 분야를 담당하지만, 공통적으로
                양자센싱 기반의 정밀 측정 기술을 바탕으로 하며 장치화와 실제
                활용을 목표로 한다는 점에서 하나의 통합 연구체계를 형성합니다.
              </p>

              <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_90px_minmax(0,1fr)_90px_minmax(0,1fr)] lg:items-stretch">
                <div className="rounded-[28px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_0px_40px_rgba(15,23,42,0.06)]">
                  <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
                    {LINKAGE_CARDS[0].label}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                    {LINKAGE_CARDS[0].title}
                  </h3>
                  <BulletList items={LINKAGE_CARDS[0].items} />
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-500 text-white shadow-[0_12px_24px_rgba(37,99,235,0.28)] ring-1 ring-blue-300/40">
                    <ArrowRight className="h-7 w-7" />
                  </div>
                </div>

                <div
                  className="rounded-[28px] px-6 py-6 shadow-[0_14px_28px_rgba(37,99,235,0.10)] ring-1"
                  style={{
                    background: "linear-gradient(135deg, #E8F1FF 0%, #D9E9FF 100%)",
                    borderColor: "#BCD2F3",
                  }}
                >
                  <div
                    className="inline-flex rounded-full px-4 py-2 text-sm font-bold shadow-sm ring-1"
                    style={{
                      backgroundColor: "#2F5FE8",
                      color: "#FFFFFF",
                      borderColor: "#2A56D7",
                    }}
                  >
                    {LINKAGE_CARDS[1].label}
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#173B78]">
                    {LINKAGE_CARDS[1].title}
                  </h3>

                  <div className="mt-4">
                    <BulletList
                      items={LINKAGE_CARDS[1].items}
                      textClass="text-[#29486F]"
                      iconClass="text-[#2F5FE8]"
                    />
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-500 text-white shadow-[0_12px_24px_rgba(37,99,235,0.28)] ring-1 ring-blue-300/40">
                    <ArrowRight className="h-7 w-7" />
                  </div>
                </div>

                <div className="rounded-[28px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
                    {LINKAGE_CARDS[2].label}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                    {LINKAGE_CARDS[2].title}
                  </h3>
                  <BulletList items={LINKAGE_CARDS[2].items} />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <SectionHeader number="04" label="IMPACT DIRECTION" />

              <div className="flex items-start gap-4">
                <div className="mt-4 rounded-2xl bg-blue-50 p-3 text-blue-700">
                  <Waves className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    연구주제가 지향하는 방향
                  </h2>
                  <p
                    className="mt-4 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    본 연구는 양자센싱 기반의 정밀 계측 기술을 확보하는 데서
                    그치지 않고, 실제 바이오 분석과 의료 진단으로 연결될 수 있는
                    장치 및 응용 기술까지 포함하는 확장형 연구주제로 설계되어
                    있습니다.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {IMPACT_CARDS.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                    >
                      <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700 ring-1 ring-blue-100">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                        {card.title}
                      </h3>

                      <p
                        className="mt-4 text-[15px] leading-8 text-zinc-700"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}