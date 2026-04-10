import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function NewsArchivePage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="news" pageKey="news_archive">
        <ContentPlaceholder
          title="자료실"
          description="발표자료, PDF, 다운로드 링크, 참고 문서를 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}