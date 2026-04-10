import Image from "next/image";
import { Noto_Sans_KR } from "next/font/google";

import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type Figure = {
  src: string;
  alt: string;
  caption: string;
};

type Section = {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  points?: string[];
  figure?: Figure;
};

const hero = {
  eyebrow: "Consortium Overview",
  title: "다이아몬드 NV 센터 기반 양자센서 컨소시엄",
  description:
    "본 컨소시엄은 다이아몬드 NV 센터 기반 양자센서를 공통 플랫폼으로 삼아, 바이오·의료 분야에 활용 가능한 고해상도 나노·마이크로 MRI와 소형 양자 심자도 기술을 함께 개발합니다.",
  chips: [
    "Diamond NV Center",
    "Quantum Sensing",
    "Nano / Micro MRI",
    "Compact MCG",
  ],
};

const intro = {
  title: "컨소시엄 소개",
  paragraphs: [
    "양자센서 연구는 실험실 수준의 원천연구를 넘어, 실제 의료·산업 현장에서 활용 가능한 응용기술과 시스템으로 빠르게 확장되고 있습니다.",
    "본 컨소시엄은 공통 양자센서 플랫폼 기술을 기반으로, 세포·생체조직 수준의 고해상도 이미징과 인체 적용형 정밀 진단 센서를 함께 발전시키는 통합형 연구를 추진합니다.",
  ],
};

const sections: Section[] = [
  {
    id: "global-trend",
    eyebrow: "Why Now",
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
    eyebrow: "Applications",
    title: "바이오·의료 분야의 주요 활용 타깃",
    body: [
      "본 과제는 바이오·의료 분야에서 중요한 두 축을 중심으로 추진됩니다.",
      "하나는 분자·세포 수준의 정밀 분석이 가능한 나노·마이크로 MRI 기술이고, 다른 하나는 심장 주변의 미세 자기장 신호를 측정하는 소형 양자 심자도 기술입니다.",
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
    eyebrow: "Why Flagship",
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
  title: "함께 만드는 차세대 양자센서 플랫폼",
  paragraphs: [
    "본 컨소시엄은 양자센서의 미래 의료 응용 가능성을 선도하고, 연구실의 원천기술을 실제 진단·이미징 시스템으로 확장하는 것을 지향합니다.",
    "정밀 측정, 의료 진단, 산업 응용으로 이어지는 새로운 양자센서 생태계의 기반을 구축하고자 합니다.",
  ],
};

function AccentBar() {
  return (
    <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-[28px] bg-gradient-to-r from-blue-700 via-cyan-500 to-sky-400" />
  );
}

function SectionBlock({
  eyebrow,
  title,
  body,
  points,
  figure,
}: Section) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white px-6 pb-7 pt-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:px-8 md:pb-9 md:pt-9">
      <AccentBar />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700">
            {eyebrow}
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
            {title}
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-600 md:text-[15px]">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {points && (
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm leading-6 text-zinc-700"
                >
                  {point}
                </div>
              ))}
            </div>
          )}
        </div>

        {figure && (
          <figure className="overflow-hidden rounded-[24px] border border-zinc-200 bg-zinc-50 shadow-sm">
            <Image
              src={figure.src}
              alt={figure.alt}
              width={1600}
              height={1000}
              className="h-auto w-full object-cover"
            />
            <figcaption className="border-t border-zinc-200 bg-white px-4 py-3 text-xs text-zinc-500 md:text-sm">
              {figure.caption}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

export default function IntroPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="intro" pageKey="intro">
        <div className={`${notoSansKr.className} space-y-10 md:space-y-20`}>
          <section className="overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-10 text-white shadow-[0_16px_44px_rgba(15,23,42,0.14)] md:px-10 md:py-14">
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500" />

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-200/90">
              {hero.eyebrow}
            </p>

            <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl md:leading-tight">
              {hero.title}
            </h2>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-blue-50/85 md:text-base md:leading-8">
              {hero.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {hero.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-blue-50 md:text-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white px-6 pb-7 pt-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:px-8 md:pb-9 md:pt-9">
            <AccentBar />

            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
              {intro.title}
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-600 md:text-[15px]">
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          {sections.map((section) => (
            <SectionBlock key={section.id} {...section} />
          ))}

          <section className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 px-6 pb-7 pt-8 shadow-[0_12px_40px_rgba(59,130,246,0.08)] md:px-8 md:pb-9 md:pt-9">
            <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-[28px] bg-gradient-to-r from-blue-700 via-cyan-500 to-emerald-400" />

            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
              {closing.title}
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-600 md:text-[15px]">
              {closing.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}