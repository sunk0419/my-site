import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import {
  Target,
  Microscope,
  HeartPulse,
  Building2,
  Hospital,
  Factory,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

export default function TopicsEquipmentPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="topics" pageKey="topics_equipment">
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
              RESEARCH PLANNING & STRATEGY
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.12]">
              컨소시엄의 연구기획과 추진체계를 소개합니다.
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              본 페이지는 컨소시엄의 추진 전략과 세부1·세부2의 장비 기획 방향,
              그리고 제품화·활용 확장 전략을 한 흐름으로 정리한 페이지입니다.
            </p>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="rounded-[28px] bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-4 ring-1 ring-zinc-200">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-700 p-3 text-white">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <p className=" text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      CONSORTIUM STRATEGY
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                      컨소시엄 연구 기획
                    </h2>
                  </div>
                </div>

                <p
                  className="mt-4 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                  style={{ wordBreak: "keep-all" }}
                >
                  본 페이지는 컨소시엄의 추진 전략과 세부1·세부2의 연구 기획, 장비 개발 방향을
                  통합적으로 소개합니다. 공통 기술 기반 위에서 각 세부과제가 어떻게 연계되고
                  확장되는지 확인할 수 있습니다.
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <img
                  src="/topics/equipment/figure1.png"
                  alt="컨소시엄 운영 전략 구조도"
                  className="block h-auto w-full object-contain"
                />
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-[28px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                    공동 추진 축
                  </h3>

                  <div className="mt-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      두 세부과제는 NV 센터 양자센서 기술, 소형 센서·시스템 제작 기술,
                      성장·공정 기반의 소재 및 장치 기술을 공통 축으로 공유합니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      전체 워크숍과 정기 회의, 상호 방문을 통해 기술 진행 상황을
                      점검하고, NV 센터 양자센서 커뮤니티와 공동 워크숍을 운영해
                      연구개발의 연속성과 확장성을 높이도록 구성했습니다.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                    연계 전략
                  </h3>

                  <div className="mt-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      세부1의 고분해능·고심도 이미징 기술은 바이오 분석과 차세대
                      나노 MRI 시스템으로 이어지고, 세부2의 양상블 센싱·신호복원
                      기술은 외부 패치형 및 내시경형 소형 심자도 장치로 연결됩니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      즉, 컨소시엄 전체는 기초 센싱 기술 확보에서 출발해 장비 구현,
                      테스트, 제품화, 창업·기술이전으로 이어지는 통합 흐름을 갖도록
                      설계된 구조입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-700 p-3 text-white">
                  <Microscope className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    SUB-TASK 1
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    세부1 연구 기획 및 장비 방향
                  </h2>
                </div>
              </div>

              <p
                className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                세부1은 나노 MRI 핵심 기술을 실험실 기반 장치 수준에서 구현한 뒤,
                바이오 분석과 고분해능 이미징에 활용 가능한 패키지형 시스템으로
                확장하는 것을 목표로 합니다. 연구기획의 중심은 고성능 양자센서를
                단순 실험 셋업에 머무르게 하지 않고, 실제 시스템·장비 형태로
                통합하여 향후 제품화와 창업·기술이전 가능성까지 연결하는 데 있습니다.
              </p>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <img
                  src="/topics/equipment/figure2.png"
                  alt="세부1 나노 MRI 시스템 컨셉 이미지"
                  className="block h-auto w-full object-contain"
                />
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                      기획 의도
                    </h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      세부1은 기존의 대형·고가 MRI 장비와 차별화되는 소형 양자자기공명
                      이미징 장치를 지향합니다. 최종 단계에서는 마이크로플루이딕스,
                      타깃 세포, 다이아몬드 NV 센터, 레이저·마이크로파 이미징 제어를
                      통합한 장치형 플랫폼으로 발전시키는 전략을 갖고 있습니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      이를 통해 단분자 수준의 바이오 분석, 단세포·단백질 구조 분석,
                      약물 반응 및 타깃 검출 등 기존 MRI가 수행하기 어려운 초고분해능
                      분석 장비로 확장하는 것을 목표로 합니다.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                      추진 전략
                    </h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      세부1의 추진 전략은 양자센서 및 시스템 제작 역량을 산업계와
                      연결하는 데 있습니다. 기업 참여 계획에서는 양자센서·시스템 제작
                      경험을 가진 기업과의 협력을 통해 프로토타입 장치 구현과 제작
                      공정 고도화를 병행하도록 설계되었습니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      동시에 연구진 자체 spin-off 창업 및 기술이전 독려 전략을 통해,
                      연구개발 성과가 단순 논문에 머무르지 않고 장비 사업화와 제품화
                      기반으로 이어질 수 있도록 추진 체계를 마련했습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <div className="rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <Factory className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-semibold text-zinc-950">기업 연계</p>
                  </div>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    양자센서 및 시스템 제작 경험을 가진 기업과의 협력을 통해 장비
                    제작, 전시, 테스트베드 구축, 향후 제품형 시제품 개발로 이어지는
                    연계 구조를 구축합니다.
                  </p>
                </div>

                <div className="rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-semibold text-zinc-950">창업·기술이전</p>
                  </div>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    고려대·UNIST·육사 연구진의 창업 가능성과 기술이전 가능성을 함께
                    열어두고, 장비형 성과를 기반으로 후속 사업화까지 이어질 수 있는
                    경로를 구체화합니다.
                  </p>
                </div>

                <div className="rounded-[26px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-semibold text-zinc-950">장비 방향</p>
                  </div>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    최종적으로는 나노 MRI 이미징 장치를 하나의 독립된 플랫폼으로
                    발전시켜, 바이오·의료·산업 분석 분야에서 활용 가능한 정밀 장비
                    포지션을 확보하는 방향으로 기획되어 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-700 p-3 text-white">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    SUB-TASK 2
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    세부2 연구 기획 및 장비 방향
                  </h2>
                </div>
              </div>

              <p
                className="mt-6 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                세부2는 양자센서를 기반으로 외부 패치형 소형 심자도 센서와 내시경형
                소형 심자도 센서를 개발하고, 의료 환경에 적용 가능한 진단 장치로
                확장하는 것을 목표로 합니다. 연구기획의 핵심은 기술 개발과 함께
                의료기관·기업 참여를 조기에 연결해 실제 임상·응용 수요와 맞물리는
                장치 개발 체계를 만드는 데 있습니다.
              </p>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <img
                  src="/topics/equipment/figure3.png"
                  alt="세부2 소형 심자도 센서 컨셉 이미지"
                  className="block h-auto w-full object-contain"
                />
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                      기획 의도
                    </h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      세부2는 기존 ECG나 SQUID 기반 장치가 갖는 접근성 한계를 넘어,
                      외부 부착형 소형 심자도 센서와 내시경형 삽입형 심자도 센서를
                      통해 보다 유연하고 직관적인 심장 자기장 진단 장치를 구현하고자
                      합니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      이는 실험실 기술을 의료 환경에 가까운 장치로 전환하려는 기획으로,
                      최종적으로는 외부 패치형과 내시경형이라는 두 개의 활용 시나리오를
                      동시에 확보하는 방향으로 설계되어 있습니다.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                      추진 전략
                    </h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      세부2의 추진 전략은 의료기관과 기업이 초기부터 참여하는 구조를
                      기반으로 합니다. 의료진의 진단 수요, 내시경 기반 광음향 기술,
                      의료 분석 시스템, 테스트 환경을 연구개발 단계에 반영하여 기술의
                      실제 적용 가능성을 높이는 방식입니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      여기에 연구진 주도의 기술이전 및 창업 전략을 결합해, 소형
                      심자도 센서가 단순 데모를 넘어 진단기기·의료기기 제품화 가능성으로
                      이어지도록 추진 체계를 구성했습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <div className="rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <Hospital className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-semibold text-zinc-950">의료기관 연계</p>
                  </div>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    병원 연구진과의 협력을 통해 심장내과 기반 기술과 테스트 환경을
                    반영하고, 심자도 진단 장치가 실제 임상 적용 방향으로 발전할 수
                    있도록 기획합니다.
                  </p>
                </div>

                <div className="rounded-[26px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <Factory className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-semibold text-zinc-950">기업 참여</p>
                  </div>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    의료기술 기반 창업 회사 및 관련 기업의 참여를 통해 센서 제작,
                    시스템 구현, 의료 분석 플랫폼 연결, 향후 시제품 제작과 성능 검증을
                    병행하는 구조를 마련합니다.
                  </p>
                </div>

                <div className="rounded-[26px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-semibold text-zinc-950">제품화 방향</p>
                  </div>
                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    외부 패치형과 내시경형이라는 두 장치 방향을 구분해 개발함으로써,
                    하나는 비침습·비접촉형 진단기기, 다른 하나는 심장 근거리 계측
                    장치로 발전시킬 수 있는 제품화 시나리오를 동시에 확보합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-gradient-to-br from-blue-50 via-cyan-50 to-white px-6 py-8 md:px-10 md:py-10">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white p-3 text-black">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    IMPACT & APPLICATION
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                    기대효과 및 활용 방안
                  </h2>
                </div>
              </div>

              <p
                className="mt-4 max-w-5xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                style={{ wordBreak: "keep-all" }}
              >
                컨소시엄의 최종 성과는 세부1의 나노 MRI 기술과 세부2의 소형 심자도
                기술을 각각 독립된 응용 장치로 발전시키는 데 그치지 않고, 바이오·의료,
                산업·안보, 창업·기술이전까지 이어지는 파급효과를 만드는 데 있습니다.
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-[28px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                    세부1 활용 확장
                  </h3>
                  <div className="mt-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      세부1의 나노 MRI 기술은 단분자 수준의 바이오 분석 장비, 단세포·단백질
                      구조 분석 장치, 질병 진단과 신약 개발을 위한 고분해능 이미징 플랫폼으로
                      활용될 수 있습니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      또한 바이오·의료 분야를 넘어 반도체, 전자소자, 배터리 분석 등
                      산업 응용과 초고감도 이미징 기반의 차세대 계측 장비로도 확장될
                      수 있는 가능성을 갖습니다.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] bg-white px-6 py-6 ring-1 ring-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                    세부2 활용 확장
                  </h3>
                  <div className="mt-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      세부2의 소형 심자도 기술은 실전 환경에 가까운 새로운 심질환 진단
                      장비로 활용될 수 있으며, 고정형·대형 장치 접근이 제한적인
                      소아·신생아 부정맥 조기 진단 등 의료 현장에서의 응용 가능성을
                      넓힐 수 있습니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      의료 분야 외에도 뇌자도, 근자도, 신경자도 등 생체 자기장 센서
                      응용으로 확장할 수 있고, 배터리·전력 시스템 모니터링, 차량·무기
                      탐지, 항공·방위 분야의 소형 자기장 센서 기반 장치로도 이어질 수
                      있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                      산업화 및 활용방안
                    </h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      기업 연계와 자체 창업을 통해 산업화 마중물 역할을 수행하고,
                      바이오·의료 분야의 새로운 측정·진단기기 시장 개척으로 연결하는
                      것이 핵심 활용방안입니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      양자자기장센싱 기술을 반도체·배터리 분석, 타깃감지 등 산업·안보
                      분야로 확장하고, 제품 전시와 홍보, 커뮤니티 공동 워크숍 운영,
                      신진연구자 참여 확대를 통해 기술 확산 기반을 함께 구축합니다.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                      파급효과
                    </h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      양자센서 분야의 국제 경쟁력을 확보하고, 바이오·의료 분야의 신규
                      시장을 개척하며, 신기술 개발을 통해 국민 건강과 삶의 질 향상에
                      기여하는 것이 기대효과입니다.
                    </p>
                    <p
                      className="text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      동시에 국내 양자생태계 조성과 확산에 기여하고, 연구실 규모의 복잡한
                      실험 셋업을 실제 장치·시스템 수준으로 전환하는 기반을 마련하는
                      점에서도 큰 의미를 갖습니다.
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