import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function NewsSeminarPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="news" pageKey="news_seminar">
        <ContentPlaceholder
          title="세미나 및 특강"
          description="세미나 포스터, 일정표, 발표자 정보, 사진 등을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}