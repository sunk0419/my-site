export default function ContentPlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-zinc-600">{description}</p>
      <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-sm text-zinc-500">
        여기에 이미지, 카드, 표, 교수진 프로필, 논문 목록 등을 자유롭게 추가하면 됩니다.
      </div>
    </section>
  );
}