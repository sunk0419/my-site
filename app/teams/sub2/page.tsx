import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function TeamsSub2Page() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="teams" pageKey="teams_sub2">
        <ContentPlaceholder
          title="세부2 연구팀"
          description="세부2 연구팀의 목표, 구성원, 성과, 이미지 자료를 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}