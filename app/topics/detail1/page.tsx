import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function TopicsDetail1Page() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="topics" pageKey="topics_detail1">
        <ContentPlaceholder
          title="세부 주제 1"
          description="세부 주제 1 소개 내용을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}