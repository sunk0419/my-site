import Image from "next/image";
import type { ReactNode } from "react";

import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";

const BODY_FONT =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const DISPLAY_FONT =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

type Figure = {
  src: string;
  alt: string;
  caption: string;
};

type Section = {
  id: string;
  label: string;
  title: string;
  body: string[];
  points?: string[];
  figure?: Figure;
};

const hero = {
  eyebrow: "CONSORTIUM OVERVIEW",
  title: "다이아몬드 NV 센터 기반 양자센서 컨소시엄",
  description: (
    <>
      본 컨소시엄은 다이아몬드 NV 센터 기반 양자센서를 플랫폼으로 삼아, 바이오·의료 분야에 활용 가능한 고해상도 나노·마이크로 MRI와
      <br />
      소형 양자 심자도 기술을 함께 개발합니다.
    </>
  ),
  chips: [
    "Diamond NV Center",
    "Quantum Sensing",
    "Nano / Micro MRI",
    "Compact MCG",
  ],
};

const intro = {
  label: "INTRODUCTION",
  title: "컨소시엄 소개",
  paragraphs: [
    "양자센서 연구는 실험실 수준의 원천연구를 넘어, 실제 의료·산업 현장에서 활용 가능한 응용기술과 시스템으로 빠르게 확장되고 있습니다.",
    "본 컨소시엄은 공통 양자센서 플랫폼 기술을 기반으로, 세포·생체조직 수준의 고해상도 이미징과 인체 적용형 정밀 진단 센서를 함께 발전시키는",
     "통합형 연구를 추진합니다.",
  ],
};

const sections: Section[] = [
  {
    id: "global-trend",
    label: "WHY NOW",
    title: "왜 지금 양자센서인가",
    body: [
      "해외 양자센서 로드맵은 의료 이미징을 중요한 미래 응용 분야로 제시하고 있습니다.",
      "이제 양자센서 기술은 실험실을 넘어, 실제 현장에서 활용 가능한 소형·고감도 시스템으로 확장되어야 합니다.",
      "본 컨소시엄은 이러한 흐름에 맞추어 원천기술과 응용기술을 함께 연결합니다.",
    ],
    points: [
      "의료 이미징 중심의 글로벌 기술 흐름",
      "원천기술에서 현장형 시스템으로의 전환",
      "상온·소형·고감도 장치 개발 방향",
      "바이오·의료 응용 중심의 연구 확장",
    ],
    figure: {
      src: "/intro/figure1.png",
      alt: "해외 선도국 양자센서 주요 로드맵",
      caption: "Figure 1. 해외 선도국 양자센서 주요 로드맵",
    },
  },
  {
    id: "applications",
    label: "APPLICATIONS",
    title: "바이오·의료 분야의 주요 활용 타깃",
    body: [
      "본 과제는 바이오·의료 분야에서 중요한 두 축을 중심으로 추진됩니다.",
      "하나는 분자·세포 수준의 정밀 분석이 가능한 나노·마이크로 MRI 기술이고,",
      "다른 하나는 심장 주변의 미세 자기장 신호를 측정하는 소형 양자 심자도 기술입니다.",
      "양자센서는 분자 스케일부터 인체 진단까지 폭넓은 활용 가능성을 가지며, 차세대 정밀 측정 플랫폼으로 확장될 수 있습니다.",
    ],
    points: [
      "나노·마이크로 MRI 기반 정밀 분석",
      "소형 양자 심자도 기반 정밀 진단",
      "분자·세포·생체 수준까지 확장 가능",
      "기초연구와 의료응용을 잇는 플랫폼",
    ],
    figure: {
      src: "/intro/figure2.png",
      alt: "바이오 의료분야 양자센서 주요 활용 타겟",
      caption: "Figure 2. 바이오·의료분야 양자센서 주요 활용 타겟",
    },
  },
  {
    id: "flagship",
    label: "WHY FLAGSHIP",
    title: "왜 플래그십 지원이 필요한가",
    body: [
      "양자센서 기술을 실제 활용 가능한 수준까지 발전시키기 위해서는 단일 연구실이 아닌 컨소시엄 단위의 협력이 필요합니다.",
      "양자센싱·이미징, 센서·소자 개발, 기업, 의료기관이 함께 연결되어야 응용과 산업화가 가능합니다.",
      "또한 이 분야는 단기 성과보다 장기적이고 집중적인 지원이 필요한 영역이며, 핵심 응용기술과 제품화 기반을 함께 구축해야 합니다.",
    ],
    points: [
      "다학제 협력이 필요한 연구 분야",
      "기업·의료기관 연계가 중요한 과제",
      "장기·집중 지원이 필요한 기술 특성",
      "응용기술과 제품화 기반의 동시 구축",
    ],
    figure: {
      src: "/intro/figure3.png",
      alt: "양자플래그십 사업의 지원 필요성",
      caption: "Figure 3. 양자플래그십 사업의 지원 필요성",
    },
  },
];

const closing = {
  label: "OUTLOOK",
  title: "함께 만드는 차세대 양자센서 플랫폼",
  paragraphs: [
    "본 컨소시엄은 양자센서의 미래 의료 응용 가능성을 선도하고, 연구실의 원천기술을 실제 진단·이미징 시스템으로 확장하는 것을 지향합니다.",
    "정밀 측정, 의료 진단, 산업 응용으로 이어지는 새로운 양자센서 생태계의 기반을 구축하고자 합니다.",
  ],
};

function SectionShell({
  children,
  tinted = false,
}: {
  children: ReactNode;
  tinted?: boolean;
}) {
  return (
    <section
      className={`rounded-[34px] bg-gradient-to-r p-px shadow-lg ${
        tinted
          ? "from-blue-500 via-cyan-400 to-emerald-400"
          : "from-blue-600 via-sky-500 to-cyan-400"
      }`}
    >
      <div
        className={`rounded-[33px] px-7 py-8 md:px-10 md:py-10 ${
          tinted
            ? "bg-gradient-to-br from-blue-50 via-cyan-50 to-white"
            : "bg-white"
        }`}
        style={{ fontFamily: BODY_FONT }}
      >
        {children}
      </div>
    </section>
  );
}

function SectionHeader({
  label,
  number,
}: {
  label: string;
  number: string;
}) {
  return (
    <div className="mb-7">
      <div className="mb-5 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400" />

      <div className="flex items-center gap-4">
        <span
          className="inline-flex h-11 min-w-11 items-center justify-center rounded-2xl bg-blue-700 px-3 text-sm font-bold text-white shadow-sm"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          {number}
        </span>

        <span
          className="text-base font-bold uppercase tracking-[0.18em] text-blue-700 md:text-lg"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function KeywordChip({ label }: { label: string }) {
  return (
    <span
      className="inline-flex w-fit max-w-full items-center rounded-full px-4 py-2.5 text-sm font-semibold leading-none whitespace-nowrap"
      style={{
        color: "#FFFFFF",
        background: "rgba(255,255,255,0.10)",
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {label}
    </span>
  );
}

function PointCard({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-slate-50 to-white px-5 py-4 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
        <p className="text-sm leading-6 text-zinc-700">{text}</p>
      </div>
    </div>
  );
}

function FigureCard({ figure }: { figure: Figure }) {
  return (
    <figure className="w-full overflow-hidden rounded-[26px] border border-zinc-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
      <div className="p-4 md:p-5">
        <div className="overflow-hidden rounded-[18px] border border-zinc-100 bg-zinc-50">
          <Image
            src={figure.src}
            alt={figure.alt}
            width={1600}
            height={1000}
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>

      <figcaption className="border-t border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-500">
        {figure.caption}
      </figcaption>
    </figure>
  );
}

function SectionBlock({
  section,
  number,
}: {
  section: Section;
  number: string;
}) {
  return (
    <SectionShell>
      <SectionHeader label={section.label} number={number} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start">
        <div className="min-w-0">
          <h2
            className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem] md:leading-[1.2]"
            style={{ fontFamily: DISPLAY_FONT }}
          >
            {section.title}
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-8 text-zinc-600 md:text-[16px]">
            {section.body.map((paragraph) => (
              <p key={paragraph} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {section.figure && (
          <div className="w-full self-start">
            <FigureCard figure={section.figure} />
          </div>
        )}

        {section.points && (
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {section.points.map((point) => (
              <PointCard key={point} text={point} />
            ))}
          </div>
        )}
      </div>
    </SectionShell>
  );
}

export default function IntroPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="intro" pageKey="intro">
        <div
          className="space-y-16 md:space-y-24"
          style={{ fontFamily: BODY_FONT }}
        >
          <section
  className="w-full rounded-[36px] px-5 py-10 md:px-14 md:py-14"
  style={{
    fontFamily: BODY_FONT,
    backgroundColor: "#13245B",
    border: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "0 24px 70px rgba(15,23,42,0.18)",
  }}
>
  <div className="h-1.5 w-28 rounded-full bg-[#4CC9F0]" />

  <p
    className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-100 md:text-base"
    style={{ fontFamily: DISPLAY_FONT }}
  >
    {hero.eyebrow}
  </p>

  <h2
    className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]"
    style={{ fontFamily: DISPLAY_FONT }}
  >
    {hero.title}
  </h2>

  <p className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg">
    {hero.description}
  </p>

<div
  className="mt-12 w-full rounded-[24px] p-5 md:mt-5 md:p-5"
  style={{
    
  }}
></div>
  <div
    className="mt-16 w-full rounded-[26px] p-6 md:mt-20 md:p-7"
    style={{
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.10)",
    }}
  >


    <div className="flex items-center gap-4">
      <p
        className="shrink-0 text-sm font-bold uppercase tracking-[0.18em] text-blue-100 md:text-base"
        style={{ fontFamily: DISPLAY_FONT }}
      >
        Keywords
      </p>
      <div className="h-px flex-1 bg-white/12" />
    </div>

    <div className="mt-4 flex flex-wrap gap-3">
      {hero.chips.map((chip) => (
        <KeywordChip key={chip} label={chip} />
      ))}
    </div>
  </div>
</section>

          <SectionShell>
            <SectionHeader label={intro.label} number="00" />

            <h2
              className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              {intro.title}
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-8 text-zinc-600 md:text-[16px]">
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SectionShell>

          {sections.map((section, index) => (
            <SectionBlock
              key={section.id}
              section={section}
              number={`0${index + 1}`}
            />
          ))}

          <SectionShell tinted>
            <SectionHeader label={closing.label} number="04" />

            <h2
              className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              {closing.title}
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-8 text-zinc-600 md:text-[16px]">
              {closing.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SectionShell>
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}