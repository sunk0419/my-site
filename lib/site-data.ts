export type MenuItem = {
  key: string;
  label: string;
  route: string;
};

export type MenuGroup = {
  key: string;
  label: string;
  description: string;
  route: string;
  items: MenuItem[];
};

export type PageInfo = {
  key: string;
  label: string;
  title: string;
  subtitle: string;
  route: string;
  groupKey?: string;
};

export const menuGroups: MenuGroup[] = [
  {
    key: "intro",
    label: "컨소시엄소개",
    description: "컨소시엄 전체 소개 페이지",
    route: "/intro",
    items: [
      {
        key: "intro_greeting",
        label: "총괄책임자 및 인사말",
        route: "/intro/greeting",
      },
      {
        key: "intro_topic",
        label: "연구주제 소개",
        route: "/intro/topic",
      },
      {
        key: "intro_org",
        label: "조직도",
        route: "/intro/org",
      },
      {
        key: "intro_location",
        label: "오시는 길",
        route: "/intro/location",
      },
    ],
  },
  {
    key: "topics",
    label: "연구주제",
    description: "총괄 목표와 세부 과제 소개",
    route: "/topics",
    items: [
      {
        key: "topics_goal",
        label: "총괄 연구 목표",
        route: "/topics/goal",
      },
      {
        key: "topics_detail1",
        label: "세부 주제 1",
        route: "/topics/detail1",
      },
      {
        key: "topics_detail2",
        label: "세부 주제 2",
        route: "/topics/detail2",
      },
      {
        key: "topics_equipment",
        label: "연구기획 및 추진전략",
        route: "/topics/equipment",
      },
    ],
  },
  {
    key: "teams",
    label: "연구팀",
    description: "연구팀 전체 소개 페이지",
    route: "/teams",
    items: [
      {
        key: "teams_professors",
        label: "교수진 구성",
        route: "/teams/professors",
      },
      {
        key: "teams_members",
        label: "연구팀 구성",
        route: "/teams/members",
      },
      {
        key: "teams_sub1",
        label: "세부1 연구팀",
        route: "/teams/sub1",
      },
      {
        key: "teams_sub2",
        label: "세부2 연구팀",
        route: "/teams/sub2",
      },
    ],
  },
  {
    key: "news",
    label: "소식·공고",
    description: "공지와 자료를 모아보는 페이지",
    route: "/news",
    items: [
      {
        key: "news_papers",
        label: "논문 업로드",
        route: "/news/papers",
      },
      {
        key: "news_hiring",
        label: "채용 공고",
        route: "/news/hiring",
      },
      {
        key: "news_seminar",
        label: "세미나 및 특강",
        route: "/news/seminar",
      },
      
    ],
  },
];

export const pageInfoMap: Record<string, PageInfo> = {
  home: {
    key: "home",
    label: "HOME",
    title: "메인 페이지",
    subtitle: "컨소시엄 대표 소개와 핵심 공지",
    route: "/",
  },

  intro: {
    key: "intro",
    label: "컨소시엄소개",
    title: "컨소시엄 소개",
    subtitle: "컨소시엄 전체 소개 페이지",
    route: "/intro",
    groupKey: "intro",
  },
  intro_greeting: {
    key: "intro_greeting",
    label: "총괄책임자 및 인사말",
    title: "총괄책임자 및 인사말",
    subtitle: "총괄책임자 소개 및 인사말",
    route: "/intro/greeting",
    groupKey: "intro",
  },
  intro_topic: {
    key: "intro_topic",
    label: "연구주제 소개",
    title: "연구주제 소개",
    subtitle: "컨소시엄 연구주제 개요",
    route: "/intro/topic",
    groupKey: "intro",
  },
  intro_org: {
    key: "intro_org",
    label: "조직도",
    title: "조직도",
    subtitle: "컨소시엄 조직 구성",
    route: "/intro/org",
    groupKey: "intro",
  },
  intro_location: {
    key: "intro_location",
    label: "오시는 길",
    title: "오시는 길",
    subtitle: "위치 및 방문 안내",
    route: "/intro/location",
    groupKey: "intro",
  },

  topics: {
    key: "topics",
    label: "연구주제",
    title: "연구주제",
    subtitle: "총괄 목표와 세부 과제 소개",
    route: "/topics",
    groupKey: "topics",
  },
  topics_goal: {
    key: "topics_goal",
    label: "총괄 연구 목표",
    title: "총괄 연구 목표",
    subtitle: "전체 연구 목표와 방향",
    route: "/topics/goal",
    groupKey: "topics",
  },
  topics_detail1: {
    key: "topics_detail1",
    label: "세부 주제 1",
    title: "세부 주제 1",
    subtitle: "세부 주제 1 소개",
    route: "/topics/detail1",
    groupKey: "topics",
  },
  topics_detail2: {
    key: "topics_detail2",
    label: "세부 주제 2",
    title: "세부 주제 2",
    subtitle: "세부 주제 2 소개",
    route: "/topics/detail2",
    groupKey: "topics",
  },
  topics_equipment: {
    key: "topics_equipment",
    label: "연구기획 및 추진전략",
    title: "연구기획 및 추진전략",
    subtitle: "연구기획 및 추진전략 소개",
    route: "/topics/equipment",
    groupKey: "topics",
  },

  teams: {
    key: "teams",
    label: "연구팀",
    title: "연구팀",
    subtitle: "연구팀 전체 소개 페이지",
    route: "/teams",
    groupKey: "teams",
  },
  teams_professors: {
    key: "teams_professors",
    label: "교수진 구성",
    title: "교수진 구성",
    subtitle: "참여 교수진 소개",
    route: "/teams/professors",
    groupKey: "teams",
  },
  teams_members: {
    key: "teams_members",
    label: "연구팀 구성",
    title: "연구팀 구성",
    subtitle: "연구원 및 팀 구성",
    route: "/teams/members",
    groupKey: "teams",
  },
  teams_sub1: {
    key: "teams_sub1",
    label: "세부1 연구팀",
    title: "세부1 연구팀",
    subtitle: "세부1 연구팀 소개",
    route: "/teams/sub1",
    groupKey: "teams",
  },
  teams_sub2: {
    key: "teams_sub2",
    label: "세부2 연구팀",
    title: "세부2 연구팀",
    subtitle: "세부2 연구팀 소개",
    route: "/teams/sub2",
    groupKey: "teams",
  },

  news: {
    key: "news",
    label: "소식·공고",
    title: "소식·공고",
    subtitle: "공지와 자료를 모아보는 페이지",
    route: "/news",
    groupKey: "news",
  },
  news_papers: {
    key: "news_papers",
    label: "논문 업로드",
    title: "논문 업로드",
    subtitle: "논문 및 출판 성과",
    route: "/news/papers",
    groupKey: "news",
  },
  news_hiring: {
    key: "news_hiring",
    label: "채용 공고",
    title: "채용 공고",
    subtitle: "채용 관련 공지",
    route: "/news/hiring",
    groupKey: "news",
  },
  news_seminar: {
    key: "news_seminar",
    label: "세미나 및 특강",
    title: "세미나 및 특강",
    subtitle: "행사 및 특강 일정",
    route: "/news/seminar",
    groupKey: "news",
  },
 
};

export const partnerLogos = [
  { key: "korea", src: "/partners/korea.svg", alt: "고려대학교 로고" },
  { key: "yuksa", src: "/partners/yuksa.svg", alt: "육사 로고" },
  { key: "kriss", src: "/partners/kriss.png", alt: "KRISS 로고" },
  { key: "unist", src: "/partners/unist.png", alt: "UNIST 로고" },
  { key: "chosun", src: "/partners/chosun.svg", alt: "조선대학교 로고" },
];