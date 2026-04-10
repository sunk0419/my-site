import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function IntroPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="intro" pageKey="intro">
        <ContentPlaceholder
          title="컨소시엄 소개"
          description="이 페이지에 컨소시엄 개요, 목표, 비전, 운영 방향 등을 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}