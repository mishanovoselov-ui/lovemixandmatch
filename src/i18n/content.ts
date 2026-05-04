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

export interface MitateGalleryItem {
  src: string;
  alt: string;
  pair?: { src: string; alt: string };
  caption?: string;
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
    youtubeId: string;  // YouTube video ID — used if driveId is empty
    driveId?: string;   // Google Drive file ID — takes priority over youtubeId
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
  mitateGallery: {
    eyebrow: string;
    title: string;
    intro: string;
    /**
     * Up to 6 artwork detail images.
     * Each item can optionally have a `pair` image — shown on hover (mitate reveal).
     * Drop 800×1067px JPGs into public/images/details/ and set src paths.
     * Leave items: [] to render placeholder slots.
     */
    items: MitateGalleryItem[];
  };
  artist: {
    eyebrow: string;
    name: string;
    bio: string[];
    clients: string;     // one-line comma-separated string
    awards: Array<{ year: string; award: string; result: string }>;
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
        body: 'A kakemono is a traditional Japanese hanging scroll — artwork mounted on a rod, suspended from the wall, changed with the season. Love inherits this logic: the wooden crossbar hardware clips across both open volumes, suspending them side by side as a wall display. Any page, any combination. A different image every day — the book becomes a living exhibition.',
      },
      {
        term: '覗き',
        label: 'Nozoki',
        body: 'The shōji case is not packaging — it is a threshold. Sliding it open is a deliberate, intimate act: a pause before looking, a frame around the moment of discovery. The term nozoki (覗き, peeking) transforms what could be a simple unboxing into a choreographed ritual, separating the ordinary from what lies inside.',
      },
    ],
  },
  video: {
    eyebrow: 'In Motion',
    title: 'See the mechanic',
    youtubeId: '',
    driveId: '1AIqFSwsbbNdX5w11-nrpdxH7loyaM0eL',
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
  mitateGallery: {
    eyebrow: 'The Illustrations',
    title: 'Each image — two readings',
    intro: 'Every spread works as a complete composition on its own. Hover to see its mitate pair — the same subject seen through another volume, another context, another moment.',
    items: [
      // Drop 800×1067px JPGs into public/images/details/ and uncomment:
      // { src: '/images/details/detail-01.jpg', alt: 'Detail 1 — Volume I', pair: { src: '/images/details/detail-01b.jpg', alt: 'Detail 1 — Volume II' }, caption: 'Spring' },
      // { src: '/images/details/detail-02.jpg', alt: 'Detail 2 — Volume I', pair: { src: '/images/details/detail-02b.jpg', alt: 'Detail 2 — Volume II' }, caption: 'Summer' },
      // { src: '/images/details/detail-03.jpg', alt: 'Detail 3 — Volume I', pair: { src: '/images/details/detail-03b.jpg', alt: 'Detail 3 — Volume II' }, caption: 'Autumn' },
      // { src: '/images/details/detail-04.jpg', alt: 'Detail 4 — Volume I', pair: { src: '/images/details/detail-04b.jpg', alt: 'Detail 4 — Volume II' }, caption: 'Winter' },
      // { src: '/images/details/detail-05.jpg', alt: 'Detail 5 — Volume I', pair: { src: '/images/details/detail-05b.jpg', alt: 'Detail 5 — Volume II' } },
      // { src: '/images/details/detail-06.jpg', alt: 'Detail 6 — Volume I', pair: { src: '/images/details/detail-06b.jpg', alt: 'Detail 6 — Volume II' } },
    ],
  },
  artist: {
    eyebrow: 'The Artist',
    name: 'Sveta Dorosheva',
    bio: [
      'Originally from Ukraine and now based in Israel, Sveta Dorosheva is an illustrator whose work lives at the boundary of myth, fairy tale, and the quietly extraordinary. Over fifteen years of practice she has built a language rooted in Eastern European folk tradition and medieval manuscript art — dense with ornament, alive with story, impossible to take in all at once.',
      'Her projects cross disciplines: books, film, museums, editorial, brand. She has worked with Disney/Hyperion, HarperCollins, Penguin Random House, Macmillan, Ravensburger, Capitol Records, the British Library, the Los Angeles Times, and the New York Museum of Jewish Heritage, among others.',
      'Love is her first artist\'s book conceived entirely as a collectible art object — a project in which the binding, the case, and the mechanic are as much her work as the illustrations inside.',
    ],
    clients: 'Disney · HarperCollins · Penguin Random House · Macmillan · Ravensburger · Capitol Records · British Library · Los Angeles Times',
    awards: [
      { year: '2024', award: 'World Illustration Awards',              result: 'Winner — Professional Category' },
      { year: '2024', award: 'Hiii Illustration International',        result: 'Best of the Best' },
      { year: '2024', award: 'American Illustration 43',               result: 'Chosen Winner' },
      { year: '2024', award: 'Communication Arts',                     result: 'Award of Excellence' },
      { year: '2024', award: 'iJungle Illustration Awards',            result: 'Silver Medal' },
      { year: '2024', award: 'Victoria & Albert Museum Illustration',  result: 'Shortlist' },
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
        url: 'https://www.svetadorosheva.com',
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
        url: 'https://www.svetadorosheva.com',
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
        body: 'Какэмоно — традиционный японский подвесной свиток: произведение искусства на перекладине, вывешиваемое на стену и меняемое со сменой сезона. Love наследует эту логику: деревянная перекладина крепится через оба раскрытых тома и удерживает их рядом как настенный объект. Любая страница, любая комбинация. Новое изображение каждый день — книга становится живой выставкой.',
      },
      {
        term: '覗き',
        label: 'Нодзоки',
        body: 'Футляр сёдзи — не упаковка, а порог. Сдвинуть его — намеренный, интимный жест: пауза перед взглядом, рамка вокруг момента открытия. Слово нодзоки (覗き, подглядывание) превращает то, что могло быть простым распаковыванием, в хореографический ритуал — черту между обыденным и тем, что скрыто внутри.',
      },
    ],
  },
  video: {
    eyebrow: 'В движении',
    title: 'Смотрите как это работает',
    youtubeId: '',
    driveId: '1AIqFSwsbbNdX5w11-nrpdxH7loyaM0eL',
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
  mitateGallery: {
    eyebrow: 'Иллюстрации',
    title: 'Каждый образ — два прочтения',
    intro: 'Каждый разворот работает как самостоятельная композиция. Наведите курсор, чтобы увидеть митатэ-пару — тот же образ, другой том, другой контекст, другой момент.',
    items: [
      // { src: '/images/details/detail-01.jpg', alt: 'Деталь 1 — Том I', pair: { src: '/images/details/detail-01b.jpg', alt: 'Деталь 1 — Том II' }, caption: 'Весна' },
      // { src: '/images/details/detail-02.jpg', alt: 'Деталь 2 — Том I', pair: { src: '/images/details/detail-02b.jpg', alt: 'Деталь 2 — Том II' }, caption: 'Лето' },
      // { src: '/images/details/detail-03.jpg', alt: 'Деталь 3 — Том I', pair: { src: '/images/details/detail-03b.jpg', alt: 'Деталь 3 — Том II' }, caption: 'Осень' },
      // { src: '/images/details/detail-04.jpg', alt: 'Деталь 4 — Том I', pair: { src: '/images/details/detail-04b.jpg', alt: 'Деталь 4 — Том II' }, caption: 'Зима' },
      // { src: '/images/details/detail-05.jpg', alt: 'Деталь 5 — Том I', pair: { src: '/images/details/detail-05b.jpg', alt: 'Деталь 5 — Том II' } },
      // { src: '/images/details/detail-06.jpg', alt: 'Деталь 6 — Том I', pair: { src: '/images/details/detail-06b.jpg', alt: 'Деталь 6 — Том II' } },
    ],
  },
  artist: {
    eyebrow: 'Художник',
    name: 'Света Дорошева',
    bio: [
      'Родом из Украины, сейчас живёт и работает в Израиле. Света Дорошева — иллюстратор, чьи работы существуют на границе мифа, сказки и тихо-необыкновенного. За пятнадцать лет практики она выстроила язык, уходящий корнями в традиции восточноевропейского фольклора и средневековую книжную иллюминацию — насыщенный орнаментом, живой нарративом, необъятный с первого взгляда.',
      'Её проекты пересекают дисциплины: книги, кино, музеи, editorial, бренды. Среди клиентов — Disney/Hyperion, HarperCollins, Penguin Random House, Macmillan, Ravensburger, Capitol Records, Британская библиотека, Los Angeles Times, Музей еврейского наследия в Нью-Йорке.',
      'Love — её первая книга художника, задуманная целиком как коллекционный арт-объект: переплёт, футляр и механика — такая же её работа, как и иллюстрации внутри.',
    ],
    clients: 'Disney · HarperCollins · Penguin Random House · Macmillan · Ravensburger · Capitol Records · Британская библиотека · Los Angeles Times',
    awards: [
      { year: '2024', award: 'World Illustration Awards',              result: 'Победитель — Профессиональная категория' },
      { year: '2024', award: 'Hiii Illustration International',        result: 'Best of the Best' },
      { year: '2024', award: 'American Illustration 43',               result: 'Chosen Winner' },
      { year: '2024', award: 'Communication Arts',                     result: 'Award of Excellence' },
      { year: '2024', award: 'iJungle Illustration Awards',            result: 'Серебряная медаль' },
      { year: '2024', award: 'Victoria & Albert Museum Illustration',  result: 'Shortlist' },
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
        url: 'https://www.svetadorosheva.com',
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
        url: 'https://www.svetadorosheva.com',
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
