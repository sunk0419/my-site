import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function TopicsEquipmentPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="topics" pageKey="topics_equipment">
        <ContentPlaceholder
          title="연구기획 및 장비"
          description="장비 사진, 장비 사양, 연구기획 자료 등을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}