import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import {
  Activity,
  ArrowRight,
  Award,
  Clock3,
  FlaskConical,
  HeartPulse,
  LucideIcon,
  Microscope,
  Package,
  Ruler,
  Target,
  Trophy,
  Zap,
} from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const KEYWORDS = [
  "Research Goals",
  "Stage-wise Roadmap",
  "Nano MRI",
  "Quantum MCG",
 
  "Milestones",
];

const FINAL_GOALS = [
  "나노 양자 MRI 핵심응용기술 및 시스템 개발",
  "심자도 신호 측정 핵심응용기술 및 소형 심자도 개발",
];

const STAGE_GOALS = [
  {
    stage: "1단계",
    sub1Title: "다이아몬드 NV 센터 기반 NMR · MRI 핵심 기술 개발",
    sub1Items: [
      "NMR 신호 측정 양자센싱 기술 개발 및 신호 증폭 기술 개발",
      "나노 · 마이크로 2차원 MRI 이미징 데모",
      "2종 이상 핵스핀 주파수 구분 측정",
    ],
    sub2Title: "양상블 NV 센터 기반 펄스 자기장 신호 측정 기술 개발",
    sub2Items: [
      "양상블 기반 자기장 민감도 향상 및 잡음 제어 기술 개발",
      "자기장 펄스 신호 측정 기술 개발",
      "비삽입 · 패치형 소형 센서 개발",
      "유사 심자도 신호 테스트 진행",
    ],
  },
  {
    stage: "2단계",
    sub1Title: "나노 · 마이크로 NMR · MRI 이미징 데모",
    sub1Items: [
      "NMR 신호 측정 및 신호 증폭 기술 고도화",
      "핵스핀 chemical shift 측정",
      "실험실 환경에서 나노 · 마이크로 MRI 이미징 데모",
    ],
    sub2Title: "심자도 측정 기술 개발 및 테스트 샘플 실험 진행",
    sub2Items: [
      "소형 센서 자기장 민감도 및 시간 분해능 고도화",
      "광섬유 · 내시경 결합 삽입형 소형 센서 개발",
      "실험실 환경에서 테스트 샘플 기반 심자도 신호 측정 데모",
    ],
  },
  {
    stage: "3단계",
    sub1Title: "바이오분야 활용 가능한 나노 · 마이크로 MRI 이미징 장치 개발",
    sub1Items: [
      "패키지화된 MRI 이미징 장치 초기 버전 제작",
      "유사 환경에서 나노 · 마이크로 MRI 이미징 데모",
    ],
    sub2Title: "의료분야 활용 가능한 소형 심자도 개발",
    sub2Items: [
      "소형 심자도 센서 초기 버전 제작",
      "유사 환경에서 생체 테스트 샘플 기반 심자도 신호 측정 데모",
    ],
  },
];

type Metric = {
  icon: LucideIcon;
  label: string;
  value: string;
};

type Phase = {
  phase: string;
  years: string;
  metrics: Metric[];
};



const SUB1_PHASES: Phase[] = [
  {
    phase: "1단계",
    years: "Year 1–3",
    metrics: [
      { icon: Zap, label: "민감도", value: "30 nT/√Hz(단일), 100 nT/√Hz(소규모)" },
      { icon: Ruler, label: "공간분해능", value: "50 nm(단일), 1 μm(소규모)" },
      { icon: Activity, label: "주파수분해능", value: "1000 ppm" },
    ],
  },
  {
    phase: "2단계",
    years: "Year 4–5",
    metrics: [
      { icon: Zap, label: "민감도", value: "10 nT/√Hz 수준 고도화" },
      { icon: Ruler, label: "공간분해능", value: "30 nm / 700 nm 수준" },
      { icon: Activity, label: "주파수분해능", value: "100 ppm 수준" },
    ],
  },
  {
    phase: "3단계",
    years: "Year 6–8",
    metrics: [
      { icon: Zap, label: "민감도", value: "5 nT/√Hz(단일), 30 pT/√Hz(소규모)" },
      { icon: Ruler, label: "공간분해능", value: "10 nm(단일), 500 nm(소규모)" },
      { icon: Package, label: "시스템화", value: "패키지형 MRI 장치로 확장" },
    ],
  },
];

const SUB2_PHASES: Phase[] = [
  {
    phase: "1단계",
    years: "Year 1–3",
    metrics: [
      { icon: Zap, label: "민감도", value: "1000 pT/√Hz" },
      { icon: Clock3, label: "시간분해능", value: "10 ms" },
      { icon: Package, label: "센서 크기", value: "100 cm³(외부), 100 mm²(내부)" },
    ],
  },
  {
    phase: "2단계",
    years: "Year 4–5",
    metrics: [
      { icon: Zap, label: "민감도", value: "300 pT/√Hz" },
      { icon: Clock3, label: "시간분해능", value: "5 ms" },
      { icon: Package, label: "센서 크기", value: "10 cm³(외부), 10 mm²(내부)" },
    ],
  },
  {
    phase: "3단계",
    years: "Year 6–8",
    metrics: [
      { icon: Zap, label: "민감도", value: "100 pT/√Hz" },
      { icon: Clock3, label: "시간분해능", value: "1 ms" },
      { icon: Package, label: "센서 크기", value: "5 cm³(외부), 5 mm²(내부)" },
    ],
  },
];

const SUB1_MILESTONES = [
  "Milestone 1 · 실험실 환경에서 MRI 데모",
  "Milestone 2 · 패키지화된 MRI 장치 v1",
];

const SUB2_MILESTONES = [
  "Milestone 1 · 실험실 환경에서 심자도 신호 측정",
  "Milestone 2 · 소형 심자도 장치 v1 제작",
];

const SUB1_FLOW = [
  {
    icon: FlaskConical,
    title: "분자 · 스핀 감지",
    desc: "고민감도 양자센싱 기반의 NMR 신호 측정 기술 확보",
  },
  {
    icon: Microscope,
    title: "나노 · 마이크로 이미징",
    desc: "세포·시료 기반의 고해상도 MRI 이미징으로 확장",
  },
  {
    icon: Package,
    title: "패키지형 MRI 장치",
    desc: "바이오 응용이 가능한 시스템 형태로 통합 및 고도화",
  },
];

const SUB2_FLOW = [
  {
    icon: HeartPulse,
    title: "펄스 자기장 측정",
    desc: "양상블 NV 센터 기반 심자도 신호 측정 핵심 기술 개발",
  },
  {
    icon: Activity,
    title: "실험실 심자도 데모",
    desc: "테스트 샘플 기반 신호 측정과 시간 분해능 고도화",
  },
  {
    icon: Package,
    title: "소형 심자도 장치",
    desc: "의료 활용을 위한 소형 센서 및 장치 형태로 발전",
  },
];

const FINAL_SUMMARY = [
  {
    badge: "정량 목표",
    items: [
      "세부1: 민감도 5 nT/√Hz, 공간분해능 5 nm, 주파수분해능 10⁻⁶ 수준 지향",
      "세부2: 민감도 100 pT/√Hz, 시간분해능 1 ms, 센서 크기 5 cm³ 수준 달성 지향",
    ],
  },
  {
    badge: "핵심 장치",
    items: [
      "바이오 분석용 나노 MRI 이미징 장치 제작",
      "소형 심자도 센서 제작",
    ],
  },
  {
    badge: "차별화 성과",
    items: [
      "3차원 초고분해능 · 고심도 MRI 이미징 기술 개발",
      "내시경형 심자도 센서 개발",
      "국내 최초 및 세계 최고 수준 성과를 지향하는 핵심 플랫폼 확보",
    ],
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[2px] shrink-0 text-[18px] font-bold leading-none text-blue-700">
            •
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

function MetricRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/90 px-4 py-4 ring-1 ring-white/90">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-blue-50 p-2 text-blue-700">
          <Icon className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-bold text-zinc-900">{label}</p>
          <p
            className="mt-2 text-[14px] leading-7 text-zinc-700 md:text-[15px]"
            style={{ wordBreak: "keep-all" }}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function FlowCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-[26px] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] ring-1 ring-zinc-200/80">
      <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
        <Icon className="h-6 w-6" />
      </div>

      <h4 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
        {title}
      </h4>

      <p
        className="mt-4 text-[15px] leading-8 text-zinc-700"
        style={{ wordBreak: "keep-all" }}
      >
        {desc}
      </p>
    </div>
  );
}

function PhaseRoadmap({
  phases,
  panelIcon: PanelIcon,
}: {
  phases: Phase[];
  panelIcon: LucideIcon;
}) {
  return (
    <div className="mt-8 rounded-[32px] bg-gradient-to-br from-white via-slate-50/95 to-blue-50/35 p-4 ring-1 ring-slate-200/80 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:p-6">
      <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)_72px_minmax(0,1fr)] md:items-center">
        {phases.map((phase, index) => (
          <div key={phase.phase} className="contents">
            <div className="rounded-[28px] bg-white/90 px-6 py-6 ring-1 ring-slate-200/80 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    {phase.phase}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                    {phase.years}
                  </h3>
                </div>

                <div className="rounded-2xl bg-blue-50 p-3 text-blue-700 ring-1 ring-blue-100">
                  <PanelIcon className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {phase.metrics.map((metric) => (
                  <MetricRow
                    key={`${phase.phase}-${metric.label}`}
                    icon={metric.icon}
                    label={metric.label}
                    value={metric.value}
                  />
                ))}
              </div>
            </div>

            {index < phases.length - 1 && (
              <div className="flex items-center justify-center px-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-500 text-white shadow-[0_12px_24px_rgba(37,99,235,0.28)] ring-1 ring-blue-300/40">
                  <ArrowRight className="h-7 w-7" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      

      <div className="space-y-4 md:hidden">
        {phases.map((phase, index) => (
          <div key={phase.phase}>
            <div className="rounded-[28px] bg-white/90 px-6 py-6 ring-1 ring-slate-200/80 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    {phase.phase}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                    {phase.years}
                  </h3>
                </div>

                <div className="rounded-2xl bg-blue-50 p-3 text-blue-700 ring-1 ring-blue-100">
                  <PanelIcon className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {phase.metrics.map((metric) => (
                  <MetricRow
                    key={`${phase.phase}-${metric.label}`}
                    icon={metric.icon}
                    label={metric.label}
                    value={metric.value}
                  />
                ))}
              </div>
            </div>

            {index < phases.length - 1 && (
              <div className="mt-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-500 text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] ring-1 ring-blue-300/40">
                  <ArrowRight className="h-6 w-6 rotate-90" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TopicsGoalPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="topics" pageKey="topics_goal">
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
              RESEARCH GOALS
            </p>

           <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              최종 목표와 단계별 목표 개관
              
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              본 페이지는 컨소시엄의 총괄 연구 목표를 단계별로 정리하고
              세부1과 세부2가 어떤 성과지표와 마일스톤을 향해 진행되는지
              한눈에 보여주도록 구성했습니다.
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
              <SectionHeader number="01" label="ROADMAP OVERVIEW" />

              <div className="rounded-[30px] bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-7 ring-1 ring-zinc-200">
                <div className="mt-4 flex items-center gap-3">
                  <div className="rounded-2xl bg-blue-700 p-3 text-white">
                    <Target className="h-6 w-6" />
                  </div>

                  <div className="pt-1">
                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      FINAL GOALS
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                      최종 목표
                    </h2>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {FINAL_GOALS.map((goal) => (
                    <div
                      key={goal}
                      className="rounded-[24px] bg-white px-5 py-5 shadow-[0_14px_30px_rgba(15,23,42,0.06)] ring-1 ring-zinc-200/80"
                    >
                      <p
                        className="text-[16px] font-semibold leading-8 text-zinc-800 md:text-[17px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {goal}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-6">
                {STAGE_GOALS.map((row) => (
                  <div
                    key={row.stage}
                    className="grid gap-4 lg:grid-cols-[130px_minmax(0,1fr)_minmax(0,1fr)]"
                  >
                    <div className="rounded-[24px] bg-blue-700 px-4 py-6 text-center text-white shadow-sm">
                      <p className="text-sm font-bold uppercase tracking-[0.18em]">STEP</p>
                      <p className="mt-4 text-2xl font-semibold">{row.stage}</p>
                    </div>

                    <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                        세부1 과제
                      </p>

                      <h3
                        className="mt-4 text-xl font-semibold tracking-tight text-zinc-950 md:text-2xl"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {row.sub1Title}
                      </h3>

                      <BulletList items={row.sub1Items} />
                    </div>

                    <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                        세부2 과제
                      </p>

                      <h3
                        className="mt-4 text-xl font-semibold tracking-tight text-zinc-950 md:text-2xl"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {row.sub2Title}
                      </h3>

                      <BulletList items={row.sub2Items} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-gradient-to-br from-blue-50 via-cyan-50 to-white px-7 py-8 md:px-10 md:py-10">
              <SectionHeader number="02" label="SUB-TASK 1" />

              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    DETAIL 1
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    세부1 · 나노 MRI 단계별 목표와 성과지표
                  </h2>
                </div>

                <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                  Nano MRI Performance Roadmap
                </div>
              </div>

              <PhaseRoadmap phases={SUB1_PHASES} panelIcon={Microscope} />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {SUB1_MILESTONES.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[26px] bg-white px-6 py-5 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.06)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-rose-50 p-3 text-rose-700">
                        <Award className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-700">
                          Milestone {index + 1}
                        </p>
                        <p
                          className="mt-2 text-[15px] font-semibold leading-7 text-zinc-900"
                          style={{ wordBreak: "keep-all" }}
                        >
                          {item.replace(`Milestone ${index + 1} · `, "")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {SUB1_FLOW.map((item) => (
                  <div key={item.title}>
                    <FlowCard icon={item.icon} title={item.title} desc={item.desc} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <SectionHeader number="03" label="SUB-TASK 2" />

              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    DETAIL 2
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    세부2 · 소형 양자 심자도 단계별 목표와 성과지표
                  </h2>
                </div>

                <div className="rounded-2xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                  Quantum MCG Performance Roadmap
                </div>
              </div>

              <PhaseRoadmap phases={SUB2_PHASES} panelIcon={HeartPulse} />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {SUB2_MILESTONES.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[26px] bg-white px-6 py-5 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.06)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-rose-50 p-3 text-rose-700">
                        <Award className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-700">
                          Milestone {index + 1}
                        </p>
                        <p
                          className="mt-2 text-[15px] font-semibold leading-7 text-zinc-900"
                          style={{ wordBreak: "keep-all" }}
                        >
                          {item.replace(`Milestone ${index + 1} · `, "")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {SUB2_FLOW.map((item) => (
                  <div key={item.title}>
                    <FlowCard icon={item.icon} title={item.title} desc={item.desc} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <SectionHeader number="04" label="FINAL OUTCOMES" />

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem] md:leading-[1.2]">
                최종 목표 및 주요 성과물
              </h2>

              <p
                className="mt-5 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                최종 단계에서는 세부1과 세부2의 정량 성능 목표를 고도화하는 동시에 
                실제 장치와 플랫폼을 구현하여 바이오 · 의료 응용으로 이어질 수 있는
                대표 성과를 확보하는 것을 목표로 합니다.
              </p>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {FINAL_SUMMARY.map((block) => (
                  <div
                    key={block.badge}
                    className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                  >
                    <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
                      {block.badge}
                    </div>

                    <BulletList items={block.items} />
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] bg-gradient-to-br from-slate-50 to-blue-50 px-5 py-5 ring-1 ring-zinc-200 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-7 md:py-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      GOALS
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                      논문 · 특허 · 기술이전/창업 목표
                    </h3>
                    
                  </div>

                  
                </div>

                <div className="mt-6 overflow-hidden rounded-[24px] border border-zinc-200 bg-white p-3 md:p-4">
                  <img
                    src="/topics/goal/goals.png"
                    alt="총괄 연구 목표 성과 이미지"
                    className="block h-auto w-full rounded-[18px] object-contain"
                  />
                </div>
              </div>

              <div className="mt-8 rounded-[28px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Trophy className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      OUTCOME DIRECTION
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                      지향하는 성과 수준
                    </h3>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[22px] bg-slate-50 px-5 py-5 ring-1 ring-slate-200/80">
                    <p className="text-base font-bold text-zinc-950">세부1 중심 성과</p>
                    <p
                      className="mt-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      바이오 분석용 나노 MRI 이미징 장치와 3차원 초고분해능 · 고심도
                      MRI 이미징 기술을 확보하여 세계 최고 수준의 정밀 이미징
                      플랫폼으로 확장하는 것을 목표로 합니다.
                    </p>
                  </div>

                  <div className="rounded-[22px] bg-slate-50 px-5 py-5 ring-1 ring-slate-200/80">
                    <p className="text-base font-bold text-zinc-950">세부2 중심 성과</p>
                    <p
                      className="mt-4 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      소형 심자도 센서와 내시경형 심자도 센서를 구현하여 기존보다
                      더 유연한 의료 적용 가능성과 국내 최초 수준의 응용 장치 개발을
                      지향합니다.
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