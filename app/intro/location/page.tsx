import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

const CONTACT_INFO = [
  {
    label: "LABORATORY",
    title: "Quantum Sensing & Imaging Laboratory",
    description: "Korea University College of Science Department of Physics",
  },
  {
    label: "ADDRESS",
    title: "B104, Asan Science Building",
    description:
      "Korea University, 145 Anam-ro, Seongbuk-gu, Seoul, 02841, Republic of Korea",
  },
  {
    label: "LAB",
    title: "+82-2-3290-3601",
    description: "연구실 대표 연락처",
  },
  {
    label: "OFFICE",
    title: "+82-2-3290-3095",
    description: "행정 및 사무실 연락처",
  },
];

export default function IntroLocationPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="intro" pageKey="intro_location">
        <div className="space-y-16 md:space-y-24" style={{ fontFamily: FONT_FAMILY }}>
          <section
            className="w-full rounded-[36px] px-6 py-10 md:px-14 md:py-14"
            style={{
              backgroundColor: "#13245B",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 24px 70px rgba(15,23,42,0.18)",
            }}
          >
            <div className="h-3 w-28 rounded-full bg-[#4CC9F0]" />

            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-100 md:text-base">
              LOCATION & CONTACT
            </p>

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              오시는 길
            </h1>

           
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <div className="mb-7">
                <div className="mb-5 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400" />

                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-2xl bg-blue-700 px-3 text-sm font-bold text-white shadow-sm">
                    01
                  </span>
                  <span className="text-base font-bold uppercase tracking-[0.18em] text-blue-700 md:text-lg">
                    MAP
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-[28px] border border-zinc-200 bg-white px-5 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                      LOCATION MAP
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.4rem] md:leading-[1.2]">
                      연구실 위치 안내
                    </h2>
                    <p
                      className="mt-4 max-w-4xl text-[15px] leading-8 text-zinc-700 md:text-[16px]"
                      style={{ wordBreak: "keep-all" }}
                    >
                      아래 지도를 통해 고려대학교 자연과학대학 물리학과 내 연구실
                      위치를 확인할 수 있습니다.
                    </p>
                  </div>

                 
                </div>

                <div className="mt-8 overflow-hidden rounded-[24px] border border-zinc-200 bg-gradient-to-br from-slate-50 to-blue-50 p-3 md:p-5">
                  <div className="overflow-hidden rounded-[20px] bg-white p-2 shadow-[inset_0_0_0_1px_rgba(228,228,231,0.9)] md:p-3">
                    <img
                      src="/intro/location/map.png"
                      alt="Quantum Sensing & Imaging Laboratory 위치 지도"
                      className="block h-auto w-full rounded-[16px] object-cover"
                    />
                  </div>
                </div>

                
              </div>
            </div>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-7 py-8 md:px-10 md:py-10">
              <div className="mb-7">
                <div className="mb-5 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400" />

                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-2xl bg-blue-700 px-3 text-sm font-bold text-white shadow-sm">
                    02
                  </span>
                  <span className="text-base font-bold uppercase tracking-[0.18em] text-blue-700 md:text-lg">
                    CONTACT INFO
                  </span>
                </div>
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem] md:leading-[1.2]">
                주소 및 연락처
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {CONTACT_INFO.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[28px] bg-gradient-to-br from-white via-slate-50/80 to-blue-50/30 px-6 py-6 ring-1 ring-slate-200/70 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:px-7 md:py-7"
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      {item.label}
                    </p>

                    <h3
                      className="mt-4 text-xl font-semibold leading-8 tracking-tight text-zinc-950 md:text-2xl"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-3 text-[15px] leading-8 text-zinc-700"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}