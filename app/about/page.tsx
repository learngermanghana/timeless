import { SectionHeading } from '@/components/section-heading';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('About', 'Learn about Prep N Prime GH, a trusted beauty shop in Ghana.');

export default function AboutPage() {
  return (
    <section className='mx-auto max-w-4xl space-y-6 px-4 py-14 md:px-6'>
      <SectionHeading title='About Prep N Prime GH' />
      <p className='text-stone-700'>Prep N Prime GH is a consultation-friendly beauty shop focused on authentic body products and skincare for the Ghana market. We blend premium selections with approachable guidance so every customer can build a routine with confidence.</p>
      <p className='text-stone-700'>Our brand is built around clean beauty presentation, trusted product choices, and warm support for concerns like hydration, sensitivity, dark spots, and daily glow maintenance.</p>
    </section>
  );
}
