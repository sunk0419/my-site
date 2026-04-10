import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function NewsPapersPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="news" pageKey="news_papers">
        <ContentPlaceholder
          title="논문 업로드"
          description="논문 목록, 저널 정보, DOI 링크, 썸네일 등을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}