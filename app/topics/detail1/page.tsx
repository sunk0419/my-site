import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import { CheckCircle2, Trophy, Award } from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const HERO_KEYWORDS = [
  "Quantum Sensing & Imaging",
  
  "NMR Sample Control",
  "Nano Resolution",
  "3D Imaging",
  "Microfluidics",
];

function FigureBox({
  src,
  alt,
  caption,
  width = "140px",
  height = "100px",
  captionClass = "text-zinc-500",
}: {
  src: string;
  alt: string;
  caption: string;
  width?: string;
  height?: string;
  captionClass?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center justify-center overflow-hidden rounded-[12px] bg-white p-1.5 shadow-sm ring-1 ring-zinc-200"
        style={{ width, height }}
      >
        <img src={src} alt={alt} className="h-full w-full object-contain" />
      </div>

      {caption && (
        <p
          className={`mt-2 max-w-[180px] break-keep text-center text-[11px] leading-4 ${captionClass}`}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

function BulletList({
  items,
  textClass = "text-zinc-700",
  iconClass = "text-blue-600",
}: {
  items: string[];
  textClass?: string;
  iconClass?: string;
}) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="mt-4 flex items-start gap-3">
          <CheckCircle2
            className={`mt-[3px] h-4 w-4 shrink-0 ${iconClass}`}
            strokeWidth={2.2}
          />
          <p className={`break-keep text-[14px] leading-6 ${textClass}`}>
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <h2 className="mb-6 flex items-center gap-3 pl-6 md:pl-6 text-2xl font-bold text-zinc-900">
      <span className="text-blue-600">{number}</span> {title}
    </h2>
  );
}

function CoreSection({
  badge,
  title,
  items,
  figure1,
  figure2,
}: {
  badge: string;
  title: string;
  items: string[];
  figure1: { src: string; alt: string; caption: string };
  figure2: { src: string; alt: string; caption: string };
}) {
  return (
    <div
      className="rounded-[30px] p-6 md:p-8"
      style={{
        backgroundColor: "#13245B",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 24px 70px rgba(15,23,42,0.16)",
      }}
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <div
            className="inline-flex rounded-full px-4 py-2 text-xs font-bold text-blue-100"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.16)",
            }}
          >
            {badge}
          </div>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
            {title}
          </h3>

          <div
            className="mt-6 rounded-[24px] p-5"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
              CORE DESCRIPTION
            </p>

            <BulletList
              items={items}
              textClass="px-2 text-white"
              iconClass="text-cyan-300"
            />
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-4">
          <FigureBox
            src={figure1.src}
            alt={figure1.alt}
            caption={figure1.caption}
            width="200px"
            height="150px"
            captionClass="text-white"
          />
          <FigureBox
            src={figure2.src}
            alt={figure2.alt}
            caption={figure2.caption}
            width="200px"
            height="150px"
            captionClass="text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default function TopicsDetail1Page() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="topics" pageKey="topics_detail1">
        <div className="space-y-12 pb-20" style={{ fontFamily: FONT_FAMILY }}>
          <section
            className="w-full rounded-[36px] px-6 py-10 md:px-14 md:py-12"
            style={{
              backgroundColor: "#13245B",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 24px 70px rgba(15,23,42,0.18)",
            }}
          >
            <div className="h-1.5 w-28 rounded-full bg-[#4CC9F0]" />

            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-100 md:text-base">
              DETAIL 1 RESEARCH
            </p>

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              세부1 과제 연구내용
            </h1>

            <p className="mt-6 max-w-4xl break-keep text-[15px] leading-8 text-blue-50/90 md:text-lg">
              양자센싱, 양자이미징, 타겟 제어 기술을 통합하여 고감도 측정 및
              초고해상도 이미징 플랫폼을 구축합니다.
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
                {HERO_KEYWORDS.map((keyword) => (
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

          <section className="mt-4 rounded-[24px] border border-zinc-200 bg-white px-4 py-8 shadow-sm mb-4">
           
           
            <SectionTitle number="01" title="핵심 필요 요소" />
            

            <div className="mt-4 grid gap-6 md:grid-cols-3">
              

              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="w-full">
                  <h3 className="mb-3 font-bold text-blue-700">
                    양자센싱 필요성
                  </h3>
                  <BulletList
                    items={["민감도 향상(단분자 수준)",
                    "고주파수분해능 확보"]}
                  />
                </div>

                <div className="mt-4">
                  <FigureBox
                    src="/topics/detail1/figure0.png"
                    alt="figure1"
                    caption="공간분해능 개념도"
                    width="200px"
                    height="150px"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="w-full">
                  <h3 className="mb-3 font-bold text-blue-700">
                    양자이미징 필요성
                  </h3>
                  <BulletList
                    items={["나노미터 공간분해능", "3차원 이미징 확장"]}
                  />
                </div>

                <div className="mt-4">
                  <FigureBox
                    src="/topics/detail1/figure1.png"
                    alt="figure1"
                    caption="공간분해능 개념도"
                    width="200px"
                    height="150px"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="w-full">
                  <h3 className="mb-3 font-bold text-blue-700">
                    NMR 샘플 제어
                  </h3>
                  <BulletList
                    items={["신호 증폭(초분극)", "Microfluidics 제어"]}
                  />
                </div>

                <div className="mt-4">
                  <FigureBox
                    src="/topics/detail1/figure2.png"
                    alt="figure2"
                    caption="샘플 제어 개념도"
                    width="200px"
                    height="150px"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-4 rounded-[24px] border border-zinc-200 bg-white px-4 py-8 shadow-sm mb-4">
            <SectionTitle number="02" title="연구 개관" />

            <div className="flex flex-col items-center gap-4 md:flex-row">
              <FigureBox
                src="/topics/detail1/figure3.png"
                alt="figure3"
                caption="세부1 핵심 기술 도식"
                width="220px"
                height="170px"
              />

              <div className="flex-1 space-y-4">
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 ">
                  <p className="mb-2 text-sm font-bold text-blue-800">
                    극복 방향
                  </p>
                  <p className="break-keep text-sm text-blue-900/80">
                    기존 MRI의 한계를 넘어 NV 센터 기반의 상온 고해상도 이미징
                    플랫폼을 구축합니다.
                  </p>
                </div>

                <BulletList
                  items={[
                    "양자센싱: 민감도 향상",
                    "양자이미징: 공간분해능 극대화",
                    "타겟제어: 신호 증폭 및 유체 제어",
                  ]}
                />
              </div>
            </div>
          </section>

          <div className="mt-4 space-y-4 mb-4">
            <CoreSection
              badge="1st Core"
              title="양자센싱 기술"
              items={[
                "고감도 양자센싱 프로토콜 최적화",
                "화학적 이동 해석용 주파수분해능 강화",
              ]}
              figure1={{
                src: "/topics/detail1/figure4.png",
                alt: "fig4",
                caption: "센싱 프로토콜",
              }}
              figure2={{
                src: "/topics/detail1/figure5.png",
                alt: "fig5",
                caption: "분해능 고도화",
              }}
            />

            <CoreSection
              badge="2nd Core"
              title="양자이미징 기술"
              items={[
                "나노/마이크로 스케일 정밀도 향상",
                "3차원 고심도 자기장 이미징 구현",
              ]}
              figure1={{
                src: "/topics/detail1/figure6.png",
                alt: "fig6",
                caption: "이미징 정밀도",
              }}
              figure2={{
                src: "/topics/detail1/figure7.png",
                alt: "fig7",
                caption: "3D 이미징",
              }}
            />

            <CoreSection
              badge="3rd Core"
              title="타겟 제어 기술"
              items={[
                "초분극 기반 신호 증폭",
                "바이오 친화 Microfluidics 시스템",
              ]}
              figure1={{
                src: "/topics/detail1/figure8.png",
                alt: "fig8",
                caption: "신호 증폭",
              }}
              figure2={{
                src: "/topics/detail1/figure9.png",
                alt: "fig9",
                caption: "유체 제어",
              }}
            />
          </div>

          <section className="mt-4 rounded-[24px] border border-zinc-200 bg-white px-4 py-8 shadow-sm mb-4">
            <SectionTitle number="03" title="도전성과 의의" />

            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <span className="font-bold">도전적 목표</span>
                </div>
                <p className="break-keep text-sm leading-6 text-zinc-600">
                  민감도와 공간/주파수 분해능을 동시에 만족해야 하는 세계적
                  수준의 난제에 도전합니다.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="font-bold">연구의 혁신성</span>
                </div>
                <p className="break-keep text-sm leading-6 text-zinc-600">
                  독자적 초분극 기술과 양자 센서를 결합하여 실질적인 바이오 응용
                  플랫폼을 구축합니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}