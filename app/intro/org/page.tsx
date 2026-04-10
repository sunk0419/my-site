import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function IntroOrgPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="intro" pageKey="intro_org">
        <ContentPlaceholder
          title="조직도"
          description="조직도 이미지, 역할 분담, 참여 기관 체계를 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}