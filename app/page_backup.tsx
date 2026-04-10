"use client";

import { useMemo, useState } from "react";

type PageInfo = {
  label: string;
  title: string;
  subtitle: string;
};

type MenuItem = {
  key: string;
  label: string;
};

type MenuGroup = {
  key: string;
  label: string;
  description: string;
  items: MenuItem[];
};

export default function AssignmentHomepageMockup() {
  const pageMap = useMemo<Record<string, PageInfo>>(
    () => ({
      home: {
        label: "HOME",
        title: "메인 페이지",
        subtitle: "컨소시엄 대표 소개와 핵심 공지",
      },

      intro: {
        label: "컨소시엄소개",
        title: "컨소시엄 소개",
        subtitle: "컨소시엄 전체 소개 페이지",
      },
      intro_greeting: {
        label: "총괄책임자 및 인사말",
        title: "총괄책임자 및 인사말",
        subtitle: "총괄책임자 소개 및 인사말",
      },
      intro_topic: {
        label: "연구주제 소개",
        title: "연구주제 소개",
        subtitle: "컨소시엄 연구주제 개요",
      },
      intro_org: {
        label: "조직도",
        title: "조직도",
        subtitle: "컨소시엄 조직 구성",
      },
      intro_location: {
        label: "오시는 길",
        title: "오시는 길",
        subtitle: "위치 및 방문 안내",
      },

      topics: {
        label: "연구주제",
        title: "연구주제",
        subtitle: "총괄 목표와 세부 과제 소개",
      },
      topics_goal: {
        label: "총괄 연구 목표",
        title: "총괄 연구 목표",
        subtitle: "전체 연구 목표와 방향",
      },
      topics_detail: {
        label: "세부 주제",
        title: "세부 주제",
        subtitle: "세부 주제별 연구 소개",
      },
      topics_project: {
        label: "세부 과제",
        title: "세부 과제",
        subtitle: "과제별 구성 및 추진 내용",
      },
      topics_equipment: {
        label: "연구기획 및 장비",
        title: "연구기획 및 장비",
        subtitle: "연구기획 및 장비 구축 현황",
      },

      teams: {
        label: "연구팀",
        title: "연구팀",
        subtitle: "연구팀 전체 소개 페이지",
      },
      teams_professors: {
        label: "교수진 구성",
        title: "교수진 구성",
        subtitle: "참여 교수진 소개",
      },
      teams_members: {
        label: "연구팀 구성",
        title: "연구팀 구성",
        subtitle: "연구원 및 팀 구성",
      },
      teams_sub1: {
        label: "세부1 연구팀",
        title: "세부1 연구팀",
        subtitle: "세부1 연구팀 소개",
      },
      teams_sub2: {
        label: "세부2 연구팀",
        title: "세부2 연구팀",
        subtitle: "세부2 연구팀 소개",
      },

      news: {
        label: "소식·공고",
        title: "소식·공고",
        subtitle: "공지와 자료를 모아보는 페이지",
      },
      news_papers: {
        label: "논문 업로드",
        title: "논문 업로드",
        subtitle: "논문 및 출판 성과",
      },
      news_hiring: {
        label: "채용 공고",
        title: "채용 공고",
        subtitle: "채용 관련 공지",
      },
      news_seminar: {
        label: "세미나 및 특강",
        title: "세미나 및 특강",
        subtitle: "행사 및 특강 일정",
      },
      news_archive: {
        label: "자료실",
        title: "자료실",
        subtitle: "문서, 발표자료, 참고자료",
      },
    }),
    []
  );

  const menuData = useMemo<MenuGroup[]>(
    () => [
      {
        key: "intro",
        label: "컨소시엄소개",
        description: "컨소시엄 전체 소개 페이지",
        items: [
          { key: "intro_greeting", label: "총괄책임자 및 인사말" },
          { key: "intro_topic", label: "연구주제 소개" },
          { key: "intro_org", label: "조직도" },
          { key: "intro_location", label: "오시는 길" },
        ],
      },
      {
        key: "topics",
        label: "연구주제",
        description: "총괄 목표와 세부 과제 소개",
        items: [
          { key: "topics_goal", label: "총괄 연구 목표" },
          { key: "topics_detail", label: "세부 주제" },
          { key: "topics_project", label: "세부 과제" },
          { key: "topics_equipment", label: "연구기획 및 장비" },
        ],
      },
      {
        key: "teams",
        label: "연구팀",
        description: "연구팀 전체 소개 페이지",
        items: [
          { key: "teams_professors", label: "교수진 구성" },
          { key: "teams_members", label: "연구팀 구성" },
          { key: "teams_sub1", label: "세부1 연구팀" },
          { key: "teams_sub2", label: "세부2 연구팀" },
        ],
      },
      {
        key: "news",
        label: "소식·공고",
        description: "공지와 자료를 모아보는 페이지",
        items: [
          { key: "news_papers", label: "논문 업로드" },
          { key: "news_hiring", label: "채용 공고" },
          { key: "news_seminar", label: "세미나 및 특강" },
          { key: "news_archive", label: "자료실" },
        ],
      },
    ],
    []
  );

  const partnerLogos = [
    "KOREA UNIVERSITY",
    "G-LAMP",
    "QUANTUM LAB",
    "PARTNER INSTITUTE",
    "RESEARCH CENTER",
  ];

  const [activePage, setActivePage] = useState("home");
  const activeInfo = pageMap[activePage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 text-zinc-900">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/60 bg-white/95 shadow-2xl shadow-slate-900/10 backdrop-blur">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white backdrop-blur">
          <div className="flex items-center justify-between px-6 py-5">
            <div>
              <p className="text-lg font-bold tracking-tight">
                양자플래그십 양자자기공명센서 컨소시엄
              </p>
              <p className="mt-1 text-sm text-blue-100/80">
                Diamond Quantum Sensing and Imaging
              </p>
            </div>

            <div className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 md:block">
              {activeInfo.title}
            </div>
          </div>

          <nav className="flex items-center justify-end gap-2 border-t border-white/10 px-6 py-3 text-sm font-medium">
            <button
              onClick={() => setActivePage("home")}
              className={`rounded-full px-4 py-2 transition ${
                activePage === "home"
                  ? "bg-white text-blue-950 shadow-sm"
                  : "text-blue-50 hover:bg-white/10 hover:text-white"
              }`}
            >
              HOME
            </button>

            {menuData.map((menu) => (
              <div key={menu.key} className="group relative">
                <button
                  onClick={() => setActivePage(menu.key)}
                  className={`rounded-full px-4 py-2 transition ${
                    activePage === menu.key
                      ? "bg-white text-blue-950 shadow-sm"
                      : "text-blue-50 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {menu.label}
                </button>

                <div className="invisible absolute right-0 top-full z-20 mt-3 w-64 rounded-2xl border border-blue-100 bg-white p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="space-y-1">
                    {menu.items.map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setActivePage(item.key)}
                        className="block w-full rounded-xl px-3 py-2 text-left text-sm text-zinc-700 transition hover:bg-blue-50 hover:pl-4 hover:text-blue-700"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </header>

        {activePage === "home" ? (
          <>
            <section className="border-b border-zinc-200 bg-gradient-to-b from-slate-100 to-white px-6 py-8">
              <div className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm">
                <img
                  src="/main-banner.png"
                  alt="Quantum Flagship 메인 배너"
                  className="block w-full h-auto"
                />
              </div>
            </section>


            <section className="grid gap-4 border-b border-zinc-200 bg-white px-6 py-6 md:grid-cols-4">
              {[
                ["총 사업기간", "2025–2032"],
                ["지원예산", "약 220억원"],
                ["참여 연구팀", "6팀"],
                ["핵심성과", "논문 · 특허 · 창업기술이전"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-5 shadow-sm"
                >
                  <p className="text-sm text-zinc-500">{label}</p>
                  <p className="mt-2 text-lg font-bold text-blue-900">{value}</p>
                </div>
              ))}
            </section>

            <section className="border-b border-zinc-200 bg-white px-6 py-5 text-center">
              <h2 className="font-semibold text-zinc-900">채용 공고</h2>
              <p className="mt-2 text-sm text-zinc-600">박사후연구원 · 대학원생</p>
            </section>

            <main className="space-y-4 bg-zinc-50 p-4">
              <SectionBox title="컨소시엄 소개">
                <TabGrid items={menuData[0].items.map((item) => item.label)} />
              </SectionBox>

              <SectionBox title="최신 연구성과소개">
                <p className="text-sm text-zinc-600">
                  최신 논문, 성과 기사, 보도자료 등을 카드 형태로 배치
                </p>
              </SectionBox>

              <SectionBox title="컨소시엄 활동 소개">
                <p className="text-sm text-zinc-600">
                  세미나, 워크숍, 연구 교류, 장비 구축 현황 소개
                </p>
              </SectionBox>

              <SectionBox title="참여기관 로고 및 현황 보고">
                <p className="text-sm text-zinc-600">
                  참여기관 로고, 협력기관, 연차 보고자료 링크 등
                </p>
              </SectionBox>

              <SectionBox title="컨소시엄 연락처">
                <p className="text-sm text-zinc-600">
                  이메일 / 주소 / 문의 폼 / 오시는 길
                </p>
              </SectionBox>
            </main>

            <section className="border-t border-zinc-200 bg-white px-6 py-8">
              <div className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-slate-50 to-blue-50 p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-900">함께하는 기관</p>
                    <h3 className="mt-1 text-xl font-bold text-zinc-900">
                      참여 기관 및 협력 업체
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500">
                      아래 영역에 기관 로고 이미지를 넣어 컨소시엄 구성과 협력 네트워크를 보여줄 수 있습니다.
                    </p>
                  </div>
                  <p className="text-sm text-zinc-400">Logo Showcase Area</p>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-5">
                  {partnerLogos.map((logo) => (
                    <div
                      key={logo}
                      className="flex h-24 items-center justify-center rounded-2xl border border-white bg-white/90 text-center text-sm font-semibold text-zinc-400 shadow-sm"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <footer className="border-t border-white/10 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-6 py-10 text-white">
              <div className="grid gap-6 md:grid-cols-2">
                <InfoBlock
                  title="컨소시엄 정보"
                  lines={[
                    "양자플래그십 양자자기공명센서 컨소시엄",
                    "Diamond Quantum Sensing and Imaging",
                  ]}
                />
                <InfoBlock
                  title="연락처"
                  lines={[
                    "서울특별시 · 고려대학교",
                    "contact@example.com",
                    "02-0000-0000",
                  ]}
                />
               
                
              </div>

              <div className="mt-8 border-t border-white/10 pt-5 text-sm text-blue-100/70">
                © 2025 Quantum Flagship QMR Consortium. All rights reserved.
              </div>
            </footer>
          </>
        ) : (
          <DetailPage
            title={activeInfo.title}
            subtitle={activeInfo.subtitle}
            activePage={activePage}
            menuData={menuData}
            setActivePage={setActivePage}
          />
        )}
      </div>
    </div>
  );
}

function DetailPage({
  title,
  subtitle,
  activePage,
  menuData,
  setActivePage,
}: {
  title: string;
  subtitle: string;
  activePage: string;
  menuData: MenuGroup[];
  setActivePage: (page: string) => void;
}) {
  const currentMenu =
    menuData.find(
      (menu) =>
        menu.key === activePage ||
        menu.items.some((item) => item.key === activePage)
    ) || null;

  return (
    <main className="bg-zinc-50 px-6 py-8">
      <div className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 px-6 py-8 text-white shadow-sm">
        <p className="text-sm font-medium text-blue-100">세부 페이지</p>
        <h1 className="mt-2 text-3xl font-bold">{title}</h1>
        <p className="mt-3 text-sm text-blue-100/80">{subtitle}</p>
      </div>

      {currentMenu && (
        <section className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-blue-800">{currentMenu.label}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActivePage(currentMenu.key)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activePage === currentMenu.key
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 text-zinc-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {currentMenu.label}
            </button>

            {currentMenu.items.map((item) => (
              <button
                key={item.key}
                onClick={() => setActivePage(item.key)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activePage === item.key
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-100 text-zinc-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-zinc-600">
          이 영역에 해당 페이지 내용을 넣으면 됩니다. 현재는 각 세부 메뉴가 독립된 탭처럼 동작하도록 구조만 만들어둔 상태입니다.
        </p>
      </section>
    </main>
  );
}

function SectionBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-[140px] rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="mb-4 text-base font-semibold text-blue-900">{title}</h3>
      {children}
    </section>
  );
}

function TabGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function InfoBlock({
  title,
  lines,
}: {
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <div className="mt-3 space-y-2 text-sm text-blue-100/80">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}