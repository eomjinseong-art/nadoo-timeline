import {
  FAMILY_TREE_LINKS,
  FAMILY_TREES_EN,
  FAMILY_TREES_LABEL,
  SISTER_FILM_LINKS,
  SISTER_FILMS_EN,
  SISTER_FILMS_LABEL,
  SISTER_SITES,
  SISTER_SITES_LABEL,
} from "@/lib/site";

const external = "noopener noreferrer";

function LinkList({ links, className }: { links: readonly { href: string; label: string }[]; className: string }) {
  return (
    <ul className={className}>
      {links.map((site) => (
        <li key={site.href}>
          <a href={site.href} target="_blank" className="underline decoration-line underline-offset-4 hover:text-terra" rel={external}>
            {site.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function WrappedRow({ label, en, links }: { label: string; en: string; links: readonly { href: string; label: string }[] }) {
  return (
    <nav aria-label={`${label} ${en}`} className="mt-4">
      <p className="text-[10px] leading-4 text-terra">
        <span className="tracking-[0.16em]">{label}</span>
        <span className="ml-2 tracking-[0.08em]">{en}</span>
      </p>
      <LinkList links={links} className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs" />
    </nav>
  );
}

export function SisterSites({ variant = "header" }: { variant?: "header" | "footer" | "home" }) {
  if (variant === "footer") {
    return (
      <div className="mt-6 border-t border-line pt-4">
        <nav aria-label={SISTER_SITES_LABEL}>
          <p aria-hidden className="text-[10px] tracking-[0.16em] text-terra">
            {SISTER_SITES_LABEL}
          </p>
          <LinkList links={SISTER_SITES} className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs" />
        </nav>
        <WrappedRow label={FAMILY_TREES_LABEL} en={FAMILY_TREES_EN} links={FAMILY_TREE_LINKS} />
        <WrappedRow label={SISTER_FILMS_LABEL} en={SISTER_FILMS_EN} links={SISTER_FILM_LINKS} />
      </div>
    );
  }

  if (variant === "home") {
    return (
      <section aria-labelledby="sister-sites-heading" className="rounded-lg border border-line bg-card p-5">
        <h2 id="sister-sites-heading" className="font-serif text-2xl text-ink">
          {SISTER_SITES_LABEL}
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted">
          신화와 각 문명의 글은 나두의 다른 사이트에 있습니다. 나두연표는 그 세계가 같은 해에 어디쯤이었는지를 나란히 놓습니다.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          {SISTER_SITES.map((site) => (
            <li key={site.href}>
              <a href={site.href} target="_blank" className="text-laurel underline decoration-line underline-offset-4 hover:text-terra" rel={external}>
                {site.label}
              </a>
              <span className="ml-2 text-[11px] tracking-[0.12em] text-terra">{site.en}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <nav aria-label={SISTER_SITES_LABEL} className="mx-auto flex w-full min-w-0 max-w-6xl items-center gap-x-3 overflow-x-auto px-4 pb-2.5 text-xs">
      <span aria-hidden className="sticky left-0 z-10 flex shrink-0 items-center self-stretch bg-bg pr-2 text-[10px] tracking-[0.16em] text-terra">
        {SISTER_SITES_LABEL}
      </span>
      <ul className="flex shrink-0 items-center gap-x-3">
        {SISTER_SITES.map((site) => (
          <li key={site.href} className="shrink-0">
            <a href={site.href} target="_blank" className="text-muted underline decoration-line underline-offset-4 hover:text-terra" rel={external}>
              {site.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
