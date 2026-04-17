export type SeminarItem = {
  id: number;
  slug: string;
  category: "세미나" | "특강" | "워크숍";
  title: string;
  date: string;
  content: string;
  image?: string;

};

export const seminarItems: SeminarItem[] = [
  {
    id: 1,
    slug: "seminar-2026-05-12",
    category: "특강",
    title: "-",
    date: "2026.00.00",
    content:
      "행사 소개 내용입니다. 여기에 세미나 개요, 발표 내용, 장소, 참고사항 등을 넣으면 됩니다.",
  },
  {
    id: 2,
    slug: "seminar-2026-05-28",
    category: "세미나",
    title: "-",
    date: "2026.00.00",
    content:
      "행사 상세 내용입니다. 연사 소개나 세부 안내문을 여기에 넣으면 됩니다.",
  },
  {
    id: 3,
    slug: "kickoff",
    category: "워크숍",
    title: "플레그쉽 kick-off 워크숍",
    date: "2026.01.18",
    content:
      "워크숍 상세 소개입니다. 일정, 진행 방식, 참고자료 등을 여기에 작성하면 됩니다.",
      image: "/news/seminar/poster-01.jpg",
  },
];