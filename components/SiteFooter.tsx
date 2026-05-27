import { partnerLogos } from "@/lib/site-data";

const footerLinks = [
  {
    title: "컨소시엄",
    links: [
      { label: "컨소시엄 소개", href: "/intro" },
      { label: "연구주제 소개", href: "/intro/topic" },
      { label: "조직도", href: "/intro/org" },
      { label: "오시는 길", href: "/intro/location" },
    ],
  },
  {
    title: "연구",
    links: [
      { label: "총괄 연구 목표", href: "/topics/goal" },
      { label: "세부 주제 1", href: "/topics/detail1" },
      { label: "세부 주제 2", href: "/topics/detail2" },
      
    ],
  },
  {
    title: "소식",
    links: [
      { label: "논문 업로드", href: "/news/papers" },
      { label: "채용 공고", href: "/news/hiring" },
      { label: "세미나 및 특강", href: "/news/seminar" },
      
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.28),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.18),transparent_28%),linear-gradient(135deg,#020617,#0f1e4d_45%,#020617)]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

      <div className="relative px-6 py-12 md:px-10">
        {/* Top CTA */}
        <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-md md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Quantum Flagship QMR Consortium
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                양자플래그십 양자자기공명센서 컨소시엄
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/75">
                Diamond Quantum Sensing and Imaging 연구를 중심으로
                정밀 계측, 양자 센싱, 바이오·소재 이미징 기술의 미래를
                함께 만들어갑니다.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="/intro"
                className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-blue-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                컨소시엄 소개
              </a>
              <a
                href="mailto:donghun@korea.ac.kr"
                className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                문의하기
              </a>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-100">
              Seoul · Korea University
            </div>

            <h3 className="mt-5 text-lg font-bold text-white">
              Diamond Quantum Sensing and Imaging LAB
            </h3>

            <div className="mt-5 space-y-3 text-sm text-blue-100/70">
              <p>서울특별시 · 고려대학교</p>
              <p>
                <a
                  href="mailto:donghun@korea.ac.kr"
                  className="transition hover:text-cyan-200"
                >
                  donghun@korea.ac.kr
                </a>
              </p>
              <p>
                <a
                  href="tel:02-3290-3530"
                  className="transition hover:text-cyan-200"
                >
                  02-3290-3530
                </a>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Quantum Sensing", "Nano-MRI", "Imaging"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-blue-100/70"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-white">
                  {group.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-blue-100/65 transition hover:pl-1 hover:text-cyan-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Partner logos */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-cyan-100">
                Participating Institutions
              </p>
              <p className="mt-1 text-sm text-blue-100/60">
                함께하는 참여기관 및 협력 네트워크
              </p>
            </div>
            <p className="text-xs text-blue-100/45">
              Quantum Flagship Research Network
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {partnerLogos.map((logo) => (
              <div
                key={logo.key}
                className="group flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.1]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-9 w-auto max-w-[120px] object-contain opacity-85 transition group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-blue-100/55 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Quantum Flagship QMR Consortium. All rights reserved.</p>
          <p className="text-blue-100/45">
            Designed by Sunwoo Kim
          </p>
        </div>
      </div>
    </footer>
  );
}