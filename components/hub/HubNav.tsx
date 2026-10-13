import Link from "next/link";

const ITEMS = [
  { href: "/films", ko: "이야기 순 영화", en: "Films" },
  { href: "/protagonists", ko: "주인공 실존 여부", en: "Protagonists" },
  { href: "/rulers", ko: "통치자", en: "Rulers" },
  { href: "/wars", ko: "전쟁·전투", en: "Wars" },
  { href: "/contemporaries", ko: "동시대 인물", en: "Contemporaries" },
];

export function HubNav({ current }: { current: string }) {
  return (
    <nav aria-label="역사 영화 허브" className="mt-5 flex flex-wrap gap-2 text-xs">
      {ITEMS.map((i) => (
        <Link
          key={i.href}
          href={i.href}
          aria-current={i.href === current ? "page" : undefined}
          className={`rounded-full border px-3 py-1.5 ${i.href === current ? "border-terra bg-terra/10 text-terra" : "border-line text-muted hover:text-ink"}`}
        >
          {i.ko} <span className="opacity-60">{i.en}</span>
        </Link>
      ))}
    </nav>
  );
}

export function Ext({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const internal = href.startsWith("/");
  if (internal)
    return (
      <Link href={href} className={`text-laurel underline decoration-line underline-offset-4 hover:text-terra ${className}`}>
        {children}
      </Link>
    );
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`text-laurel underline decoration-line underline-offset-4 hover:text-terra ${className}`}>
      {children}
    </a>
  );
}
