import { SiteFaq } from './site.data';

/** FAQPage JSON-LD — yalnızca sayfada gerçekten görünen SSS içeriğinden üretilir */
export function buildFaqSchema(items: readonly SiteFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
