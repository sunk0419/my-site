import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function TopicsPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="topics" pageKey="topics">
        <ContentPlaceholder
          title="연구주제"
          description="연구주제 전체 개요와 분류, 핵심 방향을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}