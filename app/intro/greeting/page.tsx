import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function IntroGreetingPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="intro" pageKey="intro_greeting">
        <ContentPlaceholder
          title="총괄책임자 및 인사말"
          description="총괄책임자 소개, 인사말, 대표 사진, 약력 등을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}