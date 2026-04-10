import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function TeamsMembersPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="teams" pageKey="teams_members">
        <ContentPlaceholder
          title="연구팀 구성"
          description="연구원, 학생, 조직 구성표, 역할 소개 등을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}