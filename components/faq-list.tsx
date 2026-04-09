type FaqItem = {
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <summary className="cursor-pointer list-none text-base font-semibold text-[var(--color-foreground)]">{item.question}</summary>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
