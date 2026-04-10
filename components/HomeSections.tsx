import Link from "next/link";
import { menuGroups } from "@/lib/site-data";
import HighlightSlider from "@/components/HighlightSlider";

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
      {text}
    </p>
  );
}

function QuickLinkGrid({
  items,
}: {
  items: { label: string; route: string }[];
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item, index) => (
        <Link
          key={item.route}
          href={item.route}
          className="group rounded-2xl border border-zinc-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-md"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-blue-700">
                0{index + 1}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-800">
                {item.label}
              </p>
            </div>
            <span className="text-sm text-zinc-400 transition group-hover:translate-x-1 group-hover:text-blue-700">
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function MetaStrip() {
  const blocks = [
    {
      title: "핵심 기술",
      items: ["NV-center", "Quantum Sensing", "Quantum Imaging"],
    },
    {
      title: "응용 분야",
      items: ["Nano MRI", "Magnetometry", "Biomedical Imaging"],
    },
    {
      title: "운영 정보",
      items: ["2025–2032", "6개 연구팀", "고려대 주관"],
    },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {blocks.map((block) => (
        <div
          key={block.title}
          className="rounded-[24px] border border-zinc-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-sm"
        >
          <p className="text-[12px] font-semibold tracking-[0.04em] text-blue-700">
            {block.title}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {block.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[13px] font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SummaryRail() {
  const stats = [
    { label: "사업기간", value: "2025–2032" },
    { label: "지원예산", value: "약 220억원" },
    { label: "참여 연구팀", value: "6팀" },
    { label: "핵심성과", value: "논문 · 특허 · 기술이전" },
  ];

  return (
    <section className="relative z-10 -mt-8 px-6 pb-2">
      <div className="grid gap-3 rounded-[28px] border border-white/70 bg-white/90 p-4 shadow-xl shadow-slate-900/10 backdrop-blur md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-zinc-200/80 bg-gradient-to-b from-white to-slate-50 px-4 py-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-bold tracking-tight text-blue-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  eyebrow,
  title,
  description,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
}) {
  const content = (
    <div className="group relative h-full overflow-hidden rounded-[30px] border border-zinc-200 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative">
        <SectionLabel text={eyebrow} />
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-zinc-600">{description}</p>

        <div className="mt-6 flex items-center justify-between">
          <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500">
            상세 페이지 연결
          </div>

          {cta ? (
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-blue-700">
              {cta}
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export default function HomeSections() {
  return (
    <>
        <section className="border-b border-zinc-200 bg-gradient-to-b from-slate-100 to-white px-6 pt-6 pb-14">
          <div className="overflow-hidden rounded-[34px] border border-zinc-200 bg-slate-950 shadow-xl shadow-slate-900/10">
            <img
              src="/main-banner1.png"
              alt="Quantum Flagship 메인 배너"
              className="block w-full h-auto"
            />
          </div>
        </section>

      <SummaryRail />

      <main className="space-y-5 bg-zinc-50 px-4 py-5">
        <section className="relative overflow-hidden rounded-[34px] border border-zinc-200 bg-gradient-to-r from-white via-blue-50/70 to-slate-50 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400" />
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-100/40 blur-3xl" />

          <div className="grid gap-8 p-6 md:grid-cols-[1.35fr_0.85fr] md:p-8">
            <div className="flex h-full flex-col justify-between">
              <div>
                <SectionLabel text="Consortium Overview" />
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
                  컨소시엄 소개
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
                  양자자기공명센서 컨소시엄의 비전, 연구 방향, 조직 구성을
                  한눈에 확인할 수 있는 메인 안내 영역입니다.
                </p>

                <div className="mt-6">
                  <QuickLinkGrid items={menuGroups[0].items} />
                </div>
              </div>

              <div className="mt-6">
                <MetaStrip />
              </div>
            </div>

            <div className="flex items-center md:justify-end">
              <div className="w-full md:max-w-[360px] md:justify-self-end">
                <HighlightSlider />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <FeatureCard
            eyebrow="Research Output"
            title="최신 연구성과 소개"
            description="논문, 성과 기사, 보도자료, 주요 마일스톤을 메인에서 요약하고 상세 페이지로 자연스럽게 연결하는 영역입니다."
            href="/news/papers"
            cta="연구성과 보러가기"
          />
          <FeatureCard
            eyebrow="Consortium Activity"
            title="컨소시엄 활동 소개"
            description="세미나, 워크숍, 연구 교류, 장비 구축 현황처럼 프로젝트의 현재 움직임을 보여주는 카드 영역으로 쓰기 좋습니다."
            href="/news/seminar"
            cta="활동 내용 보러가기"
          />
        </section>

        

        
      </main>

      <Link
        href="/news/hiring"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
      >
        채용 공고
        <span>↗</span>
      </Link>
    </>
  );
}