import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function TopicsProjectPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="topics" pageKey="topics_project">
        <ContentPlaceholder
          title="세부 과제"
          description="과제 구조, 담당 연구팀, 과제별 설명과 이미지를 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}