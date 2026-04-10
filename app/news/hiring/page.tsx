import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function NewsHiringPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="news" pageKey="news_hiring">
        <ContentPlaceholder
          title="채용 공고"
          description="모집 공고, 지원 방법, 일정, 자격 요건 등을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}