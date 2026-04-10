"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SlideItem = {
  id: number;
  category: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  image: string;
  alt: string;
};

const slides: SlideItem[] = [
  {
    id: 1,
    category: "컨소시엄 공통",
    title: "다이아몬드 NV-center 기반 양자센서",
    subtitle: "고체 스핀 큐비트",
    image: "/highlights/image1.png",
    alt: "다이아몬드 NV-center 기반 양자센서 이미지",
  },
  {
    id: 2,
    category: "컨소시엄 공통",
    title: "핵심 기반 기술",
    bullets: [
      "양자 센싱 기술",
      "양자 이미징 기술",
      "소형화 기술",
      "고품질 Qubit 생성 기술",
    ],
    image: "/highlights/image2.png",
    alt: "컨소시엄 공통 핵심 기술 이미지",
  },
  {
    id: 3,
    category: "세부 1 과제",
    title: "나노 양자 MRI 기술 개발",
    subtitle: "활용 타겟: 세포, 생체조직 적용 가능한 고해상도 MRI 기술",
    image: "/highlights/image3.png",
    alt: "세부 1 과제 이미지",
  },
  {
    id: 4,
    category: "세부 2 과제",
    title: "소형 양자 심자도 기술 개발",
    subtitle: "활용 타겟: 인체 적용 가능한 고정밀 의료 진단 기술",
    image: "/highlights/image4.png",
    alt: "세부 2 과제 이미지",
  },
];

export default function HighlightSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div className="h-[560px] rounded-[30px] border border-blue-100 bg-white/90 p-5 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
          Highlights
        </p>
        <span className="text-[11px] font-medium text-zinc-400">
          {current + 1} / {slides.length}
        </span>
      </div>

      <div className="mt-3 flex h-[500px] flex-col overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-4 text-white shadow-inner">
        <div className="rounded-[20px] border border-white/10 bg-white/[0.06] p-2">
          <div className="relative h-[170px] w-full overflow-hidden rounded-[14px] bg-slate-50">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-contain p-2"
              priority
            />
          </div>
        </div>

        <div className="mt-4 flex flex-1 flex-col">
          <div>
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.03em] text-blue-100">
              {slide.category}
            </span>

            <h3 className="mt-3 min-h-[56px] break-keep text-[20px] font-bold leading-[1.35] tracking-tight text-white">
              {slide.title}
            </h3>
          </div>

          <div className="mt-3 h-[120px] overflow-hidden">
            {slide.subtitle ? (
              <p className="break-keep text-[14px] leading-6 text-blue-100/85">
                {slide.subtitle}
              </p>
            ) : null}

            {slide.bullets ? (
              <div className="grid grid-cols-2 gap-2">
                {slide.bullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/[0.08] px-3 py-2 text-[12px] font-medium leading-5 text-blue-50/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="mt-auto flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    current === index
                      ? "w-7 bg-white"
                      : "w-2 bg-white/35 hover:bg-white/55"
                  }`}
                  aria-label={`${index + 1}번 슬라이드`}
                />
              ))}
            </div>

            <span className="text-[11px] tracking-[0.14em] text-blue-100/70">
              AUTO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}