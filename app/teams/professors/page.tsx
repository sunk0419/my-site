import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function TeamsProfessorsPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="teams" pageKey="teams_professors">
        <ContentPlaceholder
          title="교수진 구성"
          description="교수별 사진, 이름, 소속, 전공, 연구 키워드를 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}