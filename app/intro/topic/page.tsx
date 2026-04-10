import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function IntroTopicPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="intro" pageKey="intro_topic">
        <ContentPlaceholder
          title="연구주제 소개"
          description="전체 연구주제 소개, 핵심 키워드, 대표 그림 등을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}