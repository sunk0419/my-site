import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import { CheckCircle2, Trophy, Award } from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const HERO_KEYWORDS = [
  "Quantum Sensing",
  "Cardiomagnetometer",
  "Patch Sensor",
  "Endoscopic Sensor",
  "Signal Recovery",
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
  listClassName = "mt-4 space-y-3",
}: {
  items: string[];
  textClass?: string;
  iconClass?: string;
  listClassName?: string;
}) {
  return (
    <ul className={listClassName}>
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
  figure2?: { src: string; alt: string; caption: string };
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
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
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

        <div
          className={`shrink-0 md:w-[190px] ${
            figure2 ? "md:self-start" : "md:self-stretch"
          }`}
        >
          <div
            className={`flex flex-col items-center ${
              figure2 ? "gap-4" : "h-full justify-center"
            }`}
          >
            <FigureBox
              src={figure1.src}
              alt={figure1.alt}
              caption={figure1.caption}
              width="220px"
              height="170px"
              captionClass="text-white"
            />

            {figure2 && (
              <FigureBox
                src={figure2.src}
                alt={figure2.alt}
                caption={figure2.caption}
                width="220px"
                height="170px"
                captionClass="text-white"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function TopicsDetail2Page() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="topics" pageKey="topics_detail2">
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
              DETAIL 2 RESEARCH
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.12]">
              세부2 과제 연구내용
            </h1>

            <p className="mt-6 max-w-4xl break-keep text-[15px] leading-8 text-blue-50/90 md:text-lg">
              양상블 NV 센터 기반 양자센싱, 외부패치형·내시경형 소형 심자도
              센서, 머신러닝 기반 신호 복원 기술을 통합하여 의료 진단형
              심자도 플랫폼을 구축합니다.
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

          <section className="mt-4 mb-4 rounded-[24px] border border-zinc-200 bg-white px-4 py-8 shadow-sm">
            <SectionTitle number="01" title="핵심 필요 요소" />

            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="w-full">
                  <h3 className="mb-3 font-bold text-blue-700">
                    양자센싱 핵심 필요
                  </h3>
                  <BulletList
                    items={[
                      "민감도: 심자도 신호 측정이 가능한 고감도 양자센싱 기술",
                      "시간분해능: 다양한 파형의 심자도 펄스 신호 측정이 가능한 AC 센싱 기술",
                    ]}
                  />
                </div>

                <div className="mt-4">
                  <FigureBox
                    src="/topics/detail2/figure1.png"
                    alt="figure1"
                    caption="심자도 펄스 측정을 위한 양자센싱 개념도"
                    width="220px"
                    height="170px"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="w-full">
                  <h3 className="mb-3 font-bold text-blue-700">
                    소형 심자도 센서 제작
                  </h3>
                  <BulletList
                    items={[
                      "외부패치형 센서: 비침습·비접촉 가능한 소형 심자도 제작 기술",
                      "내시경형 센서: 심장 근거리 측정이 가능한 내시경형 심자도 제작 기술",
                    ]}
                  />
                </div>

                <div className="mt-4">
                  <FigureBox
                    src="/topics/detail2/figure2.png"
                    alt="figure2"
                    caption="외부패치형·내시경형 심자도 센서 개념도"
                    width="220px"
                    height="170px"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-4 mb-4 rounded-[24px] border border-zinc-200 bg-white px-4 py-8 shadow-sm">
            <SectionTitle number="02" title="연구 개관" />

            <div className="flex flex-col items-center gap-4 md:flex-row">
              <FigureBox
                src="/topics/detail2/figure3.png"
                alt="figure3"
                caption="세부2 핵심 개발 기술 도식"
                width="220px"
                height="170px"
              />

              <div className="flex-1 space-y-4">
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <p className="mb-2 text-sm font-bold text-blue-800">
                    주요 이슈 및 극복 방향
                  </p>
                  <p className="break-keep text-sm text-blue-900/80">
                    기존 SQUID·OPM 기반 심자도 기술의 극저온/차폐 의존성과
                    인체 적용 한계를 넘어, 상온 구동 가능한 양상블 NV 센터
                    기반의 고감도·고시간분해능 심자도 센서 및 복원 기술을
                    구축합니다.
                  </p>
                </div>

                <BulletList
                  items={[
                    "고감도 심자도 펄스 센싱 기술과 시간분해능 고도화",
                    "외부패치형·내시경형 소형 심자도 센서 개발",
                    "머신러닝 기반 신호 복원과 의료 진단 응용 검증",
                  ]}
                />
              </div>
            </div>
          </section>

          <div className="mt-4 mb-4 space-y-4">
            <CoreSection
              badge="1st Core"
              title="고감도·시간분해능 기반 외부패치형 심자도 기술"
              items={[
                "고순도 다이아몬드 성장과 고밀도 양상블 NV 센터 생성·제어를 통해 고감도 AC 양자센싱 프로토콜을 최적화합니다.",
                "NV-NV, NV-P1 상호작용 제어와 결맞음 시간 향상으로 ms 단위 심자도 펄스 신호 측정 성능을 확보합니다.",
                "광학·마이크로파·검출부 일체형의 compact 외부패치형 심자도 센서를 구현합니다.",
                "소형 센서 구동 전자회로와 프로토타입을 개발해 센서 소형화와 민감도 성능 유지를 동시에 달성합니다.",
              ]}
              figure1={{
                src: "/topics/detail2/figure4.png",
                alt: "fig4",
                caption: "고감도·시간분해능 심자도 센싱",
              }}
              figure2={{
                src: "/topics/detail2/figure5.png",
                alt: "fig5",
                caption: "외부패치형 소형 심자도 센서",
              }}
            />

            <CoreSection
              badge="2nd Core"
              title="내시경형 심자도 기술"
              items={[
                "All-fiber-integrated 구조의 내부 삽입형 내시경 심자도 센서를 개발합니다.",
                "나노 광공진기 결합 NV 센서와 다이아몬드 광집적, 광섬유 프로브를 연계해 광전달 효율과 집적도를 높입니다.",
                "마이크로파 전달이 가능한 일체형 광섬유 프로브를 구현하고, 센서헤드를 mm² 수준까지 소형화합니다.",
              ]}
              figure1={{
                src: "/topics/detail2/figure6.png",
                alt: "fig6",
                caption: "내시경형 심자도 센서 개념도",
              }}
            />

            <CoreSection
              badge="3rd Core"
              title="Machine Learning 기반 신호 복원"
              items={[
                "저신호 환경에서 심자도 파형을 예측·복원하는 머신러닝 모델을 개발합니다.",
                "민감도·분해능 향상을 위한 양자센싱 인공지능 모델을 설계하고, 결맞음 향상 기술과 연계합니다.",
                "인공신경망 기반 Fourier 변환 모델과 잡음 저감 기법을 적용해 주파수 예측, 분해능 향상, 측정 시간 단축을 달성합니다.",
              ]}
              figure1={{
                src: "/topics/detail2/figure7.png",
                alt: "fig7",
                caption: "머신러닝 기반 신호 복원",
              }}
            />
          </div>

          <section className="mt-4 mb-4 rounded-[24px] border border-zinc-200 bg-white px-4 py-8 shadow-sm">
            <SectionTitle number="03" title="도전성과 의의" />

            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <span className="font-bold">도전성</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold text-zinc-900">
                      양상블 기반 양자센싱 기술의 난제
                    </p>
                    <BulletList
                      items={[
                        "민감도·시간분해능·센서크기를 동시에 만족하는 정량 목표 달성",
                        "고밀도 NV 센터 생성 및 큐비트 간 상호작용 제어 필요",
                        "측정 시간을 획기적으로 줄이는 기술 개발 필요",
                      ]}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-zinc-900">
                      의료 현장 활용 가능한 소형 센서 개발의 난제
                    </p>
                    <BulletList
                      items={[
                        "실험실 수준을 넘어 현장 활용이 가능한 센서 검증",
                        "쥐·돼지 등 실험동물 기반 실효성 검증",
                        "이동형·인체 삽입형 센서 제작을 통한 산업·의료 적용 기반 마련",
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="font-bold">창의성·혁신성</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold text-zinc-900">
                      양상블 큐비트 제어 및 성능 향상
                    </p>
                    <BulletList
                      items={[
                        "민감도·시간분해능 향상 양자센싱 프로토콜 개발",
                        "Machine Learning을 활용한 심자도 파형 복원 및 측정 시간 단축",
                        "세계적 수준의 독자 기술 활용과 세부1과의 연계 강화",
                      ]}
                      listClassName="mt-4 space-y-3"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-zinc-900">
                      소형 센서 제작과 의료 응용 확장
                    </p>
                    <BulletList
                      items={[
                        "외부패치형·내시경형 심자도 센서 동시 개발",
                        "독자 기술 기반의 세계 최초 수준 내시경 심자도 시도",
                        "심자도 모사 샘플·생체 샘플 기반 성능 데모와 국내 최초 의료 제품화 연계 기대",
                      ]}
                    />
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