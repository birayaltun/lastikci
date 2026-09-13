/**
 * Can Oto Lastik — tek kaynak işletme bilgisi.
 * Telefon/adres/sosyal bilgiler proje genelinde buradan kullanılır.
 */

export interface SiteService {
  slug: string;
  title: string;
  /** Font Awesome ikon sınıfı (görsel yüklenmezse bu gösterilir) */
  icon: string;
  /** public/ altındaki hizmet görseli — 1200×1500 px (4:5) JPG önerilir */
  image: string;
  text: string;
}

export interface SiteFaq {
  q: string;
  a: string;
}

const PHONE_DIGITS = '905427791965';
const PHONE_DISPLAY = '+90 542 779 19 65';

export const SITE = {
  name: 'Can Oto Lastik',
  city: 'Çanakkale',

  phoneDisplay: PHONE_DISPLAY,
  phoneHref: `tel:+${PHONE_DIGITS}`,
  whatsappHref: `https://wa.me/${PHONE_DIGITS}`,

  address: 'Barbaros Sanayi Sitesi, Reşat Tabak Caddesi, Yosun Sk. No:17, 17100 Çanakkale',
  mapsHref: 'https://share.google/qkCQx3paLdduMLDhv',

  hours: [
    { day: 'Pazartesi – Cumartesi', value: '08:30 – 19:00' },
    { day: 'Pazar', value: 'Kapalı' },
  ],
  hoursNote: 'Yol yardım hattımıza her zaman ulaşabilirsiniz.',

  social: [
    { label: 'Facebook', icon: 'fa-brands fa-facebook-f', href: 'https://www.facebook.com/profile.php?id=61567683788593' },
    { label: 'Instagram', icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/canotolastikci/' },
    { label: 'Google', icon: 'fa-brands fa-google', href: 'https://share.google/qkCQx3paLdduMLDhv' },
  ],

  /** Projede gerçekten sunulan hizmetler (uydurma yok) */
  services: [
    {
      slug: 'lastik-degisimi',
      title: 'Lastik Değişimi',
      icon: 'fa-solid fa-gears',
      image: '/hizmet-lastik-degisimi.jpg',
      text: 'Ölçü kontrolü, balans ayarı ve montaj dahil tam kapsamlı lastik değişimi. Yaz, kış ve dört mevsim lastikleri.',
    },
    {
      slug: 'lastik-tamiri',
      title: 'Lastik Tamiri',
      icon: 'fa-solid fa-screwdriver-wrench',
      image: '/hizmet-lastik-tamiri.jpg',
      text: 'Patlak ve inen lastiklerde hızlı, güvenli tamir. Uygun durumda yamalama, gerekiyorsa açık öneri.',
    },
    {
      slug: 'yol-yardim',
      title: 'Yol Yardım',
      icon: 'fa-solid fa-truck-medical',
      image: '/hizmet-yol-yardim.jpg',
      text: 'Çanakkale içinde yolda kaldığınızda tek telefonla yanınızdayız.',
    },
    {
      slug: 'yag-degisimi',
      title: 'Yağ Değişimi',
      icon: 'fa-solid fa-oil-can',
      image: '/hizmet-yag-degisimi.jpg',
      text: 'Doğru yağ seçimi ve uzman uygulamayla motor ömrünü uzatan, performansı koruyan periyodik bakım.',
    },
    {
      slug: 'urunler',
      title: 'Ürünler',
      icon: 'fa-solid fa-box-open',
      image: '/hizmet-urunler.jpg',
      text: 'Yakıt katkısı, cam suyu, antifriz gibi araç bakım ürünleriyle pratik ve güvenilir çözümler.',
    },
  ] as SiteService[],

  faq: [
    {
      q: 'Kış lastiği ne zaman taktırmalıyım?',
      a: 'Hava sıcaklığı düzenli olarak 7°C altına indiğinde kış lastiğine geçmek en doğrusudur. Çanakkale koşullarında genellikle Kasım ayı başı uygun bir zamandır; erken planlayan müşterilerimiz yoğunluğa denk gelmez.',
    },
    {
      q: 'Lastik değişimi için randevu gerekiyor mu?',
      a: 'Randevusuz da gelebilirsiniz. Ancak sezon geçişlerinde bekleme süresini kısaltmak için önce telefonla aramanızı öneririz.',
    },
    {
      q: 'Yol yardımı nasıl çağırırım?',
      a: `Doğrudan ${PHONE_DISPLAY} numarasını arayın ve bulunduğunuz konumu iletin. En kısa sürede yanınıza ulaşırız.`,
    },
    {
      q: 'Patlayan lastik tamir mi edilir, değişir mi?',
      a: 'Hasarın yeri ve büyüklüğüne göre değişir. Sırt bölgesindeki küçük delikler çoğunlukla güvenle tamir edilir; yan duvar hasarlarında güvenlik nedeniyle değişim öneririz. Kararı sizinle birlikte, açıkça veririz.',
    },
    {
      q: 'Balans ayarı yapıyor musunuz?',
      a: 'Lastik değişiminde balans ayarı hizmete dahildir. Direksiyonda titreme veya tek yöne çekme fark ederseniz kontrol için uğrayabilirsiniz.',
    },
  ] as SiteFaq[],
} as const;
