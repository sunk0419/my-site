import SiteFrame from "@/components/SiteFrame";
import DetailPageShell from "@/components/DetailPageShell";
import ContentPlaceholder from "@/components/ContentPlaceholder";

export default function IntroLocationPage() {
  return (
    <SiteFrame>
      <DetailPageShell groupKey="intro" pageKey="intro_location">
        <ContentPlaceholder
          title="오시는 길"
          description="주소, 지도 이미지, 건물 위치, 교통편 안내 등을 이 페이지에 넣으면 됩니다."
        />
      </DetailPageShell>
    </SiteFrame>
  );
}