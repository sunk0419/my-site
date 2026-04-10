import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function TopicsGoalPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="topics" pageKey="topics_goal">
        <ContentPlaceholder
          title="총괄 연구 목표"
          description="연구 목표, 성과 지표, 기간별 계획 등을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}