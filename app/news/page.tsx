import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function NewsPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="news" pageKey="news">
        <ContentPlaceholder
          title="소식·공고"
          description="공지사항, 소식, 업데이트 목록의 메인 페이지로 사용하면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}