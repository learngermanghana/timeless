export function QuoteForm() {
  return (
    <form className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm" action="/thank-you" method="get">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-[var(--color-foreground)]">
          Full name
          <input required name="fullName" className="mt-2 w-full rounded-xl border border-black/15 px-3 py-2 text-sm" />
        </label>
        <label className="text-sm font-medium text-[var(--color-foreground)]">
          Phone number
          <input required name="phone" className="mt-2 w-full rounded-xl border border-black/15 px-3 py-2 text-sm" />
        </label>
        <label className="text-sm font-medium text-[var(--color-foreground)]">
          Email address
          <input type="email" name="email" className="mt-2 w-full rounded-xl border border-black/15 px-3 py-2 text-sm" />
        </label>
        <label className="text-sm font-medium text-[var(--color-foreground)]">
          Service needed
          <select required name="service" className="mt-2 w-full rounded-xl border border-black/15 px-3 py-2 text-sm">
            <option>Funeral brochure printing</option>
            <option>Funeral poster printing</option>
            <option>Funeral banner printing</option>
            <option>Invitation cards</option>
            <option>Obituary / memorial cards</option>
            <option>Custom funeral print job</option>
          </select>
        </label>
        <label className="text-sm font-medium text-[var(--color-foreground)]">
          Quantity
          <input required name="quantity" className="mt-2 w-full rounded-xl border border-black/15 px-3 py-2 text-sm" />
        </label>
        <label className="text-sm font-medium text-[var(--color-foreground)]">
          Size / specification
          <input name="size" className="mt-2 w-full rounded-xl border border-black/15 px-3 py-2 text-sm" />
        </label>
        <label className="text-sm font-medium text-[var(--color-foreground)] sm:col-span-2">
          Deadline
          <input type="date" name="deadline" className="mt-2 w-full rounded-xl border border-black/15 px-3 py-2 text-sm" />
        </label>
      </div>
      <label className="block text-sm font-medium text-[var(--color-foreground)]">
        Project details
        <textarea
          required
          name="details"
          rows={5}
          className="mt-2 w-full rounded-xl border border-black/15 px-3 py-2 text-sm"
          placeholder="Share text content, preferred style, image count, and delivery location."
        />
      </label>
      <p className="text-xs text-[var(--color-muted)]">
        For urgent jobs, please call or send details on WhatsApp for immediate support.
      </p>
      <button type="submit" className="rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
        Submit quote request
      </button>
    </form>
  );
}
