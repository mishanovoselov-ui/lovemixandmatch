export type Locale = 'en' | 'ru';

export interface MechanicItem {
  term: string;
  label: string;
  body: string;
}

export interface BuyLink {
  name: string;
  url: string;
  note: string;
  badge?: string;
  featured?: boolean;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    lang: string;
  };
  nav: {
    label: string;
  };
  hero: {
    eyebrow: string;
    title: string[];
    subtitle: string[];
    metaEdition: string;
    metaExtra: string;
    ctaPrimary: string;
    ctaSecondary: string;
    coverAlt: string;
    coverPlaceholder: string;
  };
  pullquote: string;
  about: {
    eyebrow: string;
    title: string[];
    body: string[];
    factCombinations: string;
    factVolumes: string;
    factEdition: string;
    imgLabels: [string, string, string];
  };
  mechanic: {
    eyebrow: string;
    title: string;
    items: MechanicItem[];
  };
  video: {
    eyebrow: string;
    title: string;
    youtubeId: string; // YouTube video ID, e.g. 'dQw4w9WgXcQ'
  };
  gallery: {
    eyebrow: string;
    title: string;
    /**
     * Images for the BookFlip component.
     * Provide 6 items total: even indices → left volume, odd → right volume.
     * i.e.: [left-1, right-1, left-2, right-2, left-3, right-3]
     * Leave empty [] to show placeholders.
     *
     * File naming convention:
     *   public/images/spreads/left-01.jpg  right-01.jpg
     *   public/images/spreads/left-02.jpg  right-02.jpg
     *   public/images/spreads/left-03.jpg  right-03.jpg
     *
     * Recommended dimensions: 760 × 1080 px per image (2× for retina)
     */
    images: Array<{ src: string; alt: string }>;
  };
  artist: {
    eyebrow: string;
    name: string;
    bio: string[];
    cta: string;
    portraitAlt: string;
    portraitPlaceholder: string;
  };
  buy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    links: BuyLink[];
  };
  footer: {
    title: string;
    copyright: string;
  };
}

// ─────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────
const en: SiteContent = {
  meta: {
    title: 'Love — A Collectible Shunga Ehon by Sveta Dorosheva',
    description: 'A limited edition collectible art object. Two watoji volumes with kasane mechanic: 1,600 unique cross-seam image combinations. By illustrator Sveta Dorosheva.',
    lang: 'en',
  },
  nav: { label: 'EN' },
  hero: {
    eyebrow: 'Sveta Dorosheva',
    title: ['Love'],
    subtitle: ['Mix & Match', 'Collectible Shunga Ehon'],
    metaEdition: 'Limited Edition',
    metaExtra: '1,600 Unique Combinations',
    ctaPrimary: 'Buy the Book',
    ctaSecondary: 'Discover the Mechanic',
    coverAlt: 'Love — Collectible Shunga Ehon by Sveta Dorosheva',
    coverPlaceholder: 'Cover\nImage',
  },
  pullquote: '"Two volumes. One sliding shōji case. Every opening — a unique image never seen before."',
  about: {
    eyebrow: 'About the Book',
    title: ['One book.', 'One thousand six', 'hundred images.'],
    body: [
      'Love is a collectible fine art object — a shunga-inspired ehon in two watoji-bound volumes. Each volume holds 40 pages of hand-drawn erotic illustration. Open them together and the **kasane mechanic** comes alive.',
      'Kasane (重ね, "layering") is a Japanese bookbinding tradition where the cut edges of two volumes align to create a new, composite image across the seam. In Love, this yields **1,600 unique cross-seam combinations** — each one unrepeatable, each one a work of art.',
      'Handcrafted with 160g washi-like uncoated paper, wood kakemono hardware, and a sliding shōji wooden case. Landscape format, 260 × 340 mm. Limited edition.',
    ],
    factCombinations: 'combinations',
    factVolumes: 'volumes',
    factEdition: 'limited edition',
    imgLabels: ['Volume I', 'Volume II', 'In Case'],
  },
  mechanic: {
    eyebrow: 'The Mechanic',
    title: 'Four Japanese craft traditions — one object',
    items: [
      {
        term: '重ね',
        label: 'Kasane',
        body: 'The core mechanic. Two volumes placed side by side generate 1,600 unique cross-seam image combinations from 40 × 40 page pairings.',
      },
      {
        term: '見立て',
        label: 'Mitate',
        body: 'Poetic substitution. Each image works alone as a complete composition and again, differently, in every paired combination.',
      },
      {
        term: '掛物',
        label: 'Kakemono',
        body: 'Wood crossbar hardware holds the volumes open at any page, transforming the book into a hanging scroll display object.',
      },
      {
        term: '覗き',
        label: 'Nozoki',
        body: 'The act of looking. Sliding the shōji case open to reveal the two volumes is itself a choreographed gesture of discovery.',
      },
    ],
  },
  video: {
    eyebrow: 'In Motion',
    title: 'See the mechanic',
    youtubeId: 'YOUTUBE_ID_HERE', // TODO: replace with actual YouTube video ID
  },
  gallery: {
    eyebrow: 'Mix & Match',
    title: 'Flip the volumes',
    images: [
      // Drop 760×1080px JPGs into public/images/spreads/ and uncomment:
      // { src: '/images/spreads/left-01.jpg',  alt: 'Volume I — spread 1' },
      // { src: '/images/spreads/right-01.jpg', alt: 'Volume II — spread 1' },
      // { src: '/images/spreads/left-02.jpg',  alt: 'Volume I — spread 2' },
      // { src: '/images/spreads/right-02.jpg', alt: 'Volume II — spread 2' },
      // { src: '/images/spreads/left-03.jpg',  alt: 'Volume I — spread 3' },
      // { src: '/images/spreads/right-03.jpg', alt: 'Volume II — spread 3' },
    ],
  },
  artist: {
    eyebrow: 'The Artist',
    name: 'Sveta Dorosheva',
    bio: [
      'Sveta Dorosheva is a Ukrainian-Israeli illustrator whose intricate, hand-drawn work draws on Eastern European folk traditions, medieval manuscript art, and a lifelong fascination with the boundary between the seen and unseen world.',
      'Her illustrations have been described as reminiscent of Aubrey Beardsley — dense with ornament, alive with narrative, impossible to take in all at once. Love is her first artist\'s book conceived entirely as a fine art collectible. She lives and works in Israel.',
    ],
    cta: 'Full Portfolio →',
    portraitAlt: 'Sveta Dorosheva, illustrator',
    portraitPlaceholder: 'Artist\nPortrait',
  },
  buy: {
    eyebrow: 'Limited Edition',
    title: 'Get the Book',
    subtitle: 'Available through the artist\'s studio. Limited edition — order while available.',
    links: [
      {
        name: 'Buy on svetadorosheva.com',
        url: 'https://svetadorosheva.com',
        note: 'Secure checkout · worldwide shipping',
        badge: 'Official Store',
        featured: true,
      },
      {
        name: 'Gallery & Trade Inquiries',
        url: 'mailto:info@svetadorosheva.com?subject=Love%20Book%20Trade',
        note: 'Wholesale & gallery placement',
      },
      {
        name: 'Follow on Instagram',
        url: 'https://www.instagram.com/sveta.dorosheva/',
        note: 'Updates, previews & new work',
      },
      {
        name: 'More by Sveta Dorosheva',
        url: 'https://svetadorosheva.com',
        note: 'Prints, originals & other books',
      },
    ],
  },
  footer: {
    title: 'Love — Mix & Match Ehon',
    copyright: 'Illustrations © Sveta Dorosheva. Creative Direction: Mikhail Novoselov. All rights reserved.',
  },
};

// ─────────────────────────────────────────────
// RUSSIAN
// ─────────────────────────────────────────────
const ru: SiteContent = {
  meta: {
    title: 'Love — Коллекционная сюнга-эхон Светы Дорошевой',
    description: 'Лимитированное коллекционное арт-объект. Два тома ватодзи с механикой касанэ: 1 600 уникальных комбинаций. Иллюстратор Света Дорошева.',
    lang: 'ru',
  },
  nav: { label: 'РУ' },
  hero: {
    eyebrow: 'Света Дорошева',
    title: ['Love'],
    subtitle: ['Mix & Match', 'Коллекционная сюнга-эхон'],
    metaEdition: 'Лимитированное издание',
    metaExtra: '1 600 уникальных комбинаций',
    ctaPrimary: 'Купить книгу',
    ctaSecondary: 'Как работает механика',
    coverAlt: 'Love — коллекционная сюнга-эхон Светы Дорошевой',
    coverPlaceholder: 'Обложка',
  },
  pullquote: '«Два тома. Один скользящий футляр сёдзи. Каждое раскрытие — уникальное изображение, которого не было раньше.»',
  about: {
    eyebrow: 'О книге',
    title: ['Одна книга.', 'Тысяча шестьсот', 'изображений.'],
    body: [
      'Love — коллекционный арт-объект: сюнга-эхон в двух томах в переплёте ватодзи. Каждый том — 40 страниц рисованной иллюстрации. Откройте их вместе — и заработает **механика касанэ**.',
      'Касанэ (重ね, «наложение») — японская техника переплёта, при которой обрезные края двух томов совпадают, создавая новое сквозное изображение. В Love это даёт **1 600 уникальных комбинаций** — каждая неповторима и является самостоятельным произведением искусства.',
      'Изготовлено вручную: бумага 160 г, фактура васи, деревянный какэмоно, скользящий деревянный футляр сёдзи. Альбомный формат, 260 × 340 мм. Лимитированное издание.',
    ],
    factCombinations: 'комбинаций',
    factVolumes: 'тома',
    factEdition: 'лимитированное издание',
    imgLabels: ['Том I', 'Том II', 'В футляре'],
  },
  mechanic: {
    eyebrow: 'Механика',
    title: 'Четыре японские традиции — один объект',
    items: [
      {
        term: '重ね',
        label: 'Касанэ',
        body: 'Основная механика. Два тома рядом дают 1 600 уникальных сквозных изображений из 40 × 40 сочетаний страниц.',
      },
      {
        term: '見立て',
        label: 'Митатэ',
        body: 'Поэтическая замена. Каждое изображение работает как самостоятельная композиция — и по-новому в каждом сочетании.',
      },
      {
        term: '掛物',
        label: 'Какэмоно',
        body: 'Деревянная перекладина удерживает тома раскрытыми на любой странице, превращая книгу в подвесной настенный свиток.',
      },
      {
        term: '覗き',
        label: 'Нодзоки',
        body: 'Взгляд. Скольжение крышки сёдзи открывает оба тома — это само по себе хореографический жест открытия.',
      },
    ],
  },
  video: {
    eyebrow: 'В движении',
    title: 'Смотрите как это работает',
    youtubeId: 'YOUTUBE_ID_HERE', // TODO: заменить на реальный ID
  },
  gallery: {
    eyebrow: 'Mix & Match',
    title: 'Листайте тома',
    images: [
      // { src: '/images/spreads/left-01.jpg',  alt: 'Том I — разворот 1' },
      // { src: '/images/spreads/right-01.jpg', alt: 'Том II — разворот 1' },
      // { src: '/images/spreads/left-02.jpg',  alt: 'Том I — разворот 2' },
      // { src: '/images/spreads/right-02.jpg', alt: 'Том II — разворот 2' },
      // { src: '/images/spreads/left-03.jpg',  alt: 'Том I — разворот 3' },
      // { src: '/images/spreads/right-03.jpg', alt: 'Том II — разворот 3' },
    ],
  },
  artist: {
    eyebrow: 'Художник',
    name: 'Света Дорошева',
    bio: [
      'Света Дорошева — украинско-израильская художница-иллюстратор. Её работы опираются на традиции восточноевропейского фольклора, средневековую книжную иллюминацию и интерес к границе видимого и невидимого.',
      'Её иллюстрации сравнивают с Обри Бёрдслеем — насыщенный орнамент, живое повествование, невозможность охватить всё с первого взгляда. Love — её первая книга художника, задуманная целиком как коллекционный арт-объект. Живёт и работает в Израиле.',
    ],
    cta: 'Полное портфолио →',
    portraitAlt: 'Света Дорошева, художник-иллюстратор',
    portraitPlaceholder: 'Фото\nхудожника',
  },
  buy: {
    eyebrow: 'Лимитированное издание',
    title: 'Купить книгу',
    subtitle: 'Доступна в студии художника. Лимитированное издание — успейте оформить заказ.',
    links: [
      {
        name: 'Купить на svetadorosheva.com',
        url: 'https://svetadorosheva.com',
        note: 'Безопасная оплата · доставка по всему миру',
        badge: 'Официальный магазин',
        featured: true,
      },
      {
        name: 'Галереи и оптовые запросы',
        url: 'mailto:info@svetadorosheva.com?subject=Love%20Book%20Trade',
        note: 'Размещение в галереях и оптовые условия',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/sveta.dorosheva/',
        note: 'Обновления и предпросмотр работ',
      },
      {
        name: 'Другие книги и принты',
        url: 'https://svetadorosheva.com',
        note: 'Принты, оригиналы и другие книги',
      },
    ],
  },
  footer: {
    title: 'Love — Mix & Match Ehon',
    copyright: 'Иллюстрации © Света Дорошева. Арт-директор: Михаил Новосёлов. Все права защищены.',
  },
};

export const content: Record<Locale, SiteContent> = { en, ru };
