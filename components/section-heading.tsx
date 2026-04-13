import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: Props) {
  return (
    <div className={cn('max-w-3xl space-y-3', className)}>
      {eyebrow ? <p className='text-sm font-semibold uppercase tracking-[0.2em] text-rose-500'>{eyebrow}</p> : null}
      <h2 className='text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl'>{title}</h2>
      {description ? <p className='text-base leading-relaxed text-stone-600'>{description}</p> : null}
    </div>
  );
}
