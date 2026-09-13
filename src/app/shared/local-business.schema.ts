import { SITE } from './site.data';

const SITE_URL = 'https://canotolastikci.com';

const DAY_MAP: Record<string, string[]> = {
  Pazartesi: ['Monday'],
  Salı: ['Tuesday'],
  Çarşamba: ['Wednesday'],
  Perşembe: ['Thursday'],
  Cuma: ['Friday'],
  Cumartesi: ['Saturday'],
  Pazar: ['Sunday'],
};

/** "Pazartesi – Cumartesi" gibi bir aralığı ["Monday", ..., "Saturday"] listesine çevirir */
function parseDayRange(dayLabel: string): string[] {
  const parts = dayLabel.split('–').map((s) => s.trim());
  if (parts.length === 1) {
    return DAY_MAP[parts[0]] ?? [];
  }
  const order = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  const startIdx = order.indexOf(parts[0]);
  const endIdx = order.indexOf(parts[1]);
  if (startIdx === -1 || endIdx === -1) return [];
  return order.slice(startIdx, endIdx + 1).flatMap((d) => DAY_MAP[d] ?? []);
}

/** "08:30 – 19:00" -> { opens: "08:30", closes: "19:00" } */
function parseTimeRange(value: string): { opens: string; closes: string } | null {
  const parts = value.split('–').map((s) => s.trim());
  if (parts.length !== 2) return null;
  return { opens: parts[0], closes: parts[1] };
}

/**
 * SITE.hours içindeki gerçek çalışma saatlerinden schema.org openingHoursSpecification üretir.
 * "Kapalı" olan günler dahil edilmez (schema.org'da kapalı gün belirtmenin standart yolu
 * o günü hiç eklememektir).
 */
function buildOpeningHours() {
  return SITE.hours
    .map((h) => {
      const days = parseDayRange(h.day);
      const time = parseTimeRange(h.value);
      if (!days.length || !time) return null;
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: days,
        opens: time.opens,
        closes: time.closes,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
}

/** AutomotiveBusiness JSON-LD — yalnızca site.data.ts'teki doğrulanmış gerçek bilgilerden üretilir */
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': `${SITE_URL}/#business`,
    name: SITE.name,
    image: `${SITE_URL}/hero-photo.jpg`,
    telephone: SITE.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Reşat Tabak Caddesi, Yosun Sk. No:17',
      addressLocality: 'Çanakkale',
      postalCode: '17100',
      addressCountry: 'TR',
    },
    areaServed: {
      '@type': 'City',
      name: 'Çanakkale',
    },
    url: SITE_URL,
    sameAs: SITE.social.map((s) => s.href),
    openingHoursSpecification: buildOpeningHours(),
  };
}
