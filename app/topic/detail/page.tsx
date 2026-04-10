import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function TopicsDetailPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="topics" pageKey="topics_detail">
        <ContentPlaceholder
          title="세부 주제"
          description="세부 주제별 소개, 도식 이미지, 설명 카드 등을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}