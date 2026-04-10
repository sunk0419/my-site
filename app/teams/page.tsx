import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function TeamsPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="teams" pageKey="teams">
        <ContentPlaceholder
          title="연구팀"
          description="연구팀 전체 개요, 팀별 역할, 구성 체계를 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}