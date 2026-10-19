export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-2 text-4xl font-extrabold text-foreground">{title}</h1>
        <p className="mb-10 text-sm text-muted">Last updated {updated}</p>
        <div className="space-y-6 leading-relaxed text-muted [&_a]:font-medium [&_a]:text-primary [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
          {children}
        </div>
      </div>
    </section>
  );
}
