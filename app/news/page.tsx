import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import {
  FileText,
  BriefcaseBusiness,
  Mic,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Bell,
} from "lucide-react";

const FONT_FAMILY =
  "Pretendard Variable, Pretendard, Inter, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

export default function NewsPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="news" pageKey="news">
        <div
          className="space-y-16 md:space-y-24"
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
              NEWS & NOTICE
            </p>

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.15]">
              컨소시엄의 소식과 공지사항
            </h1>

            <p
              className="mt-6 max-w-4xl text-[15px] leading-8 text-blue-50/90 md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
             
              아래 바로가기 카드를 통해 원하는 세부 탭으로 이동해 자세한 내용을
              확인할 수 있습니다.
            </p>
          </section>

          <section className="rounded-[34px] bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-px shadow-lg">
            <div className="rounded-[33px] bg-white px-6 py-8 md:px-10 md:py-10">
              <div className="rounded-[28px] bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-6 ring-1 ring-zinc-200">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-700 p-3 text-white">
                    <Bell className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                      OVERVIEW
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-[2.25rem]">
                      소식·공고 안내
                    </h2>
                  </div>
                </div>

               
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                <Link
                  href="/news/papers"
                  className="group rounded-[30px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.10)]"
                >
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <FileText className="h-6 w-6" />
                  </div>

                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    PAPERS
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    논문 업로드
                  </h3>

                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    컨소시엄의 논문과 출판 성과를 확인할 수 있는 페이지입니다.
                    논문 제목, 저자, 출판일, 학술지 정보와 PDF 자료를 함께
                    살펴볼 수 있도록 구성했습니다.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                      논문 목록
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                      출판 성과
                    </span>
                    
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    바로가기
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>

                <Link
                  href="/news/hiring"
                  className="group rounded-[30px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.10)]"
                >
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <BriefcaseBusiness className="h-6 w-6" />
                  </div>

                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    RECRUITMENT
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    채용 공고
                  </h3>

                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    연구실별 채용 공고와 모집 안내를 공지사항 형식으로 정리한
                    페이지입니다. 모집 대상, 접수 기간, 진행 상태 등 채용 관련
                    정보를 한눈에 확인할 수 있습니다.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                      모집 공고
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                      지원 일정
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                      채용 안내
                    </span>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    바로가기
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>

                <Link
                  href="/news/seminar"
                  className="group rounded-[30px] border border-zinc-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.10)]"
                >
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Mic className="h-6 w-6" />
                  </div>

                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    SEMINAR & LECTURE
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                    세미나 및 특강
                  </h3>

                  <p
                    className="mt-4 text-[15px] leading-8 text-zinc-700"
                    style={{ wordBreak: "keep-all" }}
                  >
                    컨소시엄의 세미나, 특강, 워크숍 일정을 정리한 페이지입니다.
                    행사 목록과 기본 정보를 확인하고, 각 행사별 상세 안내로
                    바로 이동할 수 있도록 구성했습니다.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                      세미나
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                      특강
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                      워크숍
                    </span>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    바로가기
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
            </div>
          </section>

          

                

                
            
        </div>
      </DetailPageShell>
    </SiteFrame>
  );
}