import { partnerLogos } from "@/lib/site-data";

function InfoBlock({
  title,
  lines,
}: {
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <div className="mt-3 space-y-2 text-sm text-blue-100/80">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-6 py-10 text-white">
      <div className="grid gap-6 md:grid-cols-2">
        <InfoBlock
          title="컨소시엄 정보"
          lines={[
            "양자플래그십 양자자기공명센서 컨소시엄",
            "Diamond Quantum Sensing and Imaging",
          ]}
        />
        <InfoBlock
          title="연락처"
          lines={[
            "서울특별시 · 고려대학교",
            "contact@example.com",
            "02-0000-0000",
          ]}
        />
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-5">
          {partnerLogos.map((logo) => (
            <div
              key={logo.key}
              className="flex h-16 w-full items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-sm"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-8 w-auto max-w-[110px] object-contain md:max-h-9"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-5 text-sm text-blue-100/70">
        © 2025 Quantum Flagship QMR Consortium. All rights reserved.
      </div>
    </footer>
  );
}